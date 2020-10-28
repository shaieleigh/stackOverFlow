from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Question, Answer, Tag
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

  q1 = Question(userId = 1, title = "What is the best kind of snack?", body = 'Im deciding between oreos and pears', date_created = datetime(2020, 9, 29, 14, 34, 26), voteCount=3, answerCount=2)
  q2 = Question(userId = 2, title = "I need help with food", body = 'I want to have something that is both sweet and sour', date_created = datetime(2019, 9, 29, 14, 34, 26), voteCount=-2, answerCount=1)
  q3 = Question(userId = 3, title = "What is my favorite snack?", body = 'Decide for me', date_created = datetime(2020, 7, 2, 14, 34, 26), voteCount=4, answerCount=1)
  q4 = Question(userId = 4, title = "How good are regular cheetos?", body = 'I love hot cheetos', date_created = datetime(2020, 5, 7, 14, 34, 26), voteCount=4, answerCount=1)
  q5 = Question(userId = 5, title = "I have a question about lollipops", body = 'How many licks does it take to get to the center?', date_created = datetime(2020, 3, 14, 14, 34, 26), voteCount=1, answerCount=1)
  q6 = Question(userId = 6, title = "Food is really good", body = 'What is inside a churro?', date_created = datetime(2020, 1, 31, 14, 34, 26), voteCount=16, answerCount=3)

  db.session.add(q1)
  db.session.add(q2)
  db.session.add(q3)
  db.session.add(q4)
  db.session.add(q5)
  db.session.add(q6)

  tag1 = Tag(questionId=1, name="oreos")
  tag2 = Tag(questionId=2, name="sour")
  tag3 = Tag(questionId=3, name="favorite")
  tag4 = Tag(questionId=4, name="cheetos")
  tag5 = Tag(questionId=5, name="owls")
  tag6 = Tag(questionId=6, name="churros")
  tag12 = Tag(questionId=1, name="pears")
  tag22 = Tag(questionId=2, name="sweet")
  tag32 = Tag(questionId=3, name="help")
  tag62 = Tag(questionId=6, name="food")

  db.session.add(tag1)
  db.session.add(tag2)
  db.session.add(tag3)
  db.session.add(tag4)
  db.session.add(tag5)
  db.session.add(tag6)
  db.session.add(tag12)
  db.session.add(tag22)
  db.session.add(tag32)
  db.session.add(tag62)

  a1 = Answer(userId = 1, username='Ian', questionId= 6, body = 'Nothing but goodness and deliciousness!', voteCount= 0, date_answered = datetime(2020, 2, 12, 14, 34, 26))
  a2 = Answer(userId = 2, username='Javier',questionId= 5, body = 'Ah-one, ah-twooo, ah-thrrrreee...', voteCount= 10, date_answered = datetime(2020, 3, 14, 15, 34, 26))
  a3 = Answer(userId = 3, username='Dean', questionId= 4, body = 'Have you tried hot cheetos with pickle juice though?', voteCount= -4, date_answered = datetime(2020, 5, 8, 14, 34, 26))
  a4 = Answer(userId = 4, username='Angela', questionId= 3, body = 'Oreos with peanut butter and milk', voteCount= 3, date_answered = datetime(2020, 7, 3, 14, 34, 26))
  a5 = Answer(userId = 5, username='Soon-Mi', questionId= 2, body = 'Nice to meet you, but that is not a question', voteCount= 5, date_answered = datetime(2019, 10, 14, 14, 34, 26))
  a6 = Answer(userId = 6, username='Alissa', questionId= 1, body = 'Obviously oreos dude', voteCount= 10, date_answered = datetime(2020, 9, 30, 14, 34, 26))
  a7 = Answer(userId = 4, username='Angela', questionId= 6, body = 'I cannot remember anything', voteCount= 3, date_answered = datetime(2020, 9, 30, 14, 34, 26))
  a8 = Answer(userId = 3, username='Dean', questionId= 6, body = 'The churro stuff, right?', voteCount= 0, date_answered = datetime(2020, 9, 30, 14, 34, 26))
  a9 = Answer(userId = 5, username='Soon-Mi', questionId= 1, body = 'Sour patch kids, you fool', voteCount= 5, date_answered = datetime(2020, 9, 30, 14, 34, 26))

  db.session.add(a1)
  db.session.add(a2)
  db.session.add(a3)
  db.session.add(a4)
  db.session.add(a5)
  db.session.add(a6)
  db.session.add(a7)
  db.session.add(a8)
  db.session.add(a9)



  db.session.commit()
