import { ProfileThreeProps } from './props';
import {
  Avatar,
  Divider,
  Badge,
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { styles } from './styles';
import DeleteIcon from '../../assets/deleteIcon';
import { BasicButtons } from '../button';
import { RenderForm } from '../renderForm';
import UploadIcon from '../../assets/uploadIcon';

export default function ProfileThree(props: ProfileThreeProps) {
  const {
    isEditMode,
    titleOptions,
    bgColor,
    paddingAll,
    renderForm, 
    onSubmitBtn,
    uploadOptions,
  } = props;

  return (
    <Box sx={{ backgroundColor: bgColor, padding: paddingAll }}>
      <Container>
        <Box sx={styles.profileContainer}>
          {titleOptions?.title && (
            <Box sx={styles?.titleBox}>
              <Divider textAlign="left">
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                  {titleOptions?.icon && <>{titleOptions?.icon}</>}
                  <Typography
                    sx={{
                      fontSize: titleOptions?.fontSize,
                      fontWeight: titleOptions?.fontWeight,
                      color: titleOptions?.color,
                    }}
                  >
                    {titleOptions?.title}
                  </Typography>
                  <span className="circle"></span>
                </Box>
              </Divider>
            </Box>
          )}
          <Box sx={styles.profileDetails}>
            <Grid container justifyContent={'center'}>
              <Grid item xs={12} sm={12} md={4} lg={3.2}>
                <Box>
                  <Avatar
                    variant="rounded"
                    src={uploadOptions?.imgScr}
                    sx={styles.profileImg}
                  >
                  </Avatar>
                </Box>
                <BasicButtons
                  startIcon={<UploadIcon />}
                  variant="outlined"
                  onClick={(e) => {
                    uploadOptions?.uploadProfile(e, '');
                  }}
                  inLineStyles={styles.uploadImageBtn}
                >
                  Upload
                </BasicButtons>
                <BasicButtons
                  startIcon={<DeleteIcon />}
                  variant="outlined"
                  onClick={() => uploadOptions?.deleteProfile()}
                  inLineStyles={styles.uploadImageBtn}
                >
                  Remove
                </BasicButtons>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={8} xl={8.5}>
                <RenderForm
                  formList={renderForm?.formList}
                  isEditMode={isEditMode}
                  gridStyle={renderForm?.gridStyle}
                />
                <Box display={'flex'} justifyContent={'flex-end'} mt={3}>
                  <BasicButtons
                    variant="outlined"
                    inLineStyles={styles.secondaryBtn}
                    onClick={(e) => {
                      onSubmitBtn(e);
                    }}
                  >
                    Cancel
                  </BasicButtons>
                  <BasicButtons
                    inLineStyles={styles.primaryBtn}
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
