import { SxProps } from '@mui/material';
import { ReactElement } from 'react';

interface TreeNode {
    id: string;
    name: string;
    child?: TreeNode[];
    allowed?: string[] | undefined;
    permissions?: string[] | undefined;
  }

export interface CheckBoxProps {
    checkboxIcon?: ReactElement;
    uncheckedIcon?: ReactElement;
    checkboxWidth?: number;
    checkboxBorderRadius?: string | number;
    checkboxHeight?: number;
    disable?: boolean;
    isCheckBox?: boolean;
    checked?: boolean;
    onChange: (e: any) => void,
}
export interface CustomLabelProps {
    iconProp?: {
        parent: JSX.Element,
        parentChild?: JSX.Element
    };
    labelText?: string;
    labelStyleSx?:  SxProps;
    test?: string;
    isCheckBox?: boolean;
    disable?: boolean;
    onChange?: (e: any, val: string, id: string, data: TreeNode[]) => void;
    nodes?: any;
    index?: number | string;
    formControlPropsSx?: SxProps;
    state?: TreeNode[];
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
    setEdit?: boolean;
    onChange?: (e: any, val: string, id: string, data: TreeNode[]) => void;
    customLabel?: CustomLabelProps | undefined;
    rootNode?: boolean;
    defaultExpandIcon?: JSX.Element;
    defaultCollapseIcon?: JSX.Element;
    state?: TreeNode[];
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
    permissionHeadingSx?: SxProps;
    disable?: boolean
}

