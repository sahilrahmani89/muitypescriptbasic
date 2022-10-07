import React from 'react'
import {Stack,Chip,Avatar} from '@mui/material'

const MuiChip = () => {
  return (
    <>
        <Stack direction={'row'} spacing={2}>
            <Chip label='chip' color='primary' size='small'/>
            <Chip label='chip' color='primary' size='small' variant='outlined'/>
            <Chip label='chip' color='primary' size='small' variant='outlined' avatar={<Avatar>A</Avatar>}/>
        </Stack>
    </>
  )
}

export default MuiChip