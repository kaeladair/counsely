import React from "react";
import { Box, Icon } from "@mui/material";

function IconContain({ bgColor, iconColor, icon }) {


  return (
    <Box
      backgroundColor={bgColor}
      sx={{
        fontSize: "inherit",
        padding: "8px",
        borderRadius: "6px",
        width: "fit-content",
        height: "fit-content",
        display: 'inline-flex',
        color: iconColor,
        alignItems: 'center', 
        justifyContent: 'center',
      }}
    >
      <Icon
      sx={{
        fontSize: '12px'
      }}
      >{icon}</Icon>
    </Box>
  )
}

export default IconContain;
