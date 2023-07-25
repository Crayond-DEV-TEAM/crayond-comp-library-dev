````import { Box } from '@mui/material';
import { useState } from 'react';
import CheckMark from './assets/checkmark';
import StepperIcon from './assets/stepperIcon';
import CustomStepper from './components/stepper/stepper';

function App() {
 // steps for the stepper
 const steps = [
   {
     label: 'akila', // stepes Name or title
     icon: <StepperIcon sx={{ fontSize: 50 }} />,// icon for the steps
     status: 'inprogress',// status of the steps like start,pending
     content: 'fefyguyrgf',// content of the the steps.it may be a form or text
     color: 'green','it is used for status when we use different status'
     completeBadge: <CheckMark />, 'it is used for completed step'
     stepperStyle: {
       stepWrapStyle: {}, // style for the steps parent
       stepActiveStyle: {}, // style for the steps which is active
       stepInActiveStyle: {}, // style for the steps which is inactive
       iconCompletedStyle: {}, // style for the steps which is complete
       iconActiveStyle: {},// style for the icon which is active
       iconInActiveStyle: {},// style for the icon which is inactive
       anchorOrigin: {
         vertical: 'top',
         horizontal: 'right',
       }, // place of completed icon
       labelStyle: {}, //title or name of the steps style
       statusStyle: {}, //subtitle or status of the steps style
       textAreaStyle: {},
       subTitleMobStyle: {}, //title or name of the mobile steps style
       titleBoxMobStyle: {}, //header style of the mobile steps 
       progressStyle: {},// progress style for stepper
     }, // this style is collection of steps style
   },
   {
     label: 'settings',
     icon: <StepperIcon />,
     status: 'completed',
     content: 'fefygsjhxdbsjcbjhbuyrgf',
     color: 'green',
     completeBadge: <CheckMark />,
   },
   {
     label: 'settings',
     icon: <StepperIcon />,
     status: 'inprogress',
     content: 'fefyguyrgf',
     color: 'green',
     completeBadge: <CheckMark />,
   },
   {
     label: 'props',
     icon: <StepperIcon />,
     status: 'rejected',
     content: 'fefyguyrgf',
     color: 'orange',
     completeBadge: <CheckMark />,
   },
   {
     label: 'manage',
     icon: <StepperIcon />,
     status: 'completed',
     content: 'fefyguyrgf',
     color: 'red',
     completeBadge: <CheckMark />,
   },
 ];
 const [activeStep, setActiveStep] = useState<number>(0);

 const handleNext = (): void => {
   setActiveStep(activeStep + 1);
 };

 const handleBack = (): void => {
   setActiveStep(activeStep - 1);
 };

 const handleReset = (): void => {
   setActiveStep(0);
 };

 const buttons = [
   {
     label: 'Back',
     disabled: activeStep === 0,
     onClick: handleBack,
   },
   {
     label: 'Next',
     disabled: activeStep === steps.length - 1,
     onClick: handleNext,
   },
   {
     label: 'Reset',
     disabled: false,
     onClick: handleReset,
   },
 ];// we can use the various button here if we need

 return (
 <div className="App" style={{ width: '100vw', height: '100vh' }}>
     <Box sx={{ mt: 2 }}>
       <CustomStepper
         steps={steps}
         styles={{
           buttonsContainer: {},
           btnStyle: { width: '30px' },
           rootStyle: {},
           contentStyle: {},
         }}
         buttons={buttons}
         activeStep={activeStep}
       />
     </Box>
   </div>
 );
}

export default App;
```
