import {Directions} from '@mui/icons-material'
import {LinearProgress, Typography, Stack} from '@mui/material'

export default function Emotions({data}) {
  return (
    <>
    <Stack
      container
      spacing={2.75} // This will create a gap of 8px * 1.5 = 12px between items
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        alignItems:"flex-end",
        gap: '22px',
      }}
    >
      {/* emotion container */}
      <Stack
        item
        xs={6}
        style={{
          display: 'flex',
          
        height: '100%',
          gap: '12px',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '18px',
          width: '100%',
          flexDirection:'row',
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
      </Stack>
      {/* emotion container */}
      <Stack
        item
        xs={6}
        style={{
          display: 'flex',
          gap: '12px',
          flexDirection:'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '18px',
          width: '100%',
          height: '100%',

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
      </Stack>
</Stack>
    
      <Stack
      container
      spacing={2.75} // This will create a gap of 8px * 1.5 = 12px between items
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        gap: '22px',
        alignItems:'flex-end',
        marginTop:'0px'
      }}
    >
      {/* emotion container */}
      <Stack
        item
        xs={6}
        style={{
          display: 'flex',
          gap: '12px',
          flexDirection:'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '18px',
          width: '100%',
          
          height: '100%',
          alignContent: 'center',
          
        alignItems:'flex-end'
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
      </Stack>
      {/* emotion container */}
      <Stack
        item
        xs={6}
        style={{
          display: 'flex',
          gap: '12px',
          flexDirection:'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '18px',
          height: '100%',
          
        alignItems:'flex-end',
          width: '100%',

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
        </Stack>
      </Stack>
      </>

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
