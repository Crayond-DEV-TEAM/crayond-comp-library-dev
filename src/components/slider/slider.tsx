import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider, { SliderProps } from '@mui/material/Slider';
import { styles } from './style';
import Stack from '@mui/material/Stack';

interface ProgressProps extends SliderProps {
  marks: {
    value: number;
    label: string;
  }[];
  sliderHeight: number;
  step: number;
  value: number;
  disabled?: boolean;
  progressLabel: boolean;
  valueLabelDisplay: 'on' | 'off' | undefined;
  labelColor: string;
  labelSize: number;
  sliderColor: string;
  thumbColor: string;
  getAriaLabels?: string;
  size?: 'small' | 'medium';
  customMarks: boolean;
  minMaxValues: boolean;
  handleChange: () => void;
  sliderThumbStyle: object;
  sliderStyle: object;
  symbol: string;
  minMaxContainer: object;
  minMaxLabel: object;
  labelStyle: object;
  containerStyle: object;
}

const Sliders = (props: ProgressProps) => {
  const {
    step,
    size,
    getAriaLabels,
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
    // value,
    // handleChange = () => {},
  } = props;

  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

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
            onChange={handleChange}
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
  value: 20,
  step: 10,
  size: 'small',
  sliderHeight: 5,
  disabled: false,
  customMarks: false,
  progressLabel: false,
  valueLabelDisplay: 'off',
  labelColor: '#707070',
  labelSize: 2,
  sliderColor: '#665CD7',
  thumbColor: '#665CD7',
  getAriaLabels: '',
  minMaxValue: false,
  handleChange: () => {},
  sliderStyle: {},
  symbol: '',
  minMaxContainer: {},
  minMaxLabel: {},
  labelStyle: {},
  containerStyle: {},
  sliderThumbStyle: {},
  marks: [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 40,
      label: '40°C',
    },
    {
      value: 60,
      label: '60°C',
    },
    {
      value: 80,
      label: '80°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ],
};

export default Sliders;
