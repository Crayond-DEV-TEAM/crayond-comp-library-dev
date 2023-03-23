import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomCheckbox } from './index';

export default {
  title: 'CommonTable/CustomCheckbox',
  component: CustomCheckbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CustomCheckbox>;

const Template: ComponentStory<typeof CustomCheckbox> = (args) => (
  <CustomCheckbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Lable',
  onChange: () => {},
  value: true,
};
export const secondary = Template.bind({});
secondary.args = {
  name: 'Lable',
  onChange: () => {},
  value: false,
};
