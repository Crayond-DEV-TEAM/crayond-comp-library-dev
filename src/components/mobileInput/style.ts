export const styles = {
  labelSx: {
    fontSize: '12px',
    marginRight:"5px",
    marginBottom:"8px",
    color:"#3B3B3B",

    "& span":{
      color:"#F44F5A",
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: '4px',
    padding: '5.5px 0',

    '&:hover ': {
      border: '1px solid',
      borderColor: 'primary.main',
    },
    '&:focus': {
      border: '2px solid',
      borderColor: 'primary.main',
    },
  },
  selectContainer: {
    paddingRight: '1px',
  },
  inputContainer: {
    flexGrow: 1,
    padding: '0 8px',

    '& input': {
      width: '100%',
    },
    '& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
      ' -webkit-appearance': 'none',
      margin: 0,
    },

    /* Firefox */
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
  },
};
