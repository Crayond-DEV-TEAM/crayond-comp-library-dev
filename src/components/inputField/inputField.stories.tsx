import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputField } from './index'
import SearchIcon from 'src/assets/searchIcon';
import DeleteIcon from 'src/assets/deleteIcon';

export default {
  title: 'components/InputField',
  component: InputField,
  argTypes: {
    value: {
      description: 'The input value',
    },
    fullWidth: {
      description: 'To set full width input field',
    },
    isReadOnly: {
      description: 'To make it as readonly',
    },
    helperText: {
      description: 'Text below input field',
    },
    isError: {
      description: 'to show error message',
    },
    isMulti: {
      description: 'For multi line',
    },
    rowMax: {
      description: 'maximum rows',
    },
    rowMin: {
      description: 'minimum rows',
    },
    placeholder: {
      description: 'To set placeHolder',
    },
    type: {
      description: 'input type',
    },
    size: {
      description: 'size of the input field',
    },
  },

} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  startAdornments: <SearchIcon />,
  endAdornments: <DeleteIcon />
};

