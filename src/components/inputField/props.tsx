import { TextFieldProps } from "@mui/material";

export interface InputFieldProps extends Omit<TextFieldProps, 'variant'> {
  label?: string;
  type: 'text' | 'number' | 'password' | 'email';
  variant?: 'outlined' | 'filled' | 'standard';
  endIcon?: null;
  id?: string;
  value?: string;
  rowMax?: number;
  size: any;
  rowMin?: number;
  isError?: string;
  disabled?: boolean;
  fullwidth?: boolean;
  isMulti?: boolean;
  isReadOnly?: boolean;
  helperText?: string;
  placeholder?: string;
  className?: string;
  endAdornment?: object;
  defaultValue?: object;
  inLineStyles?: object;
  startAdornments?: React.ReactNode;
  endAdornments?: React.ReactNode;
  textFieldStyle?: {};
  onChange: (e: any) => any;
  floatingLable?:string;
  labelStyle?:object;
}
