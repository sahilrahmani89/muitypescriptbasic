import React from 'react'
import {Stack,TextField} from '@mui/material'

const MuiTextField = () => {
  return (
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={3}>
            <TextField label='name' variant='outlined'/>
            <TextField label='name' variant='filled'/>
            <TextField label='name' variant='outlined'/>
            <TextField label='name' variant='filled'/>
        </Stack>
    </Stack>
  )
}

export default MuiTextField