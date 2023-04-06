import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { InputFieldProps } from './props';


export default function InputField(props: InputFieldProps) {

    const {
        value = '',
        fullWidth = true,
        isReadOnly = false,
        helperText = '',
        isError = false,
        isMulti = false,
        rowMax = 5,
        rowMin = 5,
        placeholder = '',
        size = 'small',
        onChange = () => false,
        endAdornments = '',
        startAdornments,
        type = '',
        errorMessage = '',
        variant = 'outlined',
        textFieldStyle = {},
        className = '',
        defaultValue,
        ...rest
    } = props;

    return (
        <TextField
            type={type}
            size={size}
            variant={variant}
            value={value}
            placeholder={placeholder}
            fullWidth={fullWidth}
            disabled={isReadOnly}
            defaultValue={defaultValue}
            multiline={isMulti}
            maxRows={rowMax}
            minRows={rowMin}
            onChange={onChange}
            helperText={helperText}
            error={!!isError}
            className={`${className}`}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">{startAdornments}</InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">{endAdornments}</InputAdornment>
                ),
            }}
        />
    );
}

InputField.defaultProps = {
    variant: 'outlined',
    value: '',
    onChange: () => { },
    disabled: false,
    type: 'text',
    size: 'small',
    placeholder: '',
    endIcon: '',
    fullwidth: false,
    isMulti: false,
    rowMax: '',
    rowMin: '',
    helperText: '',
    isError: '',
    classes: {},
    sx: {},
};
