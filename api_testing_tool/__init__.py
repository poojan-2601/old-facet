from datetime import timedelta
from flask import Flask
from config import *
from pymongo import MongoClient
from flask_jwt_extended import JWTManager
 
app = Flask(__name__)
app.secret_key = SECRET_KEY

jwt = JWTManager(app)
app.config["JWT_SECRET_KEY"] = JWT_SECRET_KEY
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=int(JWT_ACCESS_TOKEN_EXPIRES))

client = MongoClient(MONGO_HOST_NAME, int(MONGO_HOST_PORT))
db = client[MONGO_DB_NAME]

from .routes import *
