import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider, { SliderProps } from '@mui/material/Slider';
import { styles } from './styles';

interface ProgressProps extends SliderProps {
  marks: {
    value: number;
    label: string;
  }[];
  step: number;
  value: number;
  progressLabel: boolean;
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

interface formProps {
  minValue: number;
  maxValue: number;
}
const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 30,
    label: '30°C',
  },
  {
    value: 60,
    label: '60°C',
  },
  {
    value: 99,
    label: '99',
  },
];
const Sliders = (props: ProgressProps) => {
  const {
    step,
    sliderThumbStyle,
    customMarks,
    handleChange = () => {},
    minMaxValues,
    progressLabel,
    value,
    sliderStyle,
    symbol,
    minMaxContainer,
    minMaxLabel,
    labelStyle,
    containerStyle,
  } = props;
  const [minMax, setMinMax] = React.useState<formProps>({
    minValue: 0,
    maxValue: 0,
  });

  const handleChangeInput = (key: string, val: string) => {
    setMinMax({ ...minMax, [key]: val });
  };

  return (
    <>
      <Box>
        <Box sx={{ ...styles.containerStyle, ...containerStyle }}>
          <Box sx={{ width: '100%', mr: 2 }}>
            <Slider
              aria-label="Volume"
              step={step}
              disableSwap
              marks={customMarks ? marks : []}
              value={value}
              onChange={handleChange}
              sx={{
                ...styles.sliderStyle,
                ...sliderStyle,
                '& .MuiSlider-thumb': {
                  ...sliderThumbStyle,
                },
              }}
              getAriaLabel={() => 'Minimum distance'}
              valueLabelDisplay="on"
            />
          </Box>
          {progressLabel && (
            <Box sx={{ minWidth: 35 }}>
              <Typography
                variant="body2"
                sx={{ ...styles.labelStyle, ...labelStyle }}
              >{`${Math.round(value)}${symbol}`}</Typography>
            </Box>
          )}
        </Box>
        {minMaxValues && (
          <Box sx={{ ...styles.minMaxContainer, ...minMaxContainer }}>
            <Box sx={{ ...styles.childBox }}>
              <Typography
                sx={{ ...styles.minMaxLabel, ...minMaxLabel }}
              >{`Min`}</Typography>
              <input
                type="number"
                value={minMax?.minValue}
                style={{ ...styles.inputStyle }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChangeInput('minValue', e.target.value)
                }
              />
            </Box>
            <Box sx={{ ...styles.childBox }}>
              <Typography sx={{ ...styles.minMaxLabel }}>{`Max`}</Typography>
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
      </Box>
    </>
  );
};

Sliders.defaultProps = {
  value: 20,
  step: 10,
  marks: [],
  customMarks: false,
  progressLabel: false,
  minMaxValue: false,
  handleChange: () => {},
  sliderStyle: {},
  symbol: '',
  minMaxContainer: {},
  minMaxLabel: {},
  labelStyle: {},
  containerStyle: {},
  sliderThumbStyle: {},
};

export default Sliders;
