import { Box, Grid, Typography } from '@mui/material';
import { RoleManagementProps } from './props';
import { styles } from './style';
import { Roles } from './roles';
import { useState } from 'react';

const RoleManagement = (props: RoleManagementProps) => {
  const { rootStyle, rolesView, rolesGrid, roleTitleSx, subRootPropsSx } = props;

  type Role = {
    roleNo: string;
    role: string;
    isActive: boolean;
  };

  const roleData: Role[] = [
    {
      roleNo: 'RL077',
      role: 'Role 1',
      isActive: false,
    },
    {
      roleNo: 'RL045',
      role: 'Role 2',
      isActive: false,
    },
    {
      roleNo: 'RL084',
      role: 'Role 3',
      isActive: false,
    },
    {
      roleNo: 'RL094',
      role: 'Role 4',
      isActive: false,
    },

  ];

  type EditIndex = number | null | undefined;
  type SearchText = string;


  const initialState = {
    roleNo: '',
    role: '',
    isActive: false,
    error: {
      roleNo: '',
      role: '',
    }
  };

  const [roles, setRoles] = useState<Role[]>(roleData);
  const [state, setState] = useState(initialState)
  const [search, setSearch] = useState<SearchText>('')

  const [editIndex, setEditIndex] = useState<EditIndex>(null)
  const [clickIndex, setCickIndex] = useState<number>()

  const [add, setAdd] = useState(false)
  const handleAddRole = () => {
    setAdd(true)
  }

  const onEditRole = (x: object | undefined, index: number | null | undefined) => {
    setEditIndex(index)
  }

  const handleRoleClick = (x: object | undefined, index: number | undefined) => {
    setCickIndex(index)
  }

  const handleChange = (key: string, e: object, index: number) => {
    const tempArr = [...roles]

    tempArr[index] = {
      ...tempArr[index],
      roleNo: tempArr[index].roleNo, [key]: e,
      role: tempArr[index].role, [key]: e,
    }
    setRoles([...tempArr]);
  }

  const handleAddChange = (key: { roleNo: string; role: string; }, value: string) => {
    const error = state?.error;
    error[key] = '';
    setState({ ...state, [key]: value, error })
  }

  const handleSave = (x: Role, index: number) => {
    const tempArr = [...roles]
    tempArr[index] = x;
    setRoles([...tempArr]);
    setEditIndex(null)
  }

  const handleClose = () => {
    setEditIndex(null)
    setAdd(false)
    setState(initialState)
  }

  const handleSearch = (key: string, value: string) => {
    // debugger
    setSearch(value)
  }

  const validate = () => {
    let isValid = true;
    const error = state?.error
    if (state?.role?.length === 0) {
      isValid = false
      error.role = "Role Required"
    }
    if (state?.roleNo?.length === 0) {
      isValid = false
      error.roleNo = "Role no. Required"
    }

    setState({ ...state, error })
    return isValid
  }

  const handleAddSave = (e: Role) => {
    const tempArr = [...roles]

    if (validate()) {
      tempArr.push(e)
      setRoles([...tempArr]);
      setState(initialState)
      setEditIndex(null)
      setAdd(false)
    }

  }

  const handleSwitch = (e: boolean, index: number) => {
    const tempArr = [...roles]

    tempArr[index] = {
      ...tempArr[index],
      isActive: e
    }
    setRoles([...tempArr]);
  }

  return (
    <Box sx={{ ...styles.rootSx, ...rootStyle }}>
      <Box sx={styles?.headingPx}>
        <Typography sx={{ ...styles?.roleHeading, ...roleTitleSx }}>Role Management</Typography>
      </Box>

      <Box sx={{ ...styles?.subRootSx, ...subRootPropsSx }}>
        <Grid container sx={styles?.containerSx} height={'100%'}>
          <Grid item {...rolesGrid?.breakpoints} height={'100%'} >
            <Roles
              editIndex={editIndex}
              clickIndex={clickIndex}
              roles={roles}
              state={state}
              onEditRole={onEditRole}
              handleChange={handleChange}
              handleAddChange={handleAddChange}
              handleSave={handleSave}
              handleAddSave={handleAddSave}
              handleAddRole={handleAddRole}
              handleRoleClick={handleRoleClick}
              handleClose={handleClose}
              handleSearch={handleSearch}
              search={search}
              handleSwitch={handleSwitch}
              add={add}
            />
          </Grid>
          <Grid item {...rolesView?.breakpoints} height={'100%'}>
          </Grid>
        </Grid>
      </Box>
    </Box >
  );
}

export default RoleManagement

RoleManagement.defaultProps = {
  title: 'Roles',
  rootStyle: {},
  rolesGrid: {
    breakpoints: {},
  },
  rolesView: {
    breakpoints: {}
  },
  roleTitleSx: {},
  subRootPropsSx: {},
  roleBoxSx: {},
  roleHeadBorderSx: {},
  titlePropsSx: {},
  addIconSx: {},
  roleCardSx: {},
  checkIconPropsSx: {},
  closeIconPropSx: {},
  roleUnselectedCardSx: {},
  roleNoProps: {},
  editIconProps: {},
  inputStyle: {
    type: '',
    helperText: '',
    placeholder: '',
    errorMessage: '',
    isReadOnly: false,
    isError: false,
    multiline: false,
    fullWidth: false,
    value: '',
    header: '',
    textFieldStyle: {},
    disabled: false,
    variant: "standard",
    inputBackground: '',
    height: '',
    fontSize: '',
    padding: '',
    margin: '',
    border: '',
    borderRadius: '',
    borderBottom: ''
  },
  switchStyle: {
    width: '',
    height: '',
    color: '',
    backgroundColor: '',
    thumbWidth: '',
    thumbHeight: ''
  }
}