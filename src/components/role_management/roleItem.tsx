
import { IconButton, SxProps, Theme, Grid, Stack } from '@mui/material';
import { Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import React, { forwardRef } from 'react';
import { useHover } from 'ahooks';
import { styles } from './style';
import { SwitchBox } from './switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Input } from './input';
import { RoleManagementProps } from './props';


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

    const ref = React.useRef(null);
    const isHovering = useHover(ref);

    const [anchorEl] = React.useState<null | HTMLElement>(null);

    return (
        <Box
            sx={styles.roleItemRootSx}
            ref={ref}
        >
            <Box sx={clickIndex === index ? { ...styles.card, ...roleCardSx } : { ...styles.unSelectedCard, ...roleUnselectedCardSx }} >
                <Grid container alignItems={'center'} onClick={() => handleRoleClick(x, index)}>
                    <Grid item lg={editIndex === index ? 4 : 2.5}
                        md={editIndex === index ? 4 : 2.5}
                        sm={editIndex === index ? 4 : 2.5}>
                        {
                            editIndex === index ? <Input
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

                            /> :
                                <Typography
                                    sx={{ ...styles.roleNo, roleNoProps }}>
                                    {roleNo}-
                                </Typography>
                        }
                    </Grid>
                    <Grid item lg={editIndex === index ? 5 : 4.5}
                        md={editIndex === index ? 5 : 4.5}
                        sm={editIndex === index ? 5 : 4.5}>
                        {
                            editIndex === index ? <Input
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

                            /> :
                                <Typography sx={{ ...styles.roleNo, ...roleNoProps }}>
                                    {` ${name}`}
                                </Typography>
                        }
                    </Grid>
                    {
                        editIndex !== index &&
                        <Grid item lg={2} md={2} sm={2}>
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

                        </Grid>
                    }
                    <Grid item lg={3} md={3} sm={3}>
                        {
                            editIndex === index ?
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
                                </Stack> :
                                <FormGroup sx={styles.switchForm}>
                                    <FormControlLabel sx={{ m: 0 }}
                                        control={<SwitchBox
                                            onChange={(e: any) => handleSwitch(e?.target?.checked, index)}
                                            sx={{ m: 1 }} value={isActive} />}
                                        label={undefined}
                                    />
                                </FormGroup>
                        }

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
});
