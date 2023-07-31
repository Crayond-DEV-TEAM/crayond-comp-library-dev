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
    }
  }
} as ComponentMeta<typeof TextArea>;
  
const Template: ComponentStory<typeof TextArea> = (args) => {

  const [text, setText] = useState("");

  const handleChange = (html: React.SetStateAction<string>) => {
    setText(html);
  };


  return (
    <TextArea
      handleChange={handleChange}
      reactQuillProps={{}}
      value={text}
      inputHeight=''
      minWidth=''
      maxWidth=''
      reverseToolbarSx={false}
      border=''
      borderRadius=''
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: "Text Here",
  handleChange: (html: SetStateAction<string>) => {
    console.log(html)
  },
  inputHeight: '',
  minWidth: '',
  maxWidth: '',
  reverseToolbarSx: false,
  border: '',
  borderRadius: ''
};