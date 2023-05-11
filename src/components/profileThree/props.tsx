import { SxProps } from '@mui/material';
import { renderFormProps } from '../renderForm/props';

export interface ProfileThreeProps {
  isEditMode: Boolean;
  onSubmitBtn: Function;
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
    icon?:React.ReactNode;
  };
  userNameStyle?: SxProps;
  bgColor?: string;
  paddingAll?: string;
  renderForm?: renderFormProps;
}
