import torch
from transformers import pipeline
import base64
from scipy.io import wavfile
import io
import numpy as np
from transformers.utils import is_flash_attn_2_available
import pyaudio
import wave
import collections
from server.transcriber import Transcriber



def get_levels(data, long_term_noise_level, current_noise_level):
    pegel = np.abs(np.frombuffer(data, dtype=np.int16)).mean()
    long_term_noise_level = long_term_noise_level * 0.995 + pegel * (1.0 -
                                                                     0.995)
    current_noise_level = current_noise_level * 0.920 + pegel * (1.0 - 0.920)
    return pegel, long_term_noise_level, current_noise_level

# Initialize the Transcriber
transcriber = Transcriber()

while True:
    audio = pyaudio.PyAudio()
    stream = audio.open(
        rate=16000,
        format=pyaudio.paInt16,
        channels=1,
        input=True,
        frames_per_buffer=512,
    )
    audio_buffer = collections.deque(maxlen=int((16000 // 512) * 0.5))
    frames, long_term_noise_level, current_noise_level, voice_activity_detected = (
        [],
        0.0,
        0.0,
        False,
    )

    print("\n\nStart speaking. ", end="", flush=True)
    while True:
        data = stream.read(512)
        # Assuming get_levels is a defined function
        pegel, long_term_noise_level, current_noise_level = get_levels(
            data, long_term_noise_level, current_noise_level)
        audio_buffer.append(data)

        if voice_activity_detected:
            frames.append(data)
            if current_noise_level < ambient_noise_level + 100:
                silence_duration += (512 / 16000)
                if silence_duration > 2:
                    break  # voice activity ends

        if (not voice_activity_detected
                and current_noise_level > long_term_noise_level + 300):
            voice_activity_detected = True
            silence_duration = 0
            print("Listening.\n")
            ambient_noise_level = long_term_noise_level
            frames.extend(list(audio_buffer))

    stream.stop_stream(), stream.close(), audio.terminate()

    # Convert audio frames to bytes
    audio_data = b"".join(frames)

    # Create a BytesIO object and save it as a wav file in memory
    buffer = io.BytesIO()
    with wave.open(buffer, 'wb') as wf:
        wf.setparams((1, audio.get_sample_size(pyaudio.paInt16), 16000, 0,
                      'NONE', 'NONE'))
        wf.writeframes(audio_data)

    # Convert BytesIO object to numpy array
    buffer.seek(0)
    sr, audio_np = wavfile.read(buffer)
    audio_np = audio_np.astype(np.float32)
    audio_np = audio_np / np.max(np.abs(audio_np))

    # Transcribe
    user_text = transcriber.transcribe(audio_np, sr)

    print(f"{user_text}", flush=True)