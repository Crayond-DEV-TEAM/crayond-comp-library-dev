export const styles = {
    papover:{
  "& .MuiPaper-root-MuiPopover-paper":{
    boxShadow:"none"
  }
    },
    mainBox: {
      "& .MuiPopover-paper":{
        boxShadow:"none"
      },
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '4px',
      border: ' 1px solid #E9E9E9',
      '&: hover': {
        border: ' 1px solid #B2ADEB',
      },
      '&:focus-within': {
        border: ' 1px solid#665CD7',
      },
    },
  
    inputStyleRoot: {
      '& .MuiSvgIcon-root': {
        display: 'none',
      },
      '&.MuiFormControl-root': {
        border: 'none',
      },
      '& .MuiOutlinedInput-input': {
        marginLeft: '12px',
      },
      '& .MuiOutlinedInput-root': {
      // flexDirection: 'row-reverse',
  
        width: '100%',
        '&:focus': {
          outline: 'none',
        },
        alignItems: 'center',
        '& fieldset': {
          border: 'none',
        },
        '&:hover fieldset': {
          border: 'none',
        },
        '&:focused fieldset': {
          border: 'none',
        },
      },
      '& .MuiFormLabel-root': {
        background: '#fff',
        padding: '0px 8px',
        opacity: 0,
      },
    },
  
    divider: {
      maxHeight: '30px',
      marginTop: '13px',
      color: '#929292',
    },
    calendarBox:{
      display: 'flex',
      flexWrap: 'wrap',
      width: 'fit-content',
    },

    calendarContainer: {
      border: '1px solid #665CD7',
      borderRadius: '8px',
      boxShadow: ' 0px 8px 12px #00000014',
      '& .MuiPickersPopper-paper': {
        borderRadius: '8px',
      },
      '& .MuiDateRangeCalendar-monthContainer': {
        borderRadius: '8px',
      },
    },
  };