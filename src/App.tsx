import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import React from 'react';
import ErrorModal from './components/errorModal/errorModal';
import { PageNotFound } from './components/errorPageNotFound';

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
  const pageNotFoundIconComponent = (
    <img src={'/Error.svg'} alt="icon" height={'50%'} width={'50%'} />
  );

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
        errorIconUrlStyle={{ height: '300px', width: '300px' }}
        errorIconUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1McZvRXOsoMKSC_5REpN19R9QGj_rDSHrg&usqp=CAU"}
        buttons={errorIconButtons}
        errorMessage="Are you sure, would you like to deactivate signal?"
      />

      <PageNotFound
        pageNotFoundIconComponent={!pageNotFoundIconComponent}
        pageNotFoundText={pageNotFoundText}
        goBackButton={goBackButton}
        pageNotFoundIconUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1McZvRXOsoMKSC_5REpN19R9QGj_rDSHrg&usqp=CAU"}
        ButtonBlockStyle={{}}
        messageTextStyle={{}}
        rootStyle={{}}
        iconBlockStyle={{}}
        urlImgHeight={300}
        urlImgWidth={300}
        urlImgStyle={{}}
      />
    </div>
  );
}

export default App;
