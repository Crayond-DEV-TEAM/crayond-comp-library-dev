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
import { CustomPickerDayProps } from './props';
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
    inputBorderColor,
    inputValueColor,
    inputFontsize,
    calenderStyles,
    calendarContainerStyle,
    addMoreButtons,
    selectedDateColor,
    selectedRangeBgColor,
  } = props;

  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(null));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(null));
  const [prevMonth, setPrevMonth] = useState<any>(null);
  const [nextMonth, setNextMonth] = useState<any>(null);
  const [startYear, setStartYear] = useState<any>(null);
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
    let date = e.$d;

    let fill = null;
    if (startYear) {
      fill = startYear?.setMonth(date.getMonth());
    }

    let merge = new Date(fill ?? date);
    setPrevMonth(moment(merge).format('YYYY MM DD'));

    merge.setMonth(merge.getMonth() + 1, 1);
    let nextMonthValue = moment(merge).format('YYYY MM DD');
    setNextMonth(nextMonthValue);
  };

  const onMonthChangeEnd = (e: any) => {
    let date = e?.$d;

    let merge = new Date(date);
    setNextMonth(moment(merge).format('YYYY MM DD'));

    merge.setMonth(merge.getMonth() - 1, 1);
    let nextMonthValue = moment(merge).format('YYYY MM DD');
    setPrevMonth(nextMonthValue);
  };

  const handleYearChangeStart = (e: any) => {
    let date = e?.$d;
    setStartYear(date);
  };

  const handleYearChangeEnd = async (e: any) => {
    let date = e?.$d;
  
    let startOfMonth = moment(date).startOf('year').format('YYYY MM DD');
    let combined = new Date(startOfMonth);

    console.log(combined, '==handleYearChangeEnd');
    let next = combined.getFullYear() + ' 01 01';
    let nextMonths = moment(next).format('YYYY MM DD');
    setPrevMonth(nextMonths);

    let prev = combined.getFullYear() + ' 02 01';
    let days = moment(prev).format('YYYY MM DD');
    setNextMonth(days);
  };

  const handleStartDateChange = (date: any) => {
    setPrevMonth(date);
    setStartDate(date);

  };

  const handleEndDateChange = (date: any) => {
    setNextMonth(date);
    setEndDate(date);
  };

  const handleSubmitCalendar = () => {
    // console.log(prevMonth.$d,nextMonth.$d);
    setOpenCalendar(null);
  };

  const handleOpenCalendar = (event: any) => {
    setOpenCalendar(event.currentTarget);
  };

  const handleCancelCalendar = () => {
    setOpenCalendar(null);
  };

  useEffect(() => {
    setStartDate(null); 
    setEndDate(null);
    setPrevMonth(findCurrentMonth(new Date()));
    setNextMonth(findNextMonth(findCurrentMonth(new Date())));
  }, []);
  return (
    <>
      <Box
        sx={{
          '&.MuiBox-root': {
            borderColor: inputBorderColor,
          },
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
            fontSize: '20px',
            color: 'red',
          }}
          value={startDate? moment(startDate ? startDate.$d : null).format('DD MMM YY'):"Check-in"}
          placeholder="Check-in"
          InputProps={{
            style: { fontSize: inputFontsize, color: inputValueColor },
            startAdornment: (
              <InputAdornment position={'end'} sx={{ mt: '4px' }}>
                {leftInputCalendarIcon}
              </InputAdornment>
            ),
          }}
        />
        <Divider orientation="vertical" flexItem sx={{ ...styles.divider }} />
        <TextField
          sx={{ ...styles.inputStyleRoot, ...inputStyleRoot }}
          value={endDate? moment(endDate ? endDate.$d : null).format('DD MMM YY'):"Check-out"}
          placeholder="Check-out"
          InputProps={{
            style: { fontSize: inputFontsize, color: inputValueColor },
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
        maxDateStart={'01-01'}
        minDateStart={'12-31'}
        minDateEnd={''}
        maxDateEnd={''}
        // shouldDisableStartYear={''}
        addMoreButtons={addMoreButtons}
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
        calendarContainerStyle={calendarContainerStyle}
        calenderStyles={calenderStyles}
        selectedDateColor={selectedDateColor}
        selectedRangeBgColor={selectedRangeBgColor}
      />
    </>
  );
}
const PopoverPopupState = (props: any) => {
  const {
    isOpenCalendar,
    handleCloseCalendar,
    addMoreButtons,
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

    calendarContainerStyle,
    calenderStyles,
    selectedDateColor,
    selectedRangeBgColor,
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
            '& .Mui-selected': {
              backgroundColor: '',
            },
            '& .MuiPickersMonth-monthButton.Mui-selected': {
              padding: '1px',
            },
            '& .MuiPickersYear-yearButton.Mui-selected': {
              padding: '1px',
            },
            '& .MuiPickersDay-root': {
              '&.Mui-selected': {
                backgroundColor: selectedRangeBgColor,
                color: selectedDateColor,
              },
            },
          },
        }}
      >
        <Box sx={{ ...styles.calendarContainer, ...calendarContainerStyle }}>
          <Box>
            <MyCustomLayout
              views={startViews}
              openTo={openTo}
              Day={StartDay}
              // maxDate={new Date(maxDateStart)}
              // minDate={new Date(minDateEnd)}
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
              maxDate={undefined}
              minDate={undefined}
              selectedRangeBgColor={selectedRangeBgColor}
              selectedDateColor={selectedDateColor}
            />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ color: '#929292' }} />
          <Box>
            <MyCustomLayout
              views={endViews}
              openTo={openTo}
              Day={EndDay}
              // maxDate={new Date(maxDateStart)}
              // minDate={new Date(maxDateEnd)}
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
              maxDate={undefined}
              minDate={undefined}
              selectedRangeBgColor={selectedRangeBgColor}
              selectedDateColor={selectedDateColor}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              {addMoreButtons.map((val: any) => (
                <>
                  <Button onClick={handleCloseCalendar}>{val?.label}</Button>
                </>
              ))}
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

const MyCustomLayout = (props: any) => {
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
    selectedRangeBgColor,
    selectedDateColor,
    onChange = () => {},
    onMonthChange = () => {},
    onYearChange = () => {},
  } = props;

  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);
  }, [value.$d]);
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
            color: selectedDateColor,
            backgroundColor:selectedRangeBgColor,
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
  debugger;
  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  console.log(selectedDay,"start");
  
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
              backgroundColor: `${props.backgroundColor}`,
              color: `${props.color}`,
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
 console.log(selectedDay,"selectEnd");
 
  const end = selectedDay.endOf('day');
  const start = selectedDay.startOf('month');

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
              backgroundColor: `${props.backgroundColor}`,
              color: `${props.color}`,
            }
          : {}
      }
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
};

SingleInputDateRangePicker.defaultProps = {
  onChange: () => {},
  dateFormat: 'YYYY MM DD',
  rightIconPosition: 'end',
  leftInputCalendarIcon: (
    <>
      <CalendarIcon />
    </>
  ),
  rightInputCalendarIcon: <>{/* <CalendarIcon /> */}</>,
  selectedDateColor:"#000",
  selectedRangeBgColor:"#8a7ffe",
  leftIconPosition: 'end',
  inputStyleRoot: {},
  endCalendarStyle: {},
  startCalendarStyle: {},
  inputContainerStyle: {},
  calenderStyles: {},
  inputBorderColor: 12,
  inputFontsize: '',
  calendarContainerStyle: {},
  addMoreButtons: [
    {
      label: 'OK',
    },
    {
      label: 'Cancel',
    },
  ],
};
