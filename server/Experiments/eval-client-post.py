from openai import OpenAI
import firebase_admin
from firebase_admin import credentials, db
import copy


def update_mood(excerpts) -> str:

  client = OpenAI()

  cred = credentials.Certificate("firebase.json")
  firebase_admin.initialize_app(cred)
  firebase_db_url = "https://therapy-assist-default-rtdb.firebaseio.com/"

  ref = db.reference('/client_post', url=firebase_db_url)
  ref_get = db.reference('/transcriptions/saved', url=firebase_db_url)

  prompt = [
      {"role": "system", "content": "You will be given the transcript of what a client told a therapist during a therapy session. Tell me their communication style given that you may only say one of these two options: Passive, Assertive"},
  ]
  
  no_client = True
  for excerpt in excerpts:
    if excerpt.role == "client":
      no_client = False
      break
  if no_client: return

  excerpts = ref_get()
  counter = 0
  num_assertive, num_passive = 0, 0
  message_array = copy.deepcopy(prompt)

  for excerpt in excerpts:
    if excerpt.role == "client":
      message_array.append({"role": "user", "content": excerpt.content})
      counter += 1
      if counter % 24 == 0:
        response = client.chat.completions.create(
          model="gpt-3.5-turbo",
          messages=message_array,
          temperature=0
        )
        if response.choices[0].message.content == "Assertive":
          num_assertive += 1
        else:
          num_passive += 1
        message_array = copy.deepcopy(prompt)

  if num_assertive > num_passive:
    ref.child('comm_style').set("Assertive")
  elif num_assertive < num_passive:
    ref.child('comm_style').set("Passive")
  else:
    ref.child('comm_style').set("Neutral")



