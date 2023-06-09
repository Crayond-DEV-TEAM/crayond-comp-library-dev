
type Role = {
    roleNo: string;
    role: string;
    isActive: boolean;
} | undefined;

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
    // width?: string;
    // height?: string,
    // color?: string,
    // backgroundColor?: string,
    // thumbWidth?: string,
    // thumbHeight?: string,
    // value?: boolean

    customProp: {
        width: string,
        height: string,
        thumbColor: string,
        onChange?: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void),
        color: string
    };
}

export interface RoleManagementProps {
    title: string,
    rootStyle: object,
    editIndex: number | null | undefined,
    clickIndex: number | undefined,
    roleNo?: string;
    isActive?: boolean;
    name?: string;
    x?: object | undefined;
    index?: number;
    roles: { roleNo: string; role: string; isActive: boolean; }[],
    state?: {
        role: string,
        roleNo: string,
        isActive: boolean,
    },
    add?: boolean,
    search: string,

    onEditRole?: (x: object | undefined, index: number | undefined) => void,
    handleChange?: (key: string, e: any, index: number) => void,
    handleSave?: (x: object | undefined, index: number) => void,
    handleAddChange?: (key: string, value: string) => void,
    handleAddSave?: (e: Role) => void,
    handleAddRole?: () => void,
    handleRoleClick?: (x: object | undefined, index: number | undefined) => void,
    handleClose?: () => void,
    handleSearch?: (key: string, value: string) => void,
    handleSwitch?: (e: any, index: number) => void,
    rolesGrid?: {
        breakpoints: object,
    },
    rolesView?: {
        breakpoints: object
    },
    roleTitleSx?: object,
    subRootPropsSx?: object,
    roleBoxSx?: object,
    roleHeadBorderSx?: object,
    titlePropsSx?: object,
    addIconSx?: object,
    roleCardSx?: object,
    checkIconPropsSx?: object,
    closeIconPropSx?: object,
    roleUnselectedCardSx?: object,
    roleNoProps?: object,
    editIconProps?: object,
    inputStyle?: inputStyle,
    switchStyle?: switchStyle
}
