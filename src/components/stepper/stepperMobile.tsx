import { LinearProgress, SxProps, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { BasicButtons } from '../button';
import { ButtonProps, CustomStepperProps } from './props';
import { Styles } from './style';

export const StepperMobile: React.FC<CustomStepperProps> = ({
  steps,
  mobileButtons = [],
  styles = {},
  activeStepMobile = 0,
}) => {
  const getColor = (status: string) => {
    if (status === 'start')
      return {
        backgroundColor: 'black',
      };
    if (status === 'inprogress')
      return {
        backgroundColor: '#FF980E',
      };
    if (status === 'completed')
      return {
        backgroundColor: '#5AC782',
      };
    if (status === 'rejected')
      return {
        backgroundColor: '#F44F5A',
      };
  };

  const renderIcon = (icon: string | React.ReactNode | SVGRectElement) => {
    if (icon && typeof icon === 'string') {
      return <img src={icon} alt="icon" />;
    } else if (icon && React.isValidElement(icon)) {
      return icon;
    } else {
      return null;
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: '#E9E9E980',
        p: 2,
        ...styles.rootStyle,
      }}
    >
      <Paper
        elevation={0}
        sx={{ borderRadius: '16px', p: 0, ...styles.stepperParent }}
      >
        <Box sx={{ ...Styles?.titleBoxMobStyle }}>
          <Box
            sx={{
              ...Styles?.iconBackgroundMobile,
              ...getColor(steps[activeStepMobile]?.status),
            }}
          >
            {renderIcon(steps[activeStepMobile]?.icon)}
          </Box>

          <Box sx={{ ...steps[activeStepMobile]?.stepperStyle?.textAreaStyle }}>
            <Typography
              sx={{
                ...Styles?.labelStyle,
                ...steps[activeStepMobile]?.stepperStyle?.labelStyle,
              }}
            >
              {steps[activeStepMobile]?.label}
            </Typography>
            <Typography
              sx={{
                ...Styles?.subTitleMobStyle,
                ...steps[activeStepMobile]?.stepperStyle?.subTitleMobStyle,
              }}
            >
              STEPS {activeStepMobile + 1} / {steps.length}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ padding: 0 }}>
          <LinearProgress
            variant="determinate"
            value={((activeStepMobile + 1) / steps.length) * 100}
          />
        </Box>
        <Box sx={{ height: 255, p: 2 }}>{steps[activeStepMobile]?.content}</Box>
        <MobileStepper
          variant="dots"
          sx={{
            ...Styles?.progressStyle,
            ...steps[activeStepMobile]?.stepperStyle?.progressStyle,
          }}
          steps={steps.length}
          position="static"
          activeStep={activeStepMobile}
          nextButton={null}
          backButton={null}
        />
      </Paper>
      <Box
        sx={
          {
            ...Styles?.buttonAreaMob,
            ...styles?.buttonsContainerMob,
          } as SxProps
        }
      >
        {mobileButtons.map((button: ButtonProps, index: number) =>
          activeStepMobile !== steps.length - 1 ? (
            <BasicButtons
              key={index}
              disabled={button.disabled}
              onClick={button.onClick}
              inLineStyles={{...styles.btnStyle as SxProps}}
            >
              {button.label}
            </BasicButtons>
          ) : (
            <BasicButtons
              key={index}
              disabled={button.disabled}
              onClick={button.onClick}
              inLineStyles={{...styles.btnStyle as SxProps}}
            >
              {button.label}
            </BasicButtons>
          )
        )}
      </Box>
    </Box>
  );
};

StepperMobile.defaultProps = {
  steps: [],
  mobileButtons: [],
  activeStepMobile: 0,
  styles: {},
};
