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
Primary.argTypes = {
    dateFormat:{
        description: '"YYY MM DD"'
    },
    rightInputCalendarIcon:{
        description: 'ReactNode'
    },
    disablePast: {
      description: 'boolean'
    },
    onChange: {
      description: '()=>{}'
    },
    rightIconPosition: {
      description: '"left" |"right"'
    },
    leftIconPosition: {
      description: '"left" |"right"'
    },
    inputStyleRoot: {
      description: 'object'
    },
    endCalendarStyle: {
      description: 'object'
    },
    startCalendarStyle: {
      description: 'object'
    },
    calenderStyles: {
      description: 'object'
    },
    inputContainerStyle: {
      description: 'object'
    },
    leftInputCalendarIcon: {
      description: 'ReactNode'
    },
  }
Primary.args = {
//   value:"",
  onChange:()=>{},
  dateFormat:"YYYY MM DD",
  // disablePast:false,
  rightInputCalendarIcon:"",
  rightIconPosition:"",
  leftIconPosition:"start",
  leftInputCalendarIcon:<><CalendarIcon/></>,
  inputStyleRoot:{},
  endCalendarStyle:{},
  startCalendarStyle:{},
  inputContainerStyle:{},
  calenderStyles:{},
};