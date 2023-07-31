import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { styles } from "./styles";
import AddBookMarkIcon from './../../assets/add-bookmark'
import TentIcon from './../../assets/tent'
import MastersIcon from './../../assets/masters'
import MBFIcon from './../../assets/MBF'
import ClinicalIcon from './../../assets/clinical'



export const VariantOne = () => {

    const MenuItems = [
        {
            icon: (<TentIcon/>)
        },
        {
            icon: (<ClinicalIcon/>)
        },
        {
            icon: (<MBFIcon/>)
        },
        {
            icon: (<MastersIcon/>)
        },
        {
            icon: (<TentIcon/>)
        },

    ]
    return (
        <Box sx={styles?.mobileScreen}>
            <Box>
                <Stack sx={styles?.backIconStack} direction='row'>
                    <IconButton sx={styles?.backIcon} id='step-1' >
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                </Stack>
                <Box sx={styles?.content}>
                    <Box sx={styles.contentBox}>
                        <Box sx={styles?.bookMarkIcon}>
                            <AddBookMarkIcon />
                        </Box>
                        <Typography sx={styles?.bookMarkText}>Add Bookmark</Typography>
                        <Typography sx={styles?.bookMarkText2}>Click the above icon to add</Typography>
                        <Button sx={styles?.addBtn} id='step-2'>Add Now</Button>
                    </Box>
                </Box>
                <Stack sx={styles?.MenuIconStack} direction='row' px={1}>
                    {
                        MenuItems?.map((e:any, i: number) =>{
                            console.log(`step-${3 + i}`);
                            
                            return (
                                <Box p={2} id={`step-${3 + i}`}>
                                    {e?.icon}
                                </Box>
                            )
                        } )
                    }
                </Stack>
            </Box>
        </Box>
    )
}