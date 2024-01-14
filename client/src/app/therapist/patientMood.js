import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {useAnalysis} from './FirebaseContext'
function patientMood() {
  const analysis = useAnalysis()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '12px',

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '18px',

        width: '300px',
        alignContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          bgcolor: 'white',
          borderRadius: '8px',
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '10px',
        }}
      >
        <span
          role="img"
          aria-label="happy"
          style={{
            fontSize: '30px', // Adjust the size as needed
            backgroundColor: '#E2E2E2',
            borderRadius: '22px',
            gap: '12px',

            margin: '0px',
            width: 'fit-content',
            padding: '10px', // Add some padding around the emoji
            display: 'inline-flex', // Use inline-flex to center the emoji and enable padding
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          😊
        </span>
      </Box>
      <Stack width="100%" direction="column">
        <Typography
          variant="p"
          gutterBottom
          color="text.primary"
          sx={{
            fontWeight: '500',
            fontFamily: 'Inter,sans-serif',
            color: 'rgba(0,0,0,.5)',
            fontSize: '16px',
          }}
        >
          Patient Mood
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: '800',
            fontFamily: 'Inter,sans-serif',
            fontSize: '24px',
          }}
        >
          {analysis?.mood?.mood}
        </Typography>
      </Stack>
    </Box>
  )
}

export default patientMood
