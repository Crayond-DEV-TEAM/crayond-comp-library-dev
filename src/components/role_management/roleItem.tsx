
import { IconButton, SxProps, Theme, Grid, Stack } from '@mui/material';
import { Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { forwardRef, useState, useRef } from 'react';
import { useHover } from 'ahooks';
import { styles } from './style';
import { IOSSwitch } from './switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Input } from './input';

export interface RoleItemProps {
    sx?: SxProps<Theme>;
    editIndex?: number;
    index?: number;
    name?: string;
    roleNo?: string;
    // onMessaageClick?: () => void;
    isActive?: boolean;
    onEdit?: (x: object, index: number) => void;
}


// eslint-disable-next-line react/display-name
export const RoleItem = forwardRef((props: RoleItemProps): JSX.Element => {
    const {
        isActive,
        // onMessaageClick = () => false,
        onEdit = () => false,
        roleNo,
        name,
        editIndex,
        index,
    } = props;

    const ref = useRef(null);
    const isHovering = useHover(ref);

    const [anchorEl] = useState(null);

    return (
        <Box
            sx={styles.roleItemRootSx}
            ref={ref}
        >
            <Box sx={editIndex === index ? styles.unSelectedCard : styles.card}>
                <Grid container alignItems={'center'}>

                    <Grid item lg={3}>
                        {
                            editIndex === index ? <Input /> :
                                <Typography
                                    sx={styles.roleNo}>
                                    {roleNo}
                                </Typography>
                        }
                    </Grid>
                    <Grid item lg={4}>
                        {
                            editIndex === index ? <Input placeholder='Description' /> :
                                <Typography sx={styles.roleNo}>
                                    {name}
                                </Typography>
                        }
                    </Grid>
                    <Grid item lg={2}>
                        {
                            editIndex !== index && <IconButton
                                sx={styles.editIcon}
                                disableRipple
                                onClick={onEdit}
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                            >
                                {isHovering ? (
                                    <EditIcon
                                        rootStyle={{
                                            width: '3px', height: '12px', cursor: 'pointer',
                                            opacity: anchorEl ? 0.5 : 1
                                        }}
                                    />
                                ) : (
                                    ''
                                )}
                            </IconButton>
                        }
                    </Grid>
                    <Grid item lg={3}>
                        {
                            editIndex === index ? <Stack direction={'row'} alignItems={'center'} >
                                <IconButton>
                                    <CloseIcon />
                                </IconButton>
                                <IconButton>
                                    <CheckIcon />
                                </IconButton>
                            </Stack> : <FormGroup sx={styles.switchForm}>
                                <FormControlLabel sx={{ m: 0 }}
                                    control={<IOSSwitch sx={{ m: 1 }} value={isActive} />} label={undefined}                                // label=''
                                />
                            </FormGroup>
                        }

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
});
