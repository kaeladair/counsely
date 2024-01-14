import React from 'react'
import { Box } from '@mui/material'
import RecordButton from './RecordButton.client'
function Microphone() {
  return (
    <Box
    height="100%"
    direction="column"
    alignItems="flex-start"
    justifyContent="center"
    spacing={2}
    backgroundColor= "#fff"
        borderRadius= "40px"
        padding= "32px 22px"
      width="100%"
       
        alignContent= "center"
      >
        <RecordButton />
      </Box>
  )
}

export default Microphone
