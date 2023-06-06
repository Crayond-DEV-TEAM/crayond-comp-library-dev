import { Box, Typography, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { styles } from './style';
import { RoleItem } from './roleItem';
import { Input } from './input';
import { useState } from 'react';
import { RoleManagementProps } from './props';


export const Roles = (props: RoleManagementProps) => {
    const {
        editIndex,
        roles,
        onEditRole = () => false
    } = props

    const [state, setState] = useState(false)
    const handleAddRole = () => {
        setState(true)
    }
    return (
        <Box
            sx={styles.roleRootSx}
        >
            <Box sx={styles.header}>
                <Typography sx={styles.titleSx}>{'03 Roles'}</Typography>
                <Button variant='contained' onClick={handleAddRole} sx={styles?.iconBtn}>
                    <AddIcon /><Typography>Add</Typography>
                </Button>
            </Box>

            <Box sx={{ py: 2, px: 1.25 }}>
                <Input
                    placeholder='Search here'
                    startAdornment={<SearchIcon sx={{ ml: 1, fontSize: '16px', color: '#818181' }} />}
                />
            </Box>
            <Box sx={styles.totalGroupSx}>
                {
                    roles?.map((x: any, index: any) => {
                        return (
                            <Box key={index}>
                                <RoleItem
                                    editIndex={editIndex}
                                    index={index}
                                    name={x?.role}
                                    isActive={x?.isActive}
                                    roleNo={x?.roleNo}
                                    // onMessaageClick={() => handleServiceClick(x, index)}
                                    onEdit={() => onEditRole(x, index)}
                                />
                            </Box>
                        );
                    })
                }

                {
                    state && <Typography sx={{ color: 'red' }}>added item</Typography>
                }

            </Box>
        </Box>
    )
}