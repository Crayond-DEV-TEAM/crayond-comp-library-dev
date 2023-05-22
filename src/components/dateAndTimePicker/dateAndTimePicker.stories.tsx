import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateAndTimePicker } from './index';

export default {
  title: 'components/DateAndTimePicker',
  component: DateAndTimePicker,
} as ComponentMeta<typeof DateAndTimePicker>;

const Template: ComponentStory<typeof DateAndTimePicker> = (args) => <DateAndTimePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  selectOption:[
    { label: 'Select', value: '' },
    { label: 'one', value: 'one' },
    { label: 'two', value: 'two' },
    { label: 'three', value: 'three' },
  ]
};