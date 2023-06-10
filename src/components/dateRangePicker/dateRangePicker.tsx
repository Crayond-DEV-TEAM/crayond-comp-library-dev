import { Divider, InputAdornment, TextField, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';
import { useEffect, useState } from 'react';
import CalendarIcon from '../../assets/calendarIcon';
import './style.css';
import { styles } from './styles';
import {
  CustomPickerDayProps,
  MyCustomLayoutProps,
  PopoverPopupProps,
} from './props';
import { boolean, string } from 'yup';

interface DateRangePickerProps {
  label: string;
  onChange: () => void;
  value: any;
  inputStyleRoot: object;
  dateFormat: string;
  disablePast: boolean;
}

interface DateRangePickerProps {}
export default function SingleInputDateRangePicker(
  props: DateRangePickerProps
) {
  const { value, onChange, inputStyleRoot, dateFormat, disablePast } = props;

  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [prevMonth, setPrevMonth] = useState<any>(null);
  const [nextMonth, setNextMonth] = useState<any>(null);
  const [prevYear, setPrevYear] = useState<any>(null);
  const [nextYear, setNextYear] = useState<any>(null);
  const [isOpenCalendar, setOpenCalendar] = useState<HTMLButtonElement | null>(
    null
  );

  const onMonthChangeStart = (e: any) => {
    let date = e?.$d;

    let prev = date.setMonth(date.getMonth());
    let prevMonthValue = moment(prev).format('YYYY MM DD');
    setPrevMonth(prevMonthValue);

    date.setMonth(date.getMonth() - 1, 1);
    let nextMonthValue = moment(date).format('YYYY MM DD');
    setNextMonth(nextMonthValue);
  };

  const onMonthChangeEnd = (e: any) => {
    let date = e?.$d;
    let next = date.setMonth(date.getMonth());
    let nextMonths = moment(next).format('YYYY MM DD');
    setNextMonth(nextMonths);

    date.setMonth(date.getMonth() + 1, 1);
    let days = moment(e?.$d).format('YYYY MM DD');
    setPrevMonth(days);
  };

  const handleYearChangeStart = (e: any) => {
    
  };
  const handleYearChangeEnd = (e: any) => {
    console.log(e, 'endYear');
    setNextYear(e);
  };

  const handleSubmitCalendar = () => {};

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };

  const handleOpenCalendar = (event: any) => {
    setOpenCalendar(event.currentTarget);
  };

  const handleCancelCalendar = () => {
    setStartDate(null);
    setEndDate(null);
    setOpenCalendar(null);
  };
  console.log(prevMonth, '====');

  useEffect(() => {
    let dates = new Date();
    dates.setMonth(dates.getMonth());
    let PrevMonth = new Date(dates);
    let prevMonths = moment(PrevMonth).format('YYYY MM DD');
    setPrevMonth(prevMonths);

    let date = new Date(prevMonths);
    date.setMonth(date.getMonth() + 1, 1);
    let NextMonth = new Date(date);
    let nextMonths = moment(NextMonth).format('YYYY MM DD');
    setNextMonth(nextMonths);
  }, []);
  return (
    <>
      <Box
        sx={{
          ...styles.mainBox,
          borderColor: isOpenCalendar ? '#665CD7' : ' #E9E9E9',
        }}
        onClick={handleOpenCalendar}
      >
        <TextField
          sx={{ ...styles.inputStyleRoot, ...inputStyleRoot }}
          value={moment(startDate?.$d).format('DD MMM YY')}
          placeholder="Check-in"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarIcon />
              </InputAdornment>
            ),
          }}
        />
        <Divider orientation="vertical" flexItem sx={{ ...styles.divider }} />
        <TextField
          sx={{ ...styles.inputStyleRoot, ...inputStyleRoot }}
          value={moment(endDate?.$d).format('DD MMM YY')}
          placeholder="Check-out"
        />
      </Box>
      <PopoverPopupState
        views={['year', 'day']}
        openTo="day"
        isOpenCalendar={isOpenCalendar}
        selectedDayStart={startDate}
        selectedDayEnd={endDate}
        StartDay={StartDay}
        EndDay={EndDay}
        startDefaultValue={prevMonth}
        endDefaultValue={nextMonth}
        startDate={startDate}
        endDate={endDate}
        disablePast={false}
        disableFuture={false}
        handleCloseCalendar={handleCancelCalendar}
        handleSubmitCalendar={handleSubmitCalendar}
        endDateHandleChange={handleStartDateChange}
        endDateHandleChange={handleEndDateChange}
        startDateHandleChange={handleStartDateChange}
        onMonthChangeStart={onMonthChangeStart}
        onMonthChangeEnd={onMonthChangeEnd}
        onYearChangeStart={handleYearChangeStart}
        onYearChangeEnd={handleYearChangeEnd}
      />
    </>
  );
}
const PopoverPopupState = (props: PopoverPopupProps) => {
  const {
    isOpenCalendar,
    handleCloseCalendar,
    startDate,
    endDate,
    startDateHandleChange,
    endDateHandleChange,
    views,
    openTo,
    selectedDayStart,
    selectedDayEnd,
    StartDay,
    EndDay,
    endDefaultValue,
    startDefaultValue,
    onMonthChangeStart,
    onMonthChangeEnd,
    handleSubmitCalendar,
    disableFuture,
    disablePast,
    onYearChangeStart,
    onYearChangeEnd,
  } = props;
  const open = Boolean(isOpenCalendar);
  const id = open ? 'simple-popover' : undefined;

  console.log(startDefaultValue, 'startDefaultValue input Value');
  console.log(endDefaultValue, 'endDefaultValue input Value');

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={isOpenCalendar}
        onClose={handleCloseCalendar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        anchorPosition={{
          top: 12,
          left: 0,
        }}
        elevation={0}
        sx={{
          marginTop: '12px',
          borderRadius: ' 8px',
        }}
      >
        <Box sx={{ ...styles.calendarContainer }}>
          <Box>
            <MyCustomLayout
              views={views}
              openTo={openTo}
              Day={StartDay}
              disableFuture={disableFuture}
              disablePast={disablePast}
              value={dayjs(`${startDefaultValue}`)}
              selectedDay={selectedDayStart}
              defaultValue={dayjs(`${startDefaultValue}`)}
              onMonthChange={onMonthChangeStart}
              onChange={startDateHandleChange}
              onYearChange={onYearChangeStart}
            />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ color: '#929292' }} />
          <Box>
            <MyCustomLayout
              views={views}
              openTo={openTo}
              Day={EndDay}
              disableFuture={disableFuture}
              disablePast={disablePast}
              selectedDay={selectedDayEnd}
              value={dayjs(`${endDefaultValue}`)}
              defaultValue={dayjs(`${endDefaultValue}`)}
              onMonthChange={onMonthChangeEnd}
              onChange={endDateHandleChange}
              onYearChange={onYearChangeEnd}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Button onClick={handleCloseCalendar}>Cancel</Button>
              <Button onClick={handleSubmitCalendar}>Submit</Button>
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

