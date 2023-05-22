import React, { ReactElement } from 'react';
import { Badge, Box, IconButton, Typography } from '@mui/material';
import DocsIcon from '../../assets/docsIcon';
import { Styles } from './style';
import { Step, StepperProps } from './props';

export function Stepper(props: StepperProps): ReactElement {
  const {
    vertical = false,
    horizontal = true,
    StepperFunc,
    stepsCompleted,
    activeIndex,
    handleChange = () => {},
  } = props;

  function stepRender(val: Step, index: number): ReactElement {
    if (stepsCompleted?.some((stepIndex) => stepIndex === index)) {
      return (
        <Box sx={Styles.stepperSwitchSx}>
          <IconButton
            disableRipple
            sx={{
              ...Styles.stepperBgSX,
              // backgroundColor: 'primary.main',
              borderColor: '#D3D3D3',
            }}
          >
            <Badge
              sx={Styles.badgeSx}
              badgeContent={<DocsIcon rootStyle={Styles.subIconSx} />}
              color="primary"
            >
              {React.cloneElement(val.stepperIcon, {
                sx: { ...Styles.iconSx, color: 'common.white' },
              })}
            </Badge>
          </IconButton>
        </Box>
      );
    }
    if (activeIndex === index) {
      return (
        <Box
          sx={{
            ...Styles.stepperSwitchSx,
            // border: '2px dashed #D3D3D3',
          }}
        >
          <IconButton
            disableRipple
            sx={{
              ...Styles.stepperBgSX,
              backgroundColor: '#EFEEFB',
              borderColor: '#EFEEFB',
            }}
          >
            <Badge
              sx={Styles.badge2Sx}
              badgeContent={<DocsIcon rootStyle={Styles.subIconSx} />}
              color="primary"
            >
              {React.cloneElement(val.stepperIcon, {
                sx: { ...Styles.iconSx, color: 'common.white' },
              })}
            </Badge>
          </IconButton>
        </Box>
      );
    }
    return (
      <Box sx={Styles.stepperSwitchSx}>
        <IconButton
          disableRipple
          sx={{
            ...Styles.stepperBgSX,
            backgroundColor: 'common.white',
            borderColor: 'grey.400',
          }}
        >
          <Badge
            sx={Styles.badge2Sx}
            badgeContent={<DocsIcon rootStyle={Styles.subIconSx} />}
            color="primary"
          >
            {React.cloneElement(val.stepperIcon, {
              sx: {
                ...Styles.iconSx,
                color: '#0F0B117A',
              },
            })}
          </Badge>
        </IconButton>
      </Box>
    );
  }

  function stepsForm(val: Step, index: number): ReactElement {
    if (stepsCompleted?.some((stepIndex) => stepIndex === index)) {
      return (
        <Box sx={Styles.sideBoxSx}>
          <Typography variant="caption" sx={Styles.followSx}>
            {val.step}
          </Typography>
          <Typography
            variant="body1"
            sx={{ ...Styles.followSx, color: '#808080' }}
          >
            {val.stepDescription}
          </Typography>
        </Box>
      );
    }
    if (activeIndex === index) {
      return (
        <Box sx={Styles.sideBoxSx}>
          <Typography
            variant="caption"
            sx={{ ...Styles.followSx, color: '#D3D3D3' }}
          >
            {val.step}
          </Typography>
          <Typography
            variant="body1"
            sx={{ ...Styles.followSx, color: '#D3D3D3' }}
          >
            {val.stepDescription}
          </Typography>
        </Box>
      );
    }
    return (
      <Box sx={Styles.sideBoxSx}>
        <Typography variant="caption" sx={Styles.followSx}>
          {val.step}
        </Typography>
        <Typography
          variant="body1"
          sx={{ ...Styles.followSx, color: '#808080' }}
        >
          {val.stepDescription}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={Styles.rootSx}>
      <Box>
        <Box
          sx={{
            ...Styles.dividerSx,
            '&:before': {
              content: '""',
              position: 'absolute',
              borderLeft: vertical ? '2.5px solid #D3D3D3' : '0px',
              borderBottom: horizontal ? '2.5px solid #D3D3D3' : '0px',
              height: vertical ? 131 : 0,
              width: horizontal ? 131 : 0,
              ml: 3.45,
              top: vertical ? '6px' : '29px',
            },
          }}
        />
        <Box sx={{ ...Styles.tabSX, display: vertical ? 'grid' : 'flex' }}>
          {StepperFunc?.map((val, index) => (
            <Box
              onClick={() => handleChange(index)}
              sx={{ zIndex: 99 }}
              key={index}
            >
              {stepRender(val, index)}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ ...Styles.SideTabSX, display: vertical ? 'grid' : 'flex' }}>
        {StepperFunc?.map((val, index) => (
          <Box onClick={() => handleChange(index)} key={index}>
            {stepsForm(val, index)}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
Stepper.defaultProps = {
  vertical: false,
  horizontal: true,
  StepperFunc: [],
  stepsCompleted: [],
  activeIndex: 0,
  handleChange: () => {},
};