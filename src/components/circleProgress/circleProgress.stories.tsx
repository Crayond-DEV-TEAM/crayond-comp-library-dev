import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircleProgress from './circleProgress';

export default {
  title: 'components/CircleProgress',
  component: CircleProgress,
} as ComponentMeta<typeof CircleProgress>;

const Template: ComponentStory<typeof CircleProgress> = (args) => (
  <CircleProgress {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: 0,
  labelStyle: {},
  symbols: '',
  thickness: 5,
  size: 50,
  labelSize:10,
  thumbColor: "green",
  thumbSecondaryColor:"lightgreen",
  labelBackgroundStyle: {},
};