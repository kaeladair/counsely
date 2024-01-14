'use client'
import backgroundImg from '../../../src/image/backgroundContain.png'
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

function MainContent() {
  return (
    <Box
      sx={{
        width: '100vw',
        flexGrow: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        borderRadius: '8px',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: '800',
          fontFamily: 'Inter,sans-serif',
          marginTop: '0px',
          marginBottom: '8px',
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
      <Box
        sx={{
          width: '80%',
          height: 200,
          borderRadius: '8px',
          my: 2,
          bgcolor: 'grey.300',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RecordButton />
      </Box>
      <Box
        sx={{
          width: '80%',
          height: 200,
          borderRadius: '8px',
          my: 2,
          bgcolor: 'grey.300',
          overflowY: 'auto', // add this line
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant="h5" margin="10px" color="gray" gutterBottom>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Typography>
      </Box>
    </Box>
    // </ThemeProvider>
  )
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

function SuggestionBox({tip}) {
  return (
    <Card sx={{minWidth: 275, marginBottom: '10px', border: '1px solid gray'}}>
      <CardContent>
        <Typography variant="body1">{tip}</Typography>
      </CardContent>
    </Card>
  )
}

function RightPanel() {
  return (
    <Box
      sx={{
        width: '50%',
        height: 'calc(100vh - 32px)',
        padding: '22px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
      }}
    >
      <Box>
        {/* patient mood */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            gap: '12px',

            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: '#fff',
            borderRadius: '20px',
            padding: '18px',

            width: '300px',
            alignContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'white',
              borderRadius: '8px',
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '10px',
            }}
          >
            <span
              role="img"
              aria-label="happy"
              style={{
                fontSize: '30px', // Adjust the size as needed
                backgroundColor: '#E2E2E2',
                borderRadius: '22px',
                gap: '12px',

                margin: '0px',
                width: 'fit-content',
                padding: '10px', // Add some padding around the emoji
                display: 'inline-flex', // Use inline-flex to center the emoji and enable padding
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              😊
            </span>
          </Box>
          <Stack width="100%" direction="column">
            <Typography
              variant="p"
              gutterBottom
              color="text.primary"
              sx={{
                fontWeight: '500',
                fontFamily: 'Inter,sans-serif',
                color: 'rgba(0,0,0,.5)',
                fontSize: '16px',
              }}
            >
              Patient Mood
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: '800',
                fontFamily: 'Inter,sans-serif',
                fontSize: '24px',
              }}
            >
              Happy
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box
        width="100%"
        height="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        backgroundColor="#fff"
        borderRadius="40px"
        padding="32px 22px"
        border="4px solid rgba(0,0,0, .1)"
        width="300px"
        alignContent="center"
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: '800',
            fontFamily: 'Inter, sans-serif',
            fontSize: '24px',
          }}
        >
          Recommendations
        </Typography>
        <Box
          sx={{
            border: '4px solid rgba(0, 0, 0, .1)',
            borderRadius: '20px',
            padding: '22px',
            fontWeight: '600',
            fontFamily: 'Inter,sans-serif',
            fontSize: '16px',
          }}
        >
          Stay calm and focused during the session.
        </Box>
        <Box
          sx={{
            border: '4px solid rgba(0, 0, 0, .1)',
            borderRadius: '20px',
            padding: '22px',
            fontWeight: '600',
            fontFamily: 'Inter,sans-serif',
            fontSize: '16px',
          }}
        >
          Stay calm and focused during the session.
        </Box>
        <Box
          sx={{
            border: '4px solid rgba(0, 0, 0, .1)',
            borderRadius: '20px',
            padding: '22px',
            fontWeight: '600',
            fontFamily: 'Inter,sans-serif',
            fontSize: '16px',
          }}
        >
          Stay calm and focused during the session.
        </Box>
      </Box>
    </Box>
  )
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
      paddingY="10px"
      paddingRight="10px"
      paddingLeft="110px"
      sx={{
        backgroundImage: `url(${backgroundImg})`, // Use the imported image
        backgroundSize: 'cover', // Ensure the image covers the full container
        backgroundRepeat: 'no-repeat', // Do not tile the image
        backgroundPosition: 'center center', // Center the image

        height: '100vh', // Full height of the viewport
        width: '100vw',
      }} // replace 'darkerColor' with the color you want
    >
      <MainContent />
      <RightPanel />
    </Stack>
  )
}

export default Dashboard
