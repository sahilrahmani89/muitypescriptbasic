import React from 'react'
import {Stack,ImageList,ImageListItem} from '@mui/material'

const itemData = [
    {
        title:'Breakfast',
        img:'https://via.placeholder.com/200'
    },
    {
        title:'Lunch',
        img:'https://via.placeholder.com/200'
    },
    {
        title:'Dinner',
        img:'https://via.placeholder.com/200'
    },
    {
        title:'Snacks Time',
        img:'https://via.placeholder.com/200'
    },
    {
        title:'Pets',
        img:'https://via.placeholder.com/200'
    }
]
//
interface data{
    title:string,
    img:string
}
//
const MuiMultiImage = () => {
  return (
    <>
    <Stack spacing={4} >
        <ImageList sx={{width:500 ,height:500}} cols={3} rowHeight={150} >
                {
                    itemData.map((item,index)=>(
                        <ImageListItem key={index}>
                            <img src={item.img} alt={item.title} loading='lazy'/>
                        </ImageListItem>
                    ))
                }
        </ImageList>
    </Stack>
    </>
  )
}

export default MuiMultiImage