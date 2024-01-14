'use client'

import dynamic from 'next/dynamic'
const VoiceActivityComponent = dynamic(() => import('./VoiceActivity'), {
  ssr: false,
})
import io from 'socket.io-client'
import React, {useState} from 'react'
import {Button} from '@mui/material'
import {Mic} from '@mui/icons-material'

const socket = io('http://localhost:8000')

const ROLE = 'therapist'

export default function RecordButton() {
  const [recording, setRecording] = useState(false)

  function startRecording() {
    setRecording(true)
  }

  function stopRecording() {
    setRecording(false)
    socket.emit('end_converstion')
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
          backgroundColor: recording ? 'red' : '#885EFF',
          '&:hover': {
            backgroundColor: recording ? 'darkred' : '#885EFF',
          },
        }}
      >
        <Mic sx={{fontSize:"40px"}}/>
        <VoiceActivityComponent recording={recording} onAudio={onAudio} />
      </Button>
    </>
  )
}
