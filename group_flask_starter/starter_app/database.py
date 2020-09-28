from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User
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

  db.session.commit()