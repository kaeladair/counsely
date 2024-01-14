import React from 'react'
import { Box } from '@mui/material'
function Recommendation({text}) {
  return (
    <Box
          sx={{
            border: '4px solid rgba(0, 0, 0, .1)',
            borderRadius: '20px',
            padding: '22px',
            fontWeight: '600',
            fontFamily: 'Inter,sans-serif',
            fontSize: '16px',
          }}
        >
          {text}
        </Box>
  )
}

export default Recommendation
