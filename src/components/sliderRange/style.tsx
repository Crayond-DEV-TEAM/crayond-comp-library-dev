export const styles = {
    containerStyle: {
      display: 'flex',
      alignItems: 'center',
    },
  
    minMaxContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    childBox: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 'fit-content',
      height: '32px',
      border: '1px solid #E9E9E9',
      borderRadius: '4px',
      paddingLeft: '8px',
      paddingRight: '8px',

    },
  
    inputStyle: {
      fontSize: '14px',
      maxWidth: '40px',
      border: 'none',
      outline: 'none',
      background: '#FFFF',
      color: '#262626',
      textAlign:"center",
      borderBottom:"none"
    },
  
    minMaxLabel: {
      color: '#929292',
      fontSize: '12px',
      paddingRight: "4px",
    },
  
    sliderStyle: {
      '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#665CD7',
        border: '2px solid #FFFFFF',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit',
        },
        '&:before': {
          display: 'none',
        },
      },
    },
  };