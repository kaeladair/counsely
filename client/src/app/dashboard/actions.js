import React from 'react'
import {Typography, Stack, IconButton} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function Actions({data}) {
  return (
    <Stack
      height="100%"
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      spacing={2}
      backgroundColor="#fff"
      borderRadius="40px"
      padding="32px 22px"
      width="fit-content"
      maxWidth="300px"
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
        Next Steps
      </Typography>
      <Typography
        variant="p"
        gutterBottom
        color="text.primary"
        sx={{
          fontWeight: '500',
          fontFamily: 'Inter,sans-serif',
          color: 'rgba(0,0,0,.5)',
          fontSize: '14px',
        }}
      >
        Send actionable tasks based on your conversation and view your patient’s
        status
      </Typography>
      {data.next_steps.recommendations.map((recommendation) => (
        <Typography variant="body1" gutterBottom>
          {recommendation}
        </Typography>
      ))}
    </Stack>
  )
}
