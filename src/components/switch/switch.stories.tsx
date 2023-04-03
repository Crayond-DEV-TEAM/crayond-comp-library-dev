import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from './index';

export default {
  title: 'CommonTable/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onChange: () => {},
  id: 1,
  value: true,
  label: 'Active',
};

export const Secondary = Template.bind({});
Secondary.args = {
  onChange: () => {},
  id: 2,
  value: false,
  label: 'Inactive',
};