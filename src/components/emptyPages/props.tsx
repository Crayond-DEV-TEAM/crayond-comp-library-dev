import { SxProps } from '@mui/material';

export interface EmptyPageProps {
  containerStyle: SxProps;

  emptyPageIcon: React.ReactNode;
  emptyPageInfographic: React.ReactNode;
  emptyPageUrl: string;

  emptyPageUrlHeight: number;
  emptyPageUrlWidth: number;

  iconContainerStyle: SxProps;
  emptyPageIconBgColor: string;
  handleClickIcon:()=>void;

  title1Styles: SxProps;
  title2Styles: SxProps;
  title1MarginTop: number;
  title1MarginBottom: number;
  title2MarginTop: number;
  title2MarginBottom: number;
  title1Size: number;
  title1Weight: number;
  title1Color: string;
  title1: string;

  title2Size: number;
  title2Weight: number;
  title2Color: string;
  title2: string;

  buttonMarginTop: number;
  buttonStyles: {};
  buttons: {
    label: string;
    handleClick: () => void;
    color: string;
    backgroundColor: string;
  }[];
}

export interface ButtonProps {
  label: string;
  handleClick: () => void;
  color: string;
  backgroundColor: string;
}
