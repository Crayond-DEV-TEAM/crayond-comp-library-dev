export const styles = {
  filterButtonStyle: {
    padding: '10px',
    height: '36px',
    minWidth: '36px',
    outline: 'none',
  },
  PopoverStyle: {
    mt: 1,
  },
  titleWrapperSx: {
    borderBottom: '1px solid #E9E9E9',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  filterTitleStyle: {
    padding: '16px 16px 12px',
    fontSize: '16px',
    textalign: 'left',
    color: '#262626',
    fontWeight: 'bold',
  },
  listContainerStyle: {
    px: 2,
    py: 0,
    overflow: 'auto',
    maxHeight: '332px',
    '&::-webkit-scrollbar': {
      width: '0.2em',
      height: '0.1em',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#d9d7d7',
    },
  },
  listItemStyle: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    px: 0,
  },
  listNameStyle: {
    fontSize: '14px',
    color: '#3B3B3B',
  },
  buttonContainerStyle: {
    borderTop: '1px solid #E9E9E9',
    boxShadow: ' 0px 2px 6px #00000029',
    position: 'sticky',
    bottom: 0,
    zIndex: 1,
  },
  btnWrapper: {
    display: 'flex',
    gap: 2,
    padding: '10px 16px 16px',
  },
  btnstyle: {
    boxShadow: 'none',
    outline: 'none',
    ':hover': {
      transition: 'background-color 0.3s ease',
      backgroundColor: 'hoverColor',
    },
  },
  selectedchipConStyle: {
    mt: -1,
    mb: '12px',
  },
  moreLabelStyle: {
    mr: 0.5,
  },
  searchBarStyle: {
    '& .MuiInputBase-input': {
      pr: '14px',
      pl: '6px',
    },
    '& .MuiInputBase-input::placeholder': {
      fontSize: '12px',
    },
  },
  subListContainerStyle: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    px: 0,
  },
   checkboxStyle: {
    p: 0,
    pr: 1,
    textAlign: 'left',
    marginLeft: '-2px',
    color: '#D3D3D3',
    borderWidth: '0.1px',
    '& .MuiSvgIcon-root': {
      fontSize: '18px',
    },
  },
};
