'use client'

import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Mic } from '@mui/icons-material';


export default function RecordButton() {
  const [recording, setRecording] = useState(false);

  function startRecording() {
    setRecording(true);
  }

  function stopRecording() {
    setRecording(false);
  }

  return (
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
    </Button>
  );
}