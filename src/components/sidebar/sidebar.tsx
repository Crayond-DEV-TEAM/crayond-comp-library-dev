import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Leads from '@mui/icons-material/Leaderboard';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { styles } from './styles';

const drawerWidth = 271;

const openedMixin = (theme: any) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: any) => ({
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

export const Sidebar = (props: any) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const DrawerHeader = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
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
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  const menuData = [
    {
      primaryText: 'Menu 1',
      secondaryText: 'info',
      icon: <HomeWorkIcon />,
      onClick: () => {
        console.log('clk');
      },
      subMenu: [
        {
          primaryText: 'Sub Menu 1.1',
          // secondaryText: 'info',
          icon: <DashboardIcon />,
          subMenu: [
            {
              primaryText: '2 nested Menu 1.1.1',
              // secondaryText: 'info',
              icon: <Leads />,
              onClick: () => {
                console.log('clk');
              },
            },
          ],
          onClick: () => {
            console.log('clk');
          },
        },
      ],
    },
    {
      primaryText: 'Menu 2',
      secondaryText: 'info',
      icon: <Leads />,
      onClick: () => {
        console.log('clk');
      },
    },
  ];
  return (
    <>
      <Box sx={styles.root}>
        <MuiDrawer sx={Drawer} variant="permanent" open={open}>
          <Box sx={DrawerHeader}>
            <Typography color="#fff" component="h6">
              Company Name
            </Typography>
            <IconButton
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
            </IconButton>
          </Box>
          <Divider />
          <List>
            {menuData?.map((list: any, index:number) => (
              <>
                <NestedListItem
                key={`${index}_${list?.primaryText}_menu`}
                  primaryText={list?.primaryText}
                  secondaryText={list?.secondaryText}
                  open={open}
                  icon={list?.icon}
                  subMenu={list?.subMenu}
                />
              </>
            ))}
          </List>
          <Divider />
        </MuiDrawer>
      </Box>
    </>
  );
};

const NestedListItem = (props: any) => {
  const {key, primaryText, secondaryText, open, subMenu, icon } = props;
  const [openCollapse, setOpenCollapse] = useState(false);
  const handleClickCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  const isSubMenu = subMenu?.length > 0;
  return (
    <ListItem
      key={key}
      disablePadding
      sx={{ display: 'block' }}
    >
      <ListItemButton
        onClick={
          open
            ? () => handleClickCollapse()
            : () => {
                console.log('/user/companies');
              }
        }
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.0,
        }}
      >
        {icon && (
          <ListItemIcon
            sx={{
              padding: '7px',
              borderRadius: '50%',
              color: '#fff',
              bgcolor: 'primary.light',
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={primaryText}
          secondary={secondaryText}
          sx={{ opacity: open ? 1 : 0 }}
        />
        {isSubMenu ? (
          open ? (
            openCollapse ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )
          ) : (
            ''
          )
        ) : (
          ''
        )}
      </ListItemButton>
      {isSubMenu && (
        <Collapse in={open && openCollapse} timeout="auto" unmountOnExit>
          <List sx={{ marginLeft: '5px' }} component="div" disablePadding>
            {subMenu?.map((menu: any, index:number) => (
              <NestedListItem
                key={`${index}_${menu?.primaryText}_submenu`}
                primaryText={menu?.primaryText}
                secondaryText={menu?.secondaryText}
                open={open}
                icon={menu?.icon}
                subMenu={menu?.subMenu}
              />
            ))}
          </List>
        </Collapse>
      )}
    </ListItem>
  );
};
export default Sidebar;
