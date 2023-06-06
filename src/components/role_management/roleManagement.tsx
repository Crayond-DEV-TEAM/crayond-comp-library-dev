import { Box, Grid, Icon, Typography, Container } from '@mui/material';
import { RoleManagementProps } from './props';
import { styles } from './style';
import { Roles } from './roles';
import { useState } from 'react';
import { roleData } from './roleData';

export default function RoleManagement(props: RoleManagementProps) {
  const { rootStyle } = props;
  const [roles, setRoles] = useState([...roleData])
  const [editIndex, setEditIndex] = useState()

  

  const onEditRole = (x: object, index: number) => {
    debugger
    setEditIndex(index)
    
  }

  return (
    <Box sx={{ ...styles.rootSx, ...rootStyle }}>
      <Box sx={styles?.headingPx}>
        <Typography sx={styles?.roleHeading}>Role Management</Typography>
      </Box>

      <Box sx={styles?.subRootSx}>
        <Grid container sx={styles?.containerSx}>
          <Grid item xs={12} sm={4} md={2.25}>
            <Roles
              editIndex={editIndex}
              roles={roles}
              onEditRole={onEditRole}
            // services={services?.data}
            // handleServiceClick={handleOnClick}
            // searchTerm={searchTerm}
            // handleSearch={handleSearch}
            // onEditServices={onEditServices}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={9.75}>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

RoleManagement.defaultProps = {
  rootStyle: {},
};
