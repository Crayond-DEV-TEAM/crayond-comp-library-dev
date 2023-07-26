import { DrawerProps, SxProps } from '@mui/material';

export interface ListItemProps {
  primaryText: string;
  secondaryText?: string;
  open?: boolean;
  selected?: boolean;
  onClick: ({
    event,
    currentMenu,
  }: {
    event:  React.MouseEvent<HTMLDivElement, MouseEvent>;
    currentMenu: string;
  }) => void;
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
  drawerProps?: DrawerProps;
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
