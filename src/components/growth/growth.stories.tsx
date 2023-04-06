import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Growth } from './index';

export default {
  title: 'CommonTable/Growth',
  component: Growth,
} as ComponentMeta<typeof Growth>;

const Template: ComponentStory<typeof Growth> = (args) => <Growth {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 0.74,
  variant: 'NEGATIVE',
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 2.74,
  variant: 'POSITIVE',
};
