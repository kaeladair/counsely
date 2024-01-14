from flask import Flask
from flask_socketio import SocketIO
from transcriber import Transcriber
import firebase_admin
from firebase_admin import credentials, db
from eval_post import profile_eval, next_steps_eval, emotions_eval, therapist_eval
import asyncio

import dotenv
dotenv.load_dotenv()
from openai import AsyncOpenAI

client = AsyncOpenAI()

# Initialize Firebase
cred = credentials.Certificate("firebase.json")
firebase_admin.initialize_app(cred)
firebase_db_url = "https://therapy-assist-default-rtdb.firebaseio.com/"
ref = db.reference('/conversation', url=firebase_db_url)

# Initialize Flask and SocketIO
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# Transcriber instance
transcriber = Transcriber()

@app.route('/')
def index():
    return "Audio Transcription Service"
    
@socketio.on('audio_chunk')
def handle_audio_chunk(message):
    print("Received audio chunk")
    
    # Process audio data that is base64 encoded
    sr, audio_np = transcriber.decode_audio_to_np_array(message['content'])
    
    # Transcribe
    user_text = transcriber.transcribe(audio_np, sr)
    

    has_six = False
    past_six = []
    # Save transcription to Firebase
    def transaction_update(transcriptions):
        nonlocal has_six
        nonlocal past_six
        
        if transcriptions is None:
            transcriptions = []
        
        transcriptions.append({
            'role': message['role'],
            'text': user_text
        
        })
        
        # Check if transactions is a factor of 6
        if len(transcriptions) % 6 == 0:
            has_six = True
            past_six = transcriptions[-6:]
        
        return transcriptions
    
    # Do things with past 6 transcriptions

    ref.child('transcriptions').transaction(transaction_update)
    
@socketio.on('end_conversation')
async def handle_end_conversation():
  # Get transcriptions
  transcriptions = ref.child('transcriptions').get()
  
  # Process transcriptions
  client_messages = process_conversation_client_only(transcriptions)
  transcript = process_conversation(transcriptions)
  
  # Send to GPT
  profile_result = profile_eval(client_messages, client)
  next_steps_result = next_steps_eval(transcript, client)
  emotions_result = emotions_eval(transcript, client)
  therapist_result = therapist_eval(transcript, client)
  
  # Wait for all async tasks to complete
  results = await asyncio.gather(profile_result, next_steps_result, emotions_result, therapist_result)
  
  # Create an object holding all function results
  analysis_results = {
        "profile": results[0],
        "next_steps": results[1],
        "emotions": results[2],
        "therapist_evaluation": results[3]
    }
  
  # Save to Firebase
  ref.child('post_analysis').push(analysis_results)

def process_conversation_client_only(excerpts):
  messages = ""

  for excerpt in excerpts:
    if excerpt['role'] == "patient":
      messages += excerpt['content'] + "\n"
      
def process_conversation(excerpts):
  messages = ""
  
  for excerpt in excerpts:
    messages += excerpt['role'] + ": " + excerpt['content'] + "\n"
    
  return messages

if __name__ == '__main__':
    socketio.run(app, debug=True)