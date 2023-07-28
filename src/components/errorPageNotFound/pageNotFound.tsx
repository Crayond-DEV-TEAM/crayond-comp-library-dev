import { Box, SxProps, Typography, useTheme } from '@mui/material';
import { BasicButtons } from '../button';
import { pageNotFoundProps } from './props';
import { pageNotfoundStyle } from './style';

const PageNotFound = (props: pageNotFoundProps) => {
  const {
    pageNotFoundIconComponent,
    pageNotFoundIconUrl,
    urlImgHeight,
    urlImgWidth,
    urlImgStyle,
    pageNotFoundText,
    goBackButton,
    ButtonBlockStyle,
    messageTextStyle,
    rootStyle,
    iconBlockStyle,
  } = props;

  const lightTheme = useTheme();

  return (
    <>
      <Box sx={{ ...pageNotfoundStyle.rootStyle, ...rootStyle }}>
        <Box
          sx={{ ...pageNotfoundStyle.iconBlock, ...iconBlockStyle } as SxProps}
        >
          {pageNotFoundIconComponent && pageNotFoundIconComponent}
          {pageNotFoundIconUrl && (
            <img src={pageNotFoundIconUrl}  height={urlImgHeight} width={urlImgWidth} style={{...urlImgStyle}}/>
          )}
        </Box>
        <Box sx={{ ...pageNotfoundStyle.pageNotFoundText }}>
          <Typography
            sx={{
              ...pageNotfoundStyle.pageNotFoundTextStyle,
              ...messageTextStyle,
            }}
          >
            {pageNotFoundText}
          </Typography>
        </Box>
        <Box sx={{ ...pageNotfoundStyle.ButtonStyle, ...ButtonBlockStyle }}>
          <BasicButtons
            inLineStyles={{
              background: lightTheme.palette.primary.light,
              color: lightTheme.palette.primary.main,
              ...goBackButton?.style,
            }}
            onClick={goBackButton?.onClick}
          >
            {goBackButton?.label}
          </BasicButtons>
        </Box>
      </Box>
    </>
  );
};

export default PageNotFound;

PageNotFound.args = {
  open: true,
  errorIcon: undefined,
  pageNotFoundIconComponent: '',
  pageNotFoundIconUrl: '',
  urlImgHeight:0,
  urlImgWidth:0,
  urlImgStyle:{},
  buttons: [],
  handleClose: () => false,
  onBackdropClick: () => false,

  errorMessage: '',
  cardRootStyle: {},
  errorIconStyle: {},
  errorMessageTextStyle: {},
  errorButtonBlockStyle: {},
  errorMessageBlockStyle: {},
};
