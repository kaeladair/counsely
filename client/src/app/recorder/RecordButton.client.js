'use client'

import dynamic from 'next/dynamic'
const VoiceActivityComponent = dynamic(() => import('./VoiceActivity'), {
  ssr: false,
})
import io from 'socket.io-client'
import React, {useState} from 'react'
import {Button} from '@mui/material'
import {Mic} from '@mui/icons-material'

const socket = io('http://localhost:5000')

const ROLE = 'client'

export default function RecordButton() {
  const [recording, setRecording] = useState(false)

  function startRecording() {
    setRecording(true)
  }

  function stopRecording() {
    setRecording(false)
  }

  function onAudio(audio) {
    socket.emit('audio_chunk', {
      role: ROLE,
      content: audio,
    })
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={recording ? stopRecording : startRecording}
        sx={{
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          backgroundColor: recording ? 'red' : 'blue',
          '&:hover': {
            backgroundColor: recording ? 'darkred' : 'darkblue',
          },
        }}
      >
        <Mic />
        <VoiceActivityComponent recording={recording} onAudio={onAudio} />
      </Button>
    </>
  )
}
