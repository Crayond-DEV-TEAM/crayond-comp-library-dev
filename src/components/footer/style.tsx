export const footer_style = {
  background: {
    background: '#FAFAFA',
    padding: '30px 100px',
    '@media(max-width: 900px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
      padding: '12px 12px',
    },
  },

  container: {
    display: 'flex',
    columnGap: '100px',
    '@media(max-width: 760px)': {
      display: 'grid',
      overflowY: 'scroll',
      maxHeight: '400px',
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
    paddingBottom: '20px',
    borderBottom: ' 1px solid #98A0AC',
    '@media(max-width: 470px)': {
      display: 'grid',
      rowGap: '18px',
      placeContent: 'normal',
      gridTemplateColumns: 'min-content',
    },
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
    '@media(max-width: 470px)': {
      rowGap: '8px',
      flexWrap: 'wrap',
      width: '270px',
    },
  },

  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    paddingTop: '20px',
    bottom: '0px',
  },

  footerBottomContainer:{
    '@media(max-width: 760px)': {
    paddingTop: '18px',
    }
  },

  bottomText: {
    color: '#98A0AC',
    fontSize: '12px',
    paddingRight: '24px',
  },

  subTitleLeftIcon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItem: 'center',
    columnGap: "8px",

  },

  subTitleRightIcon:{
    display:"flex",
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    columnGap: "8px",
  },
};
