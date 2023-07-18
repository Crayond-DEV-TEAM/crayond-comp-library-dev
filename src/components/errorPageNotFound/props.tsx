import { SxProps } from '@mui/system';
import { ReactNode } from 'react';

export interface pageNotFound {
  pageNotFoundIconComponent?: ReactNode;
  pageNotFoundIconUrl: string;
  pageNotFoundText: string;
  urlImgHeight?: number;
  urlImgWidth?: number;
  urlImgStyle?: object;
  goBackButton: {
    label: String;
    onClick: () => void;
    style: SxProps;
  };
  ButtonBlockStyle?: SxProps;
  messageTextStyle?: SxProps;
  rootStyle?: SxProps;
  iconBlockStyle?: SxProps;
}
