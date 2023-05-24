import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Collapse, Hidden, Toolbar } from '@mui/material';
import { styles } from './styles';
import MenuIcon from '../../assets/menuIcon';
import CloseIcon from '@mui/icons-material/Close';

export default function Header(props: any) {
  const {
    headerComponentList,
    subHeaderComponentList,
    appBarProps,
    appBarStyle,
    toolBarStyle,
    toolBarProps,
    mobileMenuIconStyle,
    subHeaderStyle,
  } = props;
  const [collapseExpend, setCollapseExpend] = React.useState(false);

  const handelCollapse = () => {
    setCollapseExpend((prv) => !prv);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ ...styles.appBar, ...appBarStyle }}
        {...appBarProps}
      >
        <Toolbar
          variant="dense"
          sx={{ ...styles.toolBar, ...toolBarStyle }}
          {...toolBarProps}
        >
          {headerComponentList
            ?.sort((a: any, b: any) => {
              return a.order - b.order;
            })
            .map((list: any) => (
              <Box
                className={list?.mobileScreenActive ? '' : 'hideMobileScreen'}
                sx={list?.style}
              >
                {list?.component}
              </Box>
            ))}
          <Box
            onClick={handelCollapse}
            sx={{ ...styles.menuIcon, ...mobileMenuIconStyle }}
          >
           {collapseExpend ? <CloseIcon sx={{color:"#fff"}} /> : <MenuIcon color="#fff" />  } 
          </Box>
        </Toolbar>
        {subHeaderComponentList?.length > 0 && (
          <Box
            className={'hideMobileScreen'}
            sx={{ ...styles.subHeader, ...subHeaderStyle }}
          >
            {subHeaderComponentList
              ?.sort((a: any, b: any) => {
                return a.order - b.order;
              })
              .map((list: any) => (
                <Box
                  className={list?.mobileScreenActive ? '' : 'hideMobileScreen'}
                  sx={list?.style}
                >
                  {list?.component}
                </Box>
              ))}
          </Box>
        )}
        <Hidden mdUp>
          <Collapse in={collapseExpend} timeout="auto" unmountOnExit>
            <Box display={'flex'} flexDirection={'column'} gap={'12px'} p={2}>
              {headerComponentList
                ?.sort((a: any, b: any) => {
                  return a.order - b.order;
                })
                .map((list: any) => (
                  <Box
                    className={
                      list?.mobileScreenActive ? 'hideMobileScreen' : ''
                    }
                    sx={list?.style}
                  >
                    {list?.component}
                  </Box>
                ))}
              {headerComponentList
                ?.sort((a: any, b: any) => {
                  return a.order - b.order;
                })
                .map((list: any) => (
                  <Box
                    className={
                      list?.mobileScreenActive ? '' : 'hideMobileScreen'
                    }
                    sx={list?.style}
                  >
                    {list?.component}
                  </Box>
                ))}
            </Box>
          </Collapse>
        </Hidden>
      </AppBar>
    </>
  );
}

Header.defaultProps = {
  appBarProps: {},
  headerComponentList: [],
  subHeaderComponentList: [],
  appBarStyle: {},
  toolBarStyle: {},
  toolBarProps: {},
  mobileMenuIconStyle: {},
  subHeaderStyle: {},
};
