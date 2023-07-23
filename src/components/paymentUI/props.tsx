import { GridProps, SxProps } from '@mui/material';

export interface Item {
  inputType?: 'dropdown' | 'date' | 'input';
  label: string;
  labelStyle?: SxProps;
  inputStyle?: SxProps;
  selectOption?: { label: string; value: string }[];
  value?: string | number | Date;
  error?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
  breakpoints?: GridProps;
  fullWidth?: boolean;
  endAdornment?: React.ReactNode;
  type?: 'number' | 'text';
  dateType?: 'date' | 'dateAndTime';
  maxNumber?: Number | String;
  dateFormat?: String;
  cardImage?: boolean;
  inputDet: 'cardNumber' | 'cvv' | 'text';
}

export interface PaymentUIProps {
  title: string;
  description: string;
  section: {
    subTitle: string;
    items: Item[];
  }[];
  gridContainerProps?: GridProps;
  titleStyle?: SxProps;
  descStyle?: SxProps;
  subTitleStyle?: SxProps;
  rootStyle?: SxProps;
  buttons?: {
    buttonText: string;
    onClick: (data?: any) => void;
    styles?: object;
    breakpoints?: GridProps;
  }[];
  buttonContainerStyle?: SxProps;
}
