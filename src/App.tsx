import { Box } from '@mui/material';
import { useState } from 'react';
import CheckMark from './assets/checkmark';
import StepperIcon from './assets/stepperIcon';
import CustomStepper from './components/stepper/stepper';
import StepperMobile from './components/stepper/stepperMobile';

function App() {
  const steps = [
    {
      label: 'akila',
      icon: <StepperIcon sx={{ fontSize: 50 }} />,
      status: 'inprogress',
      content: 'fefyguyrgf',
      color: 'green',
      completeBadge: <CheckMark />,
      stepperStyle: {
        stepWrapStyle: {},
        stepActiveStyle: {},
        stepInActiveStyle: {},
        iconCompletedStyle: {},
        iconActiveStyle: {},
        iconInActiveStyle: {},
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        labelStyle: {},
        statusStyle: {},
        textAreaStyle: {},
        subTitleMobStyle: {},
        titleBoxMobStyle: {},
        progressStyle: {},
      },
    },
    {
      label: 'settings',
      icon: <StepperIcon />,
      status: 'completed',
      content: 'fefygsjhxdbsjcbjhbuyrgf',
      color: 'green',
      completeBadge: <CheckMark />,
      stepperStyle: {
        stepWrapStyle: {},
        stepActiveStyle: {},
        stepInActiveStyle: {},
        iconCompletedStyle: {},
        iconActiveStyle: {},
        iconInActiveStyle: {},
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        labelStyle: {},
        statusStyle: {},
        textAreaStyle: {},
        subTitleMobStyle: {},
        titleBoxMobStyle: {},
        progressStyle: {},
      },
    },
    {
      label: 'settings',
      icon: <StepperIcon />,
      status: 'inprogress',
      content: 'fefyguyrgf',
      color: 'green',
      completeBadge: <CheckMark />,
      stepperStyle: {
        stepWrapStyle: {},
        stepActiveStyle: {},
        stepInActiveStyle: {},
        iconCompletedStyle: {},
        iconActiveStyle: {},
        iconInActiveStyle: {},
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        labelStyle: {},
        statusStyle: {},
        textAreaStyle: {},
        subTitleMobStyle: {},
        titleBoxMobStyle: {},
        progressStyle: {},
      },
    },
    {
      label: 'props',
      icon: <StepperIcon />,
      status: 'rejected',
      content: 'fefyguyrgf',
      color: 'orange',
      completeBadge: <CheckMark />,
      stepperStyle: {
        stepWrapStyle: {},
        stepActiveStyle: {},
        stepInActiveStyle: {},
        iconCompletedStyle: {},
        iconActiveStyle: {},
        iconInActiveStyle: {},
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        labelStyle: {},
        statusStyle: {},
        textAreaStyle: {},
        subTitleMobStyle: {},
        titleBoxMobStyle: {},
        progressStyle: {},
      },
    },
    {
      label: 'manage',
      icon: <StepperIcon />,
      status: 'completed',
      content: 'fefyguyrgf',
      color: 'red',
      completeBadge: <CheckMark />,
      stepperStyle: {
        stepWrapStyle: {},
        stepActiveStyle: {},
        stepInActiveStyle: {},
        iconCompletedStyle: {},
        iconActiveStyle: {},
        iconInActiveStyle: {},
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        labelStyle: {},
        statusStyle: {},
        textAreaStyle: {},
        subTitleMobStyle: {},
        titleBoxMobStyle: {},
        progressStyle: {},
      },
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
  ];

  const [activeStepMobile, setActiveStepMobile] = useState(0);

  const handleMobileNext = () => {
    setActiveStepMobile((prevActiveStep) => prevActiveStep + 1);
  };

  const handleMobileBack = () => {
    setActiveStepMobile((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    console.log('form Submited');
  };

  const mobileButtons = [
    {
      label: 'Back',
      disabled: activeStepMobile === 0,
      onClick: handleMobileBack,
    },
    {
      label: 'Next',
      disabled: activeStepMobile === steps.length - 1,
      onClick: handleMobileNext,
    },
    {
      label: 'Submit',
      onClick: handleSubmit,
    },
  ];

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
            stepperParent:{},
          }}
          buttons={buttons}
          activeStep={activeStep}
        />
        <StepperMobile
          steps={steps}
          styles={{
            buttonsContainer: {},
            btnStyle: { width: '30px' },
            rootStyle: {},
            contentStyle: {},
            stepperParent:{},
          }}
          handleSubmit={handleSubmit}
          mobileButtons={mobileButtons}
          activeStepMobile={activeStepMobile}
        />
      </Box>
    </div>
  );
}

export default App;
