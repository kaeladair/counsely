'use client'
import React from 'react'
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
} from '@mui/material'
import Recommendations from './Recommendation'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import Tag from '@/components/Tag'
// import {theme} from '../theme';
import {PlayArrow as PlayArrowIcon} from '@mui/icons-material'
import RecordButton from './RecordButton.client'
import '../../app/global.css'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import MicIcon from '@mui/icons-material/Mic'
import ChatIcon from '@mui/icons-material/Chat'
import PatientMood from './patientMood'
import RightPanelMeeting from './RightPanelMeeting'
import RightPanel from '../dashboard/rightPanel'
import Microphone from './Microphone'
import {FirebaseProvider} from './FirebaseContext'
import Transcript from './Transcript'

function MainContent() {
  return (
    <Box
      sx={{
        width: '100vw',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        borderRadius: '8px',
        height: '100vh',
        padding: '36px',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginTop: '0px',

          fontWeight: '800',
          fontFamily: 'Inter,sans-serif',
          marginBottom: '8px',
        }}
      >
        Kael&apos;s Hackathon Therapy Session
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
          width: '100%', // Set the width
          height: '4px', // Set the height (thickness) to 8px
          my: '22px', // Set the vertical margin (marginTop and marginBottom) to 22px
          mx: 0, // Ensure there are no horizontal margins
          // To make the Divider appear as a line with 8px height, we use the border style
          border: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.05);',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: '800',
          fontFamily: 'Inter,sans-serif',
        }}
      >
        Record a live transcript
      </Typography>
      <Typography variant="body1" gutterBottom>
        Press Record to start a live session.
      </Typography>
      <Microphone />
      <Transcript />
    </Box>
    // </ThemeProvider>
  )
}

function SuggestionBox({tip}) {
  return (
    <Card sx={{minWidth: 275, marginBottom: '10px', border: '1px solid gray'}}>
      <CardContent>
        <Typography variant="body1">{tip}</Typography>
      </CardContent>
    </Card>
  )
}

function Dashboard() {
  return (
    <FirebaseProvider>
      <Stack
        width="100vw"
        height="100vh"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        overflow="hidden"
        paddingTop="36px"
        paddingRight="10px"
        paddingLeft="110px"
        top="0"
        sx={{
          backgroundImage: '/backgroundContain.png', // Use the imported image
          backgroundSize: 'cover', // Ensure the image covers the full container
          backgroundRepeat: 'no-repeat', // Do not tile the image
          backgroundPosition: 'center center', // Center the image
          paddingTop: '36px',
          height: '100vh', // Full height of the viewport
          width: '100vw',
        }} // replace 'darkerColor' with the color you want
      >
        <MainContent />
      </Stack>
    </FirebaseProvider>
  )
}

export default Dashboard
