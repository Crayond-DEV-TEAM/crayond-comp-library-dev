import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { infogarphicStyle } from './styles';
import { BasicButtons } from '../button';
import React from 'react';
import InfographicIcon from '../../assets/errorWithInfographic';
import lightTheme from '../../theme/lightTheme';

const ErrorWithInfographic = (props: any) => {
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
        <Box sx={{ ...infogarphicStyle.cardRoot, ...cardRootStyle }}>
          <Box sx={{ ...infogarphicStyle.iconStyle, ...iconStyleBlock }}>
            <InfographicIcon />
            {infogarphicIcon}
          </Box>
          <Box sx={{ ...infogarphicStyle.textBlock, textBlockStyle }}>
            <Typography
              sx={{ ...infogarphicStyle.messageText, ...messageTextStyle }}
            >
              {infogarphicMessage}
            </Typography>
          </Box>
          <Box sx={{ ...infogarphicStyle.buttonBlock, ...buttonBlock }}>
            {buttons?.map((button: any) => (
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

export default ErrorWithInfographic;

ErrorWithInfographic.defaultProps = {
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
