import React from "react";
import { Box, FormControl, Grid, TextField, Typography } from "@mui/material";
import { getMobileLimitBasedOnCC } from "../../utils/validation";
import { Sample } from '../../utils/constants'
import { SimpleSelect } from "./select";
import { MobileInputProps } from './props';
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

        if (Object.keys(mobile_code)?.length > 0) {
            const limit = getMobileLimitBasedOnCC(mobile_code);
            setLimits(limit);
        }
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
        const limit = getMobileLimitBasedOnCC(props?.value?.mobile_code);
        mobileNoValidation(limit);

        // eslint-disable-next-line
    }, [selectValue]);

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
                    border: `1.5px solid ${isError ? 'red' : '#DBEAE8'}`,
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
                {/* {isvalid === false && limits !== null && selectValue?.mobile?.length > 0 && (
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="caption" color="error">
                {`Please enter ${limits} digits`}
              </Typography>
            </Grid>
          )} */}

                {/* Field required Message */}
                {helperText?.length > 0 && (
                    <Typography
                        sx={{ mt: 0.5 }}
                        variant="caption"
                        color={`${isError ? '#F44F5A' : '#DBEAE8'}`}
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
    label: '',
    isRequired: '',
    isReadonly: '',
    value: {},
    type: '',
    errorValidation: {},
    handleChange: () => { },
    onErrorOccured: () => { },
};
