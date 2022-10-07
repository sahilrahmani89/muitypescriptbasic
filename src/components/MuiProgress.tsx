import React from 'react'
import {CircularProgress,Stack ,LinearProgress} from '@mui/material'

const MuiProgress = () => {
  return (
    <Stack spacing={2} >
        <CircularProgress />
        <CircularProgress color='success' />
        <CircularProgress variant='determinate' value={60}/>
        <LinearProgress color='success'/>
        <LinearProgress value={60} variant='determinate'/>
    </Stack>
  )
}

export default MuiProgress