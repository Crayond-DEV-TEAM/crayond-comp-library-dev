import { SxProps } from '@mui/material';
import { ReactElement } from 'react';


export interface CheckBoxProps {
    checkboxIcon?: ReactElement;
    uncheckedIcon?: ReactElement;
    checkboxWidth?: number;
    checkboxBorderRadius?: string | number;
    checkboxHeight?: number;
    disable?: boolean;
    isCheckBox?: boolean;
    onClick?: (e: any) => void;
    checked?: boolean;
    onChange: (e: any) => void,
}
export interface CustomLabelProps {
    iconProp?: {
        parent: JSX.Element,
        parentChild?: JSX.Element
    };
    labelText?: string;
    fontsize?: any;
    test?: string;
    isCheckBox?: boolean;
    disable?: boolean;
    onChange?: (e: any, val: any, id: string, data: any) => void;
    nodes?: any;
    index?: number | string;
    formControlPropsSx?: object;
    state?: any;
    checkBoxStyles: CheckBoxProps | { 
        checkboxBorderRadius: string; 
        checkboxIcon: null; 
        uncheckedIcon: null; 
        checkboxWidth: string; 
        checkboxHeight: string;
        disable: boolean
    };

}
export interface TreeComponentProps {
    sx?: SxProps;
    checkboxsection?: boolean;
    index?: number;
    nodes?: any,
    test?: string;
    setEdit?: any;
    onChange?: (e: any, val: any, id: string, data: any) => void;
    customLabel?: CustomLabelProps | undefined;
    rootNode?: boolean;
    defaultExpandIcon?: JSX.Element;
    defaultCollapseIcon?: JSX.Element;
    state?: any;
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
    };
    heading?: string;
    permissionHeadingSx?: object | undefined;
    disable?: boolean
}

