import { Box, SxProps, Typography, useTheme } from '@mui/material';
import Modal from '@mui/material/Modal';
import { BasicButtons } from '../button';
import { errorStyle } from './style';
import { buttonInterface, errorWithIconProps } from './props';

const ErrorModal = (props: errorWithIconProps) => {
  const {
    open,
    errorIconUrl,
    errorIconComponent,
    component,
    componentStyle,
    buttons,
    errorMessage,
    cardRootStyle,
    errorIconStyle,
    errorIconUrlStyle,
    errorMessageTextStyle,
    errorButtonBlockStyle,
    errorMessageBlockStyle,
    handleClose,
    onBackdropClick,
  } = props;

  const lightTheme = useTheme();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onBackdropClick={onBackdropClick}
      >
        <Box sx={{ ...errorStyle.cardRoot, ...cardRootStyle } as SxProps}>
          <Box sx={{ ...errorStyle.errorIconStyle, ...errorIconStyle }}>
            {errorIconUrl &&
            <Box>
                <img
                  src={errorIconUrl}
                  alt={'error_img'}
                  style={{...errorIconUrlStyle}}
                />
              </Box>
            }
            {errorIconComponent && <Box>{errorIconComponent}</Box>}
          </Box>
          <Box
            sx={{
              ...errorStyle.errorMessageBlockStyle,
              ...errorMessageBlockStyle,
            }}
          >
            <Typography
              sx={
                {
                  ...errorStyle.errorMessageText,
                  ...errorMessageTextStyle,
                } as SxProps
              }
            >
              {errorMessage}
            </Typography>
          </Box>
          {component && (
            <Box sx={{ ...componentStyle, marginBottom: '30px' }}>
              {component}
            </Box>
          )}
          <Box
            sx={{
              ...errorStyle.errorButtonBlockStyle,
              ...errorButtonBlockStyle,
            }}
          >
            {buttons?.map((button: buttonInterface) => (
              <BasicButtons
                inLineStyles={{
                  background: lightTheme.palette.primary.light,
                  color: lightTheme.palette.primary.main,
                  ...button?.style,
                }}
                onClick={() => button?.onClick()}
              >
                {button?.label}
              </BasicButtons>
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ErrorModal;

ErrorModal.defaultProps = {
  open: false,
  errorIconUrl:"",
  errorIconComponent: '',
  componentStyle:{},
  component: '',
  buttons: [],
  handleClose: () => {},
  onBackdropClick: () => {},
  errorMessage: '',
  cardRootStyle: {},
  errorIconStyle: {},
  errorIconUrlStyle:{},
  errorMessageTextStyle: {},
  errorButtonBlockStyle: {},
  errorMessageBlockStyle: {},
};
