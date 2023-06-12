export const styles = {
    root: {
      width: '100%',
      '& .MuiFormControl-root': {
        width: '100%',
      },
    },
    datePicker: {
      width: '100%',
      '& input': {
        fontSize: '14px',
        color: '#3B3B3B',
      },
    },
  
    inputStyleRoot: {
      border: '1px solid #E9E9E9',
      borderRadius: '4px',
      '& .MuiSvgIcon-root': {
        display: 'none',
      },
      '&.MuiFormControl-root': {
        border: 'none',
      },
      '& .MuiOutlinedInput-root': {
        // flexDirection: 'row-reverse',
        '&:hover fieldset': {
          border: ' 1px solid#B2ADEB',
        },
        '&:focused fieldset': {
          border: ' 1px solid#665CD7',
        },
      },
    },
  };