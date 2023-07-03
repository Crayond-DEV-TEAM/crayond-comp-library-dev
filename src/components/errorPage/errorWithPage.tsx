import { Box, SxProps, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import InfographicIcon from '../../assets/errorWithInfographic';
import lightTheme from '../../theme/lightTheme';
import { BasicButtons } from '../button';
import { ErrorWithPageProps, buttonInterface } from './props';
import { infogarphicStyle } from './styles';

const ErrorWithPage = (props: ErrorWithPageProps) => {
  const {
    open,
    handleClose,
    cardRootStyle,
    buttons,
    infogarphicIcon,
    infogarphicMessage,
    textBlockStyle,
    iconStyleBlock,
    messageTextStyle,
    buttonBlock,
    onBackdropClick,
  } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        onBackdropClick={onBackdropClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...infogarphicStyle.cardRoot, ...cardRootStyle } as SxProps}>
          <Box sx={{ ...infogarphicStyle.iconStyle, ...iconStyleBlock }}>
            <InfographicIcon />
            {infogarphicIcon}
          </Box>
          <Box sx={{ ...infogarphicStyle.textBlock, textBlockStyle }as SxProps}>
            <Typography
              sx={{ ...infogarphicStyle.messageText, ...messageTextStyle }as SxProps}
            >
              {infogarphicMessage}
            </Typography>
          </Box>
          <Box sx={{ ...infogarphicStyle.buttonBlock, ...buttonBlock }}>
            {buttons?.map((button: buttonInterface) => (
              <BasicButtons
                inLineStyles={{
                  background: lightTheme.palette.primary.contrastText,
                  color: lightTheme.palette.primary.main,
                  padding: '10px',
                  ...button?.style,
                }}
                onClick={button?.onClick}
              >
                {button?.label}
              </BasicButtons>
            ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ErrorWithPage;

ErrorWithPage.defaultProps = {
  open: false,
  handleClose: () => {},
  onBackdropClick: () => {},
  cardRootStyle: {},
  infogarphicIcon: '',
  infogarphicMessage: ' ',
  textBlockStyle: {},
  iconStyleBlock: {},
  messageTextStyle: {},
  buttonBlock: {},
  buttons: [],
};
