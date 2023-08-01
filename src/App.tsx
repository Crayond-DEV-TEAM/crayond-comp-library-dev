import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { useState } from 'react';
import { CoachMark } from './components/coachMark';
import { Box } from '@mui/material';
import { Step, status } from './components/coachMark/props';

function App() {

   type valueof<T> = T[keyof T];

  interface CallBackProps {
    action?: string;
    controlled?: boolean;
    index?: number;
    lifecycle?: string;
    size?: number;
    status?: valueof<status>;
    step?: Step;
    type?: string;
  }

  const HandleCallBack = (data: CallBackProps) => {
    debugger
  }

  return (
    <div className="App" style={{ width: '100vw', background: '#fff', height: '100vh' , overflow:'hidden'}}>
     <Box width={'80%'} margin={'auto'}>
     <CoachMark 
      renderingComponent={null} 
      // stepsProps={[]}
      styleProps={{}}
      floaterProps={{}}
      HandleCallBack={HandleCallBack}
      hideCloseButton={false}
      scrollToFirstStep={false}
      spotlightClicks={false}
      showSkipButton={false}  
      showProgress={false}
      spotlightPadding={1}
     />
     </Box>
    </div>
  )
}

export default App;
