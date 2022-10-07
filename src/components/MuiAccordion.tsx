import React from 'react'
import { Accordion, AccordionSummary,AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const MuiAccordion = () => {
  return (
    <div>
        <Accordion>
            <AccordionSummary 
                id='panel-1'
                aria-controls='panel-1'
                expandIcon={<ExpandMore/>}
            >
                <Typography variant='h6'>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='subtitle1'>
                    She writes her heart speaks out ! 
                    She has own magic and styles
                    And title is about React and Accordion works different 
                    , have to check tailwind also , how will maanage text , this is custom text!
                </Typography>
            </AccordionDetails>
        </Accordion>
        {/*  */}
        <Accordion>
            <AccordionSummary 
                id='panel-1'
                aria-controls='panel-1'
                expandIcon={<ExpandMore/>}
            >
                <Typography variant='h6'>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='subtitle1'>
                    She writes her heart speaks out ! 
                    She has own magic and styles
                    And title is about React and Accordion works different 
                    , have to check tailwind also , how will maanage text , this is custom text!
                </Typography>
            </AccordionDetails>
        </Accordion>
        {/*  */}
        <Accordion>
            <AccordionSummary 
                id='panel-1'
                aria-controls='panel-1'
                expandIcon={<ExpandMore/>}
            >
                <Typography variant='h6'>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='subtitle1'>
                    She writes her heart speaks out ! 
                    She has own magic and styles
                    And title is about React and Accordion works different 
                    , have to check tailwind also , how will maanage text , this is custom text!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion