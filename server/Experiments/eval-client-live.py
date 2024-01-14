from openai import OpenAI
from typing import List 

client = OpenAI()

import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("firebase.json")
firebase_admin.initialize_app(cred)
firebase_db_url = "https://therapy-assist-default-rtdb.firebaseio.com/"

ref = db.reference('/client_live', url=firebase_db_url)

def update_mood(excerpts: List[str]) -> str:
  message_array = [
      {"role": "system", "content": "You will be given the transcript of a therapy session. Analyze the aggregate sentiment and return the emotion of the tone conveyed. You may only say one word, and it must be one of these five: Bored, Hopeful, Frustrated, Melancholy, Surprised"},
    ]
  
  for excerpt in excerpts:
    message_array.append({"role": "user", "content": excerpt})

  response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=message_array,
    temperature=0
  )

  ref.child('mood').set(response.choices[0].message.content)



