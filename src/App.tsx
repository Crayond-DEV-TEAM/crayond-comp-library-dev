import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { TextArea } from './components/textArea';
import React, { useState } from "react";

function App() {

  const [text, setText] = useState("");

  const formatButtons = {
    formats: [
      'ql-font',
      'ql-size',
      'ql-bold',
      'ql-italic',
      'ql-underline',
      'ql-strike',
      // 'ql-list',
      // 'ql-script'
    ]
  }

  const handleChange = (html: React.SetStateAction<string>) => {
    setText(html);
  };

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <h1>{text}</h1>
      <TextArea
        reactQuillProps={{}}
        handleChange={handleChange}
        parentSx={{
          padding:'40px 0'
        }}
        value={text}
        inputHeight=''
        minWidth='80%'
        maxWidth='80%'
        reverseToolbarSx={false}
        formatButtons={formatButtons}
        border=''
        borderRadius='' />
    </div>
  )
}

export default App;