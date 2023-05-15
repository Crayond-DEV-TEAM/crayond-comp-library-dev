export const inputField_Style = {
  labelSx: {
    fontSize: '12px',
    marginLeft:"5px",
    color:"#3B3B3B",

    "& span":{
      color:"#F44F5A"
    }
  },
  textFieldSx: {
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
        padding:"12px 16px"
      },
      // '&:hover fieldset': {
      //   borderColor: '#E9E9E9',
      // },
      // '&.Mui-focused fieldset': {
      //   borderColor: '#E9E9E9',
      // },
    },
  },
};
