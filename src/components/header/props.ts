import { AppBarProps, SxProps, ToolbarProps } from '@mui/material';

type menuList = {
  map?(arg0: (list: any) => JSX.Element): import("react").ReactNode;
  map?(arg0: (list: any) => JSX.Element): import("react").ReactNode;
  sort?(arg0: (a: any, b: any) => number): menuList;
  sort?(arg0: (a: any, b: any) => number): menuList;
  length?: number;
  order: number;
  component: React.ReactNode;
  style?: SxProps;
  mobileScreenActive?: boolean;
};
export interface HeaderProps {
  headerComponentList: menuList[];
  subHeaderComponentList: menuList[];
  appBarProps?: AppBarProps;
  appBarStyle?: SxProps;
  toolBarStyle: SxProps;
  toolBarProps: ToolbarProps;
  mobileMenuIconStyle?: SxProps;
  subHeaderStyle?: SxProps;
}
