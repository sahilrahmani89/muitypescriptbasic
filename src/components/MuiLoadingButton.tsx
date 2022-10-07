import React from 'react'
import {Stack} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import { Save } from '@mui/icons-material'

const MuiLoadingButton = () => {
  return (
    <Stack spacing={3}>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined'>Login</LoadingButton>
        <LoadingButton loading variant='outlined' loadingIndicator='loading'></LoadingButton>
        <LoadingButton>
            <LoadingButton startIcon={<Save/> } loadingPosition='start' variant='outlined'>Save</LoadingButton>
            <LoadingButton loading startIcon={<Save/> } loadingPosition='start' variant='outlined'>Save</LoadingButton>
        </LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton