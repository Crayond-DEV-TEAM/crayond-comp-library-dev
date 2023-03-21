export const style = {
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap:"12px"
  },
  outlineBtn:{
   borderRadius:"4px",
   boxShadow:"none",
   textTransform:"capitalize",
   outline:"none !important",
   padding:"8px 12px",
   "&:hover":{
    backgroundColor:"#fff",
    
   }
  }, 
  containedBtn:{
    borderRadius:"4px",
    boxShadow:"none !important",
    textTransform:"capitalize",
    backgroundColor:"primary.main",
    outline:"none !important",
    padding:"8px 12px",
    "&:hover":{
      backgroundColor:"primary.main",
     }
  },
  iconContainer: {
    width:"46px",
    height:"40px",
    display:"flex",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: '4px',
    border: '1px solid #E0E0E0',
    backgroundColor: 'primary.main',
    cursor: 'pointer',
    "& svg":{
      width:"16px",
      height:"16px",
    }
  },
 
  input:{
    fontSize:"12px",
    width:"310px",
    "& .MuiInputBase-root":{
        borderRadius:"4px",
        border:"1px solid #CACACA"
    },
    "& .MuiInputBase-input":{
        padding:"8px",
        border:"none"
    },
    "& fieldset":{
        display:"none"
    }
  }
};
