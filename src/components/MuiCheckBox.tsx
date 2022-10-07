import React,{useState} from 'react'
import {Box,FormControlLabel,Checkbox, FormControl, FormLabel, FormGroup} from '@mui/material'
import  BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckBox = () => {
    const [cbox,setcbox] = useState(false)
    const [skills,setskills] = useState<string[]>([])
    //
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setcbox(e.target.checked)
    }
    //
    const handleSkill = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(e.target.value)
        
        if(index===-1){
            setskills([...skills,e.target.value])
        }
        else{
            setskills(skills.filter((item)=>item!==e.target.value))
        }
    }
    //
    console.log(cbox)
    console.log(skills)
    //
  return (
    <Box>
        <Box>
            <FormControlLabel 
                label='Term and Condition'
                control={<Checkbox onChange={handleChange} checked={cbox}/>} 
            />
        </Box>
        <Box>
            <Checkbox 
                checked={cbox}
                onChange={handleChange}
                icon={<BookmarkBorderIcon/>}
                checkedIcon={<BookmarkIcon/>}
            />
        </Box>
        {/*  */}
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel 
                      label='Html'
                      control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkill}/>}
                    />
                    <FormControlLabel 
                      label='CSS'
                      control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkill}/>}
                    />
                    <FormControlLabel 
                      label='Javascript'
                      control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkill}/>}
                    />
                </FormGroup>
            </FormControl>
        </Box>
        {/*  */}
    </Box>
  )
}

export default MuiCheckBox