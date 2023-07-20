import { SxProps } from '@mui/material';
import React from 'react';

export interface CompareFeatureProps {
  compareHeadingColor?: string;
  compareHeadingSize?: number;
  compareHeadingStyle?: SxProps;
  compareHeadingAlign?: 'left' | 'right' | 'center';

  rowAlign?: 'left' | 'right' | 'center';
  compareRowTitleColor?: string;
  compareRowTitleSize?: 12;
  compareRowTitleStyle?: SxProps;

  iconRootStyle?: SxProps;
  rowBorderColor?: string;
  tableRootStyle?:SxProps;

  rowData: {
    id: number;
    title: string;
    Starter: React.ReactNode;
    Personal: React.ReactNode;
    Professional: React.ReactNode;
    style:React.CSSProperties;
  }[];
  
  columnData: {
    id: number;
    key:string;
    title: string;
    style?:React.CSSProperties;

  }[];
}
