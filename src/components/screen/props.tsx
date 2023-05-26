import { SxProps } from '@mui/material'; 

export interface ScreenProps {
  containerStyle?: object;
  headerStyle?: SxProps;
  bodyStyle?: SxProps;
  footerStyle?: SxProps;
  headerComponent?: React.ReactNode;
  bodyComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
}
