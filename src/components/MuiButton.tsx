import React from 'react'
import { Button,Stack ,IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    <Stack spacing={2} sx={{ m: 5 }}>
        <Stack direction={'row'} spacing={3}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Container</Button>
        <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={3} direction={'row'}>
        <Button variant='contained' color='success'>Success</Button>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        </Stack>

        <Stack display={'block'} spacing={3} direction={'row'}>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>


        <Stack display={'block'} spacing={3} direction={'row'}>
            <Button variant='contained' startIcon={ <SendIcon/> }>Send</Button>
            <Button variant='contained' endIcon={ <SendIcon/>  } disableElevation>Send</Button>
            <IconButton color='success' aria-label='send' size='small'>
                <SendIcon/>
            </IconButton>
        </Stack>
    </Stack>
  )
}

export default MuiButton