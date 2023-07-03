import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { ProgressProps } from './props';
import { styles } from './style';

const Sliders = (props: ProgressProps) => {
  const {
    value,
    step,
    size,
    marks,
    sliderHeight,
    disabled,
    sliderThumbStyle,
    valueLabelDisplay,
    customMarks,
    labelColor,
    labelSize,
    sliderColor,
    thumbColor,
    progressLabel,
    symbol,
    sliderStyle,
    labelStyle,
    handleChangeFun = () => {},
  } = props;


  function valuetext(getAriaLabel: number) {
    return `${getAriaLabel}`;
  }
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            size={size}
            step={step}
            disabled={disabled}
            disableSwap
            marks={customMarks ? marks : []}
            value={value}
            onChange={(e, value) => {              
              if(handleChangeFun){
                handleChangeFun(e,value)
              }
            }}
            valueLabelDisplay={valueLabelDisplay}
            sx={{
              height: sliderHeight,
              color: sliderColor,
              ...styles.sliderStyle,
              ...sliderStyle,
              '& .MuiSlider-thumb': {
                border: '2px solid #fff',
                backgroundColor: thumbColor,
                ...sliderThumbStyle,
              },
            }}
            getAriaLabel={valuetext}
          />
          {progressLabel && (
            <Box sx={{ minWidth: 30 }}>
              <Typography
                variant="body2"
                sx={{
                  ...styles.labelStyle,
                  ...labelStyle,
                  color: labelColor,
                  fontSize: labelSize,
                }}
              >{`${Math.round(value)}${symbol}`}</Typography>
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
};

Sliders.defaultProps = {
  value:0,
  step: 0,
  size: 'small',
  sliderHeight: 5,
  disabled: false,
  customMarks: false,
  progressLabel: false,
  valueLabelDisplay: 'off',
  labelColor: '',
  labelSize: 2,
  sliderColor: '',
  thumbColor: '',
  handleChangeFun: () => {},
  sliderStyle: {},
  symbol: '',
  labelStyle: {},
  sliderThumbStyle: {},
  marks: [],
};

export default Sliders;
