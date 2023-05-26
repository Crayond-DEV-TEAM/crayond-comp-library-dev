import React, { useState } from 'react';
import { Badge, Box, Button, Step, Stepper, Typography } from '@mui/material';
import { Styles } from './style';
import { CustomStepperProps } from './props';
import { BasicButtons } from '../button';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Progress } from '../progress';

const StepperMobile: React.FC<CustomStepperProps> = ({
  steps,
  styles,
  prevBtn,
  nextBtn,
  resetBtn,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<Record<number, boolean>>({});
  const theme = useTheme();
  const maxSteps = steps.length;
  const totalSteps = (): number => steps.length;

  const getColor = (status: string, clr: string): string => {
    if (status === 'start') return 'black';
    if (status === 'inprogress') return '#FF980E';
    if (status === 'completed') return 'green';
    if (status === 'rejected') return '#F44F5A';
    return clr;
  };

  const completedSteps = (): number => Object.keys(completed).length;

  const isLastStep = (): boolean => activeStep === totalSteps() - 1;

  const allStepsCompleted = (): boolean => completedSteps() === totalSteps();

  const handleNext = (): void => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = (): void =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  // const handleReset = (): void => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          // display: 'flex',
          // alignItems: 'center',
          // height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid black',
            display: 'flex',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Box>{steps[activeStep].icon}</Box>
          <Box>
            <Typography>{steps[activeStep].label}</Typography>
            <Typography>{steps[activeStep].label}</Typography>
           
          </Box>
        </Box>
        <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="top"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          null}
        backButton={
         null
        }
      />
        <Box sx={{ maxWidth: 400, width: '100%' }}>
          {steps[activeStep].status}
          
        </Box>
      </Paper>

      <Box
        sx={{
          ...Styles.buttonArea, ...styles?.buttonsContainer
        }}
      >
        <BasicButtons
          // color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          inLineStyles={styles?.btnStyle}
        >
          {prevBtn}
        </BasicButtons>
        <Box />
        <BasicButtons onClick={handleNext} inLineStyles={styles?.btnStyle}>
          {nextBtn}
        </BasicButtons>
        <Box />
      </Box>
  <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="top"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 ,
        }}
        nextButton={
          null}
        backButton={
         null
        }
      />


      {/* <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <BasicButtons onClick={handleNext} inLineStyles={styles?.btnStyle}>
            {nextBtn}
          </BasicButtons>}
        backButton={
          <BasicButtons
            disabled={activeStep === 0}
            onClick={handleBack}
            inLineStyles={styles?.btnStyle}
          >
            {prevBtn}
          </BasicButtons>
        }
      /> */}
    </Box>
  );
};

export default StepperMobile;
