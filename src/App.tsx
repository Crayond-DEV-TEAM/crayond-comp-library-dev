import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { useState } from 'react';
import { SelectBoxComponent } from './components/selectBox';
import { CoachMark } from './components/coachMark';
import { Box } from '@mui/material';

function App() {


  return (
    <div className="App" style={{ width: '100vw', background: '#fff', height: '100vh' }}>
     <Box width={'80%'} margin={'auto'} sx={
      {
        background:'#000'

      }
     }>
     <CoachMark />
     </Box>
    </div>
  )
}

export default App;
