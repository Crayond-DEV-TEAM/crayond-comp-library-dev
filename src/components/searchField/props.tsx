import { SxProps } from '@mui/material';
export interface ParamsProps {
  id: number;
  label: string;
  url?: string;
}
export interface SuggestionProp {
  searchValue: any;
  handleRecentSearch: (val: ParamsProps) => void;
  option: {
    id: number;
    label: string;
    url?: string;
  }[];
}
export interface Category1Props {
  searchValue: any;
  option: {
    id: number;
    label: string;
    url?: string;
  }[];
  handleCategoryData: (val: any) => void;
}
export interface ControlsProps {
  controlsBgColor: string;
  controlsTextSize: number;
  controlsTextColor: string;
  controlsRootStyles?: SxProps;
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
  recentLabelStyle?: SxProps;
  recentSearchItemStyles?: SxProps;
  recentSearchItemTextColor: string;
  recentSearchItemBgcolor: string;
  recentSearchItemSize: number;
  handleRecentSearch: (val: ParamsProps) => void;
}
export interface SearchFieldProps {
  options: {
    id: number;
    label: string;
    url?: string;
  }[];

  isTextSearch?: boolean;
  isRecentSearch?: boolean;
  isCardBased?: boolean;
  isCardWithTitleBased?: boolean;
  isShortcutKeyBased?: boolean;
  isShortComponent?: boolean;

  variant:
    | 'isTextSearch'
    | 'isRecentSearch'
    | 'isCardBased'
    | 'isCardWithTitleBased'
    | 'isShortcutKeyBased'
    | 'isShortComponent';
  paperRootStyle?: SxProps;

  noOptionsText: string;
  placeHolderText: string;
  placeHolderColor?: string;
  placeHolderSize?: number;
  inputRootStyle?: SxProps;
  inputFontSize?: number;
  inputFontColor?: string;
  inputBackgroundColor?: string;
  inputBorderDefaultColor?: string;
  inputBorderHoverColor?: string;
  inputBorderFocusColor?: string;
  startAdornmentIcon: React.ReactNode;
  endAdornmentIcon: React.ReactNode;

  paperBackgroundColor?: string;
  paperBorderColor?: string;
  paperHeight?: number;
  paperMinHeight?: number;
  paperMaxHeight?: number;

  listTextHoverColor?: string;
  listTextHoverBgColor: string;
  keyDownListBgcolor: string;
  keyDownListTextColor: string;
  listItemSubTextColor: string;
  listItemSubTextSize: number;
  listItemSubTextStyles?: SxProps;
  listItemLabelColor: string;
  keyBasedOptionStyle: SxProps;
  listItemLabelSize: number;
  listItemLabelStyles?: SxProps;
  cardImgStyle?: SxProps;
  cardImgWidth: number;
  cardImgHeight: number;
  imgBorderRadius: number;

  cardTitleImgWidth:number;
  cardTitleImgHeight:number;
  TitleImgBorderRadius:number;

  recentSearchOption: any;
  recentLabel: string;
  recentLabelTextColor: string;
  recentLabelFontSize: number;
  recentLabelStyle?: SxProps;
  recentSearchItemStyles?: SxProps;
  recentSearchItemTextColor: string;
  recentSearchItemBgcolor: string;
  recentSearchItemSize: number;

  controlsRootStyles?: SxProps;
  controlsTextColor: string;
  controlsBgColor: string;
  controlsTextSize: number;

  componentColumnDirection: 'column' | 'column-reverse';
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
    id: number;
    label: string;
    url?: string;
  }[];
  secondaryCategoryData: {
    id: number;
    label: string;
    url?: string;
  }[];

  onSelectSearchDataFun: (val: any) => void;
  handleInputOnChange: (val: any) => void;
  handleOptionChange: (val: any) => void;

  navigateData: {
    navigateLabel: string;
    icon: React.ReactNode;
    onClick: () => void;
    url?: string;
  }[];
}
