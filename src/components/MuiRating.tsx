import React,{useState} from 'react'
import {Rating,FormLabel,Stack} from '@mui/material'

const MuiRating = () => {
  const [ratings,setratings] = useState<number|null>(null)
  // 
  const handleChange = (e:React.ChangeEvent<{}>,newValue:number|null)=>{
    setratings(newValue)
  }
  // 
  console.log(ratings)

  return (
    <Stack spacing={4}>
      <FormLabel>Rating</FormLabel>
       <Rating 
        value={ratings}
        onChange={handleChange}
        precision={0.5}
       />
    </Stack>
  )
}

export default MuiRating