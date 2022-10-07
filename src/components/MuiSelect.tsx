import React ,{useState}from 'react'
import { Stack,Box,TextField, MenuItem } from '@mui/material'


const MuiSelect = () => {
    const [country,setcountry] = useState<string[]>([])
    //
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value 
        setcountry(typeof value==='string' ? value.split(','):value)
    }
    //
    console.log(country)
    //
  return (
    <Stack sx={{m:5}}>
        <Box width='250px'>
            <TextField 
                 label='Select Country'
                 value={country}
                 onChange={handleChange}
                 select
                 fullWidth
                 SelectProps={{multiple:true}}
            >
                <MenuItem value='India'>India</MenuItem>
                <MenuItem value='uk'>UK</MenuItem>
                <MenuItem value='usa'>USA</MenuItem>
            </TextField>
        </Box>
    </Stack>
  )
}

export default MuiSelect