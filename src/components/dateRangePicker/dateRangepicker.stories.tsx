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
  dateFormat: {
    description: '"YYY MM DD"',
  },
  rightInputCalendarIcon: {
    description: 'ReactNode',
  },

  endCalendarStyle: {
    description: 'object',
  },
  startCalendarStyle: {
    description: 'object',
  },

  inputContainerStyle: {
    description: 'object',
  },
  leftInputCalendarIcon: {
    description: 'ReactNode',
  },
  inputBorderColor: {
    description: 'string',
  },
  inputBorderHoverColor: {
    description: 'string',
  },
  inputFontsize: {
    description: 'number',
  },
  inputValueColor: {
    description: 'string',
  },
  inputActiveColor: {
    description: 'string',
  },
  selectedDateColor: {
    description: 'string',
  },
  selectedRangeBgColor: {
    description: 'string',
  },
  startLabel: {
    description: 'string',
  },
  endLabel: {
    description: 'string',
  },
  inputLabelColor: {
    description: 'string',
  },
  inputLabelSize: {
    description: 'number',
  },

  cancelButtonLabel: {
    description: 'string',
  },
  submitButtonLabel: {
    description: 'string',
  },
  buttonLabelColor: {
    description: 'string',
  },
  bottomButtonStyle: {
    description: 'object',
  },
  buttonFontSize: {
    description: 'number',
  },
  addMoreButtons:{
    description:"[{label:name,handleFunction:()=>{}}]"
  },
  maxDateEnd:{
    description:"YYYY-MM-DD"
  },
  minDateEnd:{
    description:"YYYY-MM-DD"
  },
  maxDateStart:{
    description:"YYYY-MM-DD"
  },
  minDateStart:{
    description:"YYYY-MM-DD"
  },
  calenderPopoverStyle:{
    description:"object"
  },
  handleEndDateChangeFun:{
    description:"()=>{}"
  },
  handleStartDateChangeFun:{
    description:"()=>{}"
  },
  onMonthChangeStartFun:{
    description:"()=>{}"
  },
  onMonthChangeEndFun:{
    description:"()=>{}"
  },
  onYearChangeStartFun:{
    description:"()=>{}"
  },
  onYearChangeEndFun:{
    description:"()=>{}"
  },
  handleSubmitCalendarFun:{
    description:"()=>{}"
  },
  selectedHoverBgColor:{
    description:"()=>{}"
  },
  selectedHoverTextColor:{
    description:"()=>{}"
  },
};

Primary.args = {
  inputContainerStyle: {},
  inputBorderColor: '#E9E9E9',
  inputBorderHoverColor: '#B2ADEB',
  inputActiveColor: '#665CD7',
  inputFontsize: 14,
  inputValueColor: '#3B3B3B',
  startLabel: 'Check-in',
  endLabel: 'Check-out',
  inputLabelSize: 14,
  inputLabelColor: '#cdcdcd',
  dateFormat: 'DD MMM YY',

  selectedDateColor: '#665CD7',
  selectedRangeBgColor: '#665CD7',
  selectedHoverBgColor: '#665CD7',
  selectedHoverTextColor: '#FFFf',

  cancelButtonLabel: 'cancel',
  submitButtonLabel: 'Submit',
  bottomButtonStyle: {},
  buttonFontSize: 14,
  buttonLabelColor: '#665CD7',
  addMoreButtons: [],

  maxDateEnd: '',
  minDateEnd: '',
  minDateStart: '',
  maxDateStart: '',
  calenderPopoverStyle: {},
  endCalendarStyle: {},
  startCalendarStyle: {},
  leftInputCalendarIcon: (
    <>
      <CalendarIcon />
    </>
  ),
  rightInputCalendarIcon: '',

  handleEndDateChangeFun: () => {},
  handleStartDateChangeFun: () => {},
  onMonthChangeStartFun: () => {},
  onMonthChangeEndFun: () => {},
  onYearChangeStartFun: () => {},
  onYearChangeEndFun: () => {},
  handleSubmitCalendarFun: () => {},
};
