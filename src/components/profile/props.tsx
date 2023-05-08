import { SxProps } from '@mui/material';
import { renderFormProps } from '../renderForm/props';

export interface ProfileProps {
  isEditMode: Boolean;
  onSubmitBtn: Function;
  username:string;
  uploadOptions: {
    imgScr: string;
    deleteProfile: Function;
    uploadProfile: Function;
  };
  titleOptions?: {
    title: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
  };
  userNameStyle?: SxProps;
  bgColor?: string;
  paddingAll?: string;
  renderForm?: renderFormProps;
}
