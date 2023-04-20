import Typography from '@mui/material/Typography';
import { styles } from './styles';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

interface AlertBoxProps {}
export default function AlertBox(props: any) {
  const { title, description, primaryText, secondaryText, icon, handleAlertClose, alertOpen } = props;

  return (
    <div>
      <Dialog
        open={alertOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>handleAlertClose(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={styles.modal}
      >
        <Box sx={styles.modalContainer}>
          {icon && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '12px',
              }}
            >
              {icon}
            </Box>
          )}
          <DialogTitle sx={styles.modalTitle}>{title}</DialogTitle>
          {description && (
            <DialogContent>
              <DialogContentText
                sx={styles.modalDes}
                id="alert-dialog-slide-description"
              >
                {description}
              </DialogContentText>
            </DialogContent>
          )}
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button sx={styles.modalPriBtn} onClick={()=>handleAlertClose(true)}>
              {primaryText}
            </Button>
            <Button sx={styles.modalSecBtn} onClick={()=>handleAlertClose(false)}>
              {secondaryText}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

AlertBox.defaultProps = {};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
