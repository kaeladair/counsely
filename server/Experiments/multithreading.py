import torch
from transformers import pipeline
import base64
from scipy.io import wavfile
import io
import numpy as np
from transformers.utils import is_flash_attn_2_available
import pyaudio
import queue
import wave
import collections
import threading
import signal
import time
from transcriber import Transcriber

shutdown_flag = threading.Event()

def get_levels(data, long_term_noise_level, current_noise_level):
    pegel = np.abs(np.frombuffer(data, dtype=np.int16)).mean()
    long_term_noise_level = long_term_noise_level * 0.995 + pegel * (1.0 -
                                                                     0.995)
    current_noise_level = current_noise_level * 0.920 + pegel * (1.0 - 0.920)
    return pegel, long_term_noise_level, current_noise_level

transcriber = Transcriber()

def record_audio(shared_buffer, shutdown_flag):
    audio = pyaudio.PyAudio()
    stream = audio.open(
        rate=16000,
        format=pyaudio.paInt16,
        channels=1,
        input=True,
        frames_per_buffer=512,
    )
    buffer_duration = 5  # duration of the audio to keep in seconds
    frames_in_buffer = int(16000 / 512 * buffer_duration)  # Number of frames for 5 seconds of audio

    try:
        print("\n\nStart speaking.", flush=True)
        temp_frames = []  # Temporary storage for frames
        while not shutdown_flag.is_set():
            data = stream.read(512)
            temp_frames.append(data)

            if len(temp_frames) >= frames_in_buffer:
                # Once we have 5 seconds worth of audio, put it into the shared buffer
                shared_buffer.put(b"".join(temp_frames))
                temp_frames = []  # Reset the temporary frame storage
    finally:
        stream.stop_stream()
        stream.close()
        audio.terminate()
        
def process_audio(shared_buffer, shutdown_flag):  
    counter = 0
    while not shutdown_flag.is_set():
        if not shared_buffer.empty():
            # Retrieve all available frames from the buffer
            while not shared_buffer.empty():
                print("Processing audio...", flush=True)
                audio_data = shared_buffer.get()

                # Create a BytesIO object and save it as a wav file in memory
                buffer = io.BytesIO()
                with wave.open(buffer, 'wb') as wf:
                    wf.setparams((1, 2, 16000, 0, 'NONE', 'NONE'))  # Mono, 16-bit, 16kHz
                    wf.writeframes(audio_data)
                    
                # Save as wav file
                with open(f"audio_{counter}.wav", "wb") as f:
                    f.write(buffer.getvalue())
                    counter += 1

                # Convert BytesIO object to numpy array
                buffer.seek(0)
                sr, audio_np = wavfile.read(buffer)
                audio_np = audio_np.astype(np.float32)
                audio_np = audio_np / np.max(np.abs(audio_np))

                # Transcribe
                user_text = transcriber.transcribe(audio_np, sr)

                print(f"Transcribed Text: {user_text}", flush=True)
                    
        else:
            time.sleep(0.1)  # Sleep briefly if the buffer is empty

def signal_handler(sig, frame):
    print("Signal received, shutting down...")
    shutdown_flag.set()

# Register the signal handler
signal.signal(signal.SIGINT, signal_handler)

# Shared buffer between threads
audio_buffer = queue.Queue()

# Thread setup
recording_thread = threading.Thread(target=record_audio, args=(audio_buffer, shutdown_flag))
processing_thread = threading.Thread(target=process_audio, args=(audio_buffer, shutdown_flag))

recording_thread.daemon = True
processing_thread.daemon = True

# Start threads
recording_thread.start()
processing_thread.start()

# Join threads
recording_thread.join()
processing_thread.join()