"use client";
import backgroundImg from "../../../src/image/backgroundContain.png";
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Box,
  Typography,
  Divider,
  Container,
  Button,
  Stack,
  LinearProgress,
  Card,
  CardContent,
} from "@mui/material";
import Recommendations from "./Recommendation";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Tag from "@/components/Tag";
// import {theme} from '../theme';
import { PlayArrow as PlayArrowIcon } from "@mui/icons-material";
import RecordButton from "./RecordButton.client";
import "../../app/global.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import MicIcon from "@mui/icons-material/Mic";
import ChatIcon from "@mui/icons-material/Chat";
import PatientMood from "./patientMood";
import RightPanelMeeting from "./RightPanelMeeting";
import RightPanel from "../dashboard/rightPanel";
import Microphone from "./Microphone";
function MainContent() {
  return (
    <Box
      sx={{
        width: "100vw",
        flexGrow: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "800",
          fontFamily: "Inter,sans-serif",
          marginTop: "0px",
          marginBottom: "8px",
        }}
      >
        Kael's Hackathon Therapy Session
      </Typography>
      <Stack direction="row" spacing={2}>
        <Tag
          borderColor="3px solid #FECEFF"
          textColor="#D196D2"
          tagName="adhd"
          backgroundColor="#FFE7FF"
        />
        <Tag
          borderColor="3px solid #B7D8FF"
          textColor="#66A1E7"
          tagName="anxiety"
          backgroundColor="#DCECFF"
        />
      </Stack>
      <Divider
        sx={{
          width: "100%", // Set the width
          height: "4px", // Set the height (thickness) to 8px
          my: "22px", // Set the vertical margin (marginTop and marginBottom) to 22px
          mx: 0, // Ensure there are no horizontal margins
          // To make the Divider appear as a line with 8px height, we use the border style
          border: 0,
          backgroundColor: "rgba(0, 0, 0, 0.05);",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "800",
          fontFamily: "Inter,sans-serif",
        }}
      >
        Record a live transcript
      </Typography>
      <Typography variant="body1" gutterBottom>
        Press Record to start a live session.
      </Typography>
      <Microphone />
    </Box>
    // </ThemeProvider>
  );
}

/* function StatsSection() {
  return (
    <Box sx={{ width: 'auto', my: 2, mx: 1}}>
      <Box display="flex" alignItems="center">
        <MicIcon />
        <Typography variant="body1" sx={{ ml: 1 }}>
          Speaking Time
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={50} sx={{ height: '10px', borderRadius: '10px' }} />
      <Box display="flex" alignItems="center" mt={2}>
        <ChatIcon />
        <Typography variant="body1" sx={{ ml: 1 }}>
          Your Engagement
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={75} sx={{ height: '10px', borderRadius: '10px' }} />
    </Box>
  );
} */

function SuggestionBox({ tip }) {
  return (
    <Card
      sx={{ minWidth: 275, marginBottom: "10px", border: "1px solid gray" }}
    >
      <CardContent>
        <Typography variant="body1">{tip}</Typography>
      </CardContent>
    </Card>
  );
}

<RightPanelMeeting />;

function Dashboard() {
  return (
    <Stack
      width="100vw"
      height="100vh"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      paddingY="10px"
      paddingRight="10px"
      paddingLeft="110px"
      sx={{
        backgroundImage: `url(${backgroundImg})`, // Use the imported image
        backgroundSize: "cover", // Ensure the image covers the full container
        backgroundRepeat: "no-repeat", // Do not tile the image
        backgroundPosition: "center center", // Center the image

        height: "100vh", // Full height of the viewport
        width: "100vw",
      }} // replace 'darkerColor' with the color you want
    >
      <MainContent />
      <RightPanelMeeting />
    </Stack>
  );
}

export default Dashboard;
