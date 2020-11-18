from flask import Blueprint, jsonify, request
from app.models import db, Tag
from sqlalchemy import desc

tag_routes = Blueprint('tags', __name__)



@tag_routes.route('/')
def index():
    response = Tag.query.all()
    return {"tags": [tag.to_dict() for tag in response]}
