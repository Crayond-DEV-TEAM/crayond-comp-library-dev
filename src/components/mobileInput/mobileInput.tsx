import { InputBase, Box, Typography, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { SimpleSelect } from './select';
import { styles } from './style';
import { Sample } from '../../utils/constants';

export const MobileInput = (props: any) => {
  const {
    error,
    errorMessage,
    required,
    label,
    labelStyle,
    inputStyle,
    ...reset
  } = props;
  const initialMobileCode = props?.value?.mobile_code ?? '+91';

  const [selectValue, setSelectValue] = React.useState({
    mobile: props?.value?.mobile ?? '',
    mobile_code: initialMobileCode,
  });

  const handleChangeSelect = (mobile_code: any) => {
    let newState = {
      mobile: selectValue.mobile,
      mobile_code,
    };

    setSelectValue(newState);
    props?.onChange(newState);
  };

  const onChangeInput = (mobile: any) => {
    // debugger;
    let newState = {
      mobile: mobile.replace('.', ''),
      mobile_code: selectValue.mobile_code,
    };

    setSelectValue(newState);
    props?.onChange(newState);
  };

  React.useEffect(() => {
    if (props?.value) {
      setSelectValue({
        ...selectValue,
        mobile: props?.value?.mobile ?? '',
        mobile_code: props?.value?.mobile_code ?? '+91',
      });
    }
    // eslint-disable-next-line
  }, [props?.value]);
  return (
    <Box>
      <InputLabel sx={{ ...styles.labelSx, ...labelStyle }}>
        {label} {required && <span>*</span>}
      </InputLabel>

      <Box
        sx={{
          ...styles.container,
          ...inputStyle,
          border: error ? '1px solid #F44F5A' : '1px solid #E9E9E9',
        }}
      >
        <Box
          sx={{
            ...styles.selectContainer,
            borderRight: error ? '1px solid #F44F5A' : ' 1px solid #E9E9E9',
          }}
        >
          <SimpleSelect
            //   sx={styles.select}
            options={Sample}
            handleChangeSelect={(code: any) => handleChangeSelect(code)}
            value={selectValue?.mobile_code ?? ''}
            disabled={props.isReadonly || props.disabled}
            errorValidation={props?.errorValidation}
          />
        </Box>
        {/* Mobile Number Input Field */}
        <Box sx={styles.inputContainer}>
          <InputBase
            type={'number'}
            disabled={(props?.readonly || props?.disabled) ?? false}
            fullWidth
            onInvalid={(e: any) => {
              e.preventDefault();
            }}
            placeholder={props.placeholder}
            onKeyPress={(e) => {
              if (e.key === 'e') {
                e.preventDefault();
              }
            }}
            {...reset}
            value={selectValue?.mobile}
            onChange={(e: any) => onChangeInput(e.target.value)}
          />
        </Box>
      </Box>
      <Typography
        sx={{ mt: 0.5, mb: 0, 'caret-color': 'transparent' }}
        variant="caption"
        color="error"
        component={'p'}
      >
        {error && errorMessage}&nbsp;
      </Typography>
    </Box>
  );
};
export default MobileInput;
// Specifies the required props for the component:
MobileInput.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  isReadonly: PropTypes.bool,
  // value: PropTypes.object,
  type: PropTypes.string,
  errorValidation: PropTypes.object,
  handleChange: PropTypes.func,
  onErrorOccured: PropTypes.func,
};
MobileInput.defaultProps = {
  onChange: () => {},
};
