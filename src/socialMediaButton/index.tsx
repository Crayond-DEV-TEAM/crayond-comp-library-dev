import Button from '@mui/material/Button';
import { SocialMediaButtonProps } from './props';
import DeleteIcon from '../assets/deleteIcon';
import { Box, Typography } from '@mui/material';

export const SocialMediaButton = ({ inLineStyles, bgColor, ...props }: SocialMediaButtonProps) => {
  return (
    // <Button
    //   style={inLineStyles}
    //   fullWidth
    //   variant="outlined"
    //   sx={{
    //     // backgroundColor: '#F8F8F8',
    //     // '&:hover': {
    //     //   backgroundColor: '#F8F8F8',
    //     // },
    //   }} {...props} >
    //   {props?.children}
    // </Button>
    <Box
      sx={{
        bgcolor: '#F8F8F8',
        p: 1.5,
        borderRadius: '4px'
      }}>
      <Typography
        sx={{
          textAlign: 'center',
          color: '#3B3B3B',
          fontSize: '14px'
        }}
      >
        Sign up with Google
      </Typography>
    </Box>
  );
};

SocialMediaButton.defaultProps = {
  id: '',
  type: '',
  name: '',
  onClick: () => { },
  inLineStyles: {},
  size: 'medium',
  variant: 'contained',
  color: 'primary',
  children: null,
  className: 'button',
  disabled: false,
  bgColor: "",
  href: '',
};
