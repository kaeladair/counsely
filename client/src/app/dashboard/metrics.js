import React from "react";
import { Stack, Box, Typography, Chip, Button } from "@mui/material";
import PercentageContain from "./PercentageContain";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import Emotions from "./emotions";
import Sidebar from "@/components/Sidebar";
export default function Metrics() {
  return (
    <Stack
      direction="column"
      spacing={2}
      width="100%"
      height="100%"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="40px"
      >
        <Typography variant="subtitle2" align="center">
          note: this should not replace professional therapy sessions. Rather,
          this should act as an enhancer.
        </Typography>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Stack direction="row" spacing={2}>
          <Chip label="Mood" />
          <Chip label="Language" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="primary">
            View All
          </Button>
          <Button variant="contained" color="primary" fontSize="18px" fontWeight="800" boxShadow="none">
            Start Session
          </Button>
        </Stack>
      </Stack>
      <Typography variant="h4"
      sx={{
        fontWeight:'800',
        fontFamily:'Inter,sans-serif',

      }}
      >Mia's 10am Session</Typography>
      <Stack direction="column">
        <Typography variant="h6"
         sx={{
          fontWeight:'800',
          fontFamily:'Inter,sans-serif',
          
        }}
        >Points of Improvement</Typography>
        <Typography variant="subtitle1"
         sx={{
          fontWeight:'400',
          fontFamily:'Inter,sans-serif',
          color: 'rbga(0,0,0,.5)',
          fontSize:'18px'
          
        }}>
          here are things we recommend you to improve on based on your previous
          conversation.
        </Typography>
      </Stack>
      {/* percentage contain */}
      <Stack
      sx={{
        display:'flex',
        flexDirection: 'row',
        gap: '22px'
      }}
      >
        {/* language */}
      <PercentageContain
        percentage={50}
        bgColor="rgba(136, 94, 255, 0.25)"
        iconColor="rgba(136, 94, 255, 1)"
        title="Language"
        icon={<ChatRoundedIcon />}
        paragraph={
          <>
            based on how{" "}
            <span style={{ fontWeight: "bold", color: "#2e2e2e" }}>
              understandable
            </span>{" "}
            your conversations were.
          </>
        }
      />
      {/* empathy */}
      <PercentageContain
        percentage={69}
        bgColor="rgba(245, 179, 246, 0.25)"
        iconColor="rgba(229, 154, 230, 1)"
        title="Empathy"
        icon={<ChatRoundedIcon />}
        circleColor="#F5B3F6"
        paragraph={
          <>
            based on how{" "}
            <span style={{ fontWeight: "bold", color: "#2e2e2e" }}>
              engaged
            </span>{" "}
            you were with your client.
          </>
        }
      />
      {/* sensitivity */}
      <PercentageContain
        percentage={80}
        bgColor="rgba(196, 248, 255, 0.48)"
        iconColor="rgba(110, 222, 237, 1)"
        title="Sensitivity"
        circleColor='#6EDEED'
        icon={<ChatRoundedIcon />}
        paragraph={
          <>
            based on how{" "}
            <span style={{ fontWeight: "bold", color: "#2e2e2e" }}>
            culturally sensitive
            </span>{" "}
           you were.
          </>
        }
      />
      </Stack>
     
      <Emotions />
    </Stack>
  );
}
