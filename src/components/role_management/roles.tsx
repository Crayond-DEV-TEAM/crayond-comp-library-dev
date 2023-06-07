import { Box, Typography, IconButton, Button, Grid, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { styles } from './style';
import { RoleItem } from './roleItem';
import { Input } from './input';
import { RoleManagementProps } from './props';


export const Roles = (props: RoleManagementProps) => {
    const {
        editIndex,
        clickIndex,
        roles,
        state,
        add,
        search,
        onEditRole = () => false,
        handleChange = () => false,
        handleSave = () => false,
        handleAddSave = () => false,
        handleAddChange = () => false,
        handleAddRole = () => false,
        handleRoleClick = () => false,
        handleClose = () => false,
        handleSearch = () => false,
    } = props


    return (
        <Box
            sx={styles.roleRootSx}
        >
            <Box sx={styles.header}>
                <Typography sx={styles.titleSx}>{`${roles?.length} Roles`}</Typography>
                <Button variant='contained' onClick={handleAddRole} sx={styles?.iconBtn}>
                    <AddIcon /><Typography>Add</Typography>
                </Button>
            </Box>

            <Box sx={{ py: 2, px: 1.25 }}>
                <Input
                    placeholder='Search here'
                    value={search}
                    textFieldStyle={styles.search}
                    onChange={(e: any) => handleSearch('text', e?.target?.value)}
                    fullWidth={true}
                    startAdornment={<SearchIcon sx={{ ml: 1, fontSize: '16px', color: '#818181' }} />}
                />
            </Box>
            <Box>
                {
                    roles?.filter((e) => {
                        if (
                            (e?.role?.toLowerCase()?.includes(search?.toLowerCase()) ||
                                e?.roleNo?.toLowerCase()?.includes(search?.toLowerCase()))
                        ) {
                            return e;
                        }
                    })?.map((x: any, index: any) => {
                        return (
                            <Box key={index}>
                                <RoleItem
                                    editIndex={editIndex}
                                    clickIndex={clickIndex}
                                    index={index}
                                    name={x?.role}
                                    isActive={x?.isActive}
                                    roleNo={x?.roleNo}
                                    x={x}
                                    handleRoleClick={handleRoleClick}
                                    onEdit={onEditRole}
                                    handleChange={handleChange}
                                    handleSave={handleSave}
                                    handleClose={handleClose}


                                />
                            </Box>
                        );
                    })
                }

                {
                    add && <Box
                        sx={styles.roleItemRootSx}
                    >
                        <Box sx={styles.card}>
                            <Grid container alignItems={'center'} justifyContent={'space-between'}>

                                <Grid item lg={3}>
                                    <Input
                                        textFieldStyle={styles?.roleInput}
                                        value={state?.roleNo}
                                        onChange={(e: any) => handleAddChange('roleNo', e?.target?.value)}
                                    />
                                </Grid>
                                <Grid item lg={5}>
                                    <Input
                                        textFieldStyle={styles?.roleInput}
                                        value={state?.role}
                                        onChange={(e: any) => handleAddChange('role', e?.target?.value)}
                                        placeholder='Description' />
                                </Grid>
                                <Grid item lg={3}>
                                    <Stack direction={'row'} alignItems={'center'} >
                                        <IconButton sx={styles.CheckIcon}
                                            onClick={() => handleAddSave(state)}>
                                            <CheckIcon />
                                        </IconButton>
                                        <IconButton sx={styles.closeIcon} onClick={handleClose}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Stack>

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    )
}