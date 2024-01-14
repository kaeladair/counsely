import React from "react";
import Percentage from "./Percentage";
import { Box, Stack, Typography } from "@mui/material";
import IconContain from "@/components/iconContain";
function PercentageContain({
  title,
  paragraph,
  percentage,
  bgColor,
  iconColor,
  icon,
  circleColor
}) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          backgroundColor: "#fff",
          borderRadius: "50px",
          padding: "32px 22px",
          width: "fit-content",
          maxWidth: "250px",
          alignContent: "center",
          justifyContent:"center",
        }}
      >
        <Percentage value={percentage} circleColor={circleColor} />
        <Stack
         sx={{
            display:'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
            justifyContent:'center'
          }}
        >
          {/* heading */}
          <Stack
          sx={{
            display:'flex',
            flexDirection: 'row',
            gap: '12px',
            alignItems:'center',
            justifyContent:'center',
          }}
          >
            <IconContain
              bgColor={bgColor}
              iconColor={iconColor}
              icon={icon}
            />
            <Typography
              variant="h2"
              gutterBottom
              color="text.primary"
              sx={{
                fontWeight: "800",
                fontFamily: "Inter, sans-serif",
                fontSize: "22px",
              }}
            >
              {title}
            </Typography>
        
            
          </Stack>
          <Typography
              variant="p"
              gutterBottom
              color="text.primary"
              sx={{
                fontWeight: "400",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "rgba(0,0,0,.5)",
                textAlign: "center"
              }}
            >
              {paragraph}
            </Typography>
        </Stack>
      </Box>
    </div>
  );
}

export default PercentageContain;
