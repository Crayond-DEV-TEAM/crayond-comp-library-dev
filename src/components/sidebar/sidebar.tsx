import { Theme, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { styles } from './styles';
import { ListItemProps, SidebarProps } from './props';
import { Stack, SxProps } from '@mui/material';

export const Sidebar = (props: SidebarProps) => {
  const {
    openSideBar,
    logoDetails,
    drawerProps,
    listStyle,
    drawerWidth = 271,
    menuData,
    rootStyle,
    bottomMenuData = [],
    listItemStyle = {},
    listButtonStyle = {},
    listIconStyle = {},
    listTextStyle = {},
  } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(openSideBar);
  }, [openSideBar]);
  const openedMixin = (theme: Theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  const DrawerHeader = {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  };

  const Drawer = {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        overflowX: 'overlay',
        '::-webkit-scrollbar': {
          display: 'none',
        },
        ...rootStyle,
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': { ...closedMixin(theme), ...rootStyle },
    }),
  };

  return (
    <>
      <Box sx={{ ...styles.root }}>
        <MuiDrawer
          sx={Drawer as SxProps}
          variant="permanent"
          open={open}
          {...drawerProps}
        >
          <Stack
            direction={'column'}
            justifyContent={'space-between'}
            height={'100%'}
          >
            <Box>
              <Box sx={DrawerHeader}>
                <Stack
                  direction={'row'}
                  gap="8px"
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  p={2}
                >
                  <Avatar
                    sx={logoDetails?.logoImageStyle}
                    src={logoDetails?.logoImage}
                  />
                  <Typography sx={logoDetails?.versionStyle}>
                    {logoDetails?.version}
                  </Typography>
                </Stack>
                {/* <IconButton
                  sx={{
                    marginLeft: '40px',
                    marginRight: '5px',
                    padding: '2px',
                    bgcolor: '#5078E1',
                    color: '#fff',
                    '&:hover': { bgcolor: '#5078E1' },
                  }}
                  onClick={handleDrawer}
                >
                  {open ? (
                    <ChevronLeftIcon fontSize="small" />
                  ) : (
                    <ChevronRightIcon fontSize="small" />
                  )}
                </IconButton> */}
              </Box>
              <List sx={{ marginLeft: '0', ...listStyle }}>
                {menuData?.map((list: any, index: number) => (
                  <>
                    <NestedListItem
                      key={`${index}_${list?.primaryText}_menu`}
                      primaryText={list?.primaryText}
                      secondaryText={list?.secondaryText}
                      open={open}
                      onClick={list?.onClick}
                      icon={list?.icon}
                      subMenu={list?.subMenu}
                      styles={{
                        listItemStyle: list?.listItemStyle || listItemStyle,
                        listButtonStyle:
                          list?.listButtonStyle || listButtonStyle,
                        listIconStyle: list?.listIconStyle || listIconStyle,
                        listTextStyle: list?.listTextStyle || listTextStyle,
                      }}
                      expandLessIcon={<ExpandLess />}
                      expandMoreIcon={<ExpandMore />}
                    />
                  </>
                ))}
              </List>
            </Box>
            <Box>
              <List sx={{ marginLeft: '0', ...listStyle }}>
                {bottomMenuData?.map((list: any, index: number) => (
                  <>
                    <NestedListItem
                      key={`${index}_${list?.primaryText}_menu`}
                      primaryText={list?.primaryText}
                      secondaryText={list?.secondaryText}
                      open={open}
                      icon={list?.icon}
                      onClick={list?.onClick}
                      subMenu={list?.subMenu}
                      styles={{
                        listItemStyle: list?.listItemStyle || listItemStyle,
                        listButtonStyle:
                          list?.listButtonStyle || listButtonStyle,
                        listIconStyle: list?.listIconStyle || listIconStyle,
                        listTextStyle: list?.listTextStyle || listTextStyle,
                      }}
                      expandLessIcon={<ExpandLess />}
                      expandMoreIcon={<ExpandMore />}
                    />
                  </>
                ))}
              </List>
            </Box>
          </Stack>
        </MuiDrawer>
      </Box>
    </>
  );
};

const NestedListItem = (props: ListItemProps) => {
  const {
    primaryText,
    secondaryText,
    open,
    subMenu = [],
    onClick,
    icon,
    selected,
    styles,
    expandLessIcon,
    expandMoreIcon,
    isChild = false,
  } = props;
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleClickCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  const isSubMenu = subMenu?.length > 0 && Array.isArray(subMenu);

  return (
    <ListItem
      disablePadding
      sx={{
        display: 'block',
        ...styles?.listItemStyle,
        '& .Mui-selected': {
          backgroundColor: '#ffffff11 !important',
        },
      }}
    >
      <ListItemButton
        selected={openCollapse || selected}
        onClick={
          open
            ? isSubMenu
              ? (e) => {
                  handleClickCollapse();
                  onClick({ event: e, currentMenu: primaryText });
                }
              : (e) => onClick({ event: e, currentMenu: primaryText })
            : (e) => {
                onClick({ event: e, currentMenu: primaryText });
              }
        }
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.0,
          paddingLeft: isChild ? '20px' : '16px',
          ...styles?.listButtonStyle,
        }}
      >
        {icon && (
          <ListItemIcon
            sx={{
              padding: '7px',
              borderRadius: '50%',
              color: 'common.white',
              bgcolor: 'primary.light',
              minWidth: 0,
              mr: open ? 2 : 'auto',
              justifyContent: 'center',
              ...styles?.listIconStyle,
            }}
          >
            {icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={primaryText}
          secondary={secondaryText}
          sx={{
            opacity: open ? 1 : 0,
            '& .MuiTypography-root': {
              overflow: 'hidden',
              // width: '100%',
              color: '#fff',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            },
            ...styles?.listTextStyle,
          }}
        />
        {isSubMenu && open && (
          <Box>
            {openCollapse ? (
              expandLessIcon ? (
                expandLessIcon
              ) : (
                <ExpandLess />
              )
            ) : expandMoreIcon ? (
              expandMoreIcon
            ) : (
              <ExpandMore />
            )}
          </Box>
        )}
      </ListItemButton>
      {isSubMenu && (
        <Collapse in={open && openCollapse} timeout="auto" unmountOnExit>
          <List
            sx={{
              // background : openCollapse || selected ? '#ffffff11' : '',
              // marginLeft:'5px',
              ...styles?.listStyle,
            }}
            component="div"
            disablePadding
          >
            {subMenu?.map((menu: any, index: number) => (
              <NestedListItem
                key={`${index}_${menu?.primaryText}_submenu`}
                primaryText={menu?.primaryText}
                secondaryText={menu?.secondaryText}
                open={open}
                onClick={menu?.onClick}
                icon={menu?.icon}
                selected={menu?.selected}
                subMenu={menu?.subMenu}
                expandLessIcon={expandLessIcon}
                expandMoreIcon={expandMoreIcon}
                isChild={true}
                {...menu}
              />
            ))}
          </List>
        </Collapse>
      )}
    </ListItem>
  );
};
export default Sidebar;
