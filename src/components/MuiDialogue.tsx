import React ,{useState}from 'react'
import { BottomNavigation , BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import  FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'

const MuiDialogue = () => {
  const [value,setvalue] = useState(0)
  return (
    <>
    <BottomNavigation sx={{width:'100%',positon:'absolute',bottom:2}} 
    value={value} 
    onChange={(event,newValue)=>{setvalue(newValue)}}
    showLabels
    >
        <BottomNavigationAction label='Home' icon={<HomeIcon/>}></BottomNavigationAction>
        <BottomNavigationAction label='Favorite' icon={<FavoriteIcon/>}></BottomNavigationAction>
        <BottomNavigationAction label='Person' icon={<PersonIcon/>}></BottomNavigationAction>
    </BottomNavigation>
    </>
  )
}

export default MuiDialogue