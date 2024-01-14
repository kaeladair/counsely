import React from 'react'
import {Stack, Box, Typography, Chip, Button} from '@mui/material'
import PercentageContain from './PercentageContain'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded'
import Emotions from './emotions'
import Tag from '@/components/Tag'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
export default function Metrics({data}) {
  return (
    <Stack
      direction="column"
      spacing={2}
      width="100%"
      maxWidth="1000px"
      padding="0px 36px"
      height="calc(100vh-30px)"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="40px"
        padding="4px 12px"
        borderRadius="16px"
        border="2px solid rgba(233, 90, 90, 0.75)"
        gap="8px"
        backgroundColor="#FFEBEB"
        alignContent="center"
      >
        <WarningRoundedIcon sx={{color: 'rgba(233, 90, 90, 1)'}} />
        <Typography
          variant="p"
          gutterBottom
          color="text.primary"
          sx={{
            fontWeight: '600',
            fontFamily: 'Inter,sans-serif',
            color: 'rgba(0,0,0,.5)',
            fontSize: '14px',
            marginBottom: '0px',
          }}
        >
          note: this should not replace professional therapy. Rather, this
          should act as an enhancer.
        </Typography>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Stack direction="row" spacing="8px">
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
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            sx={{
              border: '4px solid rgba(0, 0, 0, 0.10)',

              color: 'rgba(0, 0, 0, 0.35)',
              fontSize: '14px',
              fontWeight: '800',
              boxShadow: 'none',
              borderRadius: '12px',
              padding: '8px 22px',
              textTransform: 'none',
              backgroundColor: '#fff',
              '&:hover': {
                // Define the hover state styles here
                backgroundColor: 'rgba(0, 0, 0, 0.04)', // Light background on hover
                border: '4px solid rgba(0, 0, 0, 0.10)', // Darker border on hover
              },
            }}
          >
            View All
          </Button>
          <Button
            variant="contained"
            sx={{
              color: 'primary',
              fontSize: '14px',
              fontWeight: '800',
              boxShadow: 'none',
              borderRadius: '12px',
              padding: '8px 22px',
              textTransform: 'none',
              '&:hover': {
                // Define the hover state styles here
                boxShadow: 'none',
              },
            }}
          >
            Start session
          </Button>
        </Stack>
      </Stack>
      <Typography
        variant="h4"
        sx={{
          fontWeight: '800',
          fontFamily: 'Inter,sans-serif',
          marginTop: '0px',
        }}
      >
        Kael's 10am Hackathon Therapy Session
      </Typography>
      <Stack direction="column">
        <Typography
          variant="h6"
          sx={{
            fontWeight: '800',
            fontFamily: 'Inter,sans-serif',
          }}
        >
          Points of Improvement
        </Typography>
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
          here are things we recommend you to improve on based on your previous
          conversation.
        </Typography>
      </Stack>
      {/* percentage contain */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '22px',
        }}
      >
        {/* language */}
        <PercentageContain
          percentage={data?.therapist_evaluation.language}
          bgColor="rgba(136, 94, 255, 0.25)"
          iconColor="rgba(136, 94, 255, 1)"
          title="Language"
          icon={<ChatRoundedIcon />}
          paragraph={
            <>
              based on how{' '}
              <span style={{fontWeight: 'bold', color: '#2e2e2e'}}>
                understandable
              </span>{' '}
              your conversations were.
            </>
          }
        />
        {/* empathy */}
        <PercentageContain
          percentage={data?.therapist_evaluation.empathy}
          bgColor="rgba(245, 179, 246, 0.25)"
          iconColor="rgba(229, 154, 230, 1)"
          title="Empathy"
          icon={<ChatRoundedIcon />}
          circleColor="#F5B3F6"
          paragraph={
            <>
              based on how{' '}
              <span style={{fontWeight: 'bold', color: '#2e2e2e'}}>
                engaged
              </span>{' '}
              you were with your client.
            </>
          }
        />
        {/* sensitivity */}
        <PercentageContain
          percentage={data?.therapist_evaluation.sensitivity}
          bgColor="rgba(196, 248, 255, 0.48)"
          iconColor="rgba(110, 222, 237, 1)"
          title="Sensitivity"
          circleColor="#6EDEED"
          icon={<ChatRoundedIcon />}
          paragraph={
            <>
              based on how{' '}
              <span style={{fontWeight: 'bold', color: '#2e2e2e'}}>
                emotionally sensitive
              </span>{' '}
              you were.
            </>
          }
        />
      </Stack>
      <Typography
        variant="h6"
        sx={{
          fontWeight: '800',
          fontFamily: 'Inter,sans-serif',
        }}
      >
        Emotions scale
      </Typography>
      <Emotions data={data} />
    </Stack>
  )
}
