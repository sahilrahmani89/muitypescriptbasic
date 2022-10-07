import React from 'react'
import {Stack,Badge} from '@mui/material'
import { Mail } from '@mui/icons-material'

const MuiBadge = () => {
  return (
    <>
        <Stack spacing={2} direction={'row'}>
            <Badge badgeContent={5} color='primary'>
                <Mail/>
            </Badge>
            <Badge badgeContent={2} color='secondary'>
                <Mail/>
            </Badge>
            <Badge badgeContent={6} color='success'>
                <Mail/>
            </Badge>
            <Badge variant='dot' color='primary' invisible={true}>
                <Mail/>
            </Badge>
        </Stack>
    </>
  )
}

export default MuiBadge