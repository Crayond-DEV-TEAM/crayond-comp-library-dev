export const view_styles = {
  rootStyle: {
    display: 'flex',
    columnGap: '40px',
    flexWrap: 'wrap',
    rowGap: '20px',
  },

  cardContainer: {
    width: ' 367px',
    background: '#F1F1F1',
    height: '637px',
    padding: '16px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    '&::-webkit-scrollbar': { display: 'none' },
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
    alignItem:"center"
  },

  childBoxContainer: {
    color:" #00000029",
    minHeight: '108px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: '8px',
    marginBottom: '12px',
    padding: '12px',
    '&:hover': {
      border: '1px solid #665CD7',
      boxShadow: '2px 2px 8px  #00000029 ',
    },
  },

  hoverChildBox:{
    color:" #00000029",
    minHeight: '108px',
    background: '#f40b0b 0% 0% no-repeat padding-box',
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: '8px',
    marginBottom: '12px',
    padding: '12px',
    width: "335px",
    position:"absolute",
    transform: `translateX(${"150"}px) translateY(${"100"}px)`,
    '&:hover': {
      border: '1px solid #665CD7',
      boxShadow: '2px 2px 8px  #00000029 ',
    },
  },

  childOnDraggedBox: {
    height: '108px',
    border: ' 2px dashed #665CD7',
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
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: '8px',
    padding: '0 12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '12px',
    marginTop: 'auto',
    cursor:"pointer"
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