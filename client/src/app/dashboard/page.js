//* metrics dashboard view
'use client'

import React, {useEffect} from 'react'
import {Stack} from '@mui/material'

import '../../app/global.css'

import RightPanel from './rightPanel'
import Metrics from './metrics'

import db from '../firebase'
import {ref, get, child} from 'firebase/database'

function Dashboard() {
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

  return (
    <Stack
      width="100vw"
      height="100vh"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      paddingY="30px"
      paddingRight="30px"
      paddingLeft="110px"
    >
      <Metrics data={data} />
      <RightPanel data={data} />
    </Stack>
  )
}

export default Dashboard
