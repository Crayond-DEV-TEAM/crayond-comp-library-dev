export const customCalenderStyle = {
  rootSx: {
    backgroundColor: '#FFFFFF',
  },
  calenderlistSx: {
    cursor:'pointer',
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
      maxWidth:'287px',
      borderRadius:'8px',
      border:'1px solid #E9E9E9',
      p:2,
    },
   
  },
  dialogHeaderSx:{
    p:'6px 0px',
   fontSize:'16px',
   fontWeight:'500',
   color:'#262626',
   borderBottom:'1px solid #E9E9E9'
  },
  bodyContentSx:{
   pt:'24px !important',
   px:'0px'
  },
  timeSx:{
    pt:2
  },
  eventbtn:{
    backgroundColor:'#665CD7',
    color:'#fff',
    borderRadius:'8px',
    "&:hover":{
      backgroundColor:'#665CD7',
    color:'#fff',
    }
  },
  closeSx:{
    color:'#F44F5A',
    position: 'absolute',
    top: '18px',
    right: '6px',
    p:'4px',
  },timeDateSx:{
    '& .MuiOutlinedInput-notchedOutline':{
      border:'none'
    }
  },selectTimeSx:{
    fontSize:'16px',
    fontWeight:'500'
  },
  headSx:{
    fontSize:'20px',
    fontWeight:'600',
    color:'#262626'
  },
  rootHeadSx:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#F2F2F2',
    p:'4px 20px'
  },calenderSx:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  nationalLeaveSx:{
       fontSize:'12px',
        color: '#000'
  }
  
};
