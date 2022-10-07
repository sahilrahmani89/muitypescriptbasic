import React from 'react';
import './App.css';
import MuiButton from './components/MuiButton';
import MuiTextField from './components/MuiTextField';
import MuiTypo from './components/MuiTypo';
import {Stack} from '@mui/material'
import MuiSelect from './components/MuiSelect';
import MuiRadiobtn from './components/MuiRadiobtn';
import MuiCheckBox from './components/MuiCheckBox';
import MuiSwitch from './components/MuiSwitch';
import MuiRating from './components/MuiRating';
import MuiAutoComplete from './components/MuiAutoComplete';
import MuiLayout from './components/MuiLayout';
import MuiCard from './components/MuiCard';
import MuiAccordion from './components/MuiAccordion';
import MuiMultiImage from './components/MuiMultiImage';
import MuiNavbar from './components/MuiNavbar';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiDialogue from './components/MuiDialogue';
import MuiAvatar from './components/MuiAvatar';
import MuiBadge from './components/MuiBadge';
import MuiList from './components/MuiList';
import MuiChip from './components/MuiChip';
import MuiTooltip from './components/MuiTooltip';
import MuiTable from './components/MuiTable';
import MuiAlert from './components/MuiAlert';
import MuiSnackBar from './components/MuiSnackBar';
import MuiDialogueTrue from './components/MuiDialogueTrue';
import MuiProgress from './components/MuiProgress';
import MuiSkelton from './components/MuiSkelton';
import MuiLoadingButton from './components/MuiLoadingButton';
import {LocalizationProvider} from '@mui/lab'
import MuiTab from './components/MuiTab';
import MuiTimeLine from './components/MuiTimeLine';
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import MuiPicker from './components/MuiPicker';


function App() {
  return (
   
    <Stack sx={{ m: 2 }} spacing={4}>
      <MuiTypo/>
      <MuiButton/>
      <MuiTextField/>
      <MuiSelect/>
      <MuiRadiobtn/>
      <MuiCheckBox/>
      <MuiSwitch/>
      <MuiRating/>
      <MuiAutoComplete/>
      <MuiLayout/>
      <MuiCard/>
      <MuiAccordion/>
      <MuiMultiImage/>
      <MuiNavbar/>
      <MuiSpeedDial/>
      <MuiDialogue/>
      <MuiAvatar/>
      <MuiBadge/>
      <MuiList/>
      <MuiChip/>
      <MuiTooltip/>
      <MuiTable/>
      <MuiAlert/>
      <MuiSnackBar/>
      <MuiDialogueTrue/>
      <MuiProgress/>
      <MuiSkelton/>
      <MuiLoadingButton/>
      <MuiTab/>
      <MuiTimeLine/>
    </Stack>

  );
}

export default App;
