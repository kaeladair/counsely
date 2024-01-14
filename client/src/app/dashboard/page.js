//* metrics dashboard view
"use client";

import React from "react";
import { Stack } from "@mui/material";

import "../../app/global.css";

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
      paddingY="30px"
      paddingRight="30px"
      paddingLeft="110px"
    >
      <Metrics />
      <RightPanel />
    </Stack>
  );
}

export default Dashboard;
