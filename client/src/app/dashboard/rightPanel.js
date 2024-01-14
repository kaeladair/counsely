import React from 'react'
import {Stack} from '@mui/material'
import Profile from './profile'
import Actions from './actions'

export default function RightPanel({data}) {
  return (
    <Stack direction="column" height="100%" width="fit-content" spacing={2}>
      <Profile data={data} />
      <Actions data={data} />
    </Stack>
  )
}
