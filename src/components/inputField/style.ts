export const inputField_Style = {
  labelSx: {
    fontSize: '12px',
    marginRight:"5px",
    marginBottom:"8px",
    color:"#3B3B3B",

    "& span":{
      color:"#F44F5A",
    }
  },
  textFieldSx: {
    '& .MuiOutlinedInput-input': {
      width: '100%',
      fontWeight: 'normal',
      padding:"12px 16px"
      // '& .MuiTextField-root': {
      //   mt: 1,
      // },
    },
    '& .Mui-focused.MuiOutlinedInput-notchedOutline':{
      borderColor: '#E9E9E9 !important',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '4px',
        border: '1px solid',
        borderColor: '#E9E9E9 ',
       
      },
      '&:hover fieldset': {
        borderColor: 'primary.main',
      },
      '& .Mui-focused fieldset': {
        borderColor: 'primary.main',
      },
    },
  },
};
