import React,{useState} from 'react'
import {Box,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material'

const MuiRadiobtn = () => {
    const [radios,setradios] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
            setradios(e.target.value)
    }
    //
    console.log(radios)
    //
  return (
    <Box>
        <FormControl>
            <FormLabel id='job-experience'>
                Year Of Experience
            </FormLabel>
            {/*  */}
            <RadioGroup
            name='Job Experince'
            aria-labelledby='job-experirence'
            onChange={handleChange}
            >
                <FormControlLabel control={ <Radio/>} label='0-2' value='0-2'/>
                <FormControlLabel control={ <Radio/>} label='3-5' value='3-5'/>
                <FormControlLabel control={ <Radio/>} label='6-10' value='6-10'/>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MuiRadiobtn