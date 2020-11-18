from flask import Blueprint, jsonify, request
from app.models import db, Question, User, Answer
from sqlalchemy import desc

answer_routes = Blueprint('answers', __name__)



@answer_routes.route('/')
def index():
    response = Answer.query.order_by(Answer.date_answered.desc())
    return {"answers": [answer.to_dict() for answer in response]}






@answer_routes.route('/<questionId>', methods=['GET','POST'])
def answer(questionId):

  if request.method == "GET":
      question_id=questionId
      response = Answer.query.filter_by(questionId=question_id).order_by(Answer.voteCount.desc()).all()
      return {"answers": [answer.to_dict() for answer in response]}
  if request.method == "POST":
    data = request.get_json()

    userId = data['userId']
    questionId = data['questionId']
    body = data['body']
    if not body:
        return jsonify(message="A body is required"), 400
    voteCount = data['voteCount']
    username = data['username']

    answer = Answer(
            userId=userId,
            questionId=questionId,
            body=body,
            voteCount=voteCount,
            username=username
    )

    db.session.add(answer)
    db.session.commit()

    answer1 = answer.to_dict()

    return jsonify(answer=answer1), 200


@answer_routes.route('/<answerId>/voteCount', methods=['PUT'])
def vchange(answerId):
        data = request.get_json()
        vote = data['vote']
        answer = Answer.query.filter_by(id=answerId).first()
        answer.voteCount = answer.voteCount + vote
        db.session.add(answer)
        db.session.commit()
        return jsonify(answer=answer.to_dict)
