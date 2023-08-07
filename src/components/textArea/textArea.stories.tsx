import React, { SetStateAction, useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './texArea';
import formats from './components/toolbarOptions';

export default {
  title: 'Components/textArea',
  component: TextArea,
  argTypes: {
    handleChange: {
      description: 'handle change funtion',
    },
    value: {
      description: 'value of the input text',
    },
    inputHeight: {
      description: 'input height as props',
    },
    minWidth: {
      description: 'min-width of the text area as props',
    },
    maxWidth: {
      description: 'max-width of the text area as props',
    },
    reverseToolbarSx: {
      description: 'reverse order of the text area & toolbar',
    },
    border: {
      description: 'border of the parent as props',
    },
    borderRadius: {
      description: 'border radius of the parent as props',
    },
    parentStyleProps: {
      description: 'parent style as props',
    },
    editorStyleProps: {
      description: 'editor style as props',
    },
    formatButtonStyleProps: {
      description: 'format button div as props',
    },
    placeholder: {
      description: 'placeholder for text editor as props',
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = () => {
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

  const formatButtons = {
    formats: [
      'ql-bold',
      'ql-italic',
      'ql-underline',
      'ql-strike',
      // 'ql-color',
      // 'ql-background',
      'ql-list',
      'ql-script',
    ],
  };

  const [text, setText] = useState('');
  const [state, setState] = useState(formats);
  const [is_loading, set_is_loading] = useState(true);

  const handleChange = (html: React.SetStateAction<string>) => {
    setText(html);
  };

  useEffect(() => {
    const filteredArray = formats.filter(
      (val) =>
        formatButtons?.formats?.includes(val?.className as QuillEditorFormat),
    );
    setState(filteredArray);
    set_is_loading(false);
  }, []);

  return (
    <>
      {is_loading ? null : (
        <TextArea
          placeholder=""
          handleChange={handleChange}
          reactQuillProps={{}}
          value={text}
          reverseToolbarSx={false}
          border=""
          borderRadius=""
          inputHeight=""
          minWidth="80%"
          maxWidth="80%"
          parentStyleProps={{}}
          editorStyleProps={{
            height: '200px',
          }}
          state={state}
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
            ],
          }}
        />
      )}
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: '',
  handleChange: (html: SetStateAction<string>) => {
    console.log(html);
  },
  inputHeight: '',
  minWidth: '',
  maxWidth: '',
  reverseToolbarSx: false,
  border: '',
  borderRadius: '',
  parentStyleProps: {},
  editorStyleProps: {},
  formatButtonStyleProps: {},
  placeholder: '',
  formatButtons: {
    formats: [],
  },
  reactQuillProps: {},
  state: [],
};
