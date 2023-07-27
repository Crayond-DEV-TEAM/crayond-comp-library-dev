import { ReactElement } from 'react';

export interface MobileNavbarProps {
  items: NavbarItem[];
  onClick: Function;
  iconActiveBgColor?: string;
  iconInActiveBgColor?: string;
  labelActiveColor?: string;
  labelInActiveColor?: string;
  rootStyle?: object;
  listStyle?: object;
  iconStyle?: object;
  labelStyle?: object;
  variant: 'withLabel' | 'withoutLabel';
  itemStyle?: object;
  inActiveFontWeight?: string | number;
  activeFontWeight?: string | number;
  isDisableRipple?: true | false;
  elevation?: number;
  iconHeightPng?: number | string;
  iconWidthPng?: number | string;
}
export interface NavbarItem {
  icon: ReactElement | string;
  label?: string;
  url?: string;
  iconUnSelectedColor?: string;
  iconSelectedColor?: string;
}
