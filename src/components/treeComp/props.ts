import { SxProps, Theme } from '@mui/material';


export interface CustomLabelProps {
    iconProp?: any;
    labelText?: string;
    fontsize?: any;
    checkBox?: boolean;
    disable?: boolean;
    onChange?: () => void | undefined;
    nodes?: any;
    index?: number;

}
export interface TreeComponentProps {
    className?: string;
    sx?: SxProps<Theme>;
    data?: any;
    checkboxsection?: boolean;
    setEdit?: any;
    onChange?: () => void;
    customLabel?: CustomLabelProps;
    rootNode?: boolean;
    defaultExpandIcon?: JSX.Element;
    defaultCollapseIcon?: JSX.Element;
}

