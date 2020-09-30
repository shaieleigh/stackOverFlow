from flask import Blueprint, jsonify, request
from app.models import User, db
from flask_jwt_extended import JWTManager, create_access_token
from flask_login import logout_user
import bcrypt

user_routes = Blueprint('users', __name__)

def set_password(password):
    hashed_password = bcrypt.hashpw(
        password.encode('utf-8'), bcrypt.gensalt())
    return hashed_password


def verify_password(password, hashed_password):
    # Return value could be made more sophisticated
    if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
        return True
    else:
        return False


@user_routes.route('/')
def index():
  response = User.query.all()
  return {"users": [user.to_dict() for user in response]}


@user_routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    # try:
    email = data['email']
    password = data['password']

    if not email or not password:
        return jsonify(message='Email and password required'), 400


    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify(message='email not found'), 400

    verified = verify_password(password, user.hashed_password)

    if not verified:
        return jsonify(message='Password verify failed'), 403
    else:
        auth_token = create_access_token(
            identity={"email": user.email})
    return jsonify(auth_token=auth_token), 200

    # except Exception:
    #     return jsonify(message='Login failed'), 408


@user_routes.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    # try:
    username = data['username']
    email = data['email']
    hashed_password = set_password(data['password'])

    if not username or not email or not hashed_password:
        return jsonify(message="Username, email, and password required"), 400

    # if not username:
    #     return jsonify(message="Username required"), 400
    # if not email:
    #     return jsonify(message='Email required'), 400
    # if not hashed_password: 
    #     return jsonify(message="Password required"), 400


    user = User(
        username=username,
        email=email,
        hashed_password=hashed_password,
    )
    db.session.add(user)
    db.session.commit()

    auth_token = create_access_token(identity={"email": user.email})
    return jsonify(auth_token=auth_token), 200

    # except Exception:
    #     return jsonify(message="try failed"), 409

@user_routes.route("/logout", methods=["DELETE"])
def logout():
    logout_user()
    return 'Goodbye!'
