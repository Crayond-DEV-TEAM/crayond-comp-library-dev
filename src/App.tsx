import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { useState } from 'react';
import { CompareFeature } from './components/compareFeature';

function App() {
  return (
    <div
      className="App"
      style={{
        width: '80vw',
        background: '#fff',
        height: '50vh',
        padding: '100px',
      }}
    >
      <CompareFeature rowBorderColor={''} />
    </div>
  );
}

export default App;
