
import { IconButton, SxProps, Theme, Stack, Tooltip } from '@mui/material';
import { Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import React, { forwardRef, useRef } from 'react';
import { styles } from './style';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CustomizedSwitches } from '../switch/switch';
import { InputField } from '../inputField';
import { RoleManagementProps } from './props';


type Role = {
    roleNo: string;
    role: string;
    isActive: boolean;
};
export interface RoleItemProps {
    sx?: SxProps<Theme>;
    editIndex?: number;
    clickIndex?: number;
    index?: number | undefined;
    name?: string;
    x?: object | undefined;
    roleNo?: string;
    handleRoleClick?: (index: number | undefined) => void;
    isActive?: boolean;
    onEdit?: (x: object | undefined, index: number | undefined) => void;
    handleChange?: (key: string, e: object, index: number | undefined) => void;
    handleSave?: (x: Role, index: number | undefined) => void;
    handleClose?: () => void;
}


// eslint-disable-next-line react/display-name
export const RoleItem = forwardRef((props: RoleManagementProps): JSX.Element => {
    const {
        isActive,
        onEditRole = () => false,
        handleChange = () => false,
        roleNo,
        name,
        x,
        editIndex,
        clickIndex,
        closeIconPropSx,
        checkIconPropsSx,
        roleCardSx,
        roleUnselectedCardSx,
        index,
        roleNoProps,
        inputStyle,
        editIconProps,
        handleSave = () => false,
        handleClose = () => false,
        handleSwitch = () => false,
        switchStyle ={},
        state,
    } = props;

    const ref = useRef(null);
    const [isHovering, setIsHovering] = React.useState(false);

    const handleHover = () => {
        setIsHovering(true)
    }

    const handleHoverLeave = () => {
        setIsHovering(false)
    }
    const [anchorEl] = React.useState<null | HTMLElement>(null);

    return (
        <Box
            sx={styles.roleItemRootSx}
            ref={ref}
        >
            <Box
                sx={clickIndex === index ? { ...styles.card, ...roleCardSx } : 
                { ...styles.unSelectedCard, ...roleUnselectedCardSx }}
                onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                {
                    editIndex === index && <Box sx={styles?.parentBox}>
                        <span style={{ width: '30%' }} >
                            <InputField
                                labelStyle={{
                                    marginTop: '8px'
                                }}
                                // errorMessage={stae}
                                inputStyle={{
                                    justifyContent: 'center',
                                    marginRight: '8px',
                                    background: inputStyle?.inputBackground ? inputStyle?.inputBackground : 'none',
                                    '& div': {
                                        height: inputStyle?.height ? inputStyle?.height : '22px',
                                        padding: inputStyle?.padding ? inputStyle?.padding : '0 ',
                                        fontSize: inputStyle?.fontSize ? inputStyle?.fontSize : '13px',
                                        margin: inputStyle?.margin ? inputStyle?.margin : '0',
                                        '& input': {
                                            padding: '0 !important',
                                        },
                                        '& fieldset': {
                                            border: inputStyle?.border ? inputStyle?.border : '0 !important',
                                            borderRadius: inputStyle?.borderRadius ? inputStyle?.borderRadius : '0 !important',
                                            borderBottom: inputStyle?.borderBottom ? inputStyle?.borderBottom : '1px solid #D3D3D3 !important',
                                        }
                                    }
                                }}
                                value={roleNo}
                                onChange={(e: any) => handleChange('roleNo', e?.target?.value, index)}
                                placeholder='Role No'
                                isErrorRequired={false}

                            />
                        </span>
                        <span style={{ width: '54%' }}>
                            <InputField
                                labelStyle={{
                                    marginTop: '8px'
                                }}
                                inputStyle={{
                                    justifyContent: 'center',
                                    marginRight: '8px',
                                    background: inputStyle?.inputBackground ? inputStyle?.inputBackground : 'none',
                                    '& div': {
                                        height: inputStyle?.height ? inputStyle?.height : '22px',
                                        padding: inputStyle?.padding ? inputStyle?.padding : '0 ',
                                        fontSize: inputStyle?.fontSize ? inputStyle?.fontSize : '13px',
                                        margin: inputStyle?.margin ? inputStyle?.margin : '0',
                                        '& input': {
                                            padding: '0 !important',
                                        },
                                        '& fieldset': {
                                            border: inputStyle?.border ? inputStyle?.border : '0 !important',
                                            borderRadius: inputStyle?.borderRadius ? 
                                            inputStyle?.borderRadius : '0 !important',
                                            borderBottom: inputStyle?.borderBottom ? inputStyle?.borderBottom : '1px solid #D3D3D3 !important',
                                        }
                                    }
                                }}
                                value={name}
                                onChange={(e: any) => handleChange('role', e?.target?.value, index)}
                                placeholder='Description'
                                isErrorRequired={false}

                            />
                        </span>
                        <span style={{ width: '13%', paddingRight: '12px' }}>
                            <Stack direction={'row'}
                                alignItems={'center'} justifyContent={'space-around'}
                            >
                                <IconButton sx={{ ...styles.CheckIcon, ...checkIconPropsSx }}
                                    onClick={() => handleSave(x, index)}>
                                    {
                                        (name !== '' && roleNo !== '') ? <CheckIcon />  : null
                                    } 
                                </IconButton>
                                <IconButton sx={{ ...styles.closeIcon, ...closeIconPropSx }}
                                    onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            </Stack>
                        </span>
                    </Box>
                }
                {
                    editIndex !== index && <Box sx={styles?.flexItem}>
                        <Tooltip title={`${roleNo} - ${name}`} followCursor>
                            <span style={{ maxWidth: '60%' }}>

                                <Typography noWrap
                                    sx={{ ...styles.roleNo, roleNoProps } as SxProps}>
                                    {roleNo}-{name}
                                </Typography>
                            </span>
                        </Tooltip>
                        <span style={{ width: '38%', display: 'flex', justifyContent: 'end' }}>
                            <IconButton
                                sx={{ ...styles.editIcon, ...editIconProps }}
                                disableRipple
                                onClick={() => onEditRole(index)}
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                            >
                                {isHovering ? (
                                    <EditIcon
                                        sx={{
                                            cursor: 'pointer',
                                            opacity: anchorEl ? 0.5 : 1
                                        }}
                                    />
                                ) : (
                                    ''
                                )}
                            </IconButton>
                            <FormGroup sx={styles.switchForm}>
                                <FormControlLabel sx={{
                                    m: 0,
                                    justifyContent: 'center',
                                    '& label': {
                                        margin: '0'
                                    }
                                }}
                                    control={<CustomizedSwitches
                                        swtichSx={switchStyle}
                                        onChange={(e: any, arr: any, event: any) =>
                                            handleSwitch(event?.target?.checked, index)
                                        }
                                        value={isActive}
                                        isLabel={true}
                                    // color={'primary'}
                                    // customProp={{
                                    //     width: '',
                                    //     height: '',
                                    //     thumbColor: '',
                                    //     onChange: undefined,
                                    //     color: ''
                                    // }}
                                    />}
                                    label={undefined}
                                />
                            </FormGroup>
                        </span>
                    </Box>
                }
            </Box>
        </Box >
    );
});
