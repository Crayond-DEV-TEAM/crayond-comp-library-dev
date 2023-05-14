export const inputField_Style = {
  labelSx: {
    fontSize: '12px',
  },
  textFieldSx: {
    opacity: 1,
    '& .MuiOutlinedInput-input': {
      width: '100%',
      fontWeight: 'normal',
      // '& .MuiTextField-root': {
      //   mt: 1,
      // },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '4px',
        border: '1.5px solid',
        borderColor: '#E9E9E9',
      },
      '&:hover fieldset': {
        borderColor: '#E9E9E9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E9E9E9',
      },
    },
    '& .MuiFormHelperText-root': {
      mx: 0,
    },
    
  },
};
