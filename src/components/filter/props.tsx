export interface CustomData {
  listName: string;
  selected: boolean;
  listIcon?: JSX.Element;
  subList: {
    list: string;
    selected: boolean;
    listStyle?: object;
    LabelbgColor?: string;
    LabelColor?: string;
  }[];
  listNameStyle?: object;
  subListType: string;
}

export interface ButtonItem {
  label: string;
  onClick: (
    filteredData: CustomData[],
    setFilteredData: React.Dispatch<React.SetStateAction<CustomData[]>>
  ) => void;
  btnstyle?: object;
}

export interface FilterComponentProps {
  icon?: JSX.Element;
  customData: CustomData[];
  buttons: ButtonItem[];
  rootStyle?: object;
  filterButtonStyle?: object;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  filterTitle?: string;
  filterTitleStyle?: object;
  listContainerStyle?: object;
  listIconStyle?: object;
  subListContainerStyle?: object;
  buttonContainerStyle?: object;
  PopoverStyle?: object;
  contentWrapStyle?: object;
  searchBarStyle?: object;
  showSearchBar?: true | false;
  chipStyle?: object;
}
