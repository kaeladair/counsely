import {Directions} from '@mui/icons-material'
import {Grid, LinearProgress, Typography, Stack} from '@mui/material'

export default function Emotions({data}) {
  return (
    <Grid
      container
      spacing={2.75} // This will create a gap of 8px * 1.5 = 12px between items
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      {/* emotion container */}
      <Grid
        item
        xs={6}
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '18px',
          width: 'fit-content',

          alignContent: 'center',
        }}
      >
        <SadnessEmoji />
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: '800',
              fontFamily: 'Inter,sans-serif',
              fontSize: '16px',
            }}
          >
            Sad
          </Typography>
          <LinearProgress
            variant="determinate"
            value={data?.emotions?.sad}
            sx={{
              borderRadius: '100px',
              width: '100%',
              height: '20px', // Increase thickness of the bar

              backgroundColor: 'rgba(226, 226, 226, 1)', // Set the background color for the unreached part
              '& .MuiLinearProgress-bar': {
                borderRadius: '100px',
                backgroundColor: 'primary.main', // Set the color for the reached part
              },
            }}
          />
        </Stack>
      </Grid>
      {/* emotion container */}
      <Grid
        item
        xs={6}
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '18px',
          width: 'fit-content',

          alignContent: 'center',
        }}
      >
        <HappinessEmoji />
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: '800',
              fontFamily: 'Inter,sans-serif',
              fontSize: '16px',
            }}
          >
            Happy
          </Typography>
          <LinearProgress
            variant="determinate"
            value={data?.emotions?.happy}
            sx={{
              borderRadius: '100px',
              width: '100%',
              height: '20px', // Increase thickness of the bar

              backgroundColor: 'rgba(226, 226, 226, 1)', // Set the background color for the unreached part
              '& .MuiLinearProgress-bar': {
                borderRadius: '100px',
                backgroundColor: 'primary.main', // Set the color for the reached part
              },
            }}
          />
        </Stack>
      </Grid>
      {/* emotion container */}
      <Grid
        item
        xs={6}
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '18px',
          width: 'fit-content',

          alignContent: 'center',
        }}
      >
        <FearEmoji />
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: '800',
              fontFamily: 'Inter,sans-serif',
              fontSize: '16px',
            }}
          >
            Fear
          </Typography>
          <LinearProgress
            variant="determinate"
            value={data?.emotions?.fear}
            sx={{
              borderRadius: '100px',
              width: '100%',
              height: '20px', // Increase thickness of the bar

              backgroundColor: 'rgba(226, 226, 226, 1)', // Set the background color for the unreached part
              '& .MuiLinearProgress-bar': {
                borderRadius: '100px',
                backgroundColor: 'primary.main', // Set the color for the reached part
              },
            }}
          />
        </Stack>
      </Grid>
      {/* emotion container */}
      <Grid
        item
        xs={6}
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '18px',
          width: 'fit-content',

          alignContent: 'center',
        }}
      >
        <AngerEmoji />
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: '800',
              fontFamily: 'Inter,sans-serif',
              fontSize: '16px',
            }}
          >
            Anger
          </Typography>
          <LinearProgress
            variant="determinate"
            value={data?.emotions?.anger}
            sx={{
              borderRadius: '100px',
              width: '100%',
              height: '20px', // Increase thickness of the bar

              backgroundColor: 'rgba(226, 226, 226, 1)', // Set the background color for the unreached part
              '& .MuiLinearProgress-bar': {
                borderRadius: '100px',
                backgroundColor: 'primary.main', // Set the color for the reached part
              },
            }}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}

const emojiStyle = {fontSize: '2rem'} // Adjust the font size as needed

const FearEmoji = () => (
  <span role="img" aria-label="fearful" style={emojiStyle}>
    😨
  </span>
)

const AngerEmoji = () => (
  <span role="img" aria-label="anger" style={emojiStyle}>
    😠
  </span>
)

const HappinessEmoji = () => (
  <span role="img" aria-label="happy" style={emojiStyle}>
    😊
  </span>
)

const SadnessEmoji = () => (
  <span role="img" aria-label="sad" style={emojiStyle}>
    😢
  </span>
)
