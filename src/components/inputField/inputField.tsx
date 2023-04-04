import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { InputFieldProps } from './props'
import { inputField_Style } from './style'

export default function InputField(
    props: InputFieldProps) {

    return (
        <TextField />
    );
}

InputField.defaultProps = {
    type: '',
    size: '',
    rowMax: '',
    rowMin: '',
    isError: '',
    variant: '',
    helperText: '',
    placeholder: '',
    onChange: () => { },
    value: false,
    disabled: false,
    fullwidth: false,
    isMulti: false,
    endIcon: null,
    startAdornment: '',
    endAdornments: ''
};
