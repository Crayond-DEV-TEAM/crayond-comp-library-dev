export const dropdown_style = {
  rootSx: {
    '.MuiPaper-root': {
      left: 4,
    },
    // '& .MuiOutlinedInput-notchedOutline': {
    //   borderWidth: '1.5px',
    //   borderColor: '#888888',
    //   borderRadius: 2,
    // },
    // '&:hover .MuiOutlinedInput-notchedOutline': {
    //   borderColor: '#888888',
    // },
    '& .MuiSelect-icon': {
      fill: '#888888',
      opacity: '40%',
    },
  },
  formRoot: {
    '& .MuiFormLabel-root': {
      top: '-8px',
    },
    '& .MuiFormLabel-root.MuiFormLabel-filled, .MuiFormLabel-root.Mui-focused':
      {
        top: '0px',
      },
    '& span': {
      color: '#FF4D4A',
    },
  },
  staticLabel:{
marginBottom:"8px",
color:"#3B3B3B",
fontSize:"12px",
"& span":{
  color: '#FF4D4A',
}
  },
  optionListSx: {
    boxShadow: 1,
    '& .MuiPaper-root': {
      border: '1.5px solid',
      borderColor: 'grey.200',
      boxShadow: '0px -5px 10px #0000000A',
      mt: 1,
    },
  },
  menuitem: {
    direction: 'rtl',
  },
  text: {
    color: 'primary.main',
    fontSize: '14px',
    fontWeight: 500,
    mr: 1,
  },
  subText: {
    color: 'text.secondary',
    fontSize: '12px',
    fontWeight: 500,
  },
};
