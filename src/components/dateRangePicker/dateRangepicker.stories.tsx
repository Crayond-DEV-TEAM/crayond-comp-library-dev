import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SingleInputDateRangePicker } from './index';
import CalendarIcon from '../../assets/calendarIcon';
import { string } from 'yargs';

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
      description: '"start" |"end"'
    },
    leftIconPosition: {
      description: '"start" |"end"'
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
    inputBorderColor: {
      description: "string"
    },
    inputFontsize: {
      description: "number"
    },
    inputValueColor: {
      description: "string"
    },
    calendarContainerStyle: {
      description: "object"
    },
    selectedDateBgColor: {
      description: "string"
    },
    selectedDateColor: {
      description: "string"
    },
    selectedRangeBgColor: {
      description: "string"
    },
  }
Primary.args = {
  onChange:()=>{},
  dateFormat:"YYYY MM DD",
  rightInputCalendarIcon:"",
  rightIconPosition:"",
  leftIconPosition:"start",
  leftInputCalendarIcon:<><CalendarIcon/></>,
  inputStyleRoot:{},
  endCalendarStyle:{},
  startCalendarStyle:{},
  inputContainerStyle:{},
  calenderStyles:{},
  inputBorderColor:'',
  inputFontsize:12,
  inputValueColor:"",
  calendarContainerStyle:{},
  selectedDateColor: "#665CD7",
  selectedDateBgColor: "'#EFEEFB'",
  selectedRangeBgColor: "#665CD7",
  addMoreButtons: [
    {
      label: 'OK',
    },
    {
      label: 'Cancel',
    },
  ],

};