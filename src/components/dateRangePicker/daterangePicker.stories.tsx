import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SingleInputDateRangePicker } from './index';
import CalendarIcon from '../../assets/calendarIcon';

export default {
  title: 'components/SingleInputDateRangePicker',
  component: SingleInputDateRangePicker,
} as ComponentMeta<typeof SingleInputDateRangePicker>;

const Template: ComponentStory<typeof SingleInputDateRangePicker> = (args) => (
  <SingleInputDateRangePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value:"",
  onChange:()=>{},
  dateFormat:"YYYY MM DD",
  disablePast:false,
  rightInputCalendarIcon:"",
  rightIconPosition:"",
  leftInputCalendarIcon:<><CalendarIcon/></>,
  leftIconPosition:"start",
  inputStyleRoot:{},
  endCalendarStyle:{},
  startCalendarStyle:{},
  inputContainerStyle:{},
  calenderStyles:{},
};
