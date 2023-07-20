import { SxProps } from "@mui/material";

type Role = {
    roleNo: string;
    role: string;
    isActive: boolean;
};

export interface inputStyle {
    type?: string;
    helperText?: string;
    placeholder?: string;
    errorMessage?: string;
    isReadOnly?: boolean;
    isError?: boolean;
    multiline?: boolean;
    rowsMax?: any;
    rows?: number;
    minRows?: number;
    maxRows?: number;
    fullWidth?: boolean | undefined;
    value?: string;
    endAdornment?: any;
    startAdornment?: any;
    header?: string;
    textFieldStyle?: object | any;
    disabled?: boolean;
    variant?: "" | "standard" | "filled" | "outlined";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    inputBackground?: string;
    height?: string;
    fontSize?: string;
    padding?: string;
    margin?: string;
    border?: string;
    borderRadius?: string;
    borderBottom?: string
}

export interface switchStyle {
    customProp?: {
        width?: string,
        height?: string,
        thumbColor?: string,
        onChange?: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void),
        color?: string
    };
}

export interface RoleManagementProps {
    heading?: string,
    title?: string,
    rootStyle?: SxProps,
    editIndex?: number | null | undefined,
    clickIndex?: number | undefined,
    roleNo?: string;
    isActive?: boolean;
    name?: string;
    x?: object | undefined;
    index?: number;
    roles?: { roleNo?: string; role?: string; isActive?: boolean; }[],
    state?: {
        role?: string,
        roleNo?: string,
        isActive?: boolean,
        error?: {
            role?: string,
            roleNo?: string
        }
    },
    add?: boolean,
    search?: string,

    onEditRole?: (x: Role, index: number | undefined) => void,
    handleChange?: (key: string, e: any, index: number) => void,
    handleChangeCallback?: (e: any) => void | undefined;
    handleSaveCallback?: (e: any) => void | undefined;
    handleSwitchCallback?: (e: any) => void | undefined,
    handleSave?: (x: Role, index: number) => void,
    handleAddChange?: (key: any, value: string) => void,
    handleAddSave?: (e: Role) => void,
    handleAddRole?: () => void,
    handleRoleClick?: (x: Role, index: number | undefined) => void,
    handleClose?: () => void,
    handleSearch?: (key: string, value: string) => void,
    handleSwitch?: (e: any, index: number) => void,
    rolesGrid?: {
        breakpoints: object,
    },
    rolesView?: {
        breakpoints: object
    },
    roleTitleSx?: SxProps,
    subRootPropsSx?: SxProps,
    roleBoxSx?: SxProps,
    roleHeadBorderSx?: SxProps,
    titlePropsSx?: SxProps,
    addIconSx?: SxProps,
    roleCardSx?: SxProps,
    checkIconPropsSx?: SxProps,
    closeIconPropSx?: SxProps,
    roleUnselectedCardSx?: SxProps,
    roleNoProps?: SxProps,
    editIconProps?: SxProps,
    inputStyle?: inputStyle,
    switchStyle?: switchStyle
}
