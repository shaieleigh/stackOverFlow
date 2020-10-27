from flask import Blueprint, jsonify, request
from app.models import Question, db, User, Tag
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
        tags = Tag.query.filter_by(questionId=value[i]["id"]).all()
        tagdict = [tag.to_dict() for tag in tags]
        value[i]["tags"] = tagdict
  return questionsdict

@question_routes.route('/ask', methods=['POST'])
def askQuestion():
  data = request.get_json()

  title = data["title"]
  userId = data['userId']
  body = data['body']
  taglist = data['taglist']

  question = Question(
        title=title,
        userId=userId,
        body=body,
  )



  db.session.add(question)
  db.session.commit()

  questionId = question.id

  for tag in taglist:
      print("I got here")
      tag1 = Tag(
          questionId=questionId,
          name=tag
      )
      db.session.add(tag1)

  db.session.commit()

  question1 = question.to_dict()

  return jsonify(question=question1), 200


@question_routes.route('/<qid>')
def getspecific(qid):

    question = Question.query.filter_by(id=qid).first()
    questionsdict = question.to_dict()
    user = User.query.filter_by(id=question.userId).first()
    usersdict = user.to_dict()
    tags = Tag.query.filter_by(questionId=qid).all()
    tagdict = [tag.to_dict() for tag in tags]
    questionsdict["username"] = usersdict["username"]
    questionsdict["tags"] = tagdict
    return jsonify(question=questionsdict), 200

@question_routes.route('/<questionId>/voteCount', methods=['PUT'])
def vchange2(questionId):
        data = request.get_json()
        vote = data['vote']
        question = Question.query.filter_by(id=questionId).first()
        question.voteCount = question.voteCount + vote
        db.session.add(question)
        db.session.commit()
        return jsonify(question=question.to_dict)
