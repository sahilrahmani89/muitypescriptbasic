import React,{useState} from 'react'
import { Dialog, Button , DialogTitle, DialogContent ,DialogActions, DialogContentText} from '@mui/material'


const MuiDialogueTrue = () => {
  const [open,setopen] = useState(false)
  return (
    <>
    <Button onClick={()=>setopen(true)}>
      Open Dialog
    </Button>

    <Dialog aria-labelledby='dialog-title' open={open} onClose={()=>setopen(false)}>
      <DialogTitle>Are you sure</DialogTitle>
      <DialogContent>
        <DialogContentText>It will make changes in your browser !</DialogContentText>
      </DialogContent>
      <DialogActions>
          <Button onClick={()=>setopen(false)}>Okay</Button>
          <Button onClick={()=>setopen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
    </>
  )
}

export default MuiDialogueTrue