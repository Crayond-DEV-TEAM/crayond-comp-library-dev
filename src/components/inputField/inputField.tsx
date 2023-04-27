import { TextField } from '@mui/material';
import React from 'react';
import { InputFieldProps } from './props';
import { inputField_Style } from './style';

const InputField: React.FC<InputFieldProps> = ({ label, textFieldStyle={}, ...rest }) => {
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
InputField.defaultProps = {
  label: "",
  type: "text",
  variant: "standard",
  endIcon: null,
  id: "",
  value: "",
  rowMax: Infinity,
  size: undefined,
  rowMin: 1,
  isError: "",
  disabled: false,
  fullwidth: false,
  isMulti: false,
  fullWidth: false,
  isReadOnly: false,
  helperText: "",
  placeholder: "",
  errorMessage: "",
  className: "",
  endAdornment: {},
  defaultValue: {},
  inLineStyles: {},
  startAdornments: null,
  endAdornments: null,
  textFieldStyle: {},
  onChange: undefined  
};