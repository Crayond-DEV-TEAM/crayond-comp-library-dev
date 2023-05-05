
export const mobileInput_style = {
  mobileInputStyledSx: {
    borderRadius: '8px',
    opacity: 1,
    '& .MuiOutlinedInput-input': {
      height: '10px',
      width: '100%',
      fontWeight: 600,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  rootWapperSx: {
    border: '1.5px solid #DBEAE8',
    '&.Mui-error': {
      borderColor: 'red',
    },
    borderRadius: '8px',
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    height: '38px',
  },
  NumberSx: {
    borderRight: '1px solid #DBEAE8',
  },
  rootStyle: {
    margin: '0px',
    height: '100%',
    width: '100%',
    '& .MuiOutlinedInput-root': {
      paddingRight: '20px !important',
    },
  },
  autocompleteSx: {
    width: 80,
    '& fieldset': {
      border: 'none',
    },
    "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
      padding: '0px 6px',
      fontWeight: 600,
    },
    '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
      backgroundColor: 'red',
    },
    '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
      padding: '7px 0px',
    },
    '& .MuiFormControl-root .MuiTextField-root .MuiOutlinedInput-input':{
      fontSize:'6px'
    }
  },
  helperTextStyleSx: {
    mt: 0.5,
    color: '#F44F5A',
    '&.Mui-error': {
      color: '#F44F5A',
    },
  },
  countrySx: {
    fontSize: '5px',
  },
};
