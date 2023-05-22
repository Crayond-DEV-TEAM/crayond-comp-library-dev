import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const useStyles = {
  margin: {
    margin: '0px',
    height: '100%',
    width: '100%',
    '& .MuiOutlinedInput-root': {
      paddingRight: '2px !important',
      // width: '115px'
    },
  },
  label: {
    color: 'rgba(146, 151, 165, 1)',
    textTransform: 'uppercase',
    margin: '0px 2px',
  },
  autocomplete: {
    width: 89,
    '& fieldset': {
      border: 'none',
    },
    "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
      fontSize: '14px',
      padding: '0px 3px',
    },
  },
};

const getValue = (value: any, options: any) => {
  if (value && options?.length > 0) {
    return options.filter((val: any) => val?.dial_code === value)?.[0];
  } else {
    return value;
  }
};

export const SimpleSelect = ({
  placeholder = '',
  id = '',
  options = [],
  disabled = false,
  handleChangeSelect,
  value = '',
}: any) => {
  const classes = useStyles;

  const giveMeValueLabel = (option: any) => {
    const img = <img src={option?.image} alt={option?.emoji} />;
    return `${option?.emoji} ${option?.dial_code}`;
  };

  const renderOption = (props: any, option: any, { selected }: any) => {
    return (
      <Box {...props} sx={{ paddingRight: '12px' }}>
        <img
          src={option.image}
          alt={option.label}
          style={{ width: '16px', marginRight: '5px' }}
        />
        <Typography sx={{ fontSize: '12px' }}>{option.dial_code}</Typography>
      </Box>
    );
  };

  return (
    <Box sx={classes.margin}>
      <Autocomplete
        id={id}
        sx={classes.autocomplete}
        placeholder={placeholder}
        options={options}
        getOptionLabel={(option) => giveMeValueLabel(option)}
        disabled={disabled}
        renderOption={renderOption}
        onChange={(event, value) => handleChangeSelect(value?.dial_code)}
        value={getValue(value, options)}
        disableClearable
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            variant="outlined"
            placeholder={placeholder}
            autoComplete={'true'}
          />
        )}
      />
    </Box>
  );
};
