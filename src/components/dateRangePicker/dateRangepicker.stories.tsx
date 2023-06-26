import { ComponentMeta, ComponentStory } from '@storybook/react';
import CalendarIcon from '../../assets/calendarIcon';
import { SingleInputDateRangePicker } from './index';

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
  startViews: {
    description: '["year", "month", "day"]',
  },
  endViews: {
    description: "['year', 'day']",
  },
  openTo: {
    description: "day|month|year",
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
  inputStyleRoot: {
    description: 'object',
  },
  buttonFontSize: {
    description: 'number',
  },
  startCalendarMaxHeight: {
    description: 'number',
  },
  startCalendarMinHeight: {
    description: 'number',
  },
  endCalendarMinHeight: {
    description: 'number',
  },
  endCalendarMaxHeight: {
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
  inputStyleRoot: {},
  startViews:["year", "month", "day"],
  endViews:['year', 'day'],

  selectedDateColor: '#665CD7',
  selectedRangeBgColor: '#665CD7',
  selectedHoverBgColor: '#665CD7',
  selectedHoverTextColor: '#FFFf',

  cancelButtonLabel: 'cancel',
  submitButtonLabel: 'Submit',
  bottomButtonStyle: {},
  buttonFontSize: 14,
  buttonLabelColor: '#665CD7',
  addMoreButtons: 	
  [{label:"name",handleFunction:()=>{}}],

  startCalendarMaxHeight:undefined,
  startCalendarMinHeight:310,
  endCalendarMaxHeight:undefined,
  endCalendarMinHeight:310,
  
  maxDateEnd: undefined,
  minDateEnd: undefined,
  minDateStart: undefined,
  maxDateStart: undefined,

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



 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore