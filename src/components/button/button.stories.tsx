import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicButtons } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: BasicButtons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BasicButtons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicButtons> = (args) => <BasicButtons {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: "button",
  backgroundColor: ""
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: "button 1",
  backgroundColor: ""
};
