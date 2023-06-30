import { SxProps } from '@mui/material';

interface styleProps {
  [key: string]: SxProps;
}
export const styles: styleProps = {
  chatBoxRoot: {
    borderRadius: '6px',
    boxShadow: '0 3px 10px #00000011',
    width: '400px',
    border: '1px solid #E9E9E160',
    userSelect: "none",
  },
  header: {
    padding: '16px 20px',
    borderBottom: '1px solid #E9E9E9',
  },
  profileIcon: {
    backgroundColor: '#E9E9E9',
    width: '36px',
    height: '36px',
  },
  title: {
    fontSize: '14px',
    color: '#111111',
  },
  subTitle: {
    fontSize: '10px',
    color: '#777777',
  },
  chatContainer: {
    padding: '0 20px 16px 20px',
  },
  overflow:{
    height: '480px',
    overflowY: 'overlay',
    '::-webkit-scrollbar': {
      width: 0,
    },
  },
  chatList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  chatDetails: {
    display: 'flex',
    flexDirection: 'column',
    transition: 'all .3s'
  },
  messageContainer: {
    margin: '14px 0',
    maxWidth: '80%',
    transition: 'all .3s'
  },
  massagerName: { fontSize: '14px', color: '#262626', fontWeight: '600' },
  massagerTime: { fontSize: '12px', color: '#929292' },
  messageProfile: {
    backgroundColor: '#E9E9E9',
    width: '28px',
    height: '28px',
  },
  messageBody: {
    boxSizing: 'border-box',
    border: '1px solid #E9E9E9',
    padding: '8px 12px',
    borderRadius: '12px 12px 12px 4px',
    display: 'inline-block',
    alignSelf: 'start',
    cursor:'pointer',
    transition: 'all .3s',
    userSelect: "text",
  },
  messageBodyYou: {
    boxSizing: 'border-box',
    // border: '1px solid #E9E9E9',
    padding: '8px 12px',
    borderRadius: '12px 12px 4px 12px',
    display: 'inline-block',
    alignSelf: 'end',
    backgroundColor:'#EEEEEE',
    userSelect: "text",
  },
  messageText: {
    fontSize: '12px',
    lineHeight: '18px',
    display: 'inline-block',
    color: '#111111',
  },
  textEditor: {
    backgroundColor: '#E9E9E9',
    borderRadius: '22px',
    padding: '6px 14px',
  },
  inputStyle: {
    color: '#111111',
    padding: '0',
  },
};
