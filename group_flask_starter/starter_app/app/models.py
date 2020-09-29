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


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
    }

class Question(db.Model):
  __tablename__ = 'questions'

  id = db.Column(db.Integer, primary_key = True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'),
        nullable=False)
  body = db.Column(db.String(2000), nullable= False)
  date_created = db.Column(db.DateTime, default=datetime.now())

  def to_dict(self):
    return {
      "id": self.id,
      "userId": self.userId,
      "body": self.body,
      "date_created": self.date_created
    }
