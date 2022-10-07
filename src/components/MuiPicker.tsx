import React,{useState} from 'react'
import {Stack,TextField} from '@mui/material'
import { DatePicker ,TimePicker ,DateTimePicker} from '@mui/lab'


const MuiPicker = () => {
    const [selectDate,setselectDate] = useState<Date|null>(null)
    const [selectTime,setselectTime] = useState<Date|null>(null)
    const [selectDT,setselectDT] = useState<Date|null>(null)
    console.log(selectDate,selectTime,selectDT)
  return (
    <>
    <Stack spacing={4} sx={{width:'300px'}}>
        <DatePicker
            label='date picker'
            renderInput={(params:any)=><TextField {...params}/>}
            value={selectDate}
            onChange={(newValue:any):any=>{
                setselectDate(newValue)
            }}
        />
        <TimePicker
            label='Time picker'
            renderInput={(params:any)=><TextField {...params}/>}
            value={selectTime}
            onChange={(newValue:any):any=>{
                setselectTime(newValue)
            }}
        />
        <DateTimePicker
            label='date and time picker'
            renderInput={(params:any)=><TextField {...params}/>}
            value={selectDT}
            onChange={(newValue:any):any=>{
                setselectDT(newValue)
            }}
        />
    </Stack>
    </>
  )
}

export default MuiPicker