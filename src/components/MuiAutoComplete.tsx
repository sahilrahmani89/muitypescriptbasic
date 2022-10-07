import React,{useState} from 'react'
import {Stack,TextField,Autocomplete,FormLabel} from '@mui/material'

const skills = ['html', 'css', 'js','bootstrap']
const MuiAutoComplete = () => {
    const [skill,setskill] = useState<string|null>(null)
    // 
    const handleChange = (e:any,newValue:string|null) =>{
            setskill(newValue)
    }
    // 
    console.log(skill)
  return (
    <Stack spacing={4}>
        <FormLabel> Auto Complete</FormLabel>
        <Autocomplete 
            options={skills}
            renderInput={(params)=><TextField {...params} label='skilss'/>}
            value={skill}
            onChange={handleChange}
        />
    </Stack>
  )
}

export default MuiAutoComplete