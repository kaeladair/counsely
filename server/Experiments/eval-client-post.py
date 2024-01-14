from openai import OpenAI
from typing import List 

client = OpenAI()

import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("firebase.json")
firebase_admin.initialize_app(cred)
firebase_db_url = "https://therapy-assist-default-rtdb.firebaseio.com/"

ref = db.reference('/client_post', url=firebase_db_url)

'''
example_passive = [
  "There's been this feeling of being overwhelmed lately, and it seems like things are piling up on me.",
  "Work has been rather demanding, and it's proving challenging to keep up with the tasks.",
  "In my personal life, there appears to be a bit of chaos, and I'm not entirely sure how to manage it.",
  "There's been difficulty with sleep, and there's a constant stream of worries and thoughts that don't seem to settle.",
  "I was kind of hoping to find a space to maybe share and discuss what's been happening.",
  "Dealing with these emotions and pressures is proving to be a bit perplexing for me, if I may say so.",
  "It's as if there are numerous things being juggled, and there's this fear that everything might end up dropping, you know?",
  "Recently, there has been some exploration of hobbies like painting and hiking to unwind, although they seem to add to the already overwhelming list of things to do, if that makes sense.",
  "Socializing used to bring some joy, but currently, there's this sense of lacking the energy for it, or so it seems.",
  "Finding a balance and maybe regaining some control over life is something that's kind of being yearned for, if that's okay to express."
]

example_assertive = [
  "I'm feeling overwhelmed with everything piling up on me recently.",
  "Work is stressing me out, and I can't keep up with the demands.",
  "My personal life is chaotic, and I don't know how to manage it.",
  "I'm having trouble sleeping, and my mind is constantly racing with worries.",
  "I just needed a place to vent and talk about what's going on.",
  "I don't know how to deal with all these emotions and pressures.",
  "It feels like I'm juggling so many things, and I'm afraid I might drop everything.",
  "I've been trying hobbies like painting and hiking to de-stress, but they just add to my never-ending to-do list.",
  "I used to enjoy spending time with friends, but now I don't have the energy for it.",
  "I need to find a balance and regain control over my life."
]
'''

def update_comm_style(excerpts: List[str]) -> str:
  message_array = [
      {"role": "system", "content": "You will be given the transcript of what a client told a therapist during a therapy session. Tell me their communication style given that you may only say one of these two options: Passive, Assertive"},
  ]
  
  for excerpt in excerpts:
      message_array.append({"role": "user", "content": excerpt})

  response = client.chat.completions.create(
      model="gpt-3.5-turbo",
      messages=message_array,
      temperature=0
  )

  ref.child('comm_style').set(response.choices[0].message.content)



