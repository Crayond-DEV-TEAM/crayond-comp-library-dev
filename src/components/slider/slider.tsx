import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { ProgressProps } from './props';
import { styles } from './style';

const Sliders = (props: ProgressProps) => {
  const {
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

  const [value, setValue] = useState<number>(0);

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
              setValue(value as number);
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
  handleChangeFun: () => {},
  sliderStyle: {},
  symbol: '',
  labelStyle: {},
  sliderThumbStyle: {},
  marks: [],
};

export default Sliders;
