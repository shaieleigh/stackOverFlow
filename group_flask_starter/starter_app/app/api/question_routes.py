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
