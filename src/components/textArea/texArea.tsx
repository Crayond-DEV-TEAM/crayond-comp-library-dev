import { Box } from '@mui/material';
import { TextAreaProps } from './props'
import Editor from './components/editor';


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
    parentSx
  } = props;
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
          />
    </Box>
  );
}

TextArea.defaultProps = {
  value: "",
};
