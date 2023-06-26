import { ReactElement, ReactNode } from 'react';

export interface FilterComponentProps {
  icon: ReactNode;
  customData: CustomData[];
  buttons: ButtonItem[];
  rootStyle?: object;
  filterButtonStyle?: object;
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom' | number;
    horizontal: 'left' | 'center' | 'right' | number;
  };
  transformOrigin?: {
    vertical: 'top' | 'center' | 'bottom' | number;
    horizontal: 'left' | 'center' | 'right' | number;
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
  chipStyle?:object;
}

interface CustomData {
  listName?: string;
  selected?: boolean;
  subList?: {
    listIcon: ReactNode;
    list?: string;
    selected?: boolean;
    listStyle?: object;
    LabelbgColor?: string;
    LabelColor?: string;
  }[];
  listIcon?: ReactElement;
  subListType?: string ;
  listNameStyle?:object;
}
interface ButtonItem {
  label: string;
  onClick: (
    filteredCustomData: CustomData[],
    setFilteredCustomData: React.Dispatch<React.SetStateAction<CustomData[]>>
  ) => void;
  btnstyle?: object;
}
