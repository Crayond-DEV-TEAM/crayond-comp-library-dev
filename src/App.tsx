import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { TextArea } from './components/textArea';
import React, { useState } from "react";

function App() {

  const [text, setText] = useState("");

  const handleChange = (html: React.SetStateAction<string>) => {
    setText(html);
  };

  return (
    <div className="App" style={{ width: '100vw', height: '100vh', background:'#fff', padding:'40px 0' }}>
      <TextArea
        reactQuillProps={{}}
        handleChange={handleChange}
        value={text}
        inputHeight=''
        minWidth='80%'
        maxWidth='80%'
        reverseToolbarSx={false}
        parentStyleProps={{}}
        editorStyleProps={{
          height:'200px'
        }}
        formatButtonStyleProps={{}}
        formatButtons={{
          formats: [
            'ql-bold',
            'ql-italic',
            'ql-underline',
            'ql-strike',
            // 'ql-color',
            // 'ql-background',
            'ql-list',
            'ql-script',
          ]
        }}
        border=''
        borderRadius='' />
    </div>
  )
}

export default App;