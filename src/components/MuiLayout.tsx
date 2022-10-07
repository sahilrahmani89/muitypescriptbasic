import React from 'react'
import {Box,Stack,Divider,Grid,Paper} from '@mui/material'

const MuiLayout = () => {
  return (
    <>
    <Paper sx={{padding:'20px'}} elevation={4}>
    <Stack sx={{border:'1px solid #eee'} }
      direction='row'
      spacing={2}
    divider={<Divider orientation='vertical' flexItem/>}
    >
    <Box 
    sx={{
        backgroundColor:'primary.main',
        color:'white',
        width:'100px',
        height:'100px',
        padding:'20px',
        '&:hover':{
            backgroundColor:'primary.light',
        }
    }}
    >
        CodeEvalution
    </Box>
    <Box
    display='flex'
    height='100px'
    width='100px'
    bgcolor='success.light'
    p={'20px'}
    >
      
    </Box>
    </Stack>
    {/*  */}
    <Grid container my={4} spacing={2}>    
        <Grid item lg={4} xs={12}>
            <Box bgcolor={'primary.main'} p={2}>Item 1</Box>
        </Grid>
        <Grid item lg={4} xs={12}>
         <Box bgcolor={'primary.main'} p={2}>Item 2</Box>  
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box bgcolor={'primary.main'} p={2}>Item 3</Box>  
        </Grid>
    </Grid>
    </Paper>
    </>
  )
}

export default MuiLayout