import { SxProps, Theme } from '@mui/material';
import { ReactElement } from 'react';


export interface CustomLabelProps {
    iconProp?: any;
    labelText?: string;
    fontsize?: any;
    checkBox?: boolean;
    disable?: boolean;
    onChange?: (e: any, val: any, id: string, data: any) => void;
    nodes?: any;
    index?: number;
    state?: any;
    checkboxIcon?: ReactElement;
    uncheckedIcon?: ReactElement;
    checkboxWidth?: number;
    checkboxBorderRadius?: string | number;
    checkboxHeight?: number;
    checkboxBgColor?: string;
}
export interface TreeComponentProps {
    className?: string;
    sx?: SxProps<Theme>;
    data?: any;
    checkboxsection?: boolean;
    setEdit?: any;
    onChange?: (e: any, val: any, id: string, data: any) => void;
    customLabel?: CustomLabelProps;
    rootNode?: boolean;
    defaultExpandIcon?: JSX.Element;
    defaultCollapseIcon?: JSX.Element;
    state: any;

}

