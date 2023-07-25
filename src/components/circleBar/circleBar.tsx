import React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styles } from './style';
import { CircleProgressProps } from './props';



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
    labelColor,
    labelSize,
    thumbSecondaryColor,
    labelBackgroundStyle,
  } = props;
  return (
    <Box sx={{ ...styles.labelBox }}>
      <CircularProgress
        sx={{ ...styles.thumbStyle, color: thumbColor }}
        {...props}
        variant="determinate"
        color={'primary'}
        thickness={thickness}
        value={value}
        size={size}
      />

      <CircularProgress
        sx={{ ...styles.thumbightColor, color: thumbSecondaryColor }}
        {...props}
        variant="determinate"
        color={'primary'}
        thickness={thickness}
        value={100}
        size={size}
      />
      <Box sx={{ ...styles.labelContainer, ...labelBackgroundStyle }}>
        <Typography
          variant="caption"
          component="div"
          sx={{
            ...styles.labelStyle,
            ...labelStyle,
            color: labelColor,
            fontSize: labelSize,
          }}
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
    labelSize,
    labelColor,
    thumbSecondaryColor,
    labelBackgroundStyle,
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
          thumbSecondaryColor={thumbSecondaryColor}
          labelBackgroundStyle={labelBackgroundStyle}
          labelSize={labelSize}
          labelColor={labelColor}
        />
      </Box>
    </>
  );
};

CircleProgress.defaultProps = {
  value: 20,
  labelStyle: {},
  symbols: '%',
  thickness: 4,
  size: 60,
  labelColor: 'green',
  labelSize: 10,
  thumbColor: 'blue',
  thumbSecondaryColor: 'lightblue',
  labelBackgroundStyle: {},
};
export default CircleProgress;