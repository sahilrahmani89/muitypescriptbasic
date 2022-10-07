import React from 'react'
import {Card,Box,CardContent,Typography,CardMedia,CardActions,Button} from '@mui/material'

const MuiCard = () => {
  return (
    <>
        <Box width={'300px'}>
            <Card>
                <CardMedia 
                    component='img'
                    height={'140'}
                    image='https://via.placeholder.com/300'
                    alt='image'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React</Typography>
                    <Typography variant ='body2' color='text.secondory'>
                        Its all about her, React is javascript library  for building user interface 
                        React can be used as a base in the development of single page! or mobile Application
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' variant='contained'>Learn More</Button>
                    <Button size='small' variant='outlined'>Share</Button>
                </CardActions>
            </Card>
        </Box>
    </>
  )
}

export default MuiCard