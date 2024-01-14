import {Stack, Avatar, Typography, Chip, Icon} from '@mui/material'
import IconContain from '@/components/IconContain'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded'
import Tag from '@/components/Tag'
export default function Profile({data}) {
  return (
    <Stack
      width="100%"
      height="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      backgroundColor="#fff"
      borderRadius="40px"
      padding="32px 22px"
      alignContent="center"
    >
      <Avatar />
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: '800',
          fontFamily: 'Inter, sans-serif',
          fontSize: '24px',
        }}
      >
        Kael
      </Typography>
      {/* communicate style */}
      <Stack width="100%" direction="row" spacing={2}>
        <IconContain
          bgColor="rgba(136, 94, 255, 0.25)"
          iconColor="rgba(136, 94, 255, 1)"
          icon={<ChatBubbleRoundedIcon />}
        />
        {/* communication */}
        <Stack width="100%" direction="column">
          <Typography
            variant="p"
            gutterBottom
            color="text.primary"
            sx={{
              fontWeight: '500',
              fontFamily: 'Inter,sans-serif',
              color: 'rgba(0,0,0,.5)',
              fontSize: '12px',
            }}
          >
            Communication style
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: '800',
              fontFamily: 'Inter,sans-serif',
              fontSize: '16px',
            }}
          >
            {data.profile.communication_style}
          </Typography>
        </Stack>
      </Stack>
      {/* learning */}
      <Stack width="100%" direction="row" spacing={2}>
        <IconContain
          bgColor="rgba(136, 94, 255, 0.25)"
          iconColor="rgba(136, 94, 255, 1)"
          icon={<LocalLibraryRoundedIcon />}
        />
        {/* communication */}
        <Stack width="100%" direction="column">
          <Typography
            variant="p"
            gutterBottom
            color="text.primary"
            sx={{
              fontWeight: '500',
              fontFamily: 'Inter,sans-serif',
              color: 'rgba(0,0,0,.5)',
              fontSize: '12px',
            }}
          >
            Learning style
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: '800',
              fontFamily: 'Inter,sans-serif',
              fontSize: '16px',
            }}
          >
            {data.profile.learning_style}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        width="100%"
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Typography>Interests</Typography>
        <Stack direction="row" spacing="4px">
          {data.profile.interests.map((interest) => (
            <Tag
              borderColor="3px solid #B8A9F6"
              textColor="rgba(136, 94, 255, 1)"
              tagName={interest}
              backgroundColor="#D2CAFA"
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
