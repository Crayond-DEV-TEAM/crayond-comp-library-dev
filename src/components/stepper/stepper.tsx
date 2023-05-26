import React, { useState } from 'react';
import { Badge, Box, Button, Step, Stepper, Typography } from '@mui/material';
import { Styles } from './style';
import { CustomStepperProps } from './props';
import { BasicButtons } from '../button';


const CustomStepper: React.FC<CustomStepperProps> = ({ steps, styles, prevBtn, nextBtn, resetBtn }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<Record<number, boolean>>({});

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

  const handleReset = (): void => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{...styles?.rootStyle}}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index: number) => (
          <Step
            key={label.label}
            completed={completed[index]}
            sx={{ ...Styles.dividerStyle, ...label.styles?.dividerStyle }}
          >
            <Box
              sx={
                activeStep === index ? { ...Styles.styleActive, ...label.styles?.boxActiveStyle } : { ...Styles.styleInActive, ...label.styles?.boxInActiveStyle }
              }
            >
              <Box
                sx={
                  activeStep === index
                    ? label.status === 'completed'
                      ? { ...Styles.iconCompleted, ...label.styles?.iconCompletedStyle }
                      : { ...Styles.iconActive, ...label.styles?.iconActiveStyle }
                    : label.status === 'completed'
                      ? { ...Styles.iconCompleted, ...label.styles?.iconCompletedStyle }
                      : Styles.iconInActive
                }
              >
                {label.status === 'completed' ? (
                  <Badge
                    badgeContent={label.completeBadge}
                    anchorOrigin={{ ...Styles.anchorOrigin, ...label.styles?.anchorOrigin }}
                  >
                    {label.icon}
                  </Badge>
                ) : (
                  label.icon
                )}
              </Box>

              <Box sx={{ ...label.styles?.textAreaStyle }}>
                <Typography sx={{ ...Styles.labelStyle, ...label.styles?.labelStyle }}>
                  {label.label}
                </Typography>
                <Typography
                  color={getColor(label.status, label.color)}
                  sx={{ ...Styles.statusStyle, ...label.styles?.statusStyle }}
                >
                  {label.status}
                </Typography>
              </Box>
            </Box>
          </Step>
        ))}
      </Stepper>
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
        <BasicButtons onClick={handleReset} inLineStyles={styles?.btnStyle}>{resetBtn}</BasicButtons>
      </Box>
    </Box>
  );
};

export default CustomStepper;
