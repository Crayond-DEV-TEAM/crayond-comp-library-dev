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
    overallSxProps,
    renderForm,
    uploadOptions,
    cardSxProps,
    gridContainerProps,
    afterProfileComponent,
  } = props;

  return (
    <Box sx={overallSxProps}>
      <Container>
        <Box sx={{ ...styles.profileContainer, ...cardSxProps }}>
          {titleOptions?.title && (
            <Box sx={styles?.titleBox}>
              <Divider textAlign="left">
                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                  {titleOptions?.icon && <>{titleOptions?.icon}</>}
                  <Typography sx={titleOptions?.sxProps}>
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
                    variant={uploadOptions?.variant}
                    src={uploadOptions?.imgScr}
                    sx={styles.profileImg}
                  ></Avatar>
                </Box>
                {uploadOptions?.buttonEnabled && (
                  <>
                    <BasicButtons
                      startIcon={<UploadIcon />}
                      variant="outlined"
                      component="label"
                      inLineStyles={styles.uploadImageBtn}
                    >
                      Upload
                      <input
                        onChange={(e) => {
                          uploadOptions?.uploadProfile(e);
                        }}
                        hidden
                        accept="image/*"
                        type="file"
                      />
                    </BasicButtons>
                    <BasicButtons
                      startIcon={<DeleteIcon />}
                      variant="outlined"
                      onClick={() => uploadOptions?.deleteProfile()}
                      inLineStyles={styles.uploadImageBtn}
                    >
                      Remove
                    </BasicButtons>
                  </>
                )}
                {afterProfileComponent && <Box>{afterProfileComponent}</Box>}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={8} xl={8.5}>
                <RenderForm
                  formList={renderForm?.formList}
                  isEditMode={isEditMode}
                  gridStyle={renderForm?.gridStyle}
                  gridContainerProps={gridContainerProps}
                  onSubmitFun={renderForm?.onSubmitFun}
                  defaultValues={renderForm?.defaultValues}
                  yupSchemaValidation={renderForm?.yupSchemaValidation}
                />
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
