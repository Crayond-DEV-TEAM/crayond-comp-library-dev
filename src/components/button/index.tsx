import Button from '@mui/material/Button';
import {ButtonProps} from './props';


export const BasicButtons = ({ inLineStyles,...props }: ButtonProps) => {
  return (
    <Button style={...inLineStyles}{...props}>{props?.children}</Button>
  );
};

BasicButtons.defaultProps = {
  id: "",
  type: "",
  name: "",
  onClick: ()=> {},
  inLineStyles: {},
  size: "medium",
  variant: "contained",
  color: "primary",
  children: null,
  className: "button",
  disabled: false,
  backgroundColor: null,
  href: ""
};
