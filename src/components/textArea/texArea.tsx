import { Box } from '@mui/material';
import { TextAreaProps } from './props'
import Editor from './components/editor';
import { useEffect, useState } from "react";
import formats from './components/toolbarOptions';

type QuillEditorFormat =
  | 'ql-font'
  | 'ql-size'
  | 'ql-bold'
  | 'ql-italic'
  | 'ql-underline'
  | 'ql-strike'
  | 'ql-color'
  | 'ql-background'
  | 'ql-list'
  | 'ql-indent'
  | 'ql-script'
  | 'ql-header'
  | 'ql-blockquote'
  | 'ql-code-block'
  | 'ql-direction'
  | 'ql-align'
  | 'ql-link'
  | 'ql-image'
  | 'ql-video'
  | 'ql-formula';

export default function TextArea(props: TextAreaProps) {
  const {
    value,
    handleChange,
    reverseToolbarSx,
    inputHeight,
    maxWidth,
    minWidth,
    border,
    borderRadius,
    placeholder,
    background,
    parentSx,
    reactQuillProps,
    formatButtons
  } = props;

  
  const [state, setState] = useState([...formats]);

  useEffect(() =>{
    const filteredArray = state.filter((val) => 
    formatButtons?.formats?.includes(val?.className as QuillEditorFormat))
    console.log(filteredArray, 'tempArray');
    
    setState(filteredArray)
  },[])

  return (
    <Box sx={{
      ...{background: background ? background : '#fff',
      width: '100%',
      height: '100%'},
      ...parentSx
    }}>
        <Editor
        value={value}
        minWidth={minWidth}
        borderRadius={borderRadius}
        border={border}
        maxWidth={maxWidth}
        handleChange={handleChange}
        reverseToolbarSx={reverseToolbarSx}
        inputHeight={inputHeight}
        placeholder={placeholder} 
        reactQuillProps={reactQuillProps} 
        formatButtons={formatButtons}    
        state={state} 
           />
    </Box>
  );
}

TextArea.defaultProps = {
  value: "",
};
