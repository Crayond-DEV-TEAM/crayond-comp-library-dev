export interface MobileInputProps {
  placeholder?: string | undefined;
  errorValidation?: any; 
  required?: boolean;
  label?: React.ReactNode;
  onChange: Function;
  component?: any;
  fullWidth?: boolean;
  autoFocus?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  disabledNumber?: number;
  enterKeyPress?: object;
  handleChangeSelect?: object;
  value?: any,
  error?: boolean;
  helperText?: string;
  id?: string;
  selectValue?: any;
  limits?: any,
  isError?: string;
  flag?: any;
  className?: string | undefined;
  maxLength?: number;
  mobileInputStyle?: object;
  inputStyle?: object | any;
  suggested?: boolean;
  helperTextStyle?:string;
  dropDownStyle?:object;
  labelStyle?:object;
  errorMessage?:string | undefined;
  [key:string]:any;
}
