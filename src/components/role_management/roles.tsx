import { Box, Grid, Icon, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { styles } from './style';
import TextField from '@mui/material/TextField';
import { RoleItem } from './roleItem';

export const Roles = () => {
    return (
        <Box
            sx={styles.rootSx}
        >
            <Box sx={styles.header}>
                <Typography sx={styles.titleSx}>{'03 Roles'}</Typography>
                <IconButton onClick={() => { }} sx={{ p: 0 }}>
                    <AddIcon /> Add
                </IconButton>
            </Box>

            <Box sx={{ py: 2, px: 1.25 }}>
                <TextField
                    placeholder="Search here"
                    // value={searchTerm}
                    // onChange={(e) => handleSearch(e)}
                    InputProps={{
                        startAdornment: (
                            <SearchIcon sx={{ ml: 1, fontSize: '16px', color: '#818181' }} />
                        )
                    }}
                />
            </Box>
            <Box sx={styles.totalGroupSx}>
                {/* {
                    services?.map((x: any, index: any) => {
                        return (
                            <Box key={index}>
                                <RoleItem
                                    title={x.name}
                                    isActive={x.isActive}
                                    index={x?.id}
                                    select={slugIndex}
                                    onMessaageClick={() => handleServiceClick(x, index)}
                                    onDelete={() => deleteService({ id: x.id })}
                                    onEdit={() => onEditServices(x, index)}
                                />
                            </Box>
                        );
                    })
                } */}

            </Box>
        </Box>
    )
}