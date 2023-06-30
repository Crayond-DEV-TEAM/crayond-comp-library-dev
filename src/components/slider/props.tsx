import { SliderProps } from "@mui/material";

export interface ProgressProps extends SliderProps {
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
    size?: 'small' | 'medium';
    customMarks: boolean;
    handleChangeFun: (newVal: Event,value:number|number[]) => void;
    sliderThumbStyle: object;
    sliderStyle: object;
    symbol: string;
    labelStyle: object;
    containerStyle: object;
  }
  