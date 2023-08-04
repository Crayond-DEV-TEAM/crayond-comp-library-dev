import React, { SetStateAction, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './texArea';

export default {
  title: 'Components/textArea',
  component: TextArea,
  argTypes: {
    handleChange: {
      description: 'handle change funtion'
    },
    value: {
      description: 'value of the input text'
    },
    inputHeight: {
      description: 'input height as props'
    },
    minWidth: {
      description: 'min-width of the text area as props'
    },
    maxWidth: {
      description: 'max-width of the text area as props'
    },
    reverseToolbarSx: {
      description: 'reverse order of the text area & toolbar'
    },
    border: {
      description: 'border of the parent as props'
    },
    borderRadius: {
      description: 'border radius of the parent as props'
    },
    parentStyleProps: {
      description: 'parent style as props'
    },
    editorStyleProps: {
      description: 'editor style as props'
    },
    formatButtonStyleProps: {
      description: 'format button div as props'
    },
    placeholder:{
      description:'placeholder for text editor as props'
    }
  }
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = () => {

  const [text, setText] = useState("");

  const handleChange = (html: React.SetStateAction<string>) => {
    setText(html);
  };


  return (
    <TextArea
      placeholder=''
      handleChange={handleChange}
      reactQuillProps={{}}
      value={text}
      reverseToolbarSx={false}
      border=''
      borderRadius=''
      inputHeight=''
      minWidth='80%'
      maxWidth='80%'
      parentStyleProps={{}}
      editorStyleProps={{
        height: '200px'
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
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: "",
  handleChange: (html: SetStateAction<string>) => {
    console.log(html)
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
  placeholder: ''
};