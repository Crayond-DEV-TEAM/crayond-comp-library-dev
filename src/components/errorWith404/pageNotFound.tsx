import { Box, Typography } from '@mui/material';
import lightTheme from '../../theme/lightTheme';
import { BasicButtons } from '../button';
import { pageNotfoundStyle } from './style';

const PageNotFound = (props: any) => {
  const {
    pageNotFoundIcon,
    pageNotFoundText,
    goBackButton,
    ButtonBlockStyle,
    messageTextStyle,
    rootStyle,
    iconBlockStyle,
  } = props;

  return (
    <>
      <Box sx={{ ...pageNotfoundStyle.rootStyle, ...rootStyle }}>
        <Box sx={{ ...pageNotfoundStyle.iconBlock, iconBlockStyle }}>
          {pageNotFoundIcon?.icon}
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

PageNotFound.defaultProps = {
  pageNotFoundIcon: {
    icon: '',
  },
  goBackButton: {
    label: '',
    onClick: () => {},
    style: {},
  },
  pageNotFoundText: '',
  ButtonBlockStyle: {},
  messageTextStyle: {},
  rootStyle: {},
  iconBlockStyle: {},
};
