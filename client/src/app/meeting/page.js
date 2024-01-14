"use client";

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
  CardContent
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Tag from "../../components/tag";
// import {theme} from '../theme';
import { PlayArrow as PlayArrowIcon } from "@mui/icons-material";
import RecordButton from "./RecordButton.client";
import "../../app/global.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import MicIcon from '@mui/icons-material/Mic';
import ChatIcon from '@mui/icons-material/Chat';

function Sidebar() {
  return (
    <Box width="80px"
      height="98vh"
      backgroundColor='#FFF'
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius='10px'
      margin='10px'
    >
      <List>
        <ListItem
          button
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            margin: "8px",
            padding: "8px",
            width: "40px",
            height: "40px",
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem
          button
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            margin: "8px",
            padding: "8px",
            width: "40px",
            height: "40px",
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <AccountCircleIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem
          button
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            margin: "8px",
            padding: "8px",
            width: "40px",
            height: "40px",
          }}
        >
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <SettingsIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
}

function MainContent() {
  return (
    // <ThemeProvider theme={theme}>
    <Box
      sx={{
        width: "100vw",
        flexGrow: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        borderRadius: "8px"
      }}
    >
      <Typography variant="h3" gutterBottom>
        Kael's Hackathon Therapy Session
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start', // add this line
          width: 'fit-content',
          marginBottom: '10px',
          gap: '5px'
        }}
      >
        <Tag textColor="color1" borderColor="color2" tagName="adhd" backgroundColor="color3" />
        <Tag textColor="color4" borderColor="color5" tagName="anxiety" backgroundColor="color6" />
      </Box>
      <Divider variant="left" />
      <Typography variant="h5" gutterBottom sx={{ mt: 2, color: 'black' }}>
        Record a live transcript
      </Typography>
      <Typography variant="body1" gutterBottom>
        Press Record to start a live session.
      </Typography>
      <Box
        sx={{
          width: "80%",
          height: 200,
          borderRadius: "8px",
          my: 2,
          bgcolor: "grey.300",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RecordButton />
      </Box>
      <Box
        sx={{
          width: "80%",
          height: 200,
          borderRadius: "8px",
          my: 2,
          bgcolor: "grey.300",
          overflowY: 'auto', // add this line
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant="h5" margin="10px" color='gray' gutterBottom>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Typography>
      </Box>
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
    <Card sx={{ minWidth: 275, marginBottom: '10px', border: '1px solid gray' }}>
      <CardContent>
        <Typography variant="body1">
          {tip}
        </Typography>
      </CardContent>
    </Card>
  );
}

function RightPanel() {
  return (
    <Box
      sx={{
        width: "50%",
        height: "calc(100vh - 32px)",
        p: 1,
        borderRadius: "10px",
        backgroundColor: 'rgba(255, 255, 255, 0.50)'
      }}
    >
      <Box
        sx={{ borderRadius: "8px", my: 2, p: 2, bgcolor: "grey.300", height: "30%" }}
      >
        <Typography variant="h6" sx={{ margin: '5px' }}>Patient Mood</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: 40, height: 40, bgcolor: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
            <span role="img" aria-label="happy">😊</span>
          </Box>
          <Typography variant="h4" >Happy</Typography>
        </Box>
      </Box>
      <Box
        sx={{ borderRadius: "8px", p: 2, my: 2, bgcolor: "grey.300", height: "55%" }}
      >
        <Typography variant="h6" sx={{ margin: '5px' }}>Recommendations</Typography>
        <SuggestionBox tip="Stay calm and focused during the session. Stay calm and focused during the session. Stay calm and focused during the session." />
        <SuggestionBox tip="Be open and honest with your feelings. Stay calm and focused during the session. Stay calm and focused during the session." />
        <SuggestionBox tip="Don't hesitate to ask questions. Stay calm and focused during the session. Stay calm and focused during the session." />
      </Box>
    </Box>
  );
}

function Dashboard() {
  return (
    <Stack
      width="100vw"
      height="100vh"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      paddingY='10px'
      paddingRight='10px'
      backgroundColor="white" // replace 'darkerColor' with the color you want
    >
      <MainContent />
      <RightPanel />
    </Stack>
  );
}

export default Dashboard;
