import React from 'react';
import Box from '@mui/material/Box';
import { ProfileProps } from './props';
import { Avatar, Badge, Container, Grid, Typography } from '@mui/material';
import { styles } from './styles';
import DeleteIcon from '../../assets/deleteIcon';
import { BasicButtons } from '../button';
import { Dropdown } from '../dropdown';
import { InputField } from '../inputField';
import { DateAndTimePicker } from '../dateAndTimePicker';

export default function Profile(props: ProfileProps) {
  const { titleOptions, bgColor, paddingAll } = props;

  return (
    <Box sx={{ backgroundColor: bgColor, padding: paddingAll }}>
      <Container>
        <Box sx={styles.profileContainer}>
          {titleOptions?.title && (
            <Box sx={styles?.titleBox}>
              <Typography
                sx={{
                  fontSize: titleOptions?.fontSize,
                  fontWeight: titleOptions?.fontWeight,
                  color: titleOptions?.color,
                }}
              >
                {titleOptions?.title}
              </Typography>
            </Box>
          )}
          <Box sx={styles.profileDetails}>
            <Grid container justifyContent={'center'}>
              <Grid item xs={3}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  badgeContent={
                    <Box sx={styles.deleteContainer}>
                      <DeleteIcon color={'#fff'} />
                    </Box>
                  }
                >
                  <Avatar variant="rounded" src="" sx={styles.profileImg}>
                    H
                  </Avatar>
                </Badge>
                <BasicButtons inLineStyles={styles.uploadImageBtn}>
                  Upload Image
                </BasicButtons>
              </Grid>
              <Grid item xs={5}>
                <Dropdown
                  selectOption={[
                    { label: 'Select', value: '' },
                    { label: 'one', value: 'one' },
                    { label: 'two', value: 'two' },
                    { label: 'three', value: 'three' },
                  ]}
                  label={'My Label'}
                  required
                  variant={"filled"}
                  placeholder='df'
                  isError
                  errorMessage='tyu'
                  // helperText='we'
                />

                {/* <DateAndTimePicker /> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Box height={'40px'} />
    </Box>
  );
}

Profile.defaultProps = {};
