import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicButtons } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CommonTable/Button',
  component: BasicButtons,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BasicButtons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicButtons> = (args) => <BasicButtons {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "button",
  bgColor: "primary.main"
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "button 1",
  bgColor: "secondary.main"
};
