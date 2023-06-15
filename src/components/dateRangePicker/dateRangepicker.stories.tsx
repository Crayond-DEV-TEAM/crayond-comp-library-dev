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
// Primary.argTypes = {
//     dateFormat:{
//         description: '"YYY MM DD"'
//     },
//     rightInputCalendarIcon:{
//         description: 'ReactNode'
//     },
//     disablePast: {
//       description: 'boolean'
//     },
//     onChange: {
//       description: '()=>{}'
//     },
//     rightIconPosition: {
//       description: '"start" |"end"'
//     },
//     leftIconPosition: {
//       description: '"start" |"end"'
//     },
//     inputStyleRoot: {
//       description: 'object'
//     },
//     endCalendarStyle: {
//       description: 'object'
//     },
//     startCalendarStyle: {
//       description: 'object'
//     },
//     calenderStyles: {
//       description: 'object'
//     },
//     inputContainerStyle: {
//       description: 'object'
//     },
//     leftInputCalendarIcon: {
//       description: 'ReactNode'
//     },
//     inputBorderColor: {
//       description: "string"
//     },
//     inputFontsize: {
//       description: "number"
//     },
//     inputValueColor: {
//       description: "string"
//     },
//     calendarContainerStyle: {
//       description: "object"
//     },
//     selectedDateBgColor: {
//       description: "string"
//     },
//     selectedDateColor: {
//       description: "string"
//     },
//     selectedRangeBgColor: {
//       description: "string"
//     },
//   }

Primary.args = {

  inputContainerStyle: {},
  inputBorderColor: '#E9E9E9',
  inputBorderHoverColor: '#B2ADEB',
  inputActiveColor:"#665CD7",
  inputFontsize:14,
  inputValueColor:"#3B3B3B",
  startLabel: 'Check-in',
  endLabel: 'Check-out',
  inputLabelSize: 14,
  inputLabelColor: "#cdcdcd",
  dateFormat:"YYYY MM DD",

  selectedDateColor: "#665CD7",
  selectedRangeBgColor: "#665CD7",

  bottomButtonStyle:{},
  buttonFontSize: 14,
  buttonLabelColor: '#665CD7',
  addMoreButtons: [
    {
      label: 'OK',
      handleFunction:()=>{}
    },
    {
      label: 'Cancel',
      handleFunction:()=>{}
    },
  ],

  calenderPopoverStyle: {},
  endCalendarStyle: {},
  startCalendarStyle: {},
  leftInputCalendarIcon:<><CalendarIcon/></>,
  rightInputCalendarIcon:<><CalendarIcon/></>,
  // leftIconPosition:"start",
  // rightIconPosition:"end",

  onChange:()=>{},
 
  

};