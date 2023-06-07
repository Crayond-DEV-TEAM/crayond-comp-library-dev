import { styles } from "./style"
import { InputAdornment, SxProps, Theme } from '@mui/material';
import { TextField } from '@mui/material';


export interface InputProps {
    sx?: SxProps<Theme>;
    type?: string;
    helperText?: string;
    placeholder?: string;
    errorMessage?: string;
    isReadOnly?: boolean;
    isError?: boolean;
    multiline?: boolean;
    rowsMax?: any;
    rows?: number;
    minRows?: number;
    maxRows?: number;
    fullWidth?: boolean | undefined;
    value?: string;
    endAdornment?: any;
    startAdornment?: any;
    header?: string;
    textFieldStyle?: object | any;
    disabled?: boolean;
    variant?: "" | "standard" | "filled" | "outlined";
    onChange?: (e: any) => void;
}

export const Input = (props: InputProps) => {
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