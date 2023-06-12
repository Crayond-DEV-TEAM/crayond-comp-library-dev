import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SingleDatePicker } from './index';
import CalendarIcon from '../../assets/calendarIcon';

export default {
  title: 'components/SingleDatePicker',
  component: SingleDatePicker,
} as ComponentMeta<typeof SingleDatePicker>;

const Template: ComponentStory<typeof SingleDatePicker> = (args) => (
  <SingleDatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Date Picker',
  onChange: () => {},
  value: "",
  inputStyleRoot:{},
  dateFormat: "YYYY MMM DD",
  disablePast: false,
  disableFuture: false,
  OpenPickerIcon:"",
  iconPosition:'left',
};