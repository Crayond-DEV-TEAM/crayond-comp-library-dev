import { SxProps } from '@mui/material';

export interface CompareFeatureProps {
  compareHeadingColor: string;
  compareHeadingSize: number;
  compareHeadingStyle: SxProps;
  compareHeadingAlign: 'left' | 'right' | 'center';

  rowTitleAlign: 'left' | 'right' | 'center';
  compareRowTitleColor: string;
  compareRowTitleSize: 12;
  compareRowTitleStyle: SxProps;

  rowIconAlign: 'left' | 'right' | 'center';
  iconRootStyle: SxProps;
  rowBorderColor:string;
}
