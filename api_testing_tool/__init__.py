from flask import Flask
from config import *
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = SECRET_KEY

client = MongoClient(MONGO_HOST_NAME, int(MONGO_HOST_PORT))
db = client[MONGO_DB_NAME]

from .routes import *