import React ,{useState}from 'react'
import {Box,Tab} from '@mui/material'
import { TabContext ,TabPanel , TabList } from '@mui/lab'

const MuiTab = () => {
    const [value,setvalue] = useState('1')
    //
    const handleChange = (e:React.SyntheticEvent,newValue:string)=>{
        setvalue(newValue)
    }
    //
  return (
   <>   
    <Box>
        <TabContext value={value}>
            <Box sx={{borderColor:'divider',borderBottom:1}}>
                <TabList aria-label='tabs-list' onChange={handleChange}>
                    <Tab value='1' label='Tab One'/>
                    <Tab value='2' label='Tab Two'/>
                    <Tab value='3' label='Tab Three'/>
                </TabList>
            </Box>
            <TabPanel value='1'>Panel One</TabPanel>
            <TabPanel value ='2' >Panel two</TabPanel>
            <TabPanel value='3' >Panel Three</TabPanel>
        </TabContext>
    </Box>
   </>
  )
}

export default MuiTab