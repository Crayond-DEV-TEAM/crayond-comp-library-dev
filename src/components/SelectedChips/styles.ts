export const styles = {
  toggleButtonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    borderRadius: '4px',
    '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
      border: '1px solid primary.main',
      borderRadius: '4px',
      '&.Mui-selected': {
        border: '1px solid',
        borderColor:"primary.main"
      },
    },
    '& .MuiToggleButtonGroup-grouped:not(:last-of-type)': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
    },
  },
  selectChip: {
    border: '1px solid ',
    borderColor:"#E9E9E9",
    opacity: 1,
    color: '#353448',
    cursor: 'pointer',
    padding: '5px',
    textTransform: 'capitalize',
    '&.MuiToggleButton-root': {
      borderRadius: '4px',
      '&:hover': {
        background: '#EEFBF6',
        border: '1px solid',
        borderColor:"primary.main"
      },
      '&:focus': {
        outline: 'none',
      },
    },
    '&.Mui-disabled': {
      background: '#B9B9B9',
      color: '#FFFFFF',
      border: '1px solid #FFFFFF',
      '&.Mui-selected': {
        background: '#B9B9B9',
        border: '1px solid #FFFFFF',
      },
    },
    '&.Mui-selected': {
      background: '#EEFBF6',
      border: '1px solid',
      borderColor:"primary.main"
    },
  },
  staticLabel: {
    marginBottom: '8px',
    color: '#3B3B3B',
    fontSize: '12px',
    '& span': {
      color: '#FF4D4A',
    },
  },
};
