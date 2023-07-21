import { SxProps } from "@mui/material";

export const view_styles:{[key:string] : SxProps} = {
  rootStyle: {
    display: 'flex',
    columnGap: '40px',
    // flexWrap: 'wrap',
    rowGap: '20px',
    minWidth: '100%',

    '& .dragged': {
      border: '30px solid red',
      opacity: 1,
    },
  },

  cardContainer: {
    minWidth: ' 350px',
    background: '#F1F1F1',
    height: '637px',
    padding: '16px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    '&::-webkit-scrollbar': { display: 'none' },
  },

  containerTitleStyle: {
    color: '#262626',
    fontWeight: '600',
    marginBottom: '12px',
    fontSize: '14px',
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
    color: ' #00000029',
    // minHeight: '108px',
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
    padding: '0 12px',
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
