import React from "react";
import { Typography, Stack, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Actions() {
  return (
    <Stack
      width="100%"
      height="100%"
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      spacing={2}
    >
      <Typography variant="h4" gutterBottom>
        Next Steps
      </Typography>
      <Typography variant="body1" gutterBottom>
        Send actionable tasks based on your conversation and view your patient’s
        status
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body1" gutterBottom>
          Send a task
        </Typography>
        <IconButton>
          <ArrowOutwardIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body1" gutterBottom>
          View patient status
        </Typography>
        <IconButton>
          <ArrowOutwardIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
