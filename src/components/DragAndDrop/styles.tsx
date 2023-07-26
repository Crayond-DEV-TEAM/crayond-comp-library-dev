export const styles = {
  itemStyles: {
    backgroundColor: '#eee',
    borderRadius: 4,
    padding: '4px 8px',
    transition: 'background-color .8s ease-out',
    marginTop: 8,

    ':hover': {
      backgroundColor: '#fff',
      transition: 'background-color .1s ease-in',
    },
  },


  styledColumn:{
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8,
  
    h2: {
      margin: 0,
      padding: '0 16px'
    }
  },

  styledList:{
    backgroundColor: '#ddd',
  borderRadius: 8,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  marginTop: 8
  },

  containerStyles:{
    display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  margin: '10vh auto',
  width: '80%',
  height: '80vh',
  gap: '8px'
  },
  divStyle: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '10vh auto',
    width: '80%',
    height: '80vh',
    gap: '8px',
  },
};
