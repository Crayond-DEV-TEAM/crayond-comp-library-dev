import { SxProps } from '@mui/material';

export interface ListItemProps {
  primaryText: string;
  secondaryText?: string;
  open?: boolean;
  selected?: boolean;
  onClick: ()=>void;
  icon?: React.ReactNode;
  subMenu?: ListItemProps[];
  styles?: {
    listStyle?: SxProps;
    listItemStyle?: SxProps;
    listButtonStyle?: SxProps;
    listIconStyle?: SxProps;
    listTextStyle?: SxProps;
  };
  expandMoreIcon?: React.ReactNode;
  expandLessIcon?: React.ReactNode;
  isChild?: boolean;
}

export interface SidebarProps {
  openSideBar: boolean;
  logoDetails?: {
    logoImage: string;
    logoImageStyle?: SxProps;
    version?: string;
    versionStyle?: SxProps;
  };
  menuData: ListItemProps[];
  bottomMenuData?: ListItemProps[];
  drawerWidth: number;
  rootStyle?: SxProps;
  listStyle?: SxProps;
  listItemStyle?: SxProps;
  listButtonStyle?: SxProps;
  listIconStyle?: SxProps;
  listTextStyle?: SxProps;
}
