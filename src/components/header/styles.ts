 

export const styles = {
  appBar: {
    minHeight: '56px',
    // maxHeight: '56px',
    display:"flex",
    justifyContent:"center",
    padding:"12px 12px"

    ,'& .hideMobileScreen':{
      display:{
        xs:"none",
        sm:"none",
        md:"inherit"
      }
    }
  },
  toolBar: {
    minHeight: 'unset',
    display:"flex",
    justifyContent:"space-between",
    gap:"12px",
    flexWrap:"wrap",
    padding:{
      xs:"0 6px",
      md:"0 25px"
    }
  },
  menuIcon:{
    display:{
        xs:"block",
        md:"none",
        xl:"none"
    },
    transition:"all .3s"
  },
  subHeader:{
    marginTop:"12px",
    borderTop:"1px solid #EFEEFB3F",
    padding:"12px 25px 0 25px",
    minHeight: 'unset',
    display:"flex",
    justifyContent:"space-between",
    gap:"12px",
    flexWrap:"wrap"
  }
  
};

