import React from 'react'
import {Box, Icon} from '@mui/material'

function IconContain({bgColor, iconColor, icon}) {
  return (
    <Box
      backgroundColor={bgColor}
      sx={{
        fontSize: 'inherit',
        padding: '8px',
        borderRadius: '12px',
        width: 'fit-content',
        height: 'fit-content',
        display: 'inline-flex',
        color: iconColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon
        sx={{
          fontSize: '10px',
          width: 'fit-content',
          height: 'fit-content',
        }}
      >
        {icon}
      </Icon>
    </Box>
  )
}

export default IconContain
