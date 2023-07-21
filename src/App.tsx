import React, { useState } from 'react';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import { FabButton } from './components/fabButton';
import { Screen } from './components/screen';

function App() {
  const [fabOpen, setFabOpen] = useState(false);

  const actionsData = [
    {
      icon: <FileCopyIcon />,
      name: 'Copy',
      onClick: () => {
        console.log('copied');
      },
    },
    {
      icon: <SaveIcon />,
      name: 'Save',
      onClick: () => {
        console.log('saved');
      },
    },
    {
      icon: <PrintIcon />,
      name: 'Print',
      onClick: () => {
        console.log('printed');
      },
    },
  ];

  return (
    <div
      className="App"
      style={{
        fontFamily: 'Poppins, sans-serif',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Screen
        containerStyle={{}}
        headerStyle={{}}
        bodyStyle={{}}
        footerStyle={{}}
        headerComponent={<>Header</>}
        bodyComponent={<>Body</>}
        footerComponent={<>Footer</>}
      />
      <div>
        <FabButton
          direction="right"
          radius={60}
          semicircle={false}
          actionsData={actionsData}
          actionButtonStyle={{
            backgroundColor: '#fff',
          }}
          buttonStyle={{}}
          directionStyle={{ bottom: '10px' }}
          closeIcon={<CloseIcon />}
          openIcon={<AddIcon />}
          isOpen={fabOpen}
          onToggle={() => {
            setFabOpen((prevOpen) => !prevOpen);
          }}
          onMainButtonClick={() => {
            console.log('Main FAB button clicked!');
          }}
        />
      </div>
    </div>
  );
}

export default App;
