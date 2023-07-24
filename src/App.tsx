import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { TextArea } from './components/textArea';
import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';

function App() {

  const [text, setText] = useState("");


  const handleChange = (html: string) => {
    setText(html);
  };
  const formatButtons = {
    formats: [
      'ql-font',
      'ql-size',
      'ql-bold',
      'ql-italic',
      'ql-underline',
      'ql-strike',
      'ql-list',
      'ql-script'
    ]
  }
  
  return (
    <div className="App" style={{ width: '100vw', height: '100vh', background: 'white', }}>
      {/* <h1>{text}</h1> */}
      <Box sx={{
        margin: 'auto',
        width: '70%',
        paddingTop: '40px',
      }}>
        <TextArea
          handleChange={handleChange}
          formatButtons={formatButtons}
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
          reactQuillProps={{}}
           />
      </Box>
     
    </div>
  )
}

export default App;
