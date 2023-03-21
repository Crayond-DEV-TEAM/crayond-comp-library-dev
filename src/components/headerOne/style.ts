export const style = {
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  actionBlock: {
    backgroundColor: '#DFDFDF',
    borderRadius: '8px',
    padding: '6px 8px',
    margin: '0 auto',
  },
  selectedText: {
    fontSize: '12px',
    color: '#29302B',
    fontWeight: '600',
  },
  clear: {
    fontSize: '12px',
    color: '#FF4D4A',
    fontWeight: '500',
    cursor: 'pointer',
  },
  statusBlock: {
    backgroundColor: '#fff',
    padding: '6px 10px 6px 6px',
    borderRadius: '8px',
  },
  select: {
    height: '24px',
    minWidth: '95px',
    fontSize: '12px',
    '& fieldset': {
      display: 'none',
    },
  },
  iconContainer: {
    width:"32px",
    height:"32px",
    display:"flex",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: '8px',
    border: '1px solid #E0E0E0',
    backgroundColor: '#fff',
    // boxShadow: '#C2C1C7 0px 3px 5px',
    cursor: 'pointer',
  },
  lastContainer:{
    display:"flex",
    alignItems: 'center',
    flexDirection:"row",
    gap:"14px",
  },
  input:{
    fontSize:"12px",
    "& .MuiInputBase-root":{
        borderRadius:"8px",
        border:"1px solid #EAEAEA"
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
