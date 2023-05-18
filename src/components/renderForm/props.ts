import { GridProps, SxProps } from '@mui/material';

export interface renderFormProps {
  isEditMode?: Boolean;
  gridStyle?: SxProps;
  gridContainerProps?: GridProps;
  formButtonContainerStyle?: SxProps;
  submitButton?: {
    visible?: boolean;
    title?: string | undefined;
    onClick?: Function;
    sx: object;
    [key:string]:any;
  };
  cancelButton?: {
    visible?: boolean;
    title?: string | undefined;
    onClick?: Function;
    sx?: SxProps;
    [key:string]:any;
  };
  customButton?: {
    component: React.ReactNode;
  };
  onSubmitFun?: Function;
  defaultValues?: object;
  yupSchemaValidation?: any;
  formList: {
    map(arg0: (data: any, i: number) => any): any;
    [index: number]: {
      type?:
        | 'heading'
        | 'input'
        | 'dateAndTime'
        | 'date'
        | 'dropDown'
        | 'mobileNumberInput'
        | 'custom'
        | 'chipSelect';
      containerStyle?: SxProps;
      gridStyle?: SxProps;
      breakPoint?: {
        xs?: boolean | 'auto' | number;
        sm?: boolean | 'auto' | number;
        md?: boolean | 'auto' | number;
        lg?: boolean | 'auto' | number;
        lx?: boolean | 'auto' | number;
      };
      component?: React.ReactNode;
      inputProps?: any;
    };
  };
}
