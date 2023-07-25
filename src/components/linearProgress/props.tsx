import { SxProps } from "@mui/material";

 export interface ProgressProps {
   value: number;
   valueBuffer?: number;
   variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query';
   isShowToolTip?: boolean;
   thumbHeight?: number;
   progressLabel?: boolean;
   linearBarStyle?: SxProps;
   symbols?: string;
   symbolsColor?: string;
   TooltipTextColor?: string;
   TooltipBgColor?: string;
   TooltipArrowColor?: string;
   thumbPrimaryColor?: string;
   thumbSecondaryColor?: string;
 }