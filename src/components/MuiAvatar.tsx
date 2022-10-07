import React from 'react'
import { Avatar ,Stack ,AvatarGroup} from '@mui/material'

const MuiAvatar = () => {
  return (
    <>
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={1}>
            <Avatar sx={{bgcolor:'primary.main'}}>BG</Avatar>
            <Avatar sx={{bgcolor:'primary.success'}}>MG</Avatar>
        </Stack>
        <Stack direction={'row'} spacing={3}>
            <AvatarGroup max={3}>
                <Avatar sx={{bgcolor:'primary.main'}}>BG</Avatar>
                <Avatar sx={{bgcolor:'primary.success'}}>MG</Avatar>
                <Avatar src='https://via.placeholder.com/50' alt='boom'>BG</Avatar>
                <Avatar  src='https://via.placeholder.com/50' alt='boom2'>MG</Avatar>
            </AvatarGroup>
        </Stack>
    </Stack>
    </>
  )
}

export default MuiAvatar