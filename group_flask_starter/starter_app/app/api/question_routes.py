from flask import Blueprint, jsonify, request
from app.models import Question, db
from sqlalchemy import desc

question_routes = Blueprint('questions', __name__)

@question_routes.route('/')
def index():
  response = Question.query.order_by(Question.date_created.desc())
  return {"questions": [question.to_dict() for question in response]}
