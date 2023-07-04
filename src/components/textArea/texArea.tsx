import { Box } from '@mui/material';
import { TextAreaProps } from './props'
import Editor from './components/editor';


export default function TextArea(props: TextAreaProps) {
  const { value, handleChange, reverseToolbarSx, inputHeight,maxWidth, minWidth } = props;
  return (
    <Box sx={{
      background: 'white',
      width: '100%',
      height: '100%'
    }}>
      <Box sx={{
        margin: 'auto',
        width: '70%',
        paddingTop: '40px'
      }}>
        <Editor
          value={value}
          minWidth={minWidth}
          maxWidth={maxWidth}
          handleChange={handleChange}
          reverseToolbarSx={reverseToolbarSx}
          inputHeight={inputHeight} />
      </Box>
    </Box>
  );
}

TextArea.defaultProps = {
  value: "",
};
