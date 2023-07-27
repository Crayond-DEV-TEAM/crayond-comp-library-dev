import { SxProps } from "@mui/material";

type Role = {
    roleNo: string;
    role: string;
    isActive: boolean;
};

type initialProps = {
    roleNo: string,
    role: string,
    isActive: boolean,
    error: {
      roleNo: string,
    }
  }

export interface inputStyle {
    type?: string;
    helperText?: string;
    placeholder?: string;
    errorMessage?: string;
    isReadOnly?: boolean;
    isError?: boolean;
    multiline?: boolean;
    rowsMax?: string | number;
    rows?: number;
    minRows?: number;
    maxRows?: number;
    fullWidth?: boolean | undefined;
    value?: string;
    endAdornment?: object;
    startAdornment?: object;
    header?: string;
    textFieldStyle?: SxProps;
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
    index?: number | undefined;
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

    onEditRole?: (index: number | undefined) => void,
    handleChange?: (key: string, e: object, index: number | undefined) => void,
    handleChangeCallback?: (e: object) => void | undefined;
    handleSaveCallback?: (e: object) => void | undefined;
    handleSwitchCallback?: (e: object) => void | undefined,
    handleSave?: (x: Role, index: number | undefined) => void,
    handleAddChange?: (key: keyof initialProps['error'], value: string) => void,
    handleAddSave?: (e: Role) => void,
    handleAddRole?: () => void,
    handleRoleClick?: ( index: number | undefined) => void,
    handleClose?: () => void,
    handleSearch?: (key: string, value: string) => void,
    handleSwitch?: (e: boolean, index: number | undefined) => void,
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
