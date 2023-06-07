
import { IconButton, SxProps, Theme, Grid, Stack } from '@mui/material';
import { Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import React, { forwardRef, useState, useRef } from 'react';
import { useHover } from 'ahooks';
import { styles } from './style';
import { IOSSwitch } from './switch';
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
export const RoleItem = forwardRef((props: RoleItemProps): JSX.Element => {
    const {
        isActive,
        handleRoleClick = () => false,
        onEdit = () => false,
        handleChange = () => false,
        roleNo,
        name,
        x,
        editIndex,
        clickIndex,
        index,
        handleSave = () => false,
        handleClose = () => false,
    } = props;

    const ref = useRef(null);
    const isHovering = useHover(ref);

    const [anchorEl] = React.useState<null | HTMLElement>(null);

    return (
        <Box
            sx={styles.roleItemRootSx}
            ref={ref}
        >
            <Box sx={clickIndex === index ? styles.card : styles.unSelectedCard}>
                <Grid container alignItems={'center'} onClick={() => handleRoleClick(x, index)}>

                    <Grid item lg={editIndex === index ? 4 : 2.5}>
                        {
                            editIndex === index ? <Input
                                textFieldStyle={styles?.roleInput}
                                value={roleNo}
                                onChange={(e: any) => handleChange('roleNo', e?.target?.value, index)}
                            /> :
                                <Typography
                                    sx={styles.roleNo}>
                                    {roleNo}-
                                </Typography>
                        }
                    </Grid>
                    <Grid item lg={editIndex === index ? 5 : 4.5}>
                        {
                            editIndex === index ? <Input
                                textFieldStyle={styles?.roleInput}
                                value={name}
                                onChange={(e: any) => handleChange('role', e?.target?.value, index)}
                                placeholder='Description' /> :
                                <Typography sx={styles.roleNo}>
                                    {` ${name}`}
                                </Typography>
                        }
                    </Grid>
                    {
                        editIndex !== index &&
                        <Grid item lg={2}>
                            <IconButton
                                sx={styles.editIcon}
                                disableRipple
                                onClick={() => onEdit(x, index)}
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                            >
                                {isHovering ? (
                                    <EditIcon
                                        sx={{
                                            width: '3px',
                                            height: '12px',
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
                    <Grid item lg={3}>
                        {
                            editIndex === index ? <Stack direction={'row'}
                                alignItems={'center'} justifyContent={'space-between'}
                            >
                                <IconButton sx={styles.CheckIcon} onClick={() => handleSave(x, index)}>
                                    <CheckIcon />
                                </IconButton>
                                <IconButton sx={styles.closeIcon} onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            </Stack> : <FormGroup sx={styles.switchForm}>
                                <FormControlLabel sx={{ m: 0 }}
                                    control={<IOSSwitch sx={{ m: 1 }} value={isActive} />}
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
