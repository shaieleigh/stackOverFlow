from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Question, Answer
from app.api.user_routes import set_password
from datetime import datetime

hashed = set_password('password')

with app.app_context():
  db.drop_all()
  db.create_all()

  ian = User(username = 'Ian', email = 'ian@aa.io', hashed_password=hashed)
  javier = User(username = 'Javier', email = 'javier@aa.io', hashed_password=hashed)
  dean = User(username = 'Dean', email = 'dean@aa.io', hashed_password=hashed)
  angela = User(username = 'Angela', email = 'angela@aa.io', hashed_password=hashed)
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io', hashed_password=hashed)
  alissa = User(username = 'Alissa', email = 'alissa@aa.io', hashed_password=hashed)

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)

  q1 = Question(userId = 1, body = 'This is a questionable question', date_created = datetime(2020, 9, 29, 14, 34, 26))
  q2 = Question(userId = 2, body = 'I am hungry', date_created = datetime(2019, 9, 29, 14, 34, 26))
  q3 = Question(userId = 3, body = 'What is your favorite snack', date_created = datetime(2020, 7, 2, 14, 34, 26))
  q4 = Question(userId = 4, body = 'I love hot cheetos with cheese', date_created = datetime(2020, 5, 7, 14, 34, 26))
  q5 = Question(userId = 5, body = 'How many licks does it take to get to the center?', date_created = datetime(2020, 3, 14, 14, 34, 26))
  q6 = Question(userId = 6, body = 'What is inside a churro?', date_created = datetime(2020, 1, 31, 14, 34, 26))

  db.session.add(q1)
  db.session.add(q2)
  db.session.add(q3)
  db.session.add(q4)
  db.session.add(q5)
  db.session.add(q6)

  a1 = Answer(userId = 1, questionId= 6, body = 'Nothing but goodness and deliciousness!', voteCount= 0, date_answered = datetime(2020, 2, 12, 14, 34, 26))
  a2 = Answer(userId = 2, questionId= 5, body = 'Ah-one, ah-twooo, ah-thrrrreee...', voteCount= 10, date_answered = datetime(2020, 3, 14, 15, 34, 26))
  a3 = Answer(userId = 3, questionId= 4, body = 'Have you tried hot cheetos with pickle juice though?', voteCount= 0, date_answered = datetime(2020, 5, 8, 14, 34, 26))
  a4 = Answer(userId = 4, questionId= 3, body = 'Oreos with peanut butter and milk', voteCount= 3, date_answered = datetime(2020, 7, 3, 14, 34, 26))
  a5 = Answer(userId = 5, questionId= 2, body = 'Nice to meet you, but that is not a question', voteCount= 5, date_answered = datetime(2019, 10, 14, 14, 34, 26))
  a6 = Answer(userId = 6, questionId= 1, body = 'It is, indeed', voteCount= 0, date_answered = datetime(2020, 9, 30, 14, 34, 26))

  db.session.add(a1)
  db.session.add(a2)
  db.session.add(a3)
  db.session.add(a4)
  db.session.add(a5)
  db.session.add(a6)



  db.session.commit()
