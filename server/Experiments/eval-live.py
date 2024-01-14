from openai import OpenAI
import firebase_admin
from firebase_admin import credentials, db


def update_mood(recents) -> str:

  client = OpenAI()

  cred = credentials.Certificate("firebase.json")
  firebase_admin.initialize_app(cred)
  firebase_db_url = "https://therapy-assist-default-rtdb.firebaseio.com/"

  ref = db.reference('/post', url=firebase_db_url)
  res = {} # TODO: make complete response

  message_array = [
      {"role": "system", "content": "You will be given the transcript of a therapy session. Analyze the aggregate sentiment and return the emotion of the tone conveyed. You may only say one word, and it must be one of these five: Bored, Hopeful, Frustrated, Melancholy, Surprised"},
    ]

  no_client = True
  for dialogue in recents:
    if dialogue.role == "client":
      no_client = False
      break
  if no_client: return # do not update the emotion if the client hasn't spoken in the last 6

  for dialogue in recents:
    if dialogue.role == "client":
      message_array.append({"role": "user", "content": dialogue.content})

  response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=message_array,
    temperature=0
  )

  ref.child('mood').update(response.choices[0].message.content)



