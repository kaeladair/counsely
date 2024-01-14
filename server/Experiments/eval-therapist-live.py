from openai import OpenAI
from typing import List 

client = OpenAI()

import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("firebase.json")
firebase_admin.initialize_app(cred)
firebase_db_url = "https://therapy-assist-default-rtdb.firebaseio.com/"

ref = db.reference('/therapist_live', url=firebase_db_url)

# TODO: recommendations, stats


