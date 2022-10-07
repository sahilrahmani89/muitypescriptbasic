import React from 'react'
import {SpeedDial,SpeedDialAction,SpeedDialIcon} from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import { Share } from '@mui/icons-material'
import PrintIcon from '@mui/icons-material/Share'

const MuiSpeedDial = () => {
  return (
    <>
    <SpeedDial
        ariaLabel='speed dial'
        sx={{position:'absolute',bottom:16 , right:16}}
        icon={<SpeedDialIcon/>}
    >
        <SpeedDialAction icon={<CopyIcon/>}  tooltipTitle='Copy'/>
        <SpeedDialAction icon={<Share/>}  tooltipTitle='Share'/>
        <SpeedDialAction icon={<PrintIcon/>}  tooltipTitle='Print'/>
    </SpeedDial>
    </>
  )
}

export default MuiSpeedDial