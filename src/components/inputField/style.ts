export const inputField_Style = {
    textFieldSx: {
        opacity: 1,
        '& .MuiOutlinedInput-input': {
          width: '100%',
          fontWeight: 'normal',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderRadius: '8px',
            border: '1.5px solid',
            borderColor: '#E9E9E9',
          },
          '&:hover fieldset': {
            borderColor: '#E9E9E9',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#E9E9E9',
          },
        },
        '& .MuiFormHelperText-root': {
          mx: 0,
        },
      },
}