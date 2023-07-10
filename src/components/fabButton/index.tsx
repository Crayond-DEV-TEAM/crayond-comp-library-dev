import Box, { BoxProps } from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import React from 'react';
import { FabButtonProps } from './props';

export default function FabButton(props: FabButtonProps) {
  const {
    direction,
    radius,
    semicircle,
    actionsData,
    buttonStyle,
    actionButtonStyle,
    downDirection,
    upDirection,
    leftDirection,
    rightDirection,
    FabIcon,
  } = props;
  const [open, setOpen] = React.useState(false);

  const onOpenHandle = () => {
    setOpen(!open);
  };

  const calculatePosition = (index: number) => {
    let x = 0;
    let y = 0;

    let angles = index * 45 - 90;
    const radians = (angles * Math.PI) / 180;
    if (radius) {
      x = Math.cos(radians) * radius;
      y = Math.sin(radians) * radius;
    }

    if (direction === 'left') {
      [x, y] = [-x, y];
    } else if (direction === 'right') {
      [x, y] = [x, y];
    } else if (direction === 'up') {
      [x, y] = [-x, y];
    } else if (direction === 'down') {
      [x, y] = [x, y];
    }

    return { x, y };
  };

  const handleButtonClick = (index: number) => {
    const position = calculatePosition(index);
    actionsData[index].onClick(position);
  };

  const getAlignStyle = (): BoxProps['sx'] => {
    switch (direction) {
      case 'right':
        return {
          position: 'fixed',
          bottom: '30px',
          left: '24px',
          zIndex: 1000,
          ...(semicircle && { left: '24px', top: 'auto', bottom: '30px' }),
          ...rightDirection,
        };
      case 'left':
        return {
          position: 'fixed',
          bottom: '30px',
          right: '250px',
          zIndex: 1000,
          ...(semicircle && { right: '80px', top: 'auto', bottom: '30px' }),
          ...leftDirection,
        };
      case 'up':
        return {
          position: 'fixed',
          bottom: '30px',
          left: '60px',
          zIndex: 1000,
          ...(semicircle && { right: '29px', top: 'auto', bottom: '30px' }),
          ...upDirection,
        };
      case 'down':
        return {
          position: 'fixed',
          top: '280px',
          left: '60px',
          zIndex: 1000,
          ...(semicircle && { left: '29px', top: 'auto', bottom: '30px' }),
          ...downDirection,
        };
      default:
        return {};
    }
  };
  return (
    <Box sx={{ ...getAlignStyle() } as SxProps<Theme>}>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{
            position: 'absolute',
            bottom: 16,
            '& .MuiSpeedDial-fab:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
            ...buttonStyle,
          }}
          onClick={onOpenHandle}
          icon={FabIcon}
          open={open}
          direction={direction}
        >
          {actionsData.map((action, index) => {
            const position = calculatePosition(index);

            return (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.tooltipTitle}
                tooltipOpen={action.tooltipOpen}
                onClick={() => handleButtonClick(index)}
                sx={{
                  '& .MuiSpeedDial-actions': {
                      flexDirection: 'column-reverse',
                      marginBottom: '12px',
                      paddingBottom: '12px',
                      paddingTop:'0'
                    },
                  ...(semicircle && {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-30%, -70%) translate(${position.x}px, ${position.y}px)`,
                    borderRadius: '50%',
                    ml: -1,
                    '& .MuiSpeedDial-actions': {
                      flexDirection: 'column-reverse',
                      marginBottom: '12px',
                      paddingBottom: '12px',
                    },
                  }),
                  ...actionButtonStyle,
                }}
              />
            );
          })}
        </SpeedDial>
      </ClickAwayListener>
    </Box>
  );
}

FabButton.defaultProps = {
  direction: 'up',
  radius: 100,
  semicircle: false,
  actionsData: [],
  FabIcon: <></>,
};
