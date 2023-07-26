import { useEffect, useState } from 'react';
import { CustomPickerDayProps, MyCustomLayoutProps } from './props';
import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
  PickersDayProps,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { styles } from './style';
import { Dayjs } from 'dayjs';
import { styled } from '@mui/material';

export const MyCustomLayout = (props: MyCustomLayoutProps) => {
  const {
    value,
    views,
    openTo,
    disableFuture,
    disablePast,
    selectedDay,
    Day,
    minHeight,
    maxDate,
    minDate,
    defaultValue,
    calenderStyle,
    selectedRangeBgColor,
    selectedDateColor,
    selectedHoverBgColor,
    selectedHoverTextColor,
    onChange = () => {},
    onMonthChange = () => {},
    onYearChange = () => {},
  } = props;

  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);
  }, [value?.$d]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          ...styles.calenderStyle,
          ...calenderStyle,
            minHeight: minHeight,
          fontWeight: '600',
        }}
        onChange={(e: Dayjs | null) => onChange(e)}
        onYearChange={(e: Dayjs) => onYearChange(e)}
        onMonthChange={(e: Dayjs) => onMonthChange(e)}
        value={state}
        views={views}
        openTo={openTo}
        disableFuture={disableFuture}
        disablePast={disablePast}
        slots={{ day: Day }}
        defaultValue={defaultValue}
        maxDate={maxDate}
        minDate={minDate}
        slotProps={{
          day: {
            selectedDay: selectedDay,
            color: selectedDateColor,
            backgroundColor: selectedRangeBgColor,
            hoverBgColor: selectedHoverBgColor,
            hoverTextColor: selectedHoverTextColor,
          } as any,
        }}
      />
    </LocalizationProvider>
  );
};

export const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop: any) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(({ dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
  }),

  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),

  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
})) as React.ComponentType<CustomPickerDayProps>;

export const StartDay = (
  props: PickersDayProps<Dayjs> & {
    selectedDay?: Dayjs | null;
    backgroundColor: string;
    hoverBgColor: string;
    hoverTextColor: string;
  }
) => {
  const {
    day,
    selectedDay,
    backgroundColor,
    hoverBgColor,
    hoverTextColor,
    color,
    ...other
  } = props;
  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const end = selectedDay.endOf('month');
  const start = selectedDay.startOf('day');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const dayIsBetween = day?.isBetween(start, end, null, []);
  const isFirstDay = day.isSame(start, 'day');
  const isLastDay = day.isSame(end, 'day');

  return (
    <CustomPickersDay
      color={undefined}
      day={day}
      sx={
        dayIsBetween
          ? {
              px: 2.5,
              mx: 0,
              backgroundColor: `${backgroundColor}`,
              color: `${color}`,
              '&:hover, &:focus': {
                backgroundColor: `${hoverBgColor}`,
                color: `${hoverTextColor}`,
              },
            }
          : {}
      }
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
      {...other}
    />
  );
};

export const EndDay = (
  props: PickersDayProps<Dayjs> & {
    selectedDay?: Dayjs | null;
    backgroundColor: string;
    hoverBgColor: string;
    hoverTextColor: string;
  }
) => {
  const {
    day,
    selectedDay,
    backgroundColor,
    hoverBgColor,
    hoverTextColor,
    color,
    ...other
  } = props;
  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const end = selectedDay.endOf('day');
  const start = selectedDay.startOf('month');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const dayIsBetween = day.isBetween(start, end, null, []);
  const isFirstDay = day.isSame(start, 'day');
  const isLastDay = day.isSame(end, 'day');

  return (
    <CustomPickersDay
      color={'red'}
      day={day}
      sx={
        dayIsBetween
          ? {
              px: 2.5,
              mx: 0,
              backgroundColor: `${backgroundColor}`,
              color: `${color}`,
              '&:hover, &:focus': {
                backgroundColor: `${hoverBgColor}`,
                color: `${hoverTextColor}`,
              },
            }
          : {}
      }
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
      {...other}
    />
  );
};
