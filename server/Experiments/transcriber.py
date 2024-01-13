import torch
from transformers import pipeline
import base64
from scipy.io import wavfile
import io
import numpy as np
from transformers.utils import is_flash_attn_2_available

class Transcriber:
    def __init__(self, model_name="openai/whisper-tiny.en", device=None):
        self.device = device if device else "cuda:0" if torch.cuda.is_available() else "cpu"
        self.pipe = pipeline(
            "automatic-speech-recognition",
            model=model_name,
            chunk_length_s=30,
            device=self.device,
            model_kwargs={"attn_implementation": "flash_attention_2"} if is_flash_attn_2_available() else {"attn_implementation": "sdpa"},
        )

    def transcribe(self, audio_array, sampling_rate, batch_size=8):
        # Format the audio array to match the input format expected by the pipeline
        audio_dict = {"array": audio_array, "sampling_rate": sampling_rate}
        # Transcribe using the pipeline
        transcription = self.pipe(audio_dict, batch_size=batch_size)["text"]
        return transcription

    def encode_audio(self, audio_file):
        with open(audio_file, 'rb') as audio_file:
            encoded_audio = base64.b64encode(audio_file.read())
        return encoded_audio

    def decode_audio_to_np_array(self, encoded_audio):
        decoded_audio = base64.b64decode(encoded_audio)
        sr, audio = wavfile.read(io.BytesIO(decoded_audio))
        audio = audio.astype(np.float32)
        audio = audio / np.max(np.abs(audio))
        return sr, audio