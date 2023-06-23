export const customCalenderStyle = {
  rootSx: {
    backgroundColor: '#FFFFFF',
  },

  dialogTitle:{
 color:'#3B3B3B',
 fontSize:'14px',
 fontWeight:'500',
 paddingBottom:'6px',

  },
  eventSelect:{
    marginBottom:'12px',
    fontSize:'14px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px',
      borderColor: '#e9e9e9',
      borderRadius:'8px'
   },
    "& .MuiSelect-select":{

      '&.MuiOutlinedInput-input':{
        padding: '9px 14px',
        fontSize: '14px',
         color: '#919191',

      },
      '&.MuiButtonBase-root-MuiMenuItem-root':{
        fontSize:'14px!important'
      },
      
  },
},
  eventtitle:{
    '& .MuiOutlinedInput-input': {
      height:'36px',
      padding: '7px 6px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0px',
    },
  },
  eventListSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: '8px',
    padding: '0px 3px',
    paddingTop: '3px',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      width: '6px',
      height: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#ddd',
      borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#ddd',
    },
  },
  calenderlistSx: {
    cursor: 'pointer',
  },
  editTextSx: {
    fontSize: '14px',
    p: '0px 16px',
  },
  menuSx: {
    '& .MuiMenu-list': {
      p: 1,
    },
    '& .MuiMenuItem-root': {
      p: 0.5,
    },
  },
 
  moreSx: {
    marginRight: '16px',
    fontSize: '26px',
    color: '#424446',
    '&:button:focus, button:focus-visible': {
      outline: 'none',
    },
  },
  totalCalenderSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calenderTitle: {
    fontSize: '12px',
  },
  countSx: {
    borderRadius: '23px',
    color: '#111111',
    fontSize: '12px',
    padding: '2px 7px',
  },
  calenderHeaderSx: {
    color: '#3B3B3B',
    fontSize: '14px',
    fontWeight: '600',
    py: '18px',
  },
  searchBoxSx: {
    padding: '0px 20px',
  },
  subSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textFieldSx: {
    opacity: 1,
    '&.MuiTextField-root': {
      width: '100%',
    },
    '& .MuiOutlinedInput-root': { pl: '4px' },
    '& .MuiOutlinedInput-input': {
      width: '100%',
      fontWeight: 500,
      fontSize: '14px',
      padding: '8px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
      border: '1.5px solid',
      borderColor: '#EAEAEA',
      '& .Mui-focused': {
        border: '0px',
      },
    },

    '& .MuiFormHelperText-root': {
      mx: 0,
    },
  },

  FullCalendarSx: {},
  dialogRootSx: {
    '&.MuiDialog-paper': {
      width: '100%',
      maxWidth: '287px',
      borderRadius: '8px',
      border: '1px solid #E9E9E9',
      p: 2,
    },
  },
  dialogHeaderSx: {
    p: '6px 0px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#262626',
    borderBottom: '1px solid #E9E9E9',
  },
  bodyContentSx: {
    padding:'0px',
    pb: '16px',
  },
  timeSx: {
    pt: 2,
  },
  eventbtn: {
    backgroundColor: '#665CD7',
    color: '#fff',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#665CD7',
      color: '#fff',
    },
  },
  closeSx: {
    color: '#F44F5A',
    position: 'absolute',
    top: '18px',
    right: '6px',
    p: '4px',
  },
  timeDateSx: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  selectTimeSx: {
    fontSize: '16px',
    fontWeight: '500',
  },
  headSx: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#262626',
  },
  rootHeadSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    p: '4px 20px',
  },
  calenderSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  startSx: {
  },
  titleTime:{
    color:'#929292',
    fontSize:'14px',
    fontWeight:'500',
  },
  yearDaySx:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid #E9E9E9',
    padding:'9px 16px',
    borderRadius: '8px',
    '& .MuiTextField-root': {
      maxWidth: '62px',
      borderRight: '2px solid #000',
  
      },
      "& .MuiSelect-select":{
        '&.MuiOutlinedInput-input':{
          padding: '0px',
          paddingRight: '20px',
          paddingLeft: '12px',
        },
        '& .MuiOutlinedInput-input':{

        }
      },
      
      '& .MuiInputAdornment-root .MuiSvgIcon-root': {
        color: '#929292',
        right:'1px'
      },
      '& .MuiOutlinedInput-root': {
        paddingRight: '0px',
        color: '#000 !important',
        // borderRight:'2px solid #BDBDBD',
        borderRadius:'0px',
    maxWidth: '102px',

        marginBottom:'0px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: '0px',
      },
      '& .MuiOutlinedInput-input': {
        cursor: 'pointer',
        padding: '0px',
        paddingLeft: '8px',
      },
  },
  startEndSx: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid #E9E9E9',
    borderRadius: '8px',
    "& input[type='time']::-webkit-calendar-picker-indicator": {
      position: 'absolute',
      left: 0,
      color: '#000',
      width: '26px',
      height: '26px',
      cursor: 'pointer',
      filter: 'invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(50%)',
      "-webkit-filter": 'invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(50%)',
    },
    '& .MuiTextField-root': {
    maxWidth: '137px',

    },
    "& .MuiSelect-select":{
      '&.MuiOutlinedInput-input':{
        padding: '0px',
        paddingRight: '20px',
      },
    },
    
    '& .MuiInputAdornment-root .MuiSvgIcon-root': {
      color: '#929292',
      right:'-2px'
    },
    '& .MuiOutlinedInput-root': {
      paddingRight: '0px',
      color: '#000 !important',
      // borderRight:'2px solid #BDBDBD',
      borderRadius:'0px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0px',
    },
    '& .MuiOutlinedInput-input': {
      maxWidth: '52px',
      cursor: 'pointer',
      padding: '0px',
      paddingLeft: '44px',
    },
  },
  daySelect: {
    width: '100%',
    mb: 2,
    color: '#3B3B3B',
    // '& .MuiSelect-select': {
    //   '&.MuiPaper-root.MuiMenu-paper.MuiPopover-paper': {
    //     margin:'10px 0px'
    //   },
    // },
    
  },
  searchIconSx:{
    ml: 1, fontSize: '16px', color: '#818181' 
  },
  menuItems:{
    fontSize:'14px',
    fontWeight:'500',
  }
  ,
  daySelectSx:{
  },
  dropDownSx:{
    input: {
      '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':
        {
          WebkitAppearance: 'none',
          margin: '0',
        },
    },
  },
  keyArrowSx:{
    display: 'block',
    height: '18px',
    fontSize: '21px',
    color: '#3B3B3B',
  },
  totalArrowSx:{
    display: 'block',
    justifyContent: 'center',
    position: 'absolute',
    left: '22px',
    cursor: 'pointer',

    margin: '0px 4px',
    fontSize: '17px',
  },
  searchIconStyle:{
    ml: 1, fontSize: '16px', color: '#818181'
  },
  addCalenderListSx:{
    color: '#665CD7', ml: '8px'},
    eventIconAddSx:{
      padding: '0px',
      paddingRight: '4px',
    },
    eventTitleHeadSx:{
      fontSize: '14px', color: '#000',
    },
    customEventIconSx:{
      display: 'flex', alignItems: 'center' ,
      margin:'0px 5px'
    },
    eventIcons:{
      fontSize:'14px',
      color:'#eaeaea'
    },
    overAllEventSx:{
      
    }
};

