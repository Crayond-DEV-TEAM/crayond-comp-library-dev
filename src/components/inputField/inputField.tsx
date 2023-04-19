import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { InputFieldProps } from './props';

const InputField: React.FC<InputFieldProps> = ({ label, ...rest }) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      label={label}
      {...rest}
    />
  );
};

export default InputField;
