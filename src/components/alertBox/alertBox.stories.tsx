import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertBox } from './index';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import  Slide from '@mui/material/Slide';

export default {
  title: 'CommonTable/AlertBox',
  component: AlertBox,
} as ComponentMeta<typeof AlertBox>;


const Template: ComponentStory<typeof AlertBox> = (args) => <AlertBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: '2022-12-15T18:43:21.055Z',
  format: 'YYYY MMM DD',
};
