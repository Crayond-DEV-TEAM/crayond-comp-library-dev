import { SxProps } from '@mui/system';
import { ReactNode } from 'react';

export interface pageNotFound {
  pageNotFoundIcon:{
    icon:ReactNode
  },
  pageNotFoundText: string,
  goBackButton: {
    label: String,
    onClick: () => void,
    style: SxProps,
  },
  ButtonBlockStyle: SxProps,
  messageTextStyle: SxProps,
  rootStyle: SxProps,
  iconBlockStyle:SxProps,
}
