import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Performance } from './index';

export default {
  title: 'CommonTable/Performance',
  component: Performance,
} as ComponentMeta<typeof Performance>;

const Template: ComponentStory<typeof Performance> = (args) => (
  <Performance {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: "Good",
};
