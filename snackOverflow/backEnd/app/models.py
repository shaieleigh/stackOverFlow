from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.Binary(100), nullable=False)
  questions = db.relationship('Question', backref='users', lazy=True)
  answers = db.relationship('Answer', backref='users', primaryjoin="or_(User.id==Answer.userId, User.username==Answer.username)", lazy=True)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
    }

class Question(db.Model):
  __tablename__ = 'questions'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(200), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'),
        nullable=False)
  body = db.Column(db.String(2000), nullable= False)
  voteCount = db.Column(db.Integer, nullable= False, default=0)
  answerCount = db.Column(db.Integer, nullable= False, default=0)
  date_created = db.Column(db.DateTime, default=datetime.now())
  answers = db.relationship('Answer', backref='questions', lazy=True)
  tag = db.relationship('Tag', backref='questions', lazy=True)

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "userId": self.userId,
      "body": self.body,
      "voteCount": self.voteCount,
      "answerCount": self.answerCount,
      "date_created": self.date_created
    }

class Answer(db.Model):
  __tablename__ = 'answers'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  username = db.Column(db.String(40), db.ForeignKey('users.username'), nullable=False)
  questionId = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)
  body = db.Column(db.String(2000), nullable=False)
  voteCount = db.Column(db.Integer, nullable=False, default=0)
  date_answered = db.Column(db.DateTime, default=datetime.now())

  def to_dict(self):
    return {
      "id": self.id,
      "userId": self.userId,
      "username": self.username,
      "questionId": self.questionId,
      "body": self.body,
      "voteCount": self.voteCount,
      "date_answered": self.date_answered
    }


class Tag(db.Model):
  __tablename__ = 'tags'
  id = db.Column(db.Integer, primary_key = True)
  questionId = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)
  name = db.Column(db.String(50), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "questionId": self.questionId,
      "name": self.name,
    }
