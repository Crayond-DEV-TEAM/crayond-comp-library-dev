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
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={styles.modal}
      >
        <Box sx={styles.modalContainer}>
          <DialogTitle sx={styles.modalTitle}>
            {"Are you sure, would you like to deactivate?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={styles.modalDes}
              id="alert-dialog-slide-description"
            >
              Are you sure, would you like to deactivate team member?
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button sx={styles.modalSecBtn} onClick={handleClose}>Disagree</Button>
            <Button sx={styles.modalPriBtn} onClick={handleClose}>Agree</Button>
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
