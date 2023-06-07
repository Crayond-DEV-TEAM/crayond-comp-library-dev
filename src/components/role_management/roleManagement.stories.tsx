import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoleManagement from './roleManagement';

export default {
  title: 'CommonTable/roleManagement',
  component: RoleManagement,
} as ComponentMeta<typeof RoleManagement>;

const Template: ComponentStory<typeof RoleManagement> = (args) => (
  <RoleManagement {...args} />
);

export const Primary = Template.bind({});

Primary.args = {

};
