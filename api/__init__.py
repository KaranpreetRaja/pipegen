from flask import Flask
from firebase_admin import credentials, firestore, initialize_app
from .userAPI import user_api


cred = credentials.Certificate("key.json")
default_app = initialize_app(cred)

def init_app():
    app = Flask(__name__)
    app.register_blueprint(user_api, url_prefix='/api/user')

