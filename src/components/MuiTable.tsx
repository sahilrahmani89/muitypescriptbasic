import React from 'react'
import { TableContainer, Table , TableHead,TableBody,Paper ,TableRow,TableCell } from '@mui/material'

const table = [
    {
        id:1,
        name:'Alex',
        email:'alex@email.com',
        age:34
    },
    {
        id:2,
        name:'Alan',
        email:'alan@email.com',
        age:25
    },
    {
        id:3,
        name:'Amber',
        email:'amber@email.com',
        age:23
    },
    {
        id:4,
        name:'William',
        email:'william@email.com',
        age:30
    }
]

const MuiTable = () => {
  return (
    <>
    <TableContainer component={Paper}>
        <Table aria-label ='simple lable'>
            <TableHead >
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    table.map((item)=>{
                        return(
                            <TableRow 
                            key={item.id}
                            sx={{'&:last-child td, &:last-child th':{border:0}}}
                            >
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.age}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}

export default MuiTable