import { SxProps } from '@mui/material';

export interface SuggestionProp {
  searchValue: any;
  option: {
    label: string;
    url: string;
  }[];
  handleRecentSearchData: () => void;
}
export interface Category1Props {
  searchValue: any;
  option: {
    label: string;
    url: string;
  }[];
  handleCategoryData: () => void;
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
    url: string;
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
}
export interface SearchFieldProps {
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

  categoryLabel1: string;
  categoryLabel2: string;
  textSearchData:{
   label:string;
  }[];
  cardData: {
    label:string;
    url:string;
  }[];
  navigateData: {
    navigateLabel: string;
    icon: React.ReactNode;
    onClick: () => void;
    url: string;
  }[];
}
