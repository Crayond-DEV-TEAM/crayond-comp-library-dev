import { SxProps } from '@mui/material';
import { DateView, PickersDayProps } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

export interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
  color: any;
}

export interface MyCustomLayoutProps {
  value: any;
  views: ['year', 'month', 'day'];
  openTo: DateView;
  disableFuture: boolean;
  disablePast: boolean;
  selectedDay: Date;
  Day: any;
  defaultValue: Dayjs;
  onMonthChange: (e: Dayjs) => void;
  onChange: (e: Dayjs | null) => void;
  onYearChange: (e: Dayjs) => void;
  maxDate: Dayjs;
  minDate: Dayjs;
  maxHeight: number |undefined;
  minHeight: number|undefined;
  height:number|undefined;
  calenderStyle: SxProps;
  selectedRangeBgColor: string;
  selectedDateColor: string;
  selectedHoverBgColor: string;
  selectedHoverTextColor: string;
}

export interface PopoverPopupProps {
  isOpenCalendar: null | HTMLButtonElement;
  startViews: any;
  endViews: any;
  startDate: any;
  endDate: any;
  views?: string[];
  openTo?: any;
  selectedDayStart: any;
  selectedDayEnd: any;
  StartDay: any;
  EndDay: any;
  endDefaultValue: string;
  startDefaultValue: string;
  disablePast: boolean;
  disableFuture: boolean;
  endCalendarStyle: SxProps;
  startCalendarStyle: SxProps;
  onMonthChangeEnd: (date: Dayjs) => void;
  onMonthChangeStart: (date: Dayjs) => void;
  startDateHandleChange: (date: Dayjs | null) => void;
  endDateHandleChange: (date: Dayjs | null) => void;
  handleCloseCalendar: () => void;
  handleSubmitCalendar: () => void;
  onYearChangeStart: (date: Dayjs) => void;
  onYearChangeEnd: (date: Dayjs) => void;
  maxDateStart: Dayjs;
  minDateStart: Dayjs;
  maxDateEnd: Dayjs;
  minDateEnd: Dayjs;

  calenderPopoverStyle: SxProps;
  selectedDateColor: string;
  selectedRangeBgColor: string;

  startCalendarHeight:number|undefined;
  startCalendarMaxHeight: number|undefined;
  startCalendarMinHeight: number|undefined;
  endCalendarHeight:number|undefined;
  endCalendarMaxHeight: number|undefined;
  endCalendarMinHeight: number|undefined;

  selectedHoverBgColor: string;
  selectedHoverTextColor: string;
  cancelButtonLabel: string;
  submitButtonLabel: string;
  bottomButtonStyle: SxProps;
  buttonFontSize: number;
  buttonLabelColor: string;
  addMoreButtons: {
    label: string;
    handleFunction: Function;
  }[];
}

export interface DateRangePickerProps {
  inputContainerStyle: SxProps;
  inputBorderColor: string;
  inputBorderHoverColor: string;
  inputActiveColor: string;
  inputFontsize: number;
  inputValueColor: string;
  startLabel: string;
  endLabel: string;
  inputLabelSize: number;
  inputLabelColor: string;
  inputStyleRoot: SxProps;

  selectedRangeBgColor: string;
  selectedDateColor: string;
  selectedHoverBgColor: string;
  selectedHoverTextColor: string;

  cancelButtonLabel: string;
  submitButtonLabel: string;
  buttonFontSize: number;
  buttonLabelColor: string;
  bottomButtonStyle: SxProps;
  addMoreButtons: { label: string; handleFunction: () => void }[];

  dateFormat: string;
  startViews: ['year', 'month', 'day'];
  endViews: ['year', 'day'];
  openTo: 'day';
  maxDateEnd: Dayjs;
  minDateEnd: Dayjs;
  minDateStart: Dayjs;
  maxDateStart: Dayjs;
  calenderPopoverStyle: SxProps;
  endCalendarStyle: SxProps;
  startCalendarStyle: SxProps;

  startCalendarHeight:number|undefined;
  startCalendarMaxHeight: number|undefined;
  startCalendarMinHeight: number|undefined;
  endCalendarHeight:number|undefined;
  endCalendarMaxHeight: number|undefined;
  endCalendarMinHeight: number|undefined;

  leftInputCalendarIcon: React.ReactNode;
  rightInputCalendarIcon: React.ReactNode;

  handleEndDateChangeFun: (date: Dayjs | null) => void;
  handleStartDateChangeFun: (date: Dayjs | null) => void;
  onMonthChangeStartFun: (e:dayjs.Dayjs) => void;
  onMonthChangeEndFun: (e:Dayjs) => void;
  onYearChangeStartFun: (e:Dayjs) => void;
  onYearChangeEndFun: (e:Dayjs) => void;
  handleSubmitCalendarFun: (start:string,end:string) => void;
}
