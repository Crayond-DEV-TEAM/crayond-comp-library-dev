import { SxProps } from '@mui/system';
import React, { ReactNode } from 'react';
export interface pageNotFoundProps {
  pageNotFoundIconComponent?: ReactNode;
  pageNotFoundIconUrl: string;
  pageNotFoundText: string;
  urlImgHeight?: number;
  urlImgWidth?: number;
  urlImgStyle?:React.CSSProperties;
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
