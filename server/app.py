from flask import Flask, request
from flask_socketio import SocketIO
import io
from scipy.io import wavfile
import numpy as np
from transcriber import Transcriber
import firebase_admin
from firebase_admin import credentials, db

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
def handle_audio_chunk(audio_data):
    print("Received audio chunk")
    
    # Process audio data that is base64 encoded
    sr, audio_np = transcriber.decode_audio_to_np_array(audio_data)
    
    # Transcribe
    user_text = transcriber.transcribe(audio_np, sr)
    


    # Save transcription to Firebase
    def transaction_update(transcriptions):
        if transcriptions is None:
            transcriptions = []
        transcriptions.append(user_text)
        return transcriptions

    ref.child('transcriptions').transaction(transaction_update)



if __name__ == '__main__':
    socketio.run(app, debug=True)