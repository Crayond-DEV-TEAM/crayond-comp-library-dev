
import { IconButton, SxProps, Theme, Grid, Stack, Tooltip } from '@mui/material';
import { Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import React, { forwardRef, useRef } from 'react';
import { useHover } from 'ahooks';
import { styles } from './style';
import { SwitchBox } from './switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Input } from './input';


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
    handleRoleClick?: (x: object | undefined, index: number | undefined) => void;
    isActive?: boolean;
    onEdit?: (x: object | undefined, index: number | undefined) => void;
    handleChange?: (key: string, e: object, index: number | undefined) => void;
    handleSave?: (x: Role | undefined, index: number | undefined) => void;
    handleClose?: () => void;
}


// eslint-disable-next-line react/display-name
export const RoleItem = forwardRef((props: any): JSX.Element => {
    const {
        isActive,
        handleRoleClick = () => false,
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
    } = props;

    const ref = useRef(null);
    const isHovering = useHover(ref);

    const [anchorEl] = React.useState<null | HTMLElement>(null);

    return (
        <Box
            sx={styles.roleItemRootSx}
            ref={ref}
        >
            <Box
                sx={clickIndex === index ? { ...styles.card, ...roleCardSx } : { ...styles.unSelectedCard, ...roleUnselectedCardSx }} >

                {
                    editIndex === index && <Box sx={styles?.parentBox}>
                        <span style={{ width: '30%' }} >
                            <Input
                                textFieldStyle={{
                                    justifyContent: 'center',
                                    background: inputStyle?.inputBackground ?? 'none',
                                    '& div': {
                                        height: inputStyle?.height ?? '22px',
                                        padding: inputStyle?.padding ?? '0 ',
                                        fontSize: inputStyle?.fontSize ?? '13px',
                                        margin: inputStyle?.margin ?? '0',
                                        '& fieldset': {
                                            border: inputStyle?.border ?? '0 !important',
                                            borderRadius: inputStyle?.borderRadius ?? '0 !important',
                                            borderBottom: inputStyle?.borderBottom ?? '1px solid #D3D3D3 !important',
                                        }
                                    }
                                }}
                                value={roleNo}
                                onChange={(e: any) => handleChange('roleNo', e?.target?.value, index)}

                            />
                        </span>
                        <span style={{ width: '54%' }}>
                            <Input
                                textFieldStyle={{
                                    justifyContent: 'center',
                                    background: inputStyle?.inputBackground ?? 'none',
                                    '& div': {
                                        height: inputStyle?.height ?? '22px',
                                        padding: inputStyle?.padding ?? '0 ',
                                        fontSize: inputStyle?.fontSize ?? '13px',
                                        margin: inputStyle?.margin ?? '0',
                                        '& fieldset': {
                                            border: inputStyle?.border ?? '0 !important',
                                            borderRadius: inputStyle?.borderRadius ?? '0 !important',
                                            borderBottom: inputStyle?.borderBottom ?? '1px solid #D3D3D3 !important',
                                        }
                                    }
                                }}
                                value={name}
                                onChange={(e: any) => handleChange('role', e?.target?.value, index)}
                                placeholder='Description'

                            />
                        </span>
                        <span style={{ width: '13%' }}>
                            <Stack direction={'row'}
                                alignItems={'center'} justifyContent={'space-between'}
                            >
                                <IconButton sx={{ ...styles.CheckIcon, ...checkIconPropsSx }}
                                    onClick={() => handleSave(x, index)}>
                                    <CheckIcon />
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
                        <span style={{ width: '60%' }}>
                            <Tooltip title={name} followCursor>
                                <Typography noWrap
                                    sx={{ ...styles.roleNo, roleNoProps }}>
                                    {roleNo}-{name}
                                </Typography>
                            </Tooltip>
                        </span>
                        <span style={{ width: '38%', display: 'flex', justifyContent: 'end' }}>
                            <IconButton
                                sx={{ ...styles.editIcon, ...editIconProps }}
                                disableRipple
                                onClick={() => onEditRole(x, index)}
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
                                <FormControlLabel sx={{ m: 0, justifyContent: 'center' }}
                                    control={<SwitchBox
                                        onChange={(e: any) => handleSwitch(e?.target?.checked, index)}
                                        sx={{ m: 1 }}
                                        value={isActive}
                                        color={'primary'}
                                        width={''}
                                        height={''}
                                        thumbColor={''} />}
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
