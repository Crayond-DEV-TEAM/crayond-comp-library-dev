import { TextFieldProps, SxProps} from "@mui/material";

export interface InputFieldProps extends Omit<TextFieldProps, 'variant'> {
  label?: string | undefined;
  type?: 'text' | 'number' | 'password' | 'email';
  variant?: 'outlined' | 'filled' | 'standard';
  endIcon?: null;
  id?: string;
  value?: string;
  rowMax?: number;
  size?: any;
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
  onChange?: (e: any) => any;
  labelStyle?:SxProps;
  labelVariant?: 'standard' | 'floating';
  errorMessage?:string;
  inputStyle?:SxProps;
}
