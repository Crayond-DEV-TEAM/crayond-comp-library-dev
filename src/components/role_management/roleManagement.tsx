import { Box, Grid, Icon, Typography, Container } from '@mui/material';
import { RoleManagementProps } from './props';
import { styles } from './style';
import { Roles } from './roles';
import { useState } from 'react';

export default function RoleManagement(props: RoleManagementProps) {
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
  ];

  type EditIndex = number | null;

  type Search = {
    text: string | undefined;
  };

  const initialState: Role = {
    roleNo: '',
    role: '',
    isActive: false,
  };

  // const [roles, setRoles] = useState([...roleData])
  const [roles, setRoles] = useState<Role[]>(roleData);
  const [state, setState] = useState(initialState)
  const [search, setSearch] = useState<Search>({
    text: '',
  });

  const [editIndex, setEditIndex] = useState<EditIndex>(null)
  const [clickIndex, setCickIndex] = useState<number>()

  const [add, setAdd] = useState(false)
  const handleAddRole = () => {
    setAdd(true)
  }

  const onEditRole = (x: object, index: number) => {
    setEditIndex(index)
  }

  const handleRoleClick = (x: object, index: number) => {
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

  const handleAddChange = (key: string, value: string) => {
    setState({ ...state, [key]: value })
  }

  const handleSave = (x: object, index: number) => {
    const tempArr = [...roles]

    tempArr[index] = {
      ...tempArr[index],
      role: x?.role,
      roleNo: x?.roleNo
    }
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
    setSearch({
      ...search, [key]: value
    })
  }

  const handleAddSave = (e: Role) => {
    debugger
    const tempArr = [...roles]

    tempArr.push(e)
    setRoles([...tempArr]);

    setState(initialState)
    setEditIndex(null)
    setAdd(false)
  }

  const handleSwitch = (e: boolean, index: number) => {
    const tempArr = [...roles]

    tempArr[index] = {
      ...tempArr[index],
      isActive: e
    }
    setRoles([...tempArr]);
  }

  console.log(roles, 'rolessss');


  return (
    <Box sx={{ ...styles.rootSx, ...rootStyle }}>
      <Box sx={styles?.headingPx}>
        <Typography sx={{ ...styles?.roleHeading, ...roleTitleSx }}>Role Management</Typography>
      </Box>

      <Box sx={{ ...styles?.subRootSx, ...subRootPropsSx }}>
        <Grid container sx={styles?.containerSx}>
          <Grid item {...rolesGrid?.breakpoints} >
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
              search={search?.text}
              handleSwitch={handleSwitch}
              add={add}
            // services={services?.data}
            // handleServiceClick={handleOnClick}
            // searchTerm={searchTerm}
            // handleSearch={handleSearch}
            // onEditServices={onEditServices}
            />
          </Grid>
          <Grid item {...rolesView?.breakpoints} >

          </Grid>
        </Grid>
      </Box>
    </Box >
  );
}

RoleManagement.defaultProps = {
  rootStyle: {},
  rolesGrid: {
    breakpoints: {},
  },
  rolesView: {
    breakpoints: {}
  },
  roleTitleSx: {},
  subRootPropsSx: {},
};
