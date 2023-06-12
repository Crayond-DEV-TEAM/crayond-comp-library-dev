export const styles = {
  rootSx: {
    backgroundColor: '#ffff',
    borderRadius: '4px',
    height: '100%'
  },
  headingPx: {
    padding: '24px 70px'
  },
  roleRootSx: {
    border: '1px solid #E9E9E9',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    height: '100%',
    overflow: 'hidden',

  },
  roleHeading: {
    color: '#001C3C',
    fontSize: '27px'
  },
  subRootSx: {
    backgroundColor: '#FAFAFA',
    borderRadius: '12px',
    padding: {
      lg: '26px 70px',
      md: '26px 70px',
      sm: '26px 30px',
    },
    height: 'calc(100vh - 150px)'
  },
  containerSx: {
    '& div': {
    }

  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 2,
    pt: 2,
    pb: 1.25,
    borderBottom: '1px solid #EAEAEA',
  },
  body: {
    padding: '12px',
  },
  titleSx: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#29302B',
  },
  iconBtn: {
    borderRadius: '8px',
    width: '80px !important',
    outline: '0 !important',
    border: 'none !important',
    display: 'flex',
    jutifyContent: 'space-between',
    '& svg': {
      fontSize: '14px',
      marginRight: '4px'
    },
    '& p': {
      fontSize: '15px',
      textTransform: 'capitalize'
    }
  },
  textFieldSx: {
    height: '36px !important',
    padding: '0',
    '& div': {
      height: '100%'
    }
  },
  roleNo: {
    color: '#3B3B3B',
    fontSize: '13px',
  },
  card: {
    padding: {
      sm: '0px 0px 0px 12px',
      xs: '0px 0px 0px 12px',
      md: '0px 0px 0px 12px',
    },
    border: '1px solid #665CD7',
    borderRadius: '8px',
    cursor: 'pointer',
    height: '56px',

  },
  unSelectedCard: {
    padding: '0px 0px 0px 12px',
    border: '1px solid #E9E9E9',
    borderRadius: '8px',
    height: '56px',
    cursor: 'pointer',
  },
  roleItemRootSx: {
    padding: '8px 12px',
  },
  overflowItemSx: {
    overflow: 'auto',
    height: 'calc(100% - 140px)',
    "&::-webkit-scrollbar": {
      display: "none",
    },

  },
  editIcon: {
    outline: '0 !important',
    width: '32px',
    border: 'none !important',
    cursor: 'pointer',
    '& svg': {
      fontSize: '16px'
    }
  },
  switchForm: {
    '& label': {
      width: '100%'
    }
  },
  closeIcon: {
    padding: '0',
    cursor: 'pointer',
    outline: '0 !important',
    border: 'none !important',
    '& svg': {
      fontSize: '15px',
      fill: '#FF4D4A'
    }
  },
  CheckIcon: {
    padding: '0',
    marginRight: '8px',
    outline: '0 !important',
    border: 'none !important',
    cursor: 'pointer',

    '& svg': {
      fontSize: '15px',
      fill: '#665CD7'
    }
  },
  roleInput: {
    justifyContent: 'center',
    // background: 'red',
    '& div': {
      height: '22px',
      padding: '0 ',
      fontSize: '13px',
      margin: '0',
      '& fieldset': {
        border: '0 !important',
        borderRadius: '0 !important',
        borderBottom: '1px solid #D3D3D3 !important',
      }
    }
  },
  search: {
    width: '100%',
    '& div': {
      height: '35px',
      padding: '0 ',
      background: '#FBFBFB',
      fontSize: '13px',
      margin: '0',
      '& fieldset': {
        borderRadius: '8px !important',
      }
    }
  },
  parentBox: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: {
      md: 'space-around',
      sm: 'space-evenly',
      xs: 'space-evenly'
    }
  },
  flexItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}