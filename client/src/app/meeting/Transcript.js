import React from 'react'
import { Box, Typography } from '@mui/material'
import SensorsRoundedIcon from "@mui/icons-material/SensorsRounded";
function Transcript() {
  return (
    <Box
    sx={{
      width: '100%',
      height:'fill-container',
      borderRadius:'20px',
      backgroundColor:'#fff',
      padding: '50px',
      overflowY: 'scroll',
      maxHeight: '300px',
      color: '#885EFF',
      padding: '36px',
      fontWeight: '600px'
    }}
  >
    <Box backgroundColor="#ECE6FF" borderRadius='100px' fontWeight= '600px' border='3px solid #D4C4FF' padding= '4px 12px' width='fit-content' display='flex' alignItems='center' justifyContent='center' gap='12px'>
      <SensorsRoundedIcon sx={{ color: 'inherit' }}/>
      <span style={{ color: 'inherit', fontWeight: 'inherit' }}>Live transcript</span>
    </Box>

    <Typography variant="h5" margin="10px" color="gray" fontSize="24px" fontWeight ="500" gutterBottom>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making
      it over 2000 years old. Richard McClintock, a Latin professor at
      Hampden-Sydney College in Virginia, looked up one of the more obscure
      Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
      1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
      Evil) by Cicero, written in 45 BC. This book is a treatise on the
      theory of ethics, very popular during the Renaissance. The first line
      of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
      section 1.10.32.
    </Typography>
  </Box>
  )
}

export default Transcript
