import { ProfileProps } from './props';
import { Avatar, Badge, Container, Grid, Typography, Box } from '@mui/material';
import { styles } from './styles';
import DeleteIcon from '../../assets/deleteIcon';
import { BasicButtons } from '../button';
import { RenderForm } from '../renderForm';

export default function Profile(props: ProfileProps) {
  const {
    isEditMode,
    titleOptions,
    bgColor,
    paddingAll,
    renderForm,
    userNameStyle,
    onSubmitBtn,
    uploadOptions,
    username,
  } = props;

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
              <Grid item xs={12} sm={3.5} md={3} lg={2}>
                <Box>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    badgeContent={
                      <Box
                        sx={styles.deleteContainer}
                        onClick={() => uploadOptions?.deleteProfile()}
                      >
                        <DeleteIcon color={'#fff'} />
                      </Box>
                    }
                  >
                    <Avatar
                      variant="rounded"
                      src={uploadOptions?.imgScr}
                      sx={styles.profileImg}
                    >
                      {username[0]}
                    </Avatar>
                  </Badge>
                </Box>
                <BasicButtons
                  onClick={(e) => {
                    uploadOptions?.uploadProfile(e, '');
                  }}
                  inLineStyles={styles.uploadImageBtn}
                >
                  Upload Image
                </BasicButtons>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4.5} xl={4.5}>
                {/* <Dropdown
                  selectOption={[
                    { label: 'one', value: 'one' },
                    { label: 'two', value: 'two' },
                    { label: 'three', value: 'three' },
                  ]}
                  label={'My Label'}
                  value={""}
                  required
                  variant={"filled"}
                  placeholder='Select'
                  isError={false}
                  errorMessage='tyu'
                  // helperText='we'
                /> */}
                <Typography sx={{ ...styles.userName, ...userNameStyle }}>
                  {username}
                </Typography>
                <RenderForm
                  formList={renderForm?.formList}
                  isEditMode={isEditMode}
                />
                <Box display={'flex'} justifyContent={'flex-end'} mt={3}>
                  <BasicButtons
                    inLineStyles={styles.uploadImageBtn}
                    onClick={(e) => {
                      onSubmitBtn(e);
                    }}
                  >
                    {isEditMode ? 'Save' : 'Edit'}
                  </BasicButtons>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Box height={'40px'} />
    </Box>
  );
}

// Profile.defaultProps = {};
