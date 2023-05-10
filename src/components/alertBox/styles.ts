export const styles = {
  modal: {
    "& .MuiPaper-root":{
    boxShadow:"0px 4px 24px #00000029",

}

  },
  modalContainer: {
    padding: '22px',
    maxWidth: '450px',
  },
  modalTitle: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#101010',
    fontSize: '16px',
  },
  modalDes: {
    textAlign: 'center',
    color: '#353448',
    fontSize: '14px',
  },
  modalPriBtn: {
    padding: '6px 24px',
    textTransform: 'capitalize',
    borderRadius:"8px",
    color:"#fff",
    background:"#F44F5A",
    "&:hover":{
        color:"#fff",
        background:"#F44F5A" 
    }
  },
  modalSecBtn: {
    padding: '6px 24px',
    textTransform: 'capitalize',
    borderRadius:"8px",
    color:"#101010",
    background:"#fff",
    border:"1px solid #DEDEDE",
    "&:hover":{
        color:"#101010",
        background:"#fff",
        border:"1px solid #DEDEDE",
    }
  },
};
