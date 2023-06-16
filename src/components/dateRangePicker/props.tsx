import * as React from 'react';
import { SxProps } from '@mui/system';
import { DateView, PickersDayProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
  color: any;
}

export interface MyCustomLayoutProps {
  value: Dayjs;
  views: ['year', 'month', 'day'];
  openTo: DateView;
  disableFuture: boolean;
  disablePast: boolean;
  selectedDay: Date;
  Day: any;
  defaultValue: Dayjs;
  // calenderStyles: SxProps;
  onMonthChange: () => void;
  onChange: () => void;
  onYearChange: () => void;
  maxDate: Dayjs;
  minDate: Dayjs;
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
  endDefaultValue: Dayjs;
  startDefaultValue: Dayjs;
  disablePast: boolean;
  disableFuture: boolean;
  endCalendarStyle: SxProps;
  startCalendarStyle: SxProps;
  onMonthChangeEnd: (date: any) => void;
  onMonthChangeStart: (date: any) => void;
  startDateHandleChange: (date: Date) => void;
  endDateHandleChange: (date: Date) => void;
  handleCloseCalendar: () => void;
  handleSubmitCalendar: () => void;
  handleYearChangeStart: (date: Date) => void;
  handleYearChangeEnd: (date: Date) => void;
  onYearChangeStart: (date: Date) => void;
  onYearChangeEnd: (date: Date) => void;
  maxDateStart: Dayjs;
  minDateStart: Dayjs;
  maxDateEnd: Dayjs;
  minDateEnd: Dayjs;
  calendarContainerStyle: object;

  calenderPopoverStyle: SxProps;
  selectedDateColor: string;
  selectedRangeBgColor: string;

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
  label: string;
  onChange: () => void;
  value: any;
  inputStyleRoot: object;
  dateFormat: string;
  disablePast: boolean;
}
