export const customMapStyle = {
  rootSx: {},
  hoverCardSx: {
    display:'flex',
    alignItems:'center',
    backgroundColor: 'white',
    borderRadius: '10px',
    color: '#000',
    margin: '0px auto',
    width: '318px',
    height:'125px',
    '@media (max-width: 500px) ': {
        display: 'none',
      },
  },
  CardHeaderSx: {
    fontSize: '14px',
    fontWeight: '600',
    pb:'7px'
  },
  
  OverlayQuerySx: {
    position: 'absolute',
    bottom: '0px',
zIndex:1,
    display: 'none',
    '@media (max-width: 500px) ': {
      display: 'block',
      
    },
  },
  hoverCardQuerySx: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white',
    padding: '12px',
    borderRadius: '10px',
    color: '#000',
    textAlign:'center'
  },
  overlayimage:{
  
  },
  totalSearchBoxSx:{
    // width:'100%',
    maxWidth:'767px',
    margin:'12px auto',
    backgroundColor:'#fff',
    padding:'12px',
    borderRadius:'1px',
    boxShadow:'0px 0px 2px 0px #c8c8c8',
    '@media (max-width: 482px) ': {
     maxWidth:'288px'
    },

  },
  totalBoxSx:{
    position:'absolute',
    top:'0px',
    // left:'0px',
    zIndex:1,
    right:'60px',
    '@media (max-width: 806px) ': {
      top:'50px',
      left:'11px'
    },
  },
  searchBox:{
    display: 'flex', justifyContent: 'space-between',
    '@media (max-width: 482px) ': {
      display:'block',
      textAlign:'center'
    },
  },
  inputAutoSx:{
    width: '100%', maxWidth: '280px',
    mr:'12px',
    '@media (max-width: 482px) ': {
      mr:'0px',
      margin:'8px auto'
    },
  },
  distanceSx:{
    display: 'flex', justifyContent: 'space-between',
    alignItems:'center',
    paddingTop:'6px',
    height:'22px',
    
  },
  distanceTypeSx:{
    fontSize: '10px', fontWeight: '600', color: '#000',
    
  },
  nearSx:{
    position:'absolute',
    zIndex:1,
    right:'11px',
    top:'62px',
    backgroundColor:'#fff',
    borderRadius:'1px',
    '&:hover': {
      backgroundColor: '#fff',
    },
    
    // backgroundColor:'#eaeaea'
  },inputSx:{
    width:'100%',
    '& .MuiOutlinedInput-input': {
        width: '100%',
        fontWeight: 'normal',
        padding:"6px 8px",
        fontSize:'12px',
      },
      '& .MuiOutlinedInput-notchedOutline':{
    
      },
  },
  CalculateSx:{
     width:'100%',
     maxWidth:'86px',
     borderRadius:'8px',
     fontSize:'12px',
     marginRight:'6px',
     height:'28px',
     '@media (max-width: 420px) ': {
      marginRight:'0px',
      marginTop:'6px'
    },

  },
  btnSx:{
    display: 'flex', justifyContent: 'center',
    alignItems:'center',
  },
  cardSx:{
    textAlign: 'start'
  },closeDetailSx:{
    position: 'absolute',
    top: '3px',
    right: '14px',
  }
};
