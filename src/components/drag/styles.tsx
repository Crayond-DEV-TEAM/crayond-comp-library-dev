export const styles = {
  rootStyle: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    flexWrap: 'wrap',
    columnGap: '20px',
  },

  dragContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  statusStyle: {
    width: '100%',
    pl: 2,
  },
  statusTitleStyle: {
    fontSize: '18px',
    color: '#353448',
    fontWeight: '600',
  },

  columnContainerStyle: {
    width: 350,
    minHeight: '530px',
    borderRadius: '12px',
    opacity: 1,
    position: 'relative',
  },
  titleStyle: {
    color: '#3B3B3B',
    fontWeight: '500',
    marginBottom: '12px',
    fontSize: '14px',
  },

  subTitleStyle: {
    color: '#3B3B3B',
    fontWeight: '500',
    marginBottom: '12px',
    fontSize: '12px',
    alignItem: 'center',
  },
  childBoxContainer: {
    borderRadius: '8px',
    // padding: '12px',
    width: '100%',
    marginBottom: '10px',
    backgroundColor: '#ffff',
    '&:hover': {
      border: '1px solid #665CD7',
      boxShadow: '2px 2px 8px  #00000029 ',
    },
  },

  childOnDraggedBox: {
    height: '108px',
    border: '2px dashed #665CD7',
    borderRadius: '8px',
    marginBottom: '12px',
  },

  childTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  addTodoButton: {
    minHeight: '36px',
    background: '#FFFFFF',
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: '8px',
    padding: '0 4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '12px',
    marginTop: 'auto',
    cursor: 'pointer',
  },

  designBlock: {
    display: 'flex',
    columnGap: '12px',
    marginBottom: '12px',
  },
  designBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '23px',
    borderRadius: '6px',
    p: '3px 4px',
  },
};
