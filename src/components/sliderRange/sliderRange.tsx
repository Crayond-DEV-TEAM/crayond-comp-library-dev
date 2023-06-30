import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider, { SliderProps } from '@mui/material/Slider';
import { styles } from './style';
import Stack from '@mui/material/Stack';
import { SxProps } from '@mui/system';

interface ProgressProps extends SliderProps {
  marks: {
    value: number;
    label: string;
  }[];
  sliderHeight?: number;
  step: number;
  value: number;
  disabled?: boolean;
  valueLabelDisplay?: 'on' | 'off';
  sliderColor?: string;
  thumbColor?: string;
  size?: 'small' | 'medium';
  customMarks: boolean;
  minMaxValues: boolean;
  handleChange: () => void;
  sliderThumbStyle?: SxProps;
  sliderStyle?: SxProps;
  minMaxLabel: SxProps;
  minMaxLabelStyle:SxProps
  containerStyle: SxProps;
  minMaxLabelColor: string;
  minMaxLabelSize: number;
  minMaxValueColor: string;
  minMaxValueSize: number;
  minLabel: string;
  maxLabel: string;
  markLabelColor:string,
  markLabelSize:number,
}

interface formProps {
  minValue: number;
  maxValue: number;
}

const SliderRange = (props: ProgressProps) => {
  const {
    step,
    size,
    marks,
    sliderHeight,
    disabled,
    sliderThumbStyle,
    valueLabelDisplay,
    customMarks,
    sliderColor,
    thumbColor,
    sliderStyle,
    containerStyle,
    minMaxValues,
    minMaxLabelStyle,
    minMaxLabelColor,
    minMaxLabelSize,
    minLabel,
    maxLabel,
    minMaxValueColor,
    minMaxValueSize,
    markLabelColor,
    markLabelSize,
    // handleChange = () => {},
    // value,
  } = props;
  const [minMax, setMinMax] = useState<formProps>({
    minValue: 0,
    maxValue: 0,
  });

  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setMinMax({ minValue: value[0], maxValue: value[1] });
  };
  const handleChangeInput = (key: string, val: string) => {
    setMinMax({ ...minMax, [key]: val });
    setValue([minMax.minValue, minMax.maxValue]);
  };

  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          ...containerStyle,
          mb: 1,
          '& .MuiSlider-markLabel': {
            mt: '8px',
            color: markLabelColor,
            fontSize: markLabelSize,
          },
        }}
        alignItems="center"
        mt={10}
      >
        <Box sx={{ width: '100%', mr: 2 }}>
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
            }as SxProps}
          />
        </Box>
      </Stack>
      {minMaxValues && (
        <Box sx={{ ...styles.minMaxContainer }}>
          <Box sx={{ ...styles.childBox }}>
            <Typography
              sx={{
                ...styles.minMaxLabel,
                color: minMaxLabelColor,
                fontSize: minMaxLabelSize,
              }}
            >
              {minLabel}
            </Typography>
            <input
              type="number"
              value={minMax?.minValue}
              style={{
                ...styles.inputStyle,
                color: minMaxValueColor,
                fontSize: minMaxValueSize,
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeInput('minValue', e.target.value)
              }
            />
          </Box>
          <Box sx={{ ...styles.childBox }}>
            <Typography sx={{ ...styles.minMaxLabel ,...minMaxLabelStyle }}>{maxLabel}</Typography>
            <input
              type="number"
              value={minMax?.maxValue}
              style={{ ...styles.inputStyle }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeInput('maxValue', e.target.value)
              }
            />
          </Box>
        </Box>
      )}
    </>
  );
};

SliderRange.defaultProps = {
  value: [],
  step: 10,
  marks: [],
  disabled: false,
  sliderColor: '#665CD7',
  thumbColor: '#665CD7',
  sliderHeight: 8,
  customMarks: false,
  minMaxValue: false,
  valueLabelDisplay: 'off',
  handleChange: () => {},
  sliderStyle: {},
  minMaxLabel: {},
  containerStyle: { marginTop: '40px' },
  sliderThumbStyle: {},
  minMaxLabelColor: '#929292',
  minMaxLabelSize: 12,
  minMaxValueColor: '#262626',
  minMaxValueSize: 14,
  minLabel: 'Min',
  maxLabel: 'Max',
  markLabelColor:"#707070",
  markLabelSize:12,
};

export default SliderRange;
