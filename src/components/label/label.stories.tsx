import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from './index';

export default {
  title: 'CommonTable/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: '#e2eafa',
  bgColor: '#7692cc',
  label: 'label',
};

