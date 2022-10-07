import React from 'react'
import { Skeleton , Stack } from '@mui/material'

const MuiSkelton = () => {
  return (
    <>
    <Stack spacing={2}>
        <Skeleton variant='text' />
        <Skeleton variant='circular' width={40} height={40}/>
        <Skeleton variant='rectangular' width={200} height={400}/>
    </Stack>
    </>
  )
}

export default MuiSkelton