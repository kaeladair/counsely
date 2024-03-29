import React from 'react'
import PatientMood from './patientMood'
import {Box, Stack, Typography} from '@mui/material'
import Recommendations from './Recommendation'
import {useAnalysis} from './FirebaseContext'

function RightPanelMeeting() {
  const analysis = useAnalysis()
  return (
    <Box
      sx={{
        width: '50%',
        height: 'calc(100vh - 32px)',
        padding: '22px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
      }}
    >
      <Box marginBottom="20px">
        <PatientMood />
      </Box>

      <Stack
        width="100%"
        height="500px"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        backgroundColor="#fff"
        borderRadius="40px"
        padding="32px 22px"
        border="4px solid rgba(0,0,0, .1)"
        alignContent="center"
        overflow="auto"
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: '800',
            fontFamily: 'Inter, sans-serif',
            fontSize: '24px',
          }}
        >
          Recommendations
        </Typography>
        {analysis?.recommendation?.recommendations?.map(
          (recommendation, index) => (
            <Recommendations key={index} text={recommendation} />
          ),
        )}
      </Stack>
    </Box>
  )
}

export default RightPanelMeeting
