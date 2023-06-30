import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sliders from './slider';
export default {
  title: 'components/Slider',
  component: Sliders,
} as ComponentMeta<typeof Sliders>;

const Template: ComponentStory<typeof Sliders> = (args) => (
  <Sliders {...args} />
);

export const Primary = Template.bind({});
Primary.argTypes = {
  value: {
    description: 'number',
    defaultValue:33,
  },
  step: {
    description: 'number',
    defaultValue:10,
  },
  labelStyle: {
    description: 'object',
    defaultValue:{},
  },
  sliderHeight: {
    description: 'number',
    defaultValue:6
  },
  size: {
    description: '"small"| "medium"|"large"',
    defaultValue:"small"
  },
  disabled:{
    description:"boolean",
    defaultValue:false,
  },
  customMarks: {
    description: 'boolean',
    defaultValue:false
  },
  thumbColor: {
    description: 'string',
    defaultValue:"#665CD7"
  },
  progressLabel: {
    description: 'boolean',
    defaultValue:false
  },
  valueLabelDisplay: {
    description: '"off"| "on"',
    defaultValue:"off"
  },
  sliderColor: {
    description: 'string',
    defaultValue:"#665CD7"
  },
  labelColor: {
    description: 'string',
    defaultValue:"'#707070"
  },
  labelSize: {
    description: 'number',
    defaultValue:12
  },
  handleChangeFun: {
    description: '()=>{}',
    defaultValue:12
  },
  sliderStyle: {
    description: 'object',
    defaultValue:{}
  },
  symbol: {
    description: 'char "$","%",..',
    defaultValue:"%"
  },
  containerStyle: {
    description: 'object',
    defaultValue:{}
  },
  sliderThumbStyle: {
    description: 'object',
    defaultValue:{}
  },
  marks: {
    description: 'Array of object ',
    defaultValue:[{label:"0*C",value:0}]
  },
};
Primary.args = {
  step: 0,
  size: 'small',
  sliderHeight: 5,
  disabled: false,
  customMarks: false,
  progressLabel: false,
  valueLabelDisplay: 'off',
  labelColor: '#707070',
  labelSize: 2,
  sliderColor: '#665CD7',
  thumbColor: '#665CD7',
  handleChangeFun: () => {},
  sliderStyle: {},
  symbol: '',
  labelStyle: {},
  containerStyle: {},
  sliderThumbStyle: {},
  marks: [
    {
        value: 0,
        label: '0°C',
      },
      {
        value: 20,
        label: '20°C',
      },
      {
        value: 40,
        label: '40°C',
      },
      {
        value: 60,
        label: '60°C',
      },
      {
        value: 80,
        label: '80°C',
      },
      {
        value: 100,
        label: '100°C',
      },

  ],
};
