import Button from '@mui/material/Button';
import { ButtonProps } from './props';

export const BasicButtons = ({ inLineStyles, bgColor, ...props }: ButtonProps) => {
  return (
    <Button style={inLineStyles} sx={{backgroundColor: bgColor}} {...props} >
      {props?.children}
    </Button>
  );
};

BasicButtons.defaultProps = {
  id: '',
  type: '',
  name: '',
  onClick: () => {},
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
