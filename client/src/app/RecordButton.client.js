'use client'

import React, { useState } from 'react';
import { Button } from '@mui/material';
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';

export default function RecordButton() {
  const [recording, setRecording] = useState(false);

  function startRecording() {
    setRecording(true);
  }

  function stopRecording() {
    setRecording(false);
  }

  return (
    <Button variant="contained" startIcon={<PlayArrowIcon />} onClick={recording ? stopRecording : startRecording}>
      {recording ? 'Stop Recording' : 'Start Recording'}
    </Button>
  );
}