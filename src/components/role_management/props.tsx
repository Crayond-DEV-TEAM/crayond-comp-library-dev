
type Role = {
    roleNo: string;
    role: string;
    isActive: boolean;
};

export interface RoleManagementProps {
    editIndex: number | undefined,
    clickIndex: number | undefined,
    roles: { roleNo: string; role: string; isActive: boolean; }[],
    state?: {
        role: string,
        roleNo: string,
        isActive: boolean,
    },
    add?: boolean,
    search: {
        text: string;
    } | undefined,
    onEditRole?: (x: object, index: number) => void,
    handleChange?: (key: string, e: any, index: number | undefined) => void,
    handleSave?: (x: Role | undefined, index: number) => void,
    handleAddChange?: (key: string, value: string) => void,
    handleAddSave?: (e: Role) => void,
    handleAddRole?: () => void,
    handleRoleClick?: (x: object, index: number) => void,
    handleClose?: () => void,
    handleSearch?: (key: string, value: string) => void

}
