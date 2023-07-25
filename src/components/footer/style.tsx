export const footer_style = {
  background: {
    background: '#FAFAFA',
    padding: '30px 100px',
    '@media(max-width: 900px)': {
      padding: '16px',
    },
  },

  container: {
    '@media(max-width: 600px)': {
      overflowY: 'scroll',
      maxHeight: '670px',
      '&::-webkit-scrollbar': { display: 'none' },
    },
  },

  heading: {
    color: '#404E61',
    fontSize: '16px',
    marginBottom: '12px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  subTitle: {
    color: '#6E7882',
    fontSize: '16px',
    marginBottom: '14px',
    cursor: 'pointer',
  },

  logoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    paddingBottom: '20px',
    borderBottom: ' 1px solid #98A0AC',
  },

  logoBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    columnGap: '12px',
    '@media(max-width: 470px)': {
      justifyContent: 'flex-start',
    },
  },

  logoText: {
    color: '#98A0AC',
    fontSize: '18px',
    alignSelf: 'center',
  },

  subscribeBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    '@media(max-width: 470px)': {
      flexWrap: 'wrap',
      minWidth: '300px',
    },
  },

  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    paddingTop: '20px',
    flexWrap: 'wrap',
    bottom: '0px',
  },

  footerBottomContainer: {
    '@media(max-width: 760px)': {
      paddingTop: '18px',
    },
  },

  bottomText: {
    color: '#98A0AC',
    fontSize: '12px',
    cursor: 'pointer'
  },

  bottomTextBlock: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  titleIcon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItem: 'center',
    columnGap: '8px',
  },
  subTitleIcon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItem: 'center',
    columnGap: '8px',
  },
};
