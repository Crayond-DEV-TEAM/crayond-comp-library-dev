import { Box, Typography, IconButton, Button, Grid, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { styles } from './style';
import { RoleItem } from './roleItem';
import { InputField } from '../inputField';


export const Roles = (props: any) => {
    const {
        title,
        editIndex,
        clickIndex,
        roles,
        state,
        add,
        search,
        roleBoxSx,
        roleHeadBorderSx,
        titlePropsSx,
        addIconSx,
        roleCardSx,
        roleUnselectedCardSx,
        checkIconPropsSx,
        closeIconPropSx,
        inputStyle = {},
        onEditRole = () => false,
        handleChange = () => false,
        handleSave = () => false,
        handleAddSave = () => false,
        handleAddChange = () => false,
        handleAddRole = () => false,
        handleRoleClick = () => false,
        handleClose = () => false,
        handleSearch = () => false,
        handleSwitch = () => false,
        switchStyle= {}
    } = props


    return (
        <Box
            sx={{ ...styles.roleRootSx, ...roleBoxSx }}
        >
            <Box sx={{ ...styles.header, ...roleHeadBorderSx }}>
                <Typography sx={{ ...styles.titleSx, ...titlePropsSx }}>
                    {`${roles?.length} ${title ?? 'Roles'}`}</Typography>
                <Button variant='contained' onClick={handleAddRole}
                    sx={{ ...styles?.iconBtn, ...addIconSx }}>
                    <AddIcon /><Typography>Add</Typography>
                </Button>
            </Box>

            <Box sx={styles?.searchParent}>
                <InputField
                    placeholder='Search Here'
                    value={search}
                    labelStyle={{
                        display: 'none'
                    }}
                    inputStyle={styles.search}
                    startAdornments={<SearchIcon sx={{ ml: 1, fontSize: '16px', color: '#818181' }} />}
                    onChange={(e: any) => handleSearch('text', e?.target?.value)}
                    fullWidth={true}
                    isErrorRequired={false}
                    isLabelRequired={false}
                />
            </Box>
            <Box sx={styles.overflowItemSx}>
                {
                    roles?.filter((e: any) => {
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
                                    onEditRole={onEditRole}
                                    handleChange={handleChange}
                                    handleSave={handleSave}
                                    handleClose={handleClose}
                                    handleSwitch={handleSwitch}
                                    checkIconPropsSx={checkIconPropsSx}
                                    closeIconPropSx={closeIconPropSx}
                                    roleCardSx={roleCardSx}
                                    switchStyle={switchStyle}
                                    roleUnselectedCardSx={roleUnselectedCardSx}
                                    inputStyle={inputStyle}
                                    state={state}
                                // rootStyle={}
                                // roles={[]}
                                // search={{
                                //     text: undefined
                                // }} 
                                />
                            </Box>
                        );
                    })
                }
                {
                    add && <Box
                        sx={styles.roleItemRootSx}
                    >
                        <Box sx={{ ...styles.card, ...roleCardSx }}>
                            <Grid container alignItems={'center'} justifyContent={'space-between'}
                                height={'100%'} sx={{ margin: '12px 0 8px' }}>
                                <Grid item lg={3} md={3} sm={3} sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'inherit'
                                }}>

                                    <InputField
                                        labelStyle={{
                                            display: 'none'
                                        }}
                                        inputStyle={{
                                            justifyContent: 'center',
                                            background: inputStyle?.inputBackground ? inputStyle?.inputBackground : 'none',
                                            '& div': {
                                                height: inputStyle?.height ? inputStyle?.height : '22px',
                                                padding: inputStyle?.padding ? inputStyle?.padding : '0 ',
                                                fontSize: inputStyle?.fontSize ? inputStyle?.fontSize : '13px',
                                                margin: inputStyle?.margin ? inputStyle?.margin : '0',
                                                '& input': {
                                                    padding: '0 !important'
                                                },
                                                '& fieldset': {
                                                    border: inputStyle?.border ? inputStyle?.border : '0 !important',
                                                    borderRadius: inputStyle?.borderRadius ? inputStyle?.borderRadius: '0 !important',
                                                    borderBottom: inputStyle?.borderBottom ? inputStyle?.borderBottom : '1px solid #D3D3D3 !important',
                                                }
                                            },
                                            '& .MuiFormHelperText-root': {
                                                display: 'flex',
                                                color: 'red',
                                                margin: '0',
                                                fontSize: '11px'
                                            }
                                        }}
                                        startAdornments={<SearchIcon sx={{ ml: 1, fontSize: '16px', color: '#818181' }} />}
                                        onChange={(e: any) => handleAddChange('roleNo', e?.target?.value)}
                                        fullWidth={true}
                                        value={state?.roleNo}
                                        placeholder='Role No'

                                    />
                                </Grid>
                                <Grid item lg={5.5} md={5} sm={5} sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'inherit'
                                }}>
                                    <InputField
                                        labelStyle={{
                                            display: 'none'
                                        }}
                                        inputStyle={{
                                            justifyContent: 'center',
                                            background: inputStyle?.inputBackground ? inputStyle?.inputBackground : 'none',
                                            '& div': {
                                                height: inputStyle?.height ? inputStyle?.height : '22px',
                                                padding: inputStyle?.padding ? inputStyle?.padding : '0 ',
                                                fontSize: inputStyle?.fontSize ? inputStyle?.fontSize : '13px',
                                                margin: inputStyle?.margin ? inputStyle?.margin : '0',
                                                '& input': {
                                                    padding: '0 !important'
                                                },
                                                '& fieldset': {
                                                    border: inputStyle?.border ? inputStyle?.border : '0 !important',
                                                    borderRadius: inputStyle?.borderRadius ? inputStyle?.borderRadius : '0 !important',
                                                    borderBottom: inputStyle?.borderBottom ? inputStyle?.borderBottom : '1px solid #D3D3D3 !important',
                                                }
                                            },
                                            '& .MuiFormHelperText-root': {
                                                display: 'flex',
                                                color: 'red',
                                                margin: '0',
                                                fontSize: '11px',

                                            }
                                        }}
                                        value={state?.role}
                                        onChange={(e: any) => handleAddChange('role', e?.target?.value)}
                                        placeholder='Description'
                                    />
                                </Grid>
                                <Grid item lg={3} md={3} sm={3}>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
                                        <IconButton sx={{ ...styles.CheckIcon, ...checkIconPropsSx }}
                                            onClick={() => handleAddSave(state)}>
                                            <CheckIcon />
                                        </IconButton>
                                        <IconButton sx={{ ...styles.closeIcon, ...closeIconPropSx }}
                                            onClick={handleClose}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Typography sx={{ mt: 0, mb: 0.5, "caret-color": "transparent" }}
                                variant="caption"
                                color="error"
                                component={'p'}>{state?.error?.roleNo}</Typography>
                        </Box>
                    </Box>
                }

            </Box>
        </Box >
    )
}