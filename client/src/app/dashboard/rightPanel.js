import React from "react";
import { Stack } from "@mui/material";
import Profile from "./profile";
import Actions from "./actions";

export default function RightPanel(props) {
  return (
    <Stack direction="column" height="100%" width="500px" spacing={2}>
      <Profile />
      <Actions />
    </Stack>
  );
}
