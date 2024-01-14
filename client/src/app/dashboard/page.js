//* metrics dashboard view
'use client'

import React, {useEffect, useState} from 'react'
import {Stack, Button, Modal, Box} from '@mui/material'

import '../../app/global.css'

import RightPanel from './rightPanel'
import Metrics from './metrics'

import db from '../firebase'
import {ref, get, child} from 'firebase/database'

function Dashboard() {
  const [open, setOpen] = React.useState(false)
  const [data, setData] = React.useState(null)
  useEffect(() => {
    const postAnalysisRef = ref(db, '/conversation/post_analysis')

    // Fetch the data
    const fetchData = () => {
      try {
        get(postAnalysisRef).then((snapshot) => {
          if (snapshot.exists()) {
            setData(snapshot.val())
          } else {
            console.log('No data available')
          }
        })
      } catch (error) {
        console.error('Error fetching data: ', error)
        // Handle the error according to your needs
      }
    }

    fetchData()
  }, [])
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto', // Adjust the width as needed or keep it auto
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '12px',
    outline: 'none', // Removes the default focus outline
  }
  return data ? (
    <Stack
      width="100vw"
      height="100vh"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      overflow="scroll"
      top="0"
      paddingY="30px"
      paddingRight="30px"
      paddingLeft="110px"
    >
      <Metrics data={data} />
      <RightPanel data={data} />
    </Stack>
  ) : (
    <Stack>
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
            boxShadow: 'none',
          },
        }}
      >
        Start session
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={modalStyle}>
          {/* Modal content goes here */}
          <p>Modal Content</p>
        </Box>
      </Modal>
    </Stack>
  )
}

export default Dashboard
