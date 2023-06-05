import { Box, Grid, Icon, Typography, Container } from '@mui/material';
import { RoleManagementProps } from './props';
import { styles } from './style';
import { Roles } from './roles';

export default function RoleManagement(props: RoleManagementProps) {
  const { rootStyle } = props;

  return (
    <Box sx={{ ...styles.rootSx, ...rootStyle }}>
      <Container>
        <Typography sx={styles?.roleHeading}>Role Management</Typography>
      </Container>

      <Box sx={styles?.subRootSx}>
        <Grid container sx={styles?.containerSx}>
          <Grid item xs={12} sm={4} md={2.25}>
            <Roles
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
