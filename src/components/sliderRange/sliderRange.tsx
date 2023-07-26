import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider, { SliderProps } from '@mui/material/Slider';
import { styles } from './style';
import Stack from '@mui/material/Stack';
import { SxProps } from '@mui/system';
import { Input } from '@mui/material';

interface ProgressProps extends SliderProps {
  marks: {
    value: number;
    label: string;
  }[];
  sliderHeight?: number;
  step?: number;
  value: number[];
  disabled?: boolean;
  valueLabelDisplay?: 'on' | 'off';
  sliderColor?: string;
  thumbColor?: string;
  size?: 'small' | 'medium';
  customMarks?: boolean;
  minMaxValues?: boolean;
  handleChangeFun: (
    event: React.ChangeEvent<HTMLInputElement> | Event,
    newValue: number[] | [number, number],
  ) => void;
  sliderThumbStyle?: SxProps;
  sliderStyle?: SxProps;
  minMaxLabel?: SxProps;
  minMaxLabelStyle?: SxProps;
  containerStyle?: SxProps;
  minMaxLabelColor?: string;
  minMaxLabelSize?: number;
  minMaxValueColor?: string;
  minMaxValueSize?: number;
  minLabel?: string;
  maxLabel?: string;
  markLabelColor?: string;
  markLabelSize?: number;
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
    handleChangeFun,
    value,
  } = props;

  const [minMax, setMinMax] = useState({
    minValue: 0,
    maxValue: 0,
  });

  const [sliderVAl, setValue] = useState<number[]>(value);

  const handleChange = (
    event: Event,
    newValue: number[] | [number, number],
  ) => {
    if (handleChangeFun) {
      handleChangeFun(event, newValue);
    }
    setValue(newValue as number[]);
    setMinMax({ minValue: newValue[0], maxValue: newValue[1] });
  };
  const handleChangeInput = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMinMax({ ...minMax, [key]: e.target.value });
    if (key === 'minValue') {
      setValue([Number(e.target.value), minMax?.maxValue]);
      handleChangeFun(e, [Number(e.target.value), minMax?.maxValue]);
    }
    if (key === 'maxValue') {
      setValue([minMax?.minValue, Number(e.target.value)]);
      handleChangeFun(e, [minMax?.minValue, Number(e.target.value)]);
    }
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
            value={sliderVAl}
            onChange={(e: Event, val: number | number[]) =>
              handleChange(e, val as number[])
            }
            valueLabelDisplay={valueLabelDisplay}
            sx={
              {
                height: sliderHeight,
                color: sliderColor,
                ...styles.sliderStyle,
                ...sliderStyle,
                '& .MuiSlider-thumb': {
                  border: '2px solid #fff',
                  backgroundColor: thumbColor,
                  ...sliderThumbStyle,
                },
              } as SxProps
            }
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
            <Input
              disableUnderline={true}
              type="number"
              value={String(sliderVAl[0])}
              sx={
                {
                  ...styles.inputStyle,
                  color: minMaxValueColor,
                  fontSize: minMaxValueSize,
                } as SxProps
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeInput('minValue', e)
              }
            />
          </Box>
          <Box sx={{ ...styles.childBox }}>
            <Typography sx={{ ...styles.minMaxLabel, ...minMaxLabelStyle }}>
              {maxLabel}
            </Typography>
            <Input
              type="number"
              disableUnderline={true}
              value={String(sliderVAl[1])}
              sx={{
                ...styles.inputStyle,
                textAlign: 'center',
                color: minMaxValueColor,
                fontSize: minMaxValueSize,
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeInput('maxValue', e)
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
  handleChangeFun: () => {},
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
  markLabelColor: '#707070',
  markLabelSize: 12,
};

export default SliderRange;
