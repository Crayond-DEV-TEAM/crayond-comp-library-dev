export const Cusmstyle = {
    tablePaper: {
        borderRadius: 0,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%",
        width: '100%', overflow: 'hidden'
    },
    tableContiner:{
     overflow:"auto"
    },
    titleContainer:{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      gap:'8px',
      padding:"10px 12px",
    },
    tableTitle:{
      fontSize:"18px",
      fontWeight:"600",
    },
  tableHeader:{
    fontSize:"16px",
    fontWeight:"600"
  },
    labelBackground:{
     display:"inline-block",
     padding:"2px 8px",
     backgroundColor:"#e2eafa",
     borderRadius:"4px",
    },
    labelText:{
        color:"#7692cc",
        fontSize:"14px"
    },
    progressBar:{
       height:"6px",
       borderRadius:"3px",
    },
    labelImage:{
        width:"32px",
        height:"32px",
        objectFit:"cover",
    },
    customCheckbox:{
      "&   .MuiSvgIcon-root path":{
        stroke:"#EAEAEA"
      }
    },
    avaterText:{
    width:"28px",
    height:"28px",
    "& h6":{
      fontSize:"14px",
    }
    },
    moreProfile:{
      color:"primary.main",
      fontSize:"12px",
      fontWeight:"600",
      cursor:"pointer"
    },
    imageAndProfiles:{
      display:"flex",
      alignItems:"center",
      gap:'4px',
    },
    popoverProfile:{
      backgrundColor:"#fff",
      padding:"8px",
    },
    profileImage:{
      width:"28px",
      height:"28px",
      objectFit:"cover",
  },
  imageAndProfilesTooltip:{
    backgroundColor:"#fff",
    boxShadow:"#C2C1C7 0px 3px 10px",
    color:"#353448",
    padding:"0px"
  },
  negativeGrowth:{
   fontSize:"14px",
   color:"#F44F5A"
  },
  positiveGrowth:{
    fontSize:"14px",
    color:"#25C460"
  }
}