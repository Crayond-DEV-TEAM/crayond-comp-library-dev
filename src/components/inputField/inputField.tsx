import { TextField, Typography } from '@mui/material';
import React from 'react';
import { InputFieldProps } from './props';
import { inputField_Style } from './style';

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  floatingLable,
  textFieldStyle = {},
  labelStyle={},
  ...rest
}) => {
  return (
    <>
      <Typography sx={{...inputField_Style.labelSx, ...labelStyle}}>{label}</Typography>
      <TextField
        variant="outlined"
        margin="normal"
        label={floatingLable}
        value={value}
        sx={{ ...inputField_Style.textFieldSx, ...textFieldStyle }}
        {...rest}
      />
    </>
  );
};

export default InputField;
InputField.defaultProps = {
  label: '',
  type: 'text',
  variant: 'outlined',
  endIcon: null,
  id: '',
  value: '',
  rowMax: Infinity,
  size: undefined,
  rowMin: 1,
  isError: '',
  disabled: false,
  fullwidth: false,
  isMulti: false,
  fullWidth: false,
  isReadOnly: false,
  helperText: '',
  placeholder: '',
  className: '',
  endAdornment: {},
  defaultValue: {},
  inLineStyles: {},
  startAdornments: null,
  endAdornments: null,
  textFieldStyle: {},
  labelStyle:{},
  onChange: undefined,
  floatingLable:'',
};
