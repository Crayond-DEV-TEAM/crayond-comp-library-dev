import {
  Badge,
  BadgeOrigin,
  Box,
  Step,
  Stepper,
  Typography,
} from '@mui/material';
import React from 'react';

import { BasicButtons } from '../button';
import { ButtonProps, CustomStepperProps, StepData } from './props';
import { Styles } from './style';

export const CustomStepper: React.FC<CustomStepperProps> = ({
  steps = [],
  styles = {},
  buttons = [],
  activeStep = 0,
}) => {
  const getColor = (status: string, clr: string): string => {
    const statusColors: { [key: string]: string } = {
      start: 'black',
      inprogress: '#FF980E',
      completed: 'green',
      rejected: '#F44F5A',
    };
    return statusColors[status as keyof typeof statusColors] || clr;
  };

  const getStepStyles = (index: number, step: StepData) => {
    const activeStyles = {
      ...Styles.styleActive,
      ...(step.stepperStyle?.stepActiveStyle || {}),
    };
    const inactiveStyles = {
      ...Styles.styleInActive,
      ...(step.stepperStyle?.stepInActiveStyle || {}),
    };
    return index === activeStep ? activeStyles : inactiveStyles;
  };

  const getIconStyles = (index: number, step: StepData) => {
    if (step.status === 'completed') {
      return {
        ...Styles.iconCompleted,
        ...(step.stepperStyle?.iconCompletedStyle || {}),
      };
    } else if (index === activeStep) {
      return {
        ...Styles.iconActive,
        ...(step.stepperStyle?.iconActiveStyle || {}),
      };
    } else {
      return {
        ...Styles.iconInActive,
        ...(step.stepperStyle?.iconInActiveStyle || {}),
      };
    }
  };

  const renderIcon = (icon: StepData['icon']) => {
    if (typeof icon === 'string') {
      return <img src={icon} alt="" />;
    } else if (React.isValidElement(icon)) {
      return icon;
    } else {
      return null;
    }
  };

  const content =
    (steps.length > 0 &&
      activeStep !== undefined &&
      steps[activeStep]?.content) ||
    null;

  return (
    <Box sx={{ ...styles.rootStyle, ...Styles.rootStyle }}>
      <Box
        sx={{
          backgroundColor: '#fff',
          p: 3,
          borderRadius: '16px',
          ...styles.stepperParent,
        }}
      >
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((step: StepData, index: number) => (
            <Step
              key={step.label}
              sx={{
                ...Styles.stepWrapStyle,
                ...(step.stepperStyle?.stepWrapStyle || {}),
              }}
              completed={step.status === 'completed'}
            >
              <Box sx={getStepStyles(index, step)}>
                <Box sx={getIconStyles(index, step)}>
                  {step.status === 'completed' ? (
                    <Badge
                      badgeContent={renderIcon(step.completeBadge)}
                      anchorOrigin={
                        step.stepperStyle?.anchorOrigin as BadgeOrigin
                      }
                      sx={{
                        '& .MuiBadge-badge': {
                          paddingBottom: '10px',
                          paddingLeft:'10px'
                        },
                        ...(step.stepperStyle?.badgeStyle || {}),
                      }}
                    >
                      {renderIcon(step.icon)}
                    </Badge>
                  ) : (
                    renderIcon(step.icon)
                  )}
                </Box>

                <Box sx={{ ...(step.stepperStyle?.textAreaStyle || {}) }}>
                  <Typography
                    sx={{
                      ...Styles.labelStyle,
                      ...(step.stepperStyle?.labelStyle || {}),
                    }}
                  >
                    {step.label}
                  </Typography>
                  <Typography
                    color={getColor(step.status, step.color || '')}
                    sx={{
                      ...Styles.statusStyle,
                      ...(step.stepperStyle?.statusStyle || {}),
                    }}
                  >
                    {step.status}
                  </Typography>
                </Box>
              </Box>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ ...Styles.contentStyle, ...styles.contentStyle }}>
          {content}
        </Box>
        <Box sx={{ ...Styles.buttonArea, ...styles.buttonsContainer }}>
          {buttons.map((button: ButtonProps, index: number) => (
            <BasicButtons
              key={index}
              disabled={button.disabled}
              onClick={button.onClick}
              inLineStyles={styles.btnStyle}
            >
              {button.label}
            </BasicButtons>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

CustomStepper.defaultProps = {
  steps: [],
  styles: {},
  buttons: [],
  activeStep: 0,
};
