import React from 'react'
import {Box, Typography} from '@mui/material'
import {useTranscript} from './FirebaseContext'

function Transcript() {
  const transcript = useTranscript()
  const lastTwoEntries = transcript ? transcript.slice(-4) : []
  const reversed = lastTwoEntries.reverse()
  return (
    <Box
      sx={{
        width: '80%',
        height: 200,
        borderRadius: '8px',
        my: 2,
        bgcolor: 'grey.300',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'flex-start',
      }}
    >
      {reversed.map((entry, index) => (
        <Typography
          key={index} // Ideally, use a unique id from the entry if available
          variant="body1"
          margin="10px"
          color="gray"
          fontSize="16px"
          gutterBottom
        >
          {entry.role}: {entry.content}
        </Typography>
      ))}
    </Box>
  )
}

export default Transcript
