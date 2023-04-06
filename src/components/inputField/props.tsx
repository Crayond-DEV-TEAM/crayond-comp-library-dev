export interface InputFieldProps {
  type?: 'text' | 'number' | 'password';
  variant?: 'outlined' | 'filled' | 'standard';
  endIcon: null;
  id?: string;
  value?: string;
  rowMax: number;
  size?: any;
  rowMin: number;
  isError: string;
  disabled: boolean;
  fullwidth: boolean;
  isMulti: boolean;
  fullWidth: boolean;
  isReadOnly: boolean;
  helperText: string;
  placeholder: string;
  errorMessage: string;
  className?: string;
  endAdornment: object;
  defaultValue: object;
  inLineStyles?: object;
  startAdornments?: React.ReactNode;
  endAdornments?: React.ReactNode;
  textFieldStyle: {};
  onChange?: (e: any) => any;
}
