from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User

with app.app_context():
  db.drop_all()
  db.create_all()

  ian = User(username = 'Ian', email = 'ian@aa.io', hashed_password='password')
  javier = User(username = 'Javier', email = 'javier@aa.io', hashed_password='password')
  dean = User(username = 'Dean', email = 'dean@aa.io', hashed_password='password')
  angela = User(username = 'Angela', email = 'angela@aa.io', hashed_password='password')
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io', hashed_password='password')
  alissa = User(username = 'Alissa', email = 'alissa@aa.io', hashed_password='password')

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)

  db.session.commit()