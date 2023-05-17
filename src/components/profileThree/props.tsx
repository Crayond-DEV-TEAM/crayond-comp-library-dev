import { GridProps, SxProps } from '@mui/material';
import { renderFormProps } from '../renderForm/props';

export interface ProfileThreeProps {
  isEditMode: Boolean;
  onSubmitBtn: Function;
  gridContainerProps?:GridProps;
  uploadOptions?: {
    imgScr: string;
    buttonEnabled:boolean;
    deleteProfile: Function;
    uploadProfile: Function;
    variant:'circular' | 'rounded' | 'square';
  };
  afterProfileComponent?:React.ReactNode;
  titleOptions?: {
    title: string;
    sxProps:SxProps;
    icon?:React.ReactNode;
  };
  userNameStyle?: SxProps;
  cardSxProps?: SxProps;
  overallSxProps?: SxProps;
  renderForm?: renderFormProps;
}
