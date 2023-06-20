import { ReactNode } from 'react';

interface ButtonItem {
  label: string;
  value: any;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isdisabled?: true | false;
}

export interface CustomButtonGroupProps {
  buttons: ButtonItem[];
  onClick: (e: any,value:any) => void;
  variant?: 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  selectedColor: string;
  unselectBgColor: string;
  color?: string;
  selectedBgColor: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  btnStyle?: object;
  rootstyle?: object;
  btnGroupStyle?: object;
}
