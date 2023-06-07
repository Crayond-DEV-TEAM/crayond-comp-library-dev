import React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styles } from './styles';

interface CircleProgressProps {
  value: number;
  labelStyle: object;
  symbols: string;
  thickness: number;
  size: number;
  thumbColor: object;
  thumbightColor: object;
  labelContainer: object;
  circleContainer: object;
}

const CircleProgressLabel = (
  props: CircleProgressProps & CircularProgressProps
) => {
  const {
    value,
    labelStyle,
    symbols,
    thickness,
    size,
    thumbColor,
    thumbightColor,
    circleContainer,
    labelContainer,
  } = props;
  return (
    <Box sx={{ ...styles.labelBox, ...circleContainer }}>
      <CircularProgress
        sx={{ ...styles.thumbStyle, ...thumbColor }}
        {...props}
        variant="determinate"
        color={'primary'}
        thickness={thickness}
        value={value}
        size={size}
      />

      <CircularProgress
        sx={{ ...styles.thumbightColor, ...thumbightColor }}
        {...props}
        variant="determinate"
        color={'primary'}
        thickness={thickness}
        value={100}
        size={size}
      />
      <Box sx={{ ...styles.labelContainer, ...labelContainer }}>
        <Typography
          variant="caption"
          component="div"
          sx={{ ...styles.labelStyle, ...labelStyle }}
        >{`${Math.round(value)}${symbols}`}</Typography>
      </Box>
    </Box>
  );
};
const CircleProgress = (props: CircleProgressProps) => {
  const {
    value,
    symbols,
    labelStyle,
    thickness,
    size,
    thumbColor,
    thumbightColor,
    circleContainer,
    labelContainer,
  } = props;
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <CircleProgressLabel
          value={Number(value) ?? 0}
          symbols={symbols}
          labelStyle={labelStyle}
          thickness={thickness}
          size={size}
          thumbColor={thumbColor}
          thumbightColor={thumbightColor}
          labelContainer={labelContainer}
          circleContainer={circleContainer}
        />
      </Box>
    </>
  );
};

CircleProgress.defaultProps = {
  value: 0,
  labelStyle: {},
  symbols: '%',
  thickness: 4,
  size: 60,
  thumbColor: {},
  thumbightColor: {},
  labelContainer: {},
  circleContainer: {},
};
export default CircleProgress;
