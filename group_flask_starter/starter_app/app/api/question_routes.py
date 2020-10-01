from flask import Blueprint, jsonify, request
from app.models import Question, db, User
from sqlalchemy import desc

question_routes = Blueprint('questions', __name__)

@question_routes.route('/')
def index():
  usersdict2 = {}
  response = Question.query.order_by(Question.date_created.desc())
  response2 = User.query.all()
  questionsdict =  {"questions": [question.to_dict() for question in response]}
  usersdict =  {"users": [user.to_dict() for user in response2]}
  for value in usersdict.values():
      for i in range(0,len(value)):
        usersdict2[value[i]["id"]] = value[i]["username"]
  for value in questionsdict.values():
      for i in range(0,len(value)):
        value[i]["username"] = usersdict2[value[i]["userId"]]
  return questionsdict

@question_routes.route('/ask', methods=['POST'])
def askQuestion():
  data = request.get_json()

  userId = data['userId']
  body = data['body']

  question = Question(
        userId=userId,
        body=body,
  )

  db.session.add(question)
  db.session.commit()

  question1 = question.to_dict()

  return jsonify(question=question1), 200

@question_routes.route('/<qid>')
def getspecific(qid):
    question = Question.query.filter_by(id=qid).first()
    question1 = question.to_dict()
    return jsonify(question=question1), 200
