import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Date } from './index';

export default {
  title: 'CommonTable/Date',
  component: Date,
} as ComponentMeta<typeof Date>;

const Template: ComponentStory<typeof Date> = (args) => <Date {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: '2022-12-15T18:43:21.055Z',
  format: 'YYYY MMM DD',
};
