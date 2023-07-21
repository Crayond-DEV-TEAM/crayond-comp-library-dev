export const styles = {
  titleSx: {
    fontSize: '20px',
    color: '#111111',
    fontWeight: 600,
    textAlign: 'left',
  },
  descSx: {
    fontSize: '14px',
    color: '#666666',
    textAlign: 'left',
    my: 2,
  },
  subTitleSx: {
    color: '#666666',
    fontSize: '16px',
    textAlign: 'left',
    fontWeight: 'bold',
    mb: 3.2,
  },
  dropdownStyle: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E9E9E9',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#665CD7',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#665CD7',
    },
  },
  inputStyle: {
    '& input[type="number"]': {
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield',
      appearance: 'textfield',
    },
    '& input[type="number"]::-webkit-inner-spin-button, & input[type="number"]::-webkit-outer-spin-button':
      {
        '-webkit-appearance': 'none',
        margin: 0,
      },
    '& input[type="number"]:hover': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
};
