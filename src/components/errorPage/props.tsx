import type { SxProps, Theme } from '@mui/material'

export interface buttonInterface {
  map(arg0: (button: buttonInterface) => JSX.Element): import("react").ReactNode;
  label: string,
  onClick: () => void,
  style: SxProps
}

export interface ErrorWithPageProps {
  open: boolean;
  handleClose: () => void;
  onBackdropClick: () => void;
  cardRootStyle: SxProps;
  buttons: buttonInterface;
  infogarphicIcon: JSX.Element;
  infogarphicMessage: string;
  textBlockStyle: SxProps;
  iconStyleBlock: SxProps;
  messageTextStyle: SxProps;
  buttonBlock: SxProps;
}
