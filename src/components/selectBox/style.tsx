export const styles = {
  rootSx: {
    // width: '30%',
    margin: ' auto',
    padding: '30px 30px'
  },
  checkedValue: {
    color: '#262626',
    fontSize: '14px',
    fontWeight: '500',
    margin: '2px 8px'
  },
  checkboxTextSx: {
    color: '#262626',
    padding: '8px 4px',
    // width: '100px',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '500'
  },
  defaultInputSx: {
    '& input': {
      color: '#262626',
      fontWeight: '500'
    }
  },
  startIcon: {
    height: '43px',
    width: '37px',
    borderRight: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fill: 'blue',
    }
  },
  labelStyle: {
    fontSize: '14px',
    fontWeight: '500',
    color:'#000',
    marginBottom: '8px'
  }
}