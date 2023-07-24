import { Avatar, Box, Grid, Icon, Typography } from '@mui/material';
import { BasicButtons } from '../button';
import { ViewerProps } from './props';
import { styles } from './style';

export default function Viewer(props: ViewerProps) {
  const { headerOptions, rootStyle, viewBody } = props;

  return (
    <Box sx={{ ...styles.rootSx, ...rootStyle }}>
      {/* header */}
      {headerOptions?.title && (
        <Box sx={{ ...styles?.titleBox, ...headerOptions?.titleBoxStyle }}>
          <Typography
            sx={{
              fontSize: headerOptions?.fontSize,
              fontWeight: headerOptions?.fontWeight,
              color: headerOptions?.color,
            }}
          >
            {headerOptions?.title}
          </Typography>
        </Box>
      )}
      {/* viewbody */}
      <Box
        sx={{
          ...styles.viewBody,
          ...viewBody?.viewBodyStyle,
        }}
      >
        <Grid container sx={{ ...viewBody?.gridStyle }}>
          {/* profileImageSection */}
          <Grid
            item
            {...viewBody?.profileimage?.breakpoints}
            sx={{ ...viewBody?.profileimage?.profileimgContainer }}
          >
            {viewBody?.profileimage && (
              <Box
                sx={{
                  ...styles.avatar,
                  ...viewBody?.profileimage?.avatarconStyle,
                }}
              >
                <Avatar
                  variant={viewBody?.profileimage?.variant}
                  src={viewBody?.profileimage?.imgSrc}
                  sx={{
                    ...styles.profileImg,
                    ...viewBody?.profileimage?.profileImgStyle,
                  }}
                >
                  {viewBody?.form?.title && viewBody?.form?.title.length > 0
                    ? viewBody?.form?.title[0]
                    : null}
                </Avatar>
                {viewBody?.profileimage?.profileImgEditIcon && (
                  <Box
                    sx={{
                      ...styles.profileImgEdit,
                      ...viewBody?.profileimage?.profileImgEditStyle,
                    }}
                    onClick={viewBody?.profileimage?.onClick}
                  >
                    <Icon>{viewBody.profileimage.profileImgEditIcon}</Icon>
                  </Box>
                )}

              </Box>
            )}
            {viewBody?.profileimage?.customComp && (
              <>{viewBody?.profileimage?.customComp}</>
            )}
          </Grid>
          {/* formsection */}
          <Grid
            item
            {...viewBody?.form?.breakpoints}
            sx={{ ...viewBody?.form?.formContainer }}
          >
            {viewBody?.form?.title && (
              <Typography
                sx={{
                  ...styles.title,
                  ...viewBody?.form?.titleStyle,
                }}
              >
                {viewBody.form.title}
              </Typography>
            )}
            {viewBody?.form?.subTitle && (
              <Typography
                sx={{
                  ...styles?.subTitleSx,
                  ...viewBody?.form?.subTitleStyle,
                }}
              >
                {viewBody.form.subTitle}
              </Typography>
            )}
            {viewBody?.form?.description && (
              <Typography
                sx={{
                  ...styles?.descriptionSx,
                  ...viewBody?.form?.descriptionStyle,
                }}
              >
                {viewBody.form.description}
              </Typography>
            )}
            <Grid container sx={{ ...viewBody?.form?.formListContainer }}>
              {viewBody?.form?.formList?.map((form: any, index: number) => (
                <Grid item {...form?.breakPoint}>
                  <Box sx={{ display: 'flex', ...form?.listWraper }}>
                    {form?.icon && (
                      <Icon sx={{ ...styles.viewIconSx, ...form?.iconStyle }}>
                        {form?.icon}
                      </Icon>
                    )}
                    <Box>
                      {form?.label && (
                        <Typography
                          sx={{ ...styles?.viewLabel, ...form?.labelStyle }}
                        >
                          {form.label}
                        </Typography>
                      )}
                      {form?.value && (
                        <Typography
                          sx={{ ...styles?.viewValue, ...form?.valueStyle }}
                        >
                          {form?.value}
                        </Typography>
                      )}
                      {form?.customComp && <>{form?.customComp}</>}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Grid container>
              {viewBody?.btnList?.map((btn: any, index: number) => (
                <Grid item {...btn?.breakPoint}>
                  <Box sx={{ ...btn?.btnListConStyle }}>
                    <BasicButtons
                      inLineStyles={{ ...styles.editButton, ...btn?.btnStyle }}
                      onClick={btn?.onClick}
                    >
                      {btn?.buttonText}
                    </BasicButtons>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

Viewer.defaultProps = {
  rootStyle: {},
  viewBody: {
    viewBodyStyle: {},
    gridStyle: {},
    profileimage: {
      breakpoints: {},
      profileImgStyle: {},
      imgSrc: '',
      variant: 'rounded',
      profileimgContainer: {},
      customComp: <></>,
      profileImgEditIcon: <></>,
      avatarconStyle: {},
      profileImgEditStyle: {},
      onClick: () => { },
    },
    form: {
      breakpoints: {},
      title: '',
      subTitle: '',
      description: '',
      titleStyle: {},
      descriptionStyle: {},
      subTitleStyle: {},
      formContainer: {},
      formListContainer: {},
      formList: [],
    },
    btnList: [],
  },
  headerOptions: {
    title: '',
    fontSize: '',
    fontWeight: '',
    color: '',
    titleBoxStyle: {},
  },
};
