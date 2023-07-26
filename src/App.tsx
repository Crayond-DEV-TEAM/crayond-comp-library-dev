import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { TreeComponent } from './components/treeComp';
import { useState } from 'react';
import SettingIcon from './assets/settingIcon';
import CollapseIcon from './assets/collapseIcon';
import ExpandIcon from './assets/expandIcon';
import InfoIcon from './assets/InfoIcon';
import { Typography } from '@mui/material';

function App() {

 

  return (
    <div className="App" style={{ width: '100vw', background: '#fff', height: '100vh' }}>
      <Typography variant='h3' color={'#000'}>Render Component </Typography>
    </div>
  )
}

export default App;
