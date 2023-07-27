import { SliderProps, SxProps } from "@mui/material";

export interface ProgressProps extends SliderProps {
    marks?: {
      value: number;
      label: string;
    }[];
    sliderHeight?: number;
    step?: number;
    value: number;
    disabled?: boolean;
    progressLabel?: boolean;
    valueLabelDisplay: 'on' | 'off' | undefined;
    labelColor?: string;
    labelSize?: number;
    sliderColor?: string;
    thumbColor?: string;
    size?: 'small' | 'medium';
    customMarks?: boolean;
    handleChangeFun: (newVal: Event,value:number|number[]) => void;
    sliderThumbStyle?: SxProps;
    sliderStyle?: SxProps;
    symbol?: string;
    labelStyle?: SxProps;
    containerStyle?: SxProps;
  }
  