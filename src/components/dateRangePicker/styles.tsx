export const styles = {
  mainBox: {
    '&: hover': {
      border: ' 1px solid #B2ADEB',
    },
    '&:focus-within': {
      border: ' 1px solid#665CD7',
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
    '& .MuiOutlinedInput-input': {
      marginLeft: '12px',
    },
    '& .MuiOutlinedInput-root': {
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
    '& .MuiTypography-root': {
        //   opacity: 0,
        // '&::before': {
        //   content: '"|"',
        // },
        // '&::after': {
        //   content: '"|"',
        //   background: '#f91c1c',
        //   opacity: 0
        // },
    },
  },
};
