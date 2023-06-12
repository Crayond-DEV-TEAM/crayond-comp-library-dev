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
Primary.args = {
  // value: [20,30],
  handleChange:()=>{},
  markLabelColor:"#707070",
  markLabelSize:12,
  minLabel:"Min",
  maxLabel:"Max",
  sliderHeight:8,
  sliderColor:"#665CD7",
  thumbColor:"#665CD7",
  disabled:false,
  valueLabelDisplay:"off",
  step:10,
  customMarks:false,
  minMaxValues:false,
  sliderStyle: {},
  minMaxLabel: {},
  labelStyle: {},
  containerStyle: {},
  sliderThumbStyle:{},
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