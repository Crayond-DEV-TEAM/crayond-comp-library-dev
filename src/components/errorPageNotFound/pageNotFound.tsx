import { Box, SxProps, Typography } from '@mui/material';
import lightTheme from '../../theme/lightTheme';
import { BasicButtons } from '../button';
import { pageNotfoundStyle } from './style';
import { pageNotFound } from './props';
import AlertIcon from '../../assets/alertIcon';

const PageNotFound = (props: pageNotFound) => {
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
        <Box sx={{ ...pageNotfoundStyle.iconBlock, ...iconBlockStyle } as SxProps}>
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

PageNotFound.args = {
  open: true,
  errorIcon: <AlertIcon />,
  component: '',
  buttons: [
    {
      label: 'open',
      onClick: () => {},
      style: { background: '#EFEEFB', color: '#665CD7', padding: '10px' },
    },
    {
      label: 'Close',
      onClick: () => {},
      style: { background: '#F44F5A', color: '#FFFF', padding: '10px' },
    },
  ],
  handleClose: () => false,
  onBackdropClick: () => false,
  errorMessage: 'Are you sure, would you like to deactivate signal?',
  cardRootStyle: {},
  errorIconStyle: {},
  errorMessageTextStyle: {},
  errorButtonBlockStyle: {},
  errorMessageBlockStyle: {},
};
