import React from 'react';
import {
  Box,
  ToggleButtonGroup,
  InputLabel,
  ToggleButton,
  Typography,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './styles';
export function SelectedChips(props: any) {
  const {
    disabled,
    onChange,
    value,
    selected,
    options = [],
    exclusive,
    error = false,
    errorMessage,
    label,
    required,
    ...rest
  } = props;
  return (
    <Box>
      <InputLabel
        className='ToggleLabel"'
        sx={styles.staticLabel}
        id="select-label"
      >
        {label} {required && <span>*</span>}
      </InputLabel>

      <ToggleButtonGroup
        className="ToggleButtonGroup"
        value={value}
        onChange={onChange}
        exclusive={exclusive}
        sx={styles.toggleButtonGroup}
      >
        {options.map((option: any, index: number) => (
          <ToggleButton
            className="ToggleButton"
            key={option?.id || index + option.value}
            value={option.value}
            disabled={option?.disabled}
            sx={styles.selectChip}
            {...rest}
          >
            {option?.label ?? 'No Label'}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
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
}
SelectedChips.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.func,
  exclusive: PropTypes.bool,
};
SelectedChips.defaultProps = {
  disabled: false,
  selected: false,
  exclusive: false,
};
export default SelectedChips;
