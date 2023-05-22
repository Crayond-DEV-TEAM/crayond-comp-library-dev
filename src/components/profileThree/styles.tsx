export const styles = {
  profileContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '4px',
  },
  titleBox: {
    padding: '20px',
    position: 'relative',
    '& .MuiDivider-root::before': {
      width: '0% !important',
    },
    '& .MuiDivider-root::after': {
      borderTop: 'thin solid #E9E9E9',
    },
    '& .circle': {
      position: 'absolute',
      right: '20px',
      width: '9px',
      height: '9px',
      backgroundColor: 'primary.main',
      borderRadius: '50%',
      zIndex: '4',
      opacity: '70%',
    },
  },
  profileDetails: {
    padding: {
      xs: '20px 20px',
      sm: '20px 20px',
      lg: '20px 20px 40px 20px',
    },
  },
  profileImg: {
    width: {
      xs: '217px',
      sm: '263px',
    },
    height: {
      xs: '217px',
      sm: '263px',
    },
    objectFit: 'cover',
    fontSize: '50px',
    fontWeight: '600',
  },
  deleteContainer: {
    borderRadius: '50%',
    backgroundColor: '#FF4D4A',
    width: '28px',
    height: '28px',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    alignItems: 'center',
  },
  uploadImageBtn: {
    width:  '123px',
    margin: '12px 0',
    textTransform: 'capitalize',
    marginRight:"15px",
    // padding:"auto 18px",
    color:"#888888",
    border:"1px solid #E9E9E9"
  },
  userName: {
    color: '#111111',
    fontSize: '32px',
    fontWeight: '700',
  },
  
};
