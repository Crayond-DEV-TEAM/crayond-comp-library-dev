import { SxProps } from '@mui/material';

export interface CompareFeatureProps {
  compareHeadingColor?: string;
  compareHeadingSize?: number;
  compareHeadingStyle?: SxProps;
  compareHeadingAlign?: 'left' | 'right' | 'center';

  rowTitleAlign?: 'left' | 'right' | 'center';
  compareRowTitleColor?: string;
  compareRowTitleSize?: 12;
  compareRowTitleStyle?: SxProps;

  rowIconAlign?: 'left' | 'right' | 'center';
  iconRootStyle?: SxProps;
  rowBorderColor?: string;
  tableRootStyle?:SxProps;

  rowData: {
    id: number;
    title: string;
    Starter: React.ReactNode;
    Personal: React.ReactNode;
    Professional: React.ReactNode;
  }[];
  columnData: {
    id: number;
    title: string;
  }[];
}
