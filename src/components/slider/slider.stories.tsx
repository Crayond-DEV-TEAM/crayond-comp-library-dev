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
  step: 10,
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
  handleChange: () => {},
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
