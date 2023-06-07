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
Primary.args = {
  value: 33,
  step:10,
  customMarks:false,
  progressLabel: false,
  minMaxValues:false,
  handleChange:()=>{},
  sliderStyle: {},
  symbol: '',
  minMaxContainer: {},
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
