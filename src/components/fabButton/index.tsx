import React from 'react';
import { Fab } from '@mui/material';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FabButtonProps } from './props';

export default function FabButton(props: FabButtonProps) {
  const {
    direction = 'up',
    radius = 100,
    semicircle = false,
    actionsData = [],
    buttonStyle,
    actionButtonStyle,
    directionStyle,
    buttonConStyle,
    closeIcon,
    isOpen = false,
    openIcon,
    onToggle,
    onMainButtonClick,
  } = props;

  const [open, setOpen] = React.useState(isOpen);

  const onOpenHandle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const calculatePosition = (index: number) => {
    let x = 0;
    let y = 0;

    const angles = index * 45 - 90;
    const radians = (angles * Math.PI) / 180;
    if (radius) {
      x = Math.cos(radians) * radius;
      y = Math.sin(radians) * radius;
    }

    if (['left', 'up'].includes(direction)) {
      [x, y] = [-x, y];
    }

    return { x, y };
  };

  const handleButtonClick = (index: number) => {
    const position = calculatePosition(index);
    actionsData[index].onClick(position);
  };

  const getAlignStyle = (): React.CSSProperties => {
    switch (direction) {
      case 'right':
        return {
          position: 'fixed',
          bottom: '30px',
          left: '24px',
          zIndex: 1000,
          ...(semicircle && { left: '24px', top: 'auto', bottom: '30px' }),
          ...directionStyle,
        };
      case 'left':
        return {
          position: 'fixed',
          bottom: '30px',
          right: '250px',
          zIndex: 1000,
          ...(semicircle && { right: '80px', top: 'auto', bottom: '30px' }),
          ...directionStyle,
        };
      case 'up':
        return {
          position: 'fixed',
          bottom: '30px',
          left: '60px',
          zIndex: 1000,
          ...(semicircle && { right: '29px', top: 'auto', bottom: '30px' }),
          ...directionStyle,
        };
      case 'down':
        return {
          position: 'fixed',
          top: '280px',
          left: '60px',
          zIndex: 1000,
          ...(semicircle && { left: '29px', top: 'auto', bottom: '30px' }),
          ...directionStyle,
        };
      default:
        return {};
    }
  };

  return (
    <Box sx={{ ...getAlignStyle() }}>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        {actionsData.length === 0 ? (
          <Fab
            aria-label="MainButton"
            sx={{
              position: 'absolute',
              bottom: 16,
              ...buttonStyle,
              '& .MuiSpeedDial-fab:focus': {
                outline: 'none',
                boxShadow: 'none',
                ...buttonStyle,
              },
              '& .MuiSpeedDial-fab': {
                ...buttonStyle,
              },
              ...buttonConStyle,
            }}
            onClick={onMainButtonClick}
          >
            {isOpen ? closeIcon : openIcon}
          </Fab>
        ) : (
          <SpeedDial
            ariaLabel="SpeedDial"
            sx={{
              position: 'absolute',
              bottom: 16,
              ...buttonStyle,
              '& .MuiSpeedDial-fab:focus': {
                outline: 'none',
                boxShadow: 'none',
                ...buttonStyle,
              },
              '& .MuiSpeedDial-fab': {
                ...buttonStyle,
              },
              ...buttonConStyle,
            }}
            onClick={() => {
              if (onToggle) {
                onToggle();
              }
              onOpenHandle();
            }}
            icon={isOpen ? closeIcon : openIcon}
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
                      paddingTop: '0',
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
        )}
      </ClickAwayListener>
    </Box>
  );
}

FabButton.defaultProps = {
  direction: 'up',
  radius: 100,
  semicircle: false,
  actionsData: [],
  onToggle: () => {},
  onMainButtonClick: () => {},
};