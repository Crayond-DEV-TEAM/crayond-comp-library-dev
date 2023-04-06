import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SocialMediaButton } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Button',
  component: SocialMediaButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SocialMediaButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialMediaButton> = (args) => <SocialMediaButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "",
};