import { SxProps, Theme } from '@mui/material';
import { ReactElement } from 'react';

interface DataRowLogic {
    map(arg0: (e: any, parentIndex: number) => JSX.Element): import("react").ReactNode;
    [index: number]: { title: string; permission: {} };
}
export interface TreeViewProps {
    sx?: SxProps<Theme>;
    rootStyle?: object;
    formControlPropsSx?: object;
    onSubmit: () => void;
    heading?: ReactElement | string,
    permissionHeadingSx?: object;
    checkboxTitleSx?: object;
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
        breakpoints: object;
    };
    rightSec?: {
        breakpoints: object;
    }
    dividerPropsSx?: object

}
