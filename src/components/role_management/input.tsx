import { styles } from "./style"
import { InputAdornment } from '@mui/material';
import { TextField } from '@mui/material';
import { inputStyle } from "./props";


export const Input = (props: inputStyle) => {
    const {
        type = '',
        textFieldStyle = {},
        // variant = '',
        value = '',
        placeholder = '',
        fullWidth = true,
        errorMessage = '',
        multiline = false,
        onChange = () => null,
        isError = false,
        rows,
        minRows,
        maxRows,
        disabled,
        startAdornment,
        endAdornment
    } = props;
    return (
        <TextField
            type={type}
            sx={{ ...styles.textFieldSx, ...textFieldStyle }}
            // variant={variant}
            value={value}
            placeholder={placeholder}
            fullWidth={fullWidth}
            disabled={disabled}
            multiline={multiline}
            maxRows={maxRows}
            minRows={minRows}
            onChange={onChange}
            helperText={errorMessage}
            error={isError}
            rows={rows}
            InputProps={{
                startAdornment: <InputAdornment position="end">{startAdornment}</InputAdornment>,
                endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
            }}
        />
    )
}