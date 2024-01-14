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

function Sidebar() {
  return (
    <Box width="240px" height="100%">
      <List>
        <ListItem
          button
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "50%",
            margin: "8px",
            padding: "8px",
            width: "auto",
            height: "auto",
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
            borderRadius: "50%",
            margin: "8px",
            padding: "8px",
            width: "auto",
            height: "auto",
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
            borderRadius: "50%",
            margin: "8px",
            padding: "8px",
            width: "auto",
            height: "auto",
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
        alignItems: "center",
        backgroundColor: "#F0F4F8",
        borderRadius: "8px",
      }}
    >
      <div className="heading-contain">
        <div className="back-contain">
          <ArrowBackRoundedIcon style={{ fontSize: "36px" }} />
        </div>
        <div className="left-column-contain">
          <div className="checkup-contain">
            <AccessTimeFilledIcon style={{ color: "rgba(0,0,0,.3)" }} />
            <span style={{ color: "rgba(0,0,0,.3)" }}>Monthly checkup</span>
          </div>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: "800",
              fontFamily: "Inter, sans-serif",
              fontSize: "50px",
            }}
          >
            Your Monthly Checkup
          </Typography>
          <div className="tag-wrap">
            <Tag
              tagName="ADHD"
              textColor="#D196D2"
              backgroundColor="#FFE7FF"
              borderColor="3px solid #FECEFF"
            />
            <Tag
              tagName="Anxiety"
              textColor="#66A1E7"
              backgroundColor="#DCECFF"
              borderColor="3px solid #B7D8FF"
            />
          </div>
        </div>
      </div>

      <Divider variant="middle" />
      <Typography variant="body1" gutterBottom>
        Small Text Description
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
        }}
      />
    </Box>
    // </ThemeProvider>
  );
}

function RightPanel() {
  return (
    <Box
      sx={{
        width: "20%",
        height: "calc(100vh - 32px)",
        p: 3,
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{ borderRadius: "8px", my: 2, bgcolor: "grey.300", height: "30%" }}
      />
      <Box
        sx={{ borderRadius: "8px", my: 2, bgcolor: "grey.300", height: "30%" }}
      />
      <Box
        sx={{ borderRadius: "8px", my: 2, bgcolor: "grey.300", height: "30%" }}
      />
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
    >
      <Sidebar />
      <MainContent />
      <RightPanel />
    </Stack>
  );
}

export default Dashboard;
