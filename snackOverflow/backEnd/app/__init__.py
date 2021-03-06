import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_login import LoginManager

from .models import db, User, Question, Answer
from .api.user_routes import user_routes
from .api.question_routes import question_routes
from .api.answer_routes import answer_routes
from .api.tag_routes import tag_routes

from .config import Config

app = Flask(__name__)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(question_routes, url_prefix='/api/questions')
app.register_blueprint(answer_routes, url_prefix='/api/answers')
app.register_blueprint(tag_routes, url_prefix='/api/tag')

db.init_app(app)
migrate = Migrate(app, db)
login = LoginManager(app)

@login.user_loader #configs LoginManger to use load_user func to get employee objects from database
def load_user(id):
    return User.query.get(int(id))

## Application Security
jwt = JWTManager(app)
CORS(app)
@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') else False,
        samesite='Strict' if os.environ.get('FLASK_ENV') else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    if path == 'snackOverflowLinkPreview.png':
        return app.send_static_file('snackOverflowLinkPreview.png')
    return app.send_static_file('index.html')
