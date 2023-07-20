export const customMapStyle = {
  rootSx: {},
  hoverCardSx: {
    backgroundColor: 'white',
    padding: '12px',
    borderRadius: '10px',
    color: '#000',
    margin: '0px auto',
    width: '250px',
    '@media (max-width: 500px) ': {
        display: 'none',
      },
  },
  CardHeaderSx: {
    fontSize: '16px',
    fontWeight: '600',
  },
  
  OverlayQuerySx: {
    display: 'none',
    '@media (max-width: 500px) ': {
      display: 'block',
      
    },
  },
  hoverCardQuerySx: {
    position: 'absolute',
    bottom: '0px',
    backgroundColor: 'white',
    padding: '12px',
    borderRadius: '10px',
    color: '#000',
    textAlign:'center'
  },
  overlayimage:{
  
  },
  totalSearchBoxSx:{
    width:'100%',
    maxWidth:'612px',
    margin:'12px auto',   zIndex:1,
    position:'absolute',
    top:'0px',
    backgroundColor:'#fff',
    left:'0px',
    right:'0px',
    padding:'18px',
    borderRadius:'12px',
    boxShadow:'0px 0px 4px 1px #c8c8c8'

  },
  searchBox:{
    display: 'flex', justifyContent: 'space-between',
    paddingBottom:'12px'
  },
  distanceSx:{
    display: 'flex', justifyContent: 'space-between',
    alignItems:'center',
    height:'42px'
  },
  nearSx:{
    backgroundColor:'#eaeaea'
  },inputSx:{
    width:'100%',
    '& .MuiOutlinedInput-input': {
        width: '100%',
        fontWeight: 'normal',
        padding:"12px 16px"
        
      },
      '& .MuiOutlinedInput-notchedOutline':{
    
      },
  },
  CalculateSx:{
     width:'100%',
     maxWidth:'117px',
     borderRadius:'8px'
  }
};
