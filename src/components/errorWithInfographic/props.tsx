import type { SxProps, Theme } from '@mui/material'

export interface buttonInterface {
  label: string,
  onClick: () => void,
  style: SxProps<Theme>
}

export interface errorWithinfogarphic {
  open: boolean;
  handleClose: () => void;
  onBackdropClick: () => void;
  cardRootStyle: object;
  buttons: buttonInterface;
  infogarphicIcon: JSX.Element;
  infogarphicMessage: string;
  textBlockStyle: object;
  iconStyleBlock: object;
  messageTextStyle: object;
  buttonBlock: object;
}
