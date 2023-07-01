import { SxProps } from '@mui/material';

export interface ParamsProps {
  label: string;
  url?: string;
}
export interface SuggestionProp {
  searchValue: any;
  option: {
    label: string;
    url?: string;
  }[];
}
export interface Category1Props {
  searchValue: any;
  option: {
    label: string;
    url?: string;
  }[];
  handleCategoryData: (val: any) => void;
}
export interface ControlsProps {
  controlsBgColor: string;
  controlsTextSize: number;
  controlsTextColor: string;
  controlsRootStyles: SxProps;
  navigateButtons: {
    navigateLabel: string;
    icon: React.ReactNode;
    onClick: () => void;
    url?: string;
  }[];
}
export interface RecentSearchProps {
  recentVal: Array<any>;
  recentLabel: string;
  recentLabelTextColor: string;
  recentLabelFontSize: number;
  recentLabelStyle: SxProps;
  recentSearchItemStyles: SxProps;
  recentSearchItemTextColor: string;
  recentSearchItemBgcolor: string;
  recentSearchItemSize: number;
  handleRecentSearch:(val:ParamsProps)=>void;
}
export interface SearchFieldProps {
  options: {
    label: string;
    url?: string;
  }[];

  isTextSearch: boolean;
  isRecentSearch: boolean;
  isCardBased: boolean;
  isCardWithTitleBased: boolean;
  isShortcutKeyBased: boolean;
  isShortComponent: boolean;

  paperRootStyle: SxProps;

  placeHolderText: string;
  placeHolderColor: string;
  placeHolderSize: number;
  inputRootStyle: SxProps;
  inputFontSize: number;
  inputFontColor: string;
  inputBackgroundColor: string;
  inputBorderDefaultColor: string;
  inputBorderHoverColor: string;
  inputBorderFocusColor: string;
  startAdornmentIcon: React.ReactNode;
  endAdornmentIcon: React.ReactNode;

  paperBackgroundColor: string;
  paperBorderColor: string;
  paperHeight: number;
  paperMinHeight: number;
  paperMaxHeight: number;

  listTextHoverColor: string;
  listTextHoverBgColor: string;
  keyDownListBgcolor: string;
  keyDownListTextColor: string;
  listItemSubTextColor: string;
  listItemSubTextSize: number;
  listItemSubTextStyles: SxProps;
  listItemLabelColor: string;
  listItemLabelSize: number;
  listItemLabelStyles: SxProps;
  cardImgStyle: SxProps;
  cardImgWidth: number;
  cardImgHeight: number;
  imgBorderRadius: number;

  recentLabel: string;
  recentLabelTextColor: string;
  recentLabelFontSize: number;
  recentLabelStyle: SxProps;
  recentSearchItemStyles: SxProps;
  recentSearchItemTextColor: string;
  recentSearchItemBgcolor: string;
  recentSearchItemSize: number;

  controlsRootStyles: SxProps;
  controlsTextColor: string;
  controlsBgColor: string;
  controlsTextSize: number;

  componentColumnDirection: string;
  recentSearchLabelColor: string;
  recentSearchLabelSize: number;
  recentSearchLabel: string;
  categoryLabel1: string;
  categoryLabel2: string;
  categoryLabel1Color: string;
  categoryLabel1Size: number;
  categoryLabel2Color: string;
  categoryLabel2Size: number;
  primaryCategoryData: {
    label: string;
    url: string;
  }[];
  secondaryCategoryData: {
    label: string;
    url: string;
  }[];

  handleInputOnChange: (val: any) => void;
  handleOptionChange: (val: any) => void;

  navigateData: {
    navigateLabel: string;
    icon: React.ReactNode;
    onClick: () => void;
    url?: string;
  }[];
}
