import { ComponentStory, ComponentMeta } from '@storybook/react';
import SliderRange from './sliderRange';
export default {
  title: 'components/SliderRange',
  component: SliderRange,
} as ComponentMeta<typeof SliderRange>;

const Template: ComponentStory<typeof SliderRange> = (args) => (
  <SliderRange {...args} />
);

export const Primary = Template.bind({});
Primary.argTypes = {
  value: {
    description: 'number',
    defaultValue: 33,
  },
  step: {
    description: 'number',
    defaultValue: 10,
  },
  sliderHeight: {
    description: 'number',
    defaultValue: 6,
  },
  size: {
    description: '"small"| "medium"|"large"',
    defaultValue: 'small',
  },
  disabled: {
    description: 'boolean',
    defaultValue: false,
  },
  customMarks: {
    description: 'boolean',
    defaultValue: false,
  },
  thumbColor: {
    description: 'string',
    defaultValue: '#665CD7',
  },
  minLabel: {
    description: 'string',
    defaultValue: 'min',
  },
  maxLabel: {
    description: 'string',
    defaultValue: 'max',
  },
  valueLabelDisplay: {
    description: '"off"| "on"',
    defaultValue: 'off',
  },
  sliderColor: {
    description: 'string',
    defaultValue: '#665CD7',
  },
  markLabelColor: {
    description: 'string',
    defaultValue: "'#707070",
  },
  minMaxValues: {
    description: 'boolean',
    defaultValue: false,
  },
  markLabelSize: {
    description: 'number',
    defaultValue: 12,
  },
  handleChangeFun: {
    description: '()=>{}',
    defaultValue: '',
  },
  sliderStyle: {
    description: 'object',
    defaultValue: {},
  },
  minMaxLabel: {
    description: 'string',
    defaultValue: '',
  },
  minMaxLabelStyle: {
    description: 'string',
    defaultValue: '',
  },

  containerStyle: {
    description: 'object',
    defaultValue: {},
  },
  sliderThumbStyle: {
    description: 'object',
    defaultValue: {},
  },
  marks: {
    description: 'Array of object ',
    defaultValue: [{ label: '0*C', value: 0 }],
  },
};
Primary.args = {
  value: [10,40],
  handleChangeFun: (e,v) => {console.log(e,v);
  },
  markLabelColor: '',
  markLabelSize: 12,
  minLabel: 'Min',
  maxLabel: 'Max',
  sliderHeight: 8,
  sliderColor: '',
  thumbColor: '',
  disabled: false,
  valueLabelDisplay: 'off',
  step: 0,
  customMarks: false,
  minMaxValues: false,
  sliderStyle: {},
  minMaxLabelStyle:{},
  minMaxLabel: {},
  containerStyle: {},
  sliderThumbStyle: {},
  marks: [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 30,
      label: '30°C',
    },
    {
      value: 60,
      label: '60°C',
    },
    {
      value: 99,
      label: '99',
    },
  ],
};
