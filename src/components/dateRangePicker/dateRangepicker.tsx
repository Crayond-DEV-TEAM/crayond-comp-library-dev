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
import { CustomPickerDayProps, MyCustomLayoutProps } from './props';
import { styles } from './style';
import './styles.css';
export default function SingleInputDateRangePicker(props: any) {
  const {
    rightInputCalendarIcon,
    rightIconPosition,
    leftInputCalendarIcon,
    leftIconPosition,
    inputStyleRoot,
    endCalendarStyle,
    startCalendarStyle,
    inputContainerStyle,
  } = props;

  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(null));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(null));
  const [prevMonth, setPrevMonth] = useState<any>(null);
  const [nextMonth, setNextMonth] = useState<any>(null);
  const [startYear, setStartYear] = useState<any>(null);
  const [endYear, setEndYear] = useState<any>(null);
  const [startEndDate, setStartEndDate] = useState<any>(null);
  const [isOpenCalendar, setOpenCalendar] = useState<HTMLButtonElement | null>(
    null
  );

  const findCurrentMonth = (month: any) => {
    month.setMonth(month.getMonth());
    let PrevMonth = new Date(month);
    let prevMonths = moment(PrevMonth).format('YYYY MM DD');
    return prevMonths;
  };

  const findNextMonth = (month: any) => {
    let date = new Date(month);
    date.setMonth(date.getMonth() + 1, 1);
    let NextMonth = new Date(date);
    let nextMonths = moment(NextMonth).format('YYYY MM DD');
    return nextMonths;
  };

  const onMonthChangeStart = (e: any) => {
    debugger;
    let date = e.$d;

    let year = startYear.setMonth(date.getMonth());
    let merge = new Date(year);
    setPrevMonth(moment(merge).format('YYYY MM DD'));

    
    merge.setMonth(merge.getMonth() + 1, 1);
    let nextMonthValue = moment(merge).format('YYYY MM DD');
    setNextMonth(nextMonthValue);

    // let startYears = moment(prevMonth).get('year');
    // let nextYear = moment(nextMonth).get('year');
    
    // let startOfMonth = moment(nextMonth).startOf('year').format('YYYY MM DD');
    // let combined = new Date(startOfMonth);

    // if(startYears > nextYear){
    //   let prev = combined.setMonth(combined.getMonth());
    //   let days = moment(prev).format('YYYY MM DD');
    //   setPrevMonth(days);

    //   let next = combined.setMonth(combined.getMonth() + 1, 1);
    //   let nextMonths = moment(next).format('YYYY MM DD');
    //   setNextMonth(nextMonths);

    setStartDate(null);
    setEndDate(null);
  };

  const onMonthChangeEnd = (e: any) => {
    debugger;
    let date = e?.$d;

    let startYears = moment(prevMonth).get('year');
    let nextYear = moment(nextMonth).get('year');

    // if (startYears === nextYear) {
    // let prev = date.setMonth(date.getMonth());
    // let prevMonthValue = moment(prev).format('YYYY MM DD');
    // setPrevMonth(prevMonthValue);

    // date.setMonth(date.getMonth() - 1, 1);
    // let nextMonthValue = moment(date).format('YYYY MM DD');
    // setNextMonth(nextMonthValue);
    // }
    setStartDate(null);
    setEndDate(null);
  };

  const handleYearChangeStart = (e: any) => {
    let date = e?.$d;
    setStartYear(date);
    // setPrevMonth(date);
    // setNextMonth(date)
  };

  const handleYearChangeEnd = (e: any) => {
    debugger;
    let date = e?.$d;
    // setNextMonth(date);
    // setPrevMonth(date);
    // setEndYear(date);
    let startYears = moment(prevMonth).get('year');
    let nextYear = moment(date).get('year');

    let startOfMonth = moment(date).startOf('year').format('YYYY MM DD');
    let combined = new Date(startOfMonth);

    // if (startYears > nextYear) {
    console.log(combined, '==handleYearChangeEnd');
    let next = combined.setMonth(combined.getMonth() + 1, 1);
    let nextMonths = moment(next).format('YYYY MM DD');
    setPrevMonth(nextMonths);

    let prev = combined.setMonth(combined.getMonth());
    let days = moment(prev).format('YYYY MM DD');
    setNextMonth(days);
    // }
  };

  const handleSubmitCalendar = () => {
    // setStartEndDate(startDate.$d,endDate.$d)
    // console.log(moment(startDate.$d).format('YYYY MM DD') ,'start', moment(endDate.$d).format('YYYY MM DD'), 'end');
  };

  const handleStartDateChange = (date: any) => {
    debugger;
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
    setPrevMonth(null);
    setNextMonth(null);
    setOpenCalendar(null);
  };

  useEffect(() => {
    setStartDate(null);
    setEndDate(null);
    setPrevMonth(findCurrentMonth(new Date()));
    setNextMonth(findNextMonth(findCurrentMonth(new Date())));
  }, [isOpenCalendar]);
  return (
    <>
      <Box
        sx={{
          ...styles.mainBox,
          ...inputContainerStyle,
          borderColor: isOpenCalendar ? '#665CD7' : ' #E9E9E9',
        }}
        onClick={handleOpenCalendar}
      >
        <TextField
          sx={{
            ...styles.inputStyleRoot,
            ...inputStyleRoot,
          }}
          value={moment(prevMonth??null).format('DD MMM YY')}
          placeholder="Check-in"
          InputProps={{
            startAdornment: (
              <InputAdornment position={leftIconPosition}>
                {leftInputCalendarIcon}
              </InputAdornment>
            ),
          }}
        />
        <Divider orientation="vertical" flexItem sx={{ ...styles.divider }} />
        <TextField
          sx={{ ...styles.inputStyleRoot, ...inputStyleRoot }}
          value={moment(nextMonth??null).format('DD MMM YY')}
          placeholder="Check-out"
          InputProps={{
            startAdornment: (
              <InputAdornment position={rightIconPosition}>
                {rightInputCalendarIcon}
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <PopoverPopupState
        startViews={['year', 'month', 'day']}
        endViews={['year', 'day']}
        openTo="day"
        // maxDateStart={'01-01'}
        // minDateStart={'12-31'}
        // shouldDisableStartYear={''}
        isOpenCalendar={isOpenCalendar}
        selectedDayStart={startDate}
        selectedDayEnd={endDate}
        StartDay={StartDay}
        EndDay={EndDay}
        endCalendarStyle={endCalendarStyle}
        startCalendarStyle={startCalendarStyle}
        startDefaultValue={prevMonth}
        endDefaultValue={nextMonth}
        startDate={startDate}
        endDate={endDate}
        disablePast={false}
        disableFuture={false}
        handleCloseCalendar={handleCancelCalendar}
        handleSubmitCalendar={handleSubmitCalendar}
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
const PopoverPopupState = (props: any) => {
  const {
    isOpenCalendar,
    handleCloseCalendar,
    startDate,
    endDate,
    startDateHandleChange,
    endDateHandleChange,
    startViews,
    endViews,
    openTo,
    selectedDayStart,
    selectedDayEnd,
    StartDay,
    EndDay,
    endDefaultValue,
    maxDateStart,
    minDateStart,
    maxDateEnd,
    minDateEnd,
    startDefaultValue,
    endCalendarStyle,
    startCalendarStyle,
    onMonthChangeStart,
    onMonthChangeEnd,
    handleSubmitCalendar,
    disableFuture,
    disablePast,
    onYearChangeStart,
    onYearChangeEnd,
    shouldDisableStartYear,
    shouldDisableEndYear,
  } = props;
  const open = Boolean(isOpenCalendar);
  const id = open ? 'simple-popover' : undefined;

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
        PaperProps={{
          sx: {
            marginTop: '12px',
            borderRadius: ' 8px',
            '& .MuiPickersMonth-monthButton.Mui-selected': {
              padding: '1px',
            },
            '& .MuiPickersYear-yearButton.Mui-selected': {
              padding: '1px',
            },
            '& .MuiPickersDay-root': {
              '&.Mui-selected': {
                backgroundColor: '#FFFF',
                color: '#929292',
              },
            },
          },
        }}
      >
        <Box sx={{ ...styles.calendarContainer }}>
          <Box>
            <MyCustomLayout
              views={startViews}
              openTo={openTo}
              Day={StartDay}
              maxDate={maxDateStart}
              minDate={minDateStart}
              disableFuture={disableFuture}
              disablePast={disablePast}
              value={dayjs(`${startDefaultValue}`)}
              selectedDay={selectedDayStart}
              defaultValue={dayjs(`${startDefaultValue}`)}
              onMonthChange={onMonthChangeStart}
              onChange={startDateHandleChange}
              onYearChange={onYearChangeStart}
              calenderStyles={startCalendarStyle}
              shouldDisableYear={shouldDisableStartYear}
            />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ color: '#929292' }} />
          <Box>
            <MyCustomLayout
              views={endViews}
              openTo={openTo}
              Day={EndDay}
              maxDate={maxDateEnd}
              minDate={minDateEnd}
              disableFuture={disableFuture}
              disablePast={disablePast}
              selectedDay={selectedDayEnd}
              value={dayjs(`${endDefaultValue}`)}
              defaultValue={dayjs(`${endDefaultValue}`)}
              onMonthChange={onMonthChangeEnd}
              onChange={endDateHandleChange}
              onYearChange={onYearChangeEnd}
              calenderStyles={endCalendarStyle}
              shouldDisableYear={shouldDisableEndYear}
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
    calenderStyles,
    selectedDay,
    Day,
    maxDate,
    minDate,
    shouldDisableYear,
    defaultValue,
    onChange = () => {},
    onMonthChange = () => {},
    onYearChange = () => {},
  } = props;

  const [state, setState] = useState(value);
  useEffect(() => {
    setState(value);
  }, [value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          ...calenderStyles,
          maxHeight: '315px',
        }}
        onChange={(e: any) => onChange(e)}
        onYearChange={(e: any) => onYearChange(e)}
        onMonthChange={(e: any) => onMonthChange(e)}
        value={state}
        views={views}
        openTo={openTo}
        disableFuture={disableFuture}
        disablePast={disablePast}
        slots={{ day: Day }}
        defaultValue={defaultValue}
        shouldDisableYear={shouldDisableYear}
        maxDate={maxDate}
        minDate={minDate}
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
      sx={
        dayIsBetween
          ? {
              px: 2.5,
              mx: 0,
            }
          : {}
      }
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

SingleInputDateRangePicker.defaultProps = {
  value: '',
  onChange: () => {},
  dateFormat: 'YYYY MM DD',
  disablePast: false,
  rightIconPosition: '',
  leftInputCalendarIcon: (
    <>
      <CalendarIcon />
    </>
  ),
  rightInputCalendarIcon: <>{/* <CalendarIcon /> */}</>,
  leftIconPosition: 'start',
  inputStyleRoot: {},
  endCalendarStyle: {},
  startCalendarStyle: {},
  inputContainerStyle: {},
  calenderStyles: {},
};
