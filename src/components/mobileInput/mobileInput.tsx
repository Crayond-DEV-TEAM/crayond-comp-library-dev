import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Sample } from '../../utils/constants';
import { MobileInputProps } from './props';
import { SimpleSelect } from "./select";
import { mobileInput_style } from "./style";

export default function MobileInput(props: MobileInputProps) {

    const {
        onChange = () => false,
        fullWidth = true,
        autoFocus = false,
        isReadonly = false,
        disabled,
        disabledNumber,
        isReadonlyCC,
        enterKeyPress,
        value,
        focus = () => { },
        onErrorOccured,
        helperText = '',
        id = 'mobileInput',
        isError = false,
        mobileInputStyle = {},
        rootWapperstyle = {},
        helperTextStyle = {},
        className = '',
        maxLength = 10,
    } = props;

    const [selectValue, setSelectValue] = React.useState({
        mobile: props?.value?.mobile ?? "",
        mobile_code: props?.value?.mobile_code ?? "+91",
    });

    const [limits, setLimits] = React.useState(10);
    const [isvalid, setIsvalid] = React.useState(true);

    const mobileNoValidation = (limitValue = limits) => {
        let inputLengthValue = selectValue?.mobile?.length;

        if (limitValue) {
            if (limitValue === inputLengthValue) {
                setIsvalid(true);
            } else if (limitValue > inputLengthValue) {
                setIsvalid(false);
            } else {
                setIsvalid(true);
            }
        }
    };

    const handleChangeSelect = (mobile_code = {}) => {
        let newState = {
            mobile: selectValue.mobile,
            mobile_code,
        };

        setSelectValue(newState);
        props?.handleChange(newState);

    };

    const handleChange = (mobile: string) => {
        if (mobile?.length <= limits) {
            let newState = {
                mobile: mobile.replace(".", ""),
                mobile_code: selectValue.mobile_code,
            };

            setSelectValue(newState);
            props?.handleChange(newState);
        }
    };

    React.useEffect(() => {
        if (props?.value) {
            setSelectValue({
                ...selectValue,
                mobile: props?.value?.mobile ?? "",
                mobile_code: props?.value?.mobile_code ?? "+91",
            });
        }
        // eslint-disable-next-line
    }, [props?.value]);

    React.useEffect(() => {
        if (props?.onErrorOccured) {
            props?.onErrorOccured(!isvalid);
        }

        // eslint-disable-next-line
    }, [isvalid]);

    function setFoucs(arg0: boolean) {
        throw new Error("Function not implemented.");
    }

    return (
        <Box>
            {/* MobileInput with props */}
            <Box
                sx={{
                    ...mobileInput_style.rootWapperSx,
                    ...rootWapperstyle,
                }}
            >
                <Box sx={mobileInput_style.NumberSx}>
                    <SimpleSelect
                        options={Sample}
                        handleChangeSelect={handleChangeSelect}
                        value={selectValue?.mobile_code ?? ""}
                        disabled={props.isReadonly || props.disabled}
                        errorValidation={props?.errorValidation}
                    />
                </Box>
                {/* MobileInput with props */}
                <Box flexGrow={1}>
                    <TextField
                        type="number"
                        inputProps={{ maxLength: limits, min: 0, readOnly: isReadonly }}
                        id={id}
                        sx={{
                            ...mobileInput_style.mobileInputStyledSx,
                            ...mobileInputStyle,
                        }}
                        value={selectValue?.mobile}
                        variant="outlined"
                        size="small"
                        onChange={(e) => handleChange(e.target.value)}
                        fullWidth={fullWidth}
                        autoFocus={autoFocus}
                        disabled={isReadonly || disabled}
                        onInvalid={(e) => {
                            e.preventDefault();
                        }}
                        onFocus={() => {
                            setFoucs(true);
                        }}
                        onBlur={() => {
                            setFoucs(false);
                        }}
                        error={!!isError}
                    // onKeyPress={(e) => (enterKeyPress ? enterKeyPress(e) : '')}
                    />
                </Box>
            </Box>
            {/* Warning Message */}
            <Grid container direction="row">
                {/* Field required Message */}
                {helperText?.length > 0 && (
                    <Typography
                        sx={{
                            ...mobileInput_style.helperTextStyleSx,
                            ...helperTextStyle
                        }}
                        variant="caption"
                    >
                        {helperText}
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};

// Specifies the required props for the component:
MobileInput.propTypes = {
    placeholder: '',
    errorValidation: {},
    isRequired: null,
    label: '',
    handleChange: () => { },
    component: 'input',
    fullWidth: true,
    autoFocus: false,
    isReadonly: false,
    disabled: false,
    disabledNumber: 0,
    isReadonlyCC: '',
    enterKeyPress: {},
    handleChangeSelect: {},
    value: '',
    error: false,
    onError: false,
    onErrorOccured: () => { },
    helperText: '',
    id: '',
    selectValue: '',
    limits: {},
    isError: '',
    flag: '',
    className: {},
    maxLength: 10,
    mobileInputStyle: {},
    rootWapperstyle: {},
    code: '',
    phone: '',
    suggested: false,
    helperTextStyle: '',
};
