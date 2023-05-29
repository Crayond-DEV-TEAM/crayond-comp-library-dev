export const view_styles = {
  cardContainer: {
    width: ' 367px',
    background: '#F1F1F1',
    height: '637px',
    padding: '16px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
  },

  titleStyle: {
    color: '#3B3B3B',
    fontWeight: '500',
    marginBottom: '12px',
    fontSize:"14px"
  },

  subTitleStyle: {
    color: '#3B3B3B',
    fontWeight: '500',
    marginBottom: '12px',
    fontSize:"12px"
  },

  childBoxContainer: {
    height: '108px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: '8px',
    marginBottom: '12px',
    padding: '12px',
    '&:hover': {
      border: '1px solid #665CD7',
      boxShadow: '2px 2px 8px #f9060629',
    },
  },

  childTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addTodoButton: {
    height: '36px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 1px 2px #00000029',
    borderRadius: '8px',
    padding: '0 12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '12px',
    marginTop: 'auto',
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
