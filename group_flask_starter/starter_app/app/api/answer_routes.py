from flask import Blueprint, jsonify, request
from app.models import db, Question, User, Answer
from sqlalchemy import desc

answer_routes = Blueprint('answers', __name__)



@answer_routes.route('/')
def index():
    response = Answer.query.order_by(Answer.date_answered.desc())
    return {"answers": [answer.to_dict() for answer in response]}
  

@answer_routes.route('/<questionId>')
def answerOne(questionId):
    question_id=questionId
    response = Answer.query.filter_by(questionId=question_id)
    return {"answers": [answer.to_dict() for answer in response]}
  

@answer_routes.route('/api/questions/<questionId>/answers', methods=['POST'])
def answer(questionId):
  data = request.get_json()

  userId = data['userId']
  questionId = data['questionId']
  body = data['body']
  voteCount = data['voteCount']

  answer = Answer(
        userId=userId,
        questionId=questionId,
        body=body,
        voteCount=voteCount
  )

  db.session.add(answer)
  db.session.commit()

  answer1 = answer.to_dict()

  return jsonify(answer=answer1), 200