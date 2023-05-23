export const footer_style = {
  background: {
    height: '670px',
    background: '#FAFAFA',
    padding: '30px 100px',
    '@media(max-width: 900px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },

  container: {
    display: 'flex',
    columnGap: '100px',
  },

  heading: {
    color: '#404E61',
    fontSize: '16px',
    paddingBottom: '12px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  subTitle: {
    color: '#6E7882',
    fontSize: '16px',
    paddingBottom: '14px',
    cursor: 'pointer',
  },

  logoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    paddingBottom: '20px',
    borderBottom: ' 1px solid #98A0AC',
    '@media(max-width: 900px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
    },
  },

  logoBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    columnGap: '12px',
    '@media(max-width: 900px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },

  logoText: {
    color: '#98A0AC',
    fontSize: '18px',
    alignSelf: 'center',
  },

  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    paddingTop: '20px',
    bottom: '0px',
  },

  bottomText: {
    color: '#98A0AC',
    fontSize: '12px',
    paddingRight: '24px',
  },

  subTitleBlock: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItem: 'center',
  },
};
