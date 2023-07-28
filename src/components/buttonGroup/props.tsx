import { SxProps } from '@mui/material';
import { ReactNode, MouseEvent } from 'react';

interface ButtonItem {
  label: string;
  value: number;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isdisabled?: true | false;
}

export interface CustomButtonGroupProps {
  buttons: ButtonItem[];
  onClick: (e: MouseEvent<HTMLButtonElement>, value: number) => void;
  variant?: 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  selectedColor: string;
  unselectBgColor?: string;
  color?: string;
  selectedBgColor: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  btnStyle?: SxProps;
  rootstyle?: SxProps;
  btnGroupStyle?: SxProps;
}
