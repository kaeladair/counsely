import React from 'react';
import Chip from '@mui/material/Chip';

function tag({textColor, borderColor, tagName, backgroundColor}) {
  return (
    <div>
      <Chip 
      label={tagName} 
      variant="outlined" 
      sx={{
        color: textColor,
        backgroundColor: backgroundColor,
        border: borderColor,
        padding: '12px',
        borderRadius: '12px',
        fontWeight: '600',
      }} />
    </div>
  )
}

export default tag
