import React from 'react'
import {Box,List , ListItem, ListItemText,ListItemIcon,Avatar,ListItemAvatar,Divider} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'


const MuiList = () => {
  return (
    <>
    <Box sx={{width:'400px' , bgcolor:'#eee'}}>
        <List>
            <ListItem> 
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                        <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>  
                </ListItemIcon>
                <ListItemText primary='Lorem ipsum 1' secondary='Loremipsum secondary1'/>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                        <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>  
                </ListItemIcon>
                <ListItemText primary='Lorem ipsum 2'/>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                        <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>  
                </ListItemIcon>
                <ListItemText primary='Lorem ipsum 3'/>
            </ListItem>
        </List>
    </Box>
    </>
  )
}

export default MuiList