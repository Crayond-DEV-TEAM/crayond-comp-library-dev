import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import React from 'react';
import ErrorModal from './components/errorModal/errorModal';
import { PageNotFound } from './components/errorPageNotFound';
import AlertIcon from './assets/alertIcon';

function App() {
  const [open, setOpen] = React.useState(false);
  const [openErr, setOpenErr] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const errorIconButtons = [
    {
      label: 'open',
      onClick: handleOpen,
      style: { background: '#EFEEFB', color: '#665CD7', padding: '10px' },
    },
    {
      label: 'Close',
      onClick: handleClose,
      style: { background: '#F44F5A', color: '#FFFF', padding: '10px' },
    },
  ];
 
  //page not found props
  const pageNotFoundIcon = {
    icon: <img src={'/Error.svg'} alt="icon" height={'50%'} width={'50%'} />,
  };
 
  const pageNotFoundText = 'Page not found !!!';
  
  const goBackButton = {
    label: 'Go back',
    onClick: () => {},
    style: {
      background: '#EFEEFB',
      color: '#665CD7',
      padding: '10px',
      width: '138px',
      textTransform: 'capitalize',
    },
  };

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <div style={{ background: '#cfdafc', marginBottom: '10px' }}>
        <button style={{ background: '#5a95fc' }} onClick={handleOpen}>
          open ErrorWithIcon
        </button>
      </div>
      <ErrorModal
        open={open}
        handleClose={handleClose}
        onBackdropClick={() => handleClose()}
        // errorIconComponent={null}
        errorIconUrlStyle={{height:"300px",width:"300px"}}
        errorIconUrl={'https://plus.unsplash.com/premium_photo-1680740103993-21639956f3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'}
        buttons={errorIconButtons}
        errorMessage="Are you sure, would you like to deactivate signal?"
      />

      <PageNotFound
        pageNotFoundIcon={pageNotFoundIcon}
        pageNotFoundText={pageNotFoundText}
        goBackButton={goBackButton}
        ButtonBlockStyle={null}
        messageTextStyle={null}
        rootStyle={null}
        iconBlockStyle={null}
      />
    </div>
  );
}

export default App;
