import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { TextArea } from './components/textArea';
import React, { useState } from "react";
import { Box } from '@mui/material';

function App() {

  const [text, setText] = useState("");

  const handleChange = (html: React.SetStateAction<string>) => {
    setText(html);
  };

  return (
    <div className="App" style={{ width: '100vw', height: '100vh', background: 'white', }}>
      <h1>{text}</h1>
      <Box sx={{
        margin: 'auto',
        width: '70%',
        paddingTop: '40px',
      }}>
        <TextArea
          handleChange={handleChange}
          background=''
          parentSx={{}}
          value={text}
          inputHeight=''
          minWidth=''
          maxWidth=''
          reverseToolbarSx={false}
          border=''
          borderRadius=''
          placeholder=''
          ReactQuillProps={{}}
           />
      </Box>
     
    </div>
  )
}

export default App;
