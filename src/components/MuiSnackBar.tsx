import React ,{useState}from 'react'
import { Snackbar,Button } from '@mui/material'

const MuiSnackBar = () => {
  const [open,setopen] = useState(false)

  const handleClose = (e?:React.SyntheticEvent|Event,reason?:string) =>{
      if(reason==='clickaway'){
        return
      }
      setopen(false)
  }
  return (
    <>
    <Button onClick={()=>setopen(true)}>Open Snackbar</Button>
    <Snackbar
      message='Success'
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
      anchorOrigin={{
        vertical:'bottom',
        horizontal:'center',
      }}
    />
      
   
    </>
  )
}

export default MuiSnackBar