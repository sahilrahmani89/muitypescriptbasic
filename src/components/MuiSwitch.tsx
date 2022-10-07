import React,{useState} from 'react'
import {Box,FormControlLabel,Switch} from '@mui/material'

const MuiSwitch = () => {
    const [check, setcheck]= useState(false)
    //
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setcheck(e.target.checked)
    }
    //
  return (
    <Box>
            <FormControlLabel label={check?'Light Mode':'Dark Mode'}
                control={<Switch checked={check} onChange={handleChange}/>}
            />
    </Box>
  )
}

export default MuiSwitch