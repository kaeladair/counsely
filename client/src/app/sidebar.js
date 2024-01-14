"use client";
import React from "react";
import { Stack, IconButton, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter } from "next/navigation";
import SensorsRoundedIcon from "@mui/icons-material/SensorsRounded";
export default function Sidebar() {
  const router = useRouter();
  return (
    // <Box
    // sx={{
    //     height:'100vh',
    //     alignContent:'center',
    //     justifyContent:'center'
    // }}
    // >
    <Stack
      width="80px"
      backgroundColor="#FFF"
      direction="column"
      justifyContent="center"
      alignItems="center" // Changed from 'space-between' to 'center'
      borderRadius="18px"
      margin="26px"
      position="absolute"
      padding="12px"
      left={0}
      height="90vh"
      spacing={2} // Add spacing if needed
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={5}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <IconButton
            sx={{
              borderRadius: "10px",
              width: "60px",
              height: "60px",
            }}
          >
            <HomeIcon sx={{ width: "40px" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              router.push("/dashboard");
            }}
            sx={{
              borderRadius: "10px",
              width: "60px",
              height: "60px",
            }}
          >
            <AccountCircleIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              router.push("/meeting");
            }}
            sx={{
              borderRadius: "10px",
              width: "60px",
              height: "60px",
            }}
          >
            <SensorsRoundedIcon />
          </IconButton>
        </Stack>
      </Stack>
      {/* Replace List with a Stack for icons */}

      <IconButton
        sx={{
          borderRadius: "10px",
          width: "60px",
          height: "60px",
        }}
      >
        <SettingsIcon />
      </IconButton>
    </Stack>
    // </Box>
  );
}
