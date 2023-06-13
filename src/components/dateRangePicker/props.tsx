import * as React from 'react';
import { SxProps } from '@mui/system';
import { PickersDayProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

export interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
}

export interface MyCustomLayoutProps {
  value: any;
  views: any;
  openTo: any;
  disableFuture: boolean;
  disablePast: boolean;
  selectedDay: any;
  Day: any;
  defaultValue: any;
  calenderStyles: SxProps;
  onMonthChange: () => void;
  onChange: () => void;
  onYearChange: () => void;
}

export interface PopoverPopupProps {
  isOpenCalendar: null | HTMLButtonElement;
  startDate: any;
  endDate: any;
  views?: string[];
  openTo?: any;
  selectedDayStart: any;
  selectedDayEnd: any;
  StartDay: any;
  EndDay: any;
  endDefaultValue: any;
  startDefaultValue: any;
  disablePast: boolean;
  disableFuture: boolean;
  endCalendarStyle: SxProps;
  startCalendarStyle: SxProps;
  onMonthChangeEnd: () => void;
  onMonthChangeStart: () => void;
  startDateHandleChange: () => void;
  endDateHandleChange: () => void;
  handleCloseCalendar: () => void;
  handleSubmitCalendar: () => void;
  handleYearChangeStart: () => void;
  handleYearChangeEnd: () => void;
  onYearChangeStart: () => void;
  onYearChangeEnd: () => void;
}

export interface DateRangePickerProps {
  label: string;
  onChange: () => void;
  value: any;
  inputStyleRoot: object;
  dateFormat: string;
  disablePast: boolean;
}
