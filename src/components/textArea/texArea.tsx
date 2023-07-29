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

  
  const [state, setState] = useState(formats);
  const [is_loading, set_is_loading] = useState(true);

  useEffect(() =>{
    const filteredArray = formats.filter((val) => 
    formatButtons?.formats?.includes(val?.className as QuillEditorFormat))
    console.log(filteredArray, 'tempArray');
    
    setState(filteredArray)
    set_is_loading(false)
  },[])

  return (
    <>
    {is_loading?<h1>Loading</h1>:
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
        state={state} 
           />
    </Box>}
    </>
  );
}

TextArea.defaultProps = {
  value: "",
};
