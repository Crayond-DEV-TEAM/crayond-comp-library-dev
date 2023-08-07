import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButton } from './index';

export default {
  title: 'CommonTable/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Primary = Template.bind(false);
Primary.args = {
  onChange: () => false,
  id: 1,
  value: true,
  label: 'Active',
};

export const Secondary = Template.bind({});
Secondary.args = {
  onChange: () => false,
  id: 2,
  value: false,
  label: 'Inactive',
};