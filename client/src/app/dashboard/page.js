//* metrics dashboard view
'use client'

import React, {useEffect} from 'react'
import {Stack} from '@mui/material'

import '../../app/global.css'

import RightPanel from './rightPanel'
import Metrics from './metrics'

import db from '../firebase'

function Dashboard() {
  const [data, setData] = React.useState(null)
  useEffect(() => {
    const postAnalysisRef = db.ref('/conversation/postAnalysis')

    // Fetch the data
    const fetchData = async () => {
      try {
        const snapshot = await postAnalysisRef.once('value')
        const data = snapshot.val()
        setData(data)
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
