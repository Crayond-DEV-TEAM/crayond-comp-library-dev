import { TextField } from '@mui/material';
import React from 'react';
import { InputFieldProps } from './props';
import { inputField_Style } from './style';

const InputField: React.FC<InputFieldProps> = ({ label, textFieldStyle, ...rest }) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      label={label}
      sx={{ ...inputField_Style.textFieldSx, ...textFieldStyle }}
      {...rest}
    />
  );
};

export default InputField;
