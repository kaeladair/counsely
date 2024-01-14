import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Percentage(props, circleColor) {
  return (
    <Box
      sx ={{
        alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginBottom: "12px",
          position: "relative"
      }}
    >
      {/* Background progress */}
      <CircularProgress
        variant="determinate"
        value={100} // Full circle
        size={120}
        thickness={6}
        sx={{
          color: '#E2E2E2', // Set the color to light gray
          position: 'absolute', // Position it behind the main progress
          zIndex: 1, // Ensure it's behind the main progress
        }}
      />
      <CircularProgress
        variant="determinate"
        {...props}
        size={120} // Increase the SVG size
        thickness={6}
        sx={{
          transform: "scale(0.8)", // Scale down the CircularProgress to keep its original size
          circle: {
            strokeLinecap: "round",
          },
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: "2",
          color: circleColor,
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <Typography
          variant="h5"
          color="text.primary"
          fontWeight={800}
          fontSize='28px'
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default Percentage;
