import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './index';

export default {
  title: 'CommonTable/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: '1',
  label: 'View',
  viewHandel:()=>{}
};

