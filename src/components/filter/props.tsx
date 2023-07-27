import { SxProps } from '@mui/material';

export interface CustomData {
  listName: string;
  selected: boolean;
  listIcon?: JSX.Element;
  subList: {
    list: string;
    selected: boolean;
    listStyle?: SxProps;
    LabelbgColor?: string;
    LabelColor?: string;
  }[];
  listNameStyle?: SxProps;
  subListType: string;
}

export interface ButtonItem {
  label: string;
  onClick: (
    filteredData: CustomData[],
    getStateClear: () => void,
    setAnchorEl: React.Dispatch<React.SetStateAction<CustomData[]>>
  ) => void;
  btnstyle?: SxProps;
}

export interface FilterComponentProps {
  icon?: JSX.Element;
  customData: CustomData[];
  buttons: ButtonItem[];
  rootStyle?: SxProps;
  filterButtonStyle?: SxProps;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  filterTitle?: string;
  filterTitleStyle?: SxProps;
  listContainerStyle?: SxProps;
  listIconStyle?: SxProps;
  subListContainerStyle?: SxProps;
  buttonContainerStyle?: SxProps;
  PopoverStyle?: SxProps;
  contentWrapStyle?: SxProps;
  searchBarStyle?: SxProps;
  showSearchBar?: true | false;
  chipStyle?: SxProps;
  labelStyle?: SxProps;
  listItemStyle?: SxProps;
  maxLabelShow: number;
  visibleSubList?: number;
  moreLabelStyle?: SxProps;
  titleWrapperStyle?: SxProps;
  btnWrapperStyle?: SxProps;
  selectedchipConStyle?: SxProps;
  searchPlaceHolder?: string;
  searchVariant?: 'standard' | 'filled' | 'outlined';
  searchbarSize?: 'small' | 'medium';
  checkboxStyle?: SxProps;
  chipVariant?: 'filled' | 'outlined';
  badgeColor: 'success' | 'primary' | 'secondary' | 'error';
}
