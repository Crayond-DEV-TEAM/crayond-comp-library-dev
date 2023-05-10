import { Autocomplete, Box, TextField } from '@mui/material';
import { mobileInput_style } from './style';

export function SimpleSelect(props: any) {
  const {
    placeholder = '',
    id = '',
    value,
    options = [],
    flag = {},
    disabled = false,
    handleChangeSelect = () => false,
    className = '',
    dropDownStyle={},
    ...rest
  } = props;
  const getValue = (value: any, options: any) => {
    if (value && options?.length > 0) {
      return options.filter((val: any) => val.value === value)?.[0];
    }
    return value;
  };

  const giveMeValueLabel = (option: any) => `${option?.emoji} ${option?.dial_code}`;

  return (
    <Box sx={mobileInput_style.rootStyle} className={`${className}`} {...rest}>
      {/* label Of Mobile Input */}
      <Autocomplete
        id={id}
        sx={{...mobileInput_style.autocompleteSx,...dropDownStyle}}
        placeholder={placeholder}
        options={options}
        getOptionLabel={(option) => giveMeValueLabel(option)}
        disabled={disabled}
        onChange={(event, value) => handleChangeSelect(value?.value)}
        defaultValue={getValue(value, options)}
        disableClearable
        renderInput={(params) => (
          <TextField

            {...params}
            label=""
            variant="outlined"
            placeholder={placeholder}
            autoComplete="true"
          />
        )}
      />
    </Box>
  );
}
