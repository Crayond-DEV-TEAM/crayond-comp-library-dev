export const Styles = {
  rootStyle: {
    p: 3,
    backgroundColor: '#E9E9E980',
  },

  iconActive: {
    marginRight: '8px',
    top: '1998px',
    left: '839px',
    backgroundColor: '#665CD7',
    borderRadius: '100px',
    width: '40px',
    height: '40px',
    display: 'grid',
    placeItems: 'center',
  },

  iconCompleted: {
    backgroundColor: '#5AC782',
    borderRadius: '100px',
    display: 'grid',
    placeItems: 'center',
    width: '40px',
    height: '40px',
  },
  CompletedColor: {
    marginRight: '8px',
    marginTop: '4px',
    backgroundColor: '#5AC782',
    borderRadius: '100px',
    display: 'grid',
    placeItems: 'center',
    width: '40px',
    height: '40px',
  },

  iconInActive: {
    marginRight: '8px',
    backgroundColor: '#E9E9E980',
    borderRadius: '100px',
    width: '40px',
    height: '40px',
    display: 'grid',
    placeItems: 'center',
  },

  styleInActive: {
    border: ' 1px solid #EFEEFB ',
    backgroundColor: '#fff',
    p: 1,
    width: { lg: '193px', md: '130px' },
    borderRadius: '263px',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },

  styleActive: {
    backgroundColor: '#EFEEFB',
    border: ' 1px solid #EFEEFB ',
    p: 1,
    width: { lg: '193px', md: '130px' },
    borderRadius: '263px',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  labelStyle: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  statusStyle: {
    fontSize: '12px',
    mt: '5px',
  },
  stepWrapStyle: {
    p: 0,
    display: 'flex',
    alignItems: 'center',
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    pt: 3,
    justifyContent: 'right',
    gap: 1,
  },
  subTitleMobStyle: {
    fontSize: '12px',
    mt: '5px',
    color: '#98A0AC',
  },
  titleBoxMobStyle: {
    backgroundColor: '#fff',
    p: 2,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '16px',
  },
  iconBackgroundMobile: {
    marginRight: '8px',
    backgroundColor: '#5AC782',
    borderRadius: '6px',
    display: 'grid',
    placeItems: 'center',
    width: '40px',
    height: '40px',
  },
  progressStyle: {
    '& .MuiMobileStepper-root': {
      borderRadius: 0, // Remove the rounded corners
      backgroundColor: 'transparent', // Set the background to transparent
      boxShadow: 'none', // Remove the box shadow
    },
    '& .MuiMobileStepper-dot': {
      display: 'none', // Hide the dots if needed
    },
  },
  contentStyle: {
    height: 255,
    p: 2,
  },
  buttonAreaMob: {
    display: 'flex',
    flexDirection: 'row',
    p: 2,
    gap: 1,
    mt: 2,
    backgroundColor: '#fff',
    position: 'fixed bottom',
  },
};