const MyCustomLayout = (props: MyCustomLayoutProps) => {
  const {
    value,
    views,
    openTo,
    disableFuture,
    disablePast,
    selectedDay,
    Day,
    defaultValue,
    onChange = () => {},
    onMonthChange = () => {},
    onYearChange = () => {},
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
       sx={{
        maxHeight:"310px"
       }}
        onMonthChange={onMonthChange}
        onChange={onChange}
        onYearChange={onYearChange}
        value={value}
        views={views}
        openTo={openTo}
        disableFuture={disableFuture}
        disablePast={disablePast}
        slots={{ day: Day }}
        defaultValue={defaultValue}
        slotProps={{
          day: {
            selectedDay: selectedDay,
          } as any,
        }}
      />
    </LocalizationProvider>
  );
};

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop: any) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(({ dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: '#EFEEFB',
    color: '#665CD7',
    '&:hover, &:focus': {
      backgroundColor: '#665CD7',
      color: '#FFF',
    },
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

const StartDay = (
  props: PickersDayProps<Dayjs> & { selectedDay?: Dayjs | null }
) => {
  const { day, selectedDay, ...other } = props;
  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const end = selectedDay.endOf('month');
  const start = selectedDay.startOf('day');

  const dayIsBetween = day.isBetween(start, end, null, []);
  const isFirstDay = day.isSame(start, 'day');
  const isLastDay = day.isSame(end, 'day');

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={dayIsBetween ? { px: 2.5, mx: 0 } : {}}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
};

const EndDay = (
  props: PickersDayProps<Dayjs> & { selectedDay?: Dayjs | null }
) => {
  const { day, selectedDay, ...other } = props;
  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const end = selectedDay.endOf('day');
  const start = selectedDay.startOf('month');

  const dayIsBetween = day.isBetween(start, end, null, []);
  const isFirstDay = day.isSame(start, 'day');
  const isLastDay = day.isSame(end, 'day');

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={dayIsBetween ? { px: 2.5, mx: 0 } : {}}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
};
