import React,{useState} from 'react'
import { Toolbar , AppBar, IconButton, Typography ,Stack  ,Button ,Menu, MenuItem} from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'

const MuiNavbar = () => {
    const [anchorEl,setanchorEl] = useState<null|HTMLElement>(null)
    //
    const open = Boolean(anchorEl)
    //
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
        setanchorEl(e.currentTarget)
    }
    //
    const handleClose=()=>{
        setanchorEl(null)
    }
    //
  return (
    <AppBar position='static'>
        <Toolbar >
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemon />
        </IconButton>
        <Typography variant='h6' component='div'  sx={{flexGrow:1}}>
            Navbar
        </Typography>
        {/*  */}
        <Stack direction='row' spacing={2}>
            <Button color='inherit' >Features</Button>
            <Button color='inherit' >Price</Button>
            <Button color='inherit' 
              id='about'
              onClick={handleClick} 
              aria-controls={open?'about-menu' :undefined}
              aria-haspopup='true'
              aria-expanded={open?'true':undefined}
             >About</Button>
            <Button color='inherit' >Login</Button>
        </Stack>
        {/*  */}
        <Menu id='about-menu' 
         anchorEl={anchorEl}
         open={open}
         MenuListProps={{'aria-labelledby':'about'}}
         onClose={handleClose}
         >
            <MenuItem onClick={handleClose}>Team</MenuItem>
            <MenuItem onClick={handleClose}>About Us</MenuItem>
        </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar