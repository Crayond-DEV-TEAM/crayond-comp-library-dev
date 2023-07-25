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
Primary.argTypes = {
  onChangeFun: {
    description: '()=>{}',
  },
  inputStyleRoot: {
    description: 'object',
  },
  views: {
    description: '[year ,month ,date]',
  },
  dateFormat: {
    description: 'DD MMM YY',
  },
  disablePast: {
    description: 'boolean',
  },
  disableFuture: {
    description: 'boolean',
  },
  OpenPickerIcon: {
    description: 'ReactNode',
  },
  iconPosition: {
    description: 'left | right',
  },
  hoverInputColor: {
    description: 'string',
  },
  focusedInputColor: {
    description: 'string',
  },
  inputRootStyle: {
    description: 'object',
  },
  defaultBorderColor: {
    description: 'string',
  },
  calenderBorderColor: {
    description: 'string',
  },
  calendarBackgroundColor: {
    description: 'string',
  },
}

Primary.args = {
  onChangeFun: () => {},
  views:['year', 'month', 'day'],
  inputStyleRoot: {},
  dateFormat: 'DD MMM YY',
  disablePast: false,
  disableFuture: false,
  OpenPickerIcon: CalendarIcon,
  iconPosition:'left',
  hoverInputColor:"#B2ADEB",
  focusedInputColor:"#665CD7",
  inputRootStyle:{},
  defaultBorderColor:"#E9E9E9",
  calenderBorderColor:"#665CD7",
  calendarBackgroundColor:'',

};