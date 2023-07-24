import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CoachMark } from './index';
import React from 'react';

export default {
  title: 'CommonTable/CoachMark',
  component: CoachMark,
} as ComponentMeta<typeof CoachMark>;


const Template: ComponentStory<typeof CoachMark> = (args) => <CoachMark {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // value: '2022-12-15T18:43:21.055Z',
  // format: 'YYYY MMM DD',
};
