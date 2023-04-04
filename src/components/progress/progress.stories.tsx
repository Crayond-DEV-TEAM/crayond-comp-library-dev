import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Progress } from './index';

export default {
  title: 'CommonTable/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: 33,
};
