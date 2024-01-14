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
import RightPanel from "./rightPanel";
import Metrics from "./metrics";

function Dashboard() {
  return (
    <Stack
      width="100vw"
      height="100vh"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      paddingX="10px"
      paddingRight="10px"
      paddingLeft="60px"
    >
      <Metrics />
      <RightPanel />
    </Stack>
  );
}

export default Dashboard;
