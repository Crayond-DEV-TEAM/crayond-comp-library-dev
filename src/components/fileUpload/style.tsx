export const style = {
  rootStyle: {},
  cardSx: {
    border: '1.5px dashed #D3D3D3',
    borderRadius: '8px',
    backgroundColor: '#fff',
    p: 5,
  },
  iconSx: {
    textAlign: 'center',
  },
  descSx: {
    textAlign: 'center',
    color: '#929292',
    fontSize: '14px',
    // mt: '16px',
  },
  uploadedCardSx: {
    border: '1px solid #E9E9E9',
    mt: '12px',
    padding: '12px',
    display: 'flex',
    gap: 1.4,
    '& > div:last-child': {
      marginLeft: 'auto',
    },
    borderRadius: '8px',
  },
  fileTitleSx: {
    color: '#3B3B3B',
    fontSize: '12px',
  },
  sizeSx: {
    color: '#929292',
    fontSize: '12px',
  },
  uploadedFileBoxSx: {
    borderRadius: '6px',
    display: 'grid',
    placeItems: 'center',
  },
  removeIconSx: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  docIconStyle: {},
  cardVtwoSx: {
    border: '1.5px dashed #D3D3D3',
    borderRadius: '8px',
    backgroundColor: '#fff',
    p: 1.2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteIconStyle: {
    position: 'absolute',
  },
  pauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  errorSx: {
    color: 'red',
    fontSize: '12px',
  },
  uploadErrorSx: {
    color: 'red',
    fontSize: '12px',
    textAlign:'center'
  },
};
