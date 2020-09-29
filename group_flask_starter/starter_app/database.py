from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Question
from app.api.user_routes import set_password

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

  q1 = Question(userId = 1, body = 'This is a questionable question')
  q2 = Question(userId = 2, body = 'I am hungry')
  q3 = Question(userId = 3, body = 'What is your favorite snack')
  q4 = Question(userId = 4, body = 'I love hot cheetos with cheese')
  q5 = Question(userId = 5, body = 'How many licks does it take to get to the center?')
  q6 = Question(userId = 6, body = 'What is inside a churro?')

  db.session.add(q1)
  db.session.add(q2)
  db.session.add(q3)
  db.session.add(q4)
  db.session.add(q5)
  db.session.add(q6)

  db.session.commit()
