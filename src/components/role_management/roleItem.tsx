
import { IconButton, Menu, MenuItem, SxProps, Theme, Grid } from '@mui/material';
import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { forwardRef, useState, useRef } from 'react';
import { useHover } from 'ahooks';

export interface RoleItemProps {
    className?: string;
    sx?: SxProps<Theme>;
    title?: string;
    onMessaageClick?: () => void;
    onDelete?: () => void;
    isActive?: boolean;
    index?: any;
    select?: string | number;
    onEdit?: () => void;
    open?: boolean;
}

export const RoleItem = forwardRef((props: RoleItemProps): JSX.Element => {
    const {
        className = '',
        sx = {},
        isActive,
        onMessaageClick = () => false,
        onDelete = () => false,
        onEdit = () => false,
        select,
        index,
        title,
        ...rest
    } = props;
    // const [open, setOpen] = useState<boolean>(false);
    const ref = useRef(null);
    const isHovering = useHover(ref);

    const [selected, setSelected] = useState(false);

    const handleOpen = () => {
        setSelected(true);
        // setIsEdit(false);
    };
    const handlemodalClose = () => {
        setSelected(false);
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteFunc = () => {
        onDelete();
        handlemodalClose();
    };

    return (
        <Box
            sx={[
                {
                    ...messageCardStyle.rootSx,
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            className={`${className}`}
            ref={ref}
            {...rest}
        >
            <Box
                sx={select === index ? messageCardStyle.messageCard : messageCardStyle.unSelectedCard}
                onClick={onMessaageClick}
            >
                <Grid container alignItems={'center'}>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        {isActive ? (
                            <CircleIcon sx={{ ...messageCardStyle.dot, color: '#357968' }} />
                        ) : (
                            <CircleIcon sx={{ ...messageCardStyle.dot, color: '#FF4D4A' }} />
                        )}
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10}>
                        <Typography sx={select === index ? messageCardStyle.serviceTitle : messageCardStyle.unslectedServiceTitle}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <IconButton
                            disableRipple
                            onClick={handleClick}
                            aria-owns={anchorEl ? 'simple-menu' : undefined}
                            aria-haspopup="true"
                        // onMouseOver={handleClick}
                        >
                            {isHovering ? (
                                <MoreIcon
                                    rootStyle={{ width: '3px', height: '12px', cursor: 'pointer', opacity: anchorEl ? 0.5 : 1 }}
                                />
                            ) : (
                                ''
                            )}
                        </IconButton>
                    </Grid>
                </Grid>
                <Menu open={open} anchorEl={anchorEl} onClose={handleClose} sx={messageCardStyle.menuSx}>
                    <MenuItem
                        id="ec33277c-74e7-4b23-94cc-4cddb997548c"
                        onClick={(e) => {
                            if (e?.target?.id === 'ec33277c-74e7-4b23-94cc-4cddb997548c') {
                                e?.stopPropagation();
                                onEdit();
                            }
                        }}
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Typography sx={messageCardStyle.menutext}>Edit</Typography>
                        <IconButton disableRipple sx={{ p: 0 }}>
                            <EditIcon rootStyle={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                        </IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleOpen} sx={{ justifyContent: 'space-between' }}>
                        <Typography sx={messageCardStyle.menutext}>Delete</Typography>
                        <IconButton disableRipple sx={{ p: 0 }}>
                            <DeleteIcon rootStyle={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                        </IconButton>
                    </MenuItem>
                </Menu>
            </Box>
            <DeleteDailog
                isDialogOpened={selected}
                Bodycomponent={
                    <Box>
                        <Typography sx={{ fontWeight: 600 }}>Are you sure want to delete this ??</Typography>
                        <Box sx={messageCardStyle.totalFooterSx}>
                            <Box sx={messageCardStyle.btnSx}>
                                <Box sx={messageCardStyle.btnBg}>
                                    <Button buttonStyle={messageCardStyle.cancelbtnText} onClick={handlemodalClose}>
                                        Cancel
                                    </Button>
                                </Box>
                                <Box sx={messageCardStyle.savebtnBg}>
                                    <Button buttonStyle={messageCardStyle.savebtnText} onClick={deleteFunc}>
                                        Delete
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                }
            />
        </Box>
    );
});
