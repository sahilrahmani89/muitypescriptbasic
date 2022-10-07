import React from 'react'
import {Stack,Alert,AlertTitle} from '@mui/material'
import { Check } from '@mui/icons-material'

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='error' variant='outlined'>Error Alert</Alert>
        <Alert severity='success' variant='filled'>Success Alert</Alert>
        <Alert severity='warning'>Warning Alert</Alert>
        <Alert severity='info'>Info Alert</Alert>
        <Alert severity='warning' icon={<Check/>}>
            <AlertTitle>Success</AlertTitle>
            Warning Alert
        </Alert>
        <Alert severity='info' >
            Info Alert</Alert>
    </Stack>
  )
}

export default MuiAlert