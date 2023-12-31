import { SxProps } from '@mui/material';
import { ReactElement } from 'react';

interface DataRowLogic {
    map(arg0: (e: any, parentIndex: number) => JSX.Element): import("react").ReactNode;
    [index: number]: { title: string; permission: {} };
}
export interface TreeViewProps {
    sx?: SxProps;
    rootStyle?: SxProps;
    formControlPropsSx?: SxProps;
    onSubmit: () => void;
    heading?: ReactElement | string,
    permissionHeadingSx?: SxProps;
    checkboxTitleSx?: SxProps;
    submitBtnText?: ReactElement | string;
    submitBtnOptions?: {
        variant: "contained" | "text" | "outlined" | undefined,
        bgColor: string,
        textColor: string
    };
    handleChange: (e: any, val: string, parentIndex: number) => void;
    checkboxIcon?: ReactElement;
    uncheckedIcon?: ReactElement;
    checkboxWidth?: number;
    checkboxBorderRadius?: string | number;
    checkboxHeight?: number;
    checkboxBgColor?: string;
    dataRow: DataRowLogic;
    leftSec?: {
        breakpoints: {
            xs: number;
            md: number;
            sm: number;
            lg: number;
          };
    };
    rightSec?: {
        breakpoints: {
            xs: number;
            md: number;
            sm: number;
            lg: number;
          };
    }
    dividerPropsSx?: SxProps

}
