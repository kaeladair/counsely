from fastapi import FastAPI
from socket_wrapper import socketio_mount

import firebase_admin
from firebase_admin import credentials, db
from transcriber import Transcriber  # Ensure this is compatible with async
import json
from openai import AsyncOpenAI  # Assuming this is an async compatible client
from eval_post import profile_eval, next_steps_eval, emotions_eval, therapist_eval
from eval_live import recommend_eval, mood_eval
import asyncio
import json

import dotenv
dotenv.load_dotenv()
from openai import AsyncOpenAI

client = AsyncOpenAI()

# Initialize Firebase
cred = credentials.Certificate("firebase.json")
firebase_admin.initialize_app(cred)
firebase_db_url = "https://therapy-assist-default-rtdb.firebaseio.com/"
ref = db.reference('/conversation', url=firebase_db_url)

# Initialize FastAPI and SocketIO
app = FastAPI()
sio = socketio_mount(app)

# Transcriber instance
transcriber = Transcriber()

@app.route('/')
def index():
    return "Audio Transcription Service"
  
# Define SocketIO events
@sio.on('connect')
async def connect(sid, environ):
    print("Client connected", sid)
    
@sio.on('audio_chunk')
async def audio_chunk(sid, message):
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
            'content': user_text
        })
                
        # Check if transactions is a factor of 6
        if len(transcriptions) % 3 == 0:
            has_six = True
            past_six = transcriptions[-3:]
        
        return transcriptions
    
    ref.child('transcriptions').transaction(transaction_update)
    
    # Do things with past 6 transcriptions
    if has_six:
        # Process transcriptions
        transcript = process_conversation(past_six)
        
        # Send to GPT
        recommend_result = recommend_eval(transcript, client)
        mood_result = mood_eval(transcript, client)
        
        # Wait for all async tasks to complete
        results = await asyncio.gather(recommend_result, mood_result)
        
        # Create an object holding all function results
        analysis_results = {
            "recommendation": json.loads(results[0]),
            "mood": json.loads(results[1])
        }
        
        # Save to Firebase
        ref.child('live_analysis').set(analysis_results)
        
    
    
@sio.on('end_conversation')
async def end_conversation(sid):
  print("Conversation ended")
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
        "profile": json.loads(results[0]),
        "next_steps": json.loads(results[1]),
        "emotions": json.loads(results[2]),
        "therapist_evaluation": json.loads(results[3])
    }
  
  # Save to Firebase
  ref.child('post_analysis').set(analysis_results)
  
@sio.on('disconnect')
async def disconnect(sid):
    print('Client disconnected', sid)

def process_conversation_client_only(excerpts):
  messages = ""

  for excerpt in excerpts:
    if excerpt['role'] == "patient":
      messages += excerpt['content'] + "\n"
      
  return messages
      
def process_conversation(excerpts):
  messages = ""
  
  for excerpt in excerpts:
    messages += excerpt['role'] + ": " + excerpt['content'] + "\n"
    
  return messages

# Run the app
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)