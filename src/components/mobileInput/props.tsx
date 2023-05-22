export interface MobileInputProps {
  placeholder?: string | undefined;
  errorValidation?: any;
  focus?(): void;
  isRequired?: JSX.Element;
  label?: React.ReactNode;
  handleChange(newState: { mobile: any; mobile_code: {}; }): unknown;
  onChange?: (e: any) => any;
  component?: any;
  fullWidth?: boolean;
  autoFocus?: boolean;
  isReadonly?: boolean;
  disabled?: boolean;
  disabledNumber?: number;
  isReadonlyCC?: string;
  enterKeyPress?: object;
  handleChangeSelect?: object;
  value?: any,
  error?: boolean;
  onError?: string | false;
  onErrorOccured?: any;
  helperText?: string;
  id?: string;
  selectValue?: any;
  limits?: any,
  isError?: string;
  flag?: any;
  className?: object;
  maxLength?: number;
  mobileInputStyle?: object;
  rootWapperstyle: object | any;
  code?: string;
  phone?: string;
  suggested?: boolean;
  helperTextStyle?:string;
  dropDownStyle?:object;
  labelStyle?:object;
}
