import React from 'react'
import PatientMood from './patientMood'
import { Box, Typography } from '@mui/material'
import Recommendations from './Recommendation'

function RightPanelMeeting() {
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
        <Box>
          <PatientMood/>
        </Box>
        <Box
          width="100%"
          height="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          backgroundColor="#fff"
          borderRadius="40px"
          padding="32px 22px"
          border="4px solid rgba(0,0,0, .1)"
          width="300px"
          alignContent="center"
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
          <Recommendations
          text='Stay calm and focused during the session.'
          />
          
        </Box>
      </Box>
    )
  }

export default RightPanelMeeting
