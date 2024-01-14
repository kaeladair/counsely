import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranscript } from "./FirebaseContext";
import SensorsRoundedIcon from "@mui/icons-material/SensorsRounded";
function Transcript() {
  const transcript = useTranscript();
  const lastTwoEntries = transcript ? transcript.slice(-4) : [];
  const reversed = lastTwoEntries.reverse();
  return (
    <Box
      height="200px"
      sx={{
        borderRadius: "40px",
        backgroundColor: "#fff",
        padding: "36px",

        overflowY: "scroll",
        // width: '80%',
        // height: 200,
        // borderRadius: '8px',
        // my: 2,
        // bgcolor: 'grey.300',
        // overflowY: 'auto',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'left',
        // justifyContent: 'flex-start',
      }}
    >
      <Stack
        borderRadius="100px"
        alignItems="center"
        justifyContent="center"
        color="#885EFF"
        backgroundColor="#EAE3FF"
        border="2px solid #D4C4FF"
        width="fit-content"
        direction="row"
        padding="4px 12px"
      >
        <SensorsRoundedIcon sx={{ color: "inherit" }} />
        <span style={{ color: "inherit" }}>Live transcript</span>
      </Stack>
      {reversed.map((entry, index) => (
        <Typography
          key={index} // Ideally, use a unique id from the entry if available
          variant="body1"
          margin="10px"
          color="gray"
          fontSize="22px"
          gutterBottom
        >
          {entry.role}: {entry.content}
        </Typography>
      ))}
    </Box>
  );
}

export default Transcript;
