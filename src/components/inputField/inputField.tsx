import React from 'react';
import TextField from '@mui/material/TextField';
import Typography  from '@mui/material/Typography';
import InputLabel  from '@mui/material/InputLabel';
import { InputFieldProps } from './props';
import { inputField_Style } from './style';

const InputField: React.FC<InputFieldProps> = ({
  label,
  isLabelRequired =true,
  isErrorRequired=true,
  value, 
  inputStyle,
  labelStyle,
  labelVariant = 'standard',
  required,
  error,
  errorMessage,
  ...rest
}) => {
  return (
    <>
      {isLabelRequired && labelVariant === 'standard' && (
        <InputLabel
          sx={{ ...inputField_Style.labelSx, ...labelStyle }}
        >
          {label} {required && <span>*</span>}
        </InputLabel>
      )}
      <TextField
        variant="outlined"
        label={labelVariant === 'standard' ? '' : label}
        value={value}
        error={error}
        fullWidth
        sx={{ ...inputField_Style.textFieldSx, ...inputStyle }}
        {...rest}
      />
      { isErrorRequired && <Typography
        sx={{ mt: 0.5, mb: 0,"caret-color": "transparent"}}
        variant="caption"
        color="error"
        component={'p'}
      >
        {error && errorMessage}&nbsp;
      </Typography>}
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
  labelStyle: {},
  onChange: undefined,
  labelVariant:"standard",
  errorMessage:""
};