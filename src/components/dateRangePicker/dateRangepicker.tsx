import { Divider, InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import dayjs, { Dayjs } from 'dayjs';
import moment, { Moment } from 'moment';
import { useEffect, useState } from 'react';
import CalendarIcon from '../../assets/calendarIcon';
import { PopoverPopupState } from './calendarPopover';
import { EndDay, StartDay } from './helperComponents';
import { styles } from './style';
import { DateRangePickerProps } from './props';

export default function SingleInputDateRangePicker(
  props: DateRangePickerProps,
) {
  const {
    rightInputCalendarIcon,
    leftInputCalendarIcon,
    inputStyleRoot,
    inputLabelColor,
    inputLabelSize,

    inputContainerStyle,
    inputBorderColor,
    inputActiveColor,
    inputBorderHoverColor,
    inputValueColor,
    inputFontsize,
    startLabel,
    endLabel,
    dateFormat,

    addMoreButtons,
    selectedDateColor,
    selectedRangeBgColor,
    selectedHoverBgColor,
    selectedHoverTextColor,

    bottomButtonStyle,
    buttonFontSize,
    buttonLabelColor,
    submitButtonLabel,
    cancelButtonLabel,

    startViews,
    endViews,
    openTo,
    maxDateEnd,
    minDateEnd,
    minDateStart,
    maxDateStart,
    endCalendarStyle,
    startCalendarStyle,
    calenderPopoverStyle,
    startCalendarMaxHeight,
    startCalendarMinHeight,
    endCalendarMaxHeight,
    endCalendarMinHeight,
    startCalendarHeight,
    endCalendarHeight,

    onMonthChangeStartFun,
    onMonthChangeEndFun,
    onYearChangeStartFun,
    onYearChangeEndFun,
    handleStartDateChangeFun,
    handleEndDateChangeFun,
    handleSubmitCalendarFun,
  } = props;

  const [startDate, setStartDate] = useState<any>(dayjs(null));
  const [endDate, setEndDate] = useState<any>(dayjs(null));
  const [prevMonth, setPrevMonth] = useState('');
  const [nextMonth, setNextMonth] = useState('');
  const [startYear, setStartYear] = useState<any>(null);
  const [isOpenCalendar, setOpenCalendar] = useState<HTMLButtonElement | null>(
    null,
  );

  const findCurrentMonth = (month: Date) => {
    let date = new Date(month);
    date.setMonth(date.getMonth());
    let PrevMonth = new Date(month);
    let prevMonths = moment(PrevMonth).format('YYYY MM DD');
    return prevMonths;
  };

  const findNextMonth = (month: Date) => {
    let date = new Date(month);
    date.setMonth(date.getMonth() + 1, 1);
    let NextMonth = new Date(date);
    let nextMonths = moment(NextMonth).format('YYYY MM DD');
    return nextMonths;
  };

  const onMonthChangeStart = (e: Dayjs | any) => {
    if (onMonthChangeStartFun) {
      onMonthChangeStartFun(e as Dayjs);
    }
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

  const onMonthChangeEnd = (e: Dayjs | any) => {
    if (onMonthChangeEndFun) {
      onMonthChangeEndFun(e);
    }
    let date = e?.$d;

    let merge = new Date(date);
    setNextMonth(moment(merge).format('YYYY MM DD'));

    merge.setMonth(merge.getMonth() - 1, 1);
    let nextMonthValue = moment(merge).format('YYYY MM DD');
    setPrevMonth(nextMonthValue);
  };

  const handleYearChangeStart = (e: any) => {
    if (onYearChangeStartFun) {
      onYearChangeStartFun(e);
    }

    let date = e?.$d;
    setStartYear(date);
  };

  const handleYearChangeEnd = async (e: Dayjs | any) => {
    if (onYearChangeEndFun) {
      onYearChangeEndFun(e);
    }
    let date = e?.$d;

    let startOfMonth = moment(date).startOf('year').format('YYYY MM DD');
    let combined = new Date(startOfMonth);

    let next = combined.getFullYear() + ' 01 01';
    let nextMonths = moment(next).format('YYYY MM DD');
    setPrevMonth(nextMonths);

    let prev = combined.getFullYear() + ' 02 01';
    let days = moment(prev).format('YYYY MM DD');
    setNextMonth(days);
  };

  const handleStartDateChange = (date: Dayjs | any) => {
    if (handleStartDateChangeFun) {
      handleStartDateChangeFun(date);
    }
    setPrevMonth(moment(date?.$d).format('YYYY MM DD'));
    setStartDate(date);
  };

  const handleEndDateChange = (date: Dayjs | any) => {
    if (handleEndDateChangeFun) {
      handleEndDateChangeFun(date);
    }
    setNextMonth(moment(date?.$d).format('YYYY MM DD'));
    setEndDate(date);
  };

  const handleSubmitCalendar = () => {
    if (handleSubmitCalendarFun) {
      handleSubmitCalendarFun(prevMonth, nextMonth);
    }
    if (prevMonth && nextMonth) {
      setOpenCalendar(null);
    }
  };

  const handleOpenCalendar = (event: Event | any) => {
    setOpenCalendar(event.currentTarget);
  };

  const handleCancelCalendar = () => {
    setOpenCalendar(null);
  };

  useEffect(() => {
    setStartDate(null);
    setEndDate(null);
    setPrevMonth(findCurrentMonth(new Date()));
    setNextMonth(findNextMonth(new Date()));
  }, []);
  return (
    <>
      <Box
        sx={{
          '&.MuiBox-root': {
            '&: hover': {
              border: `1px solid ${inputBorderHoverColor}`,
            },
          },
          ...styles.mainBox,
          ...inputContainerStyle,
          borderColor: isOpenCalendar
            ? `${inputActiveColor}`
            : `${inputBorderColor}`,
        }}
        onClick={(e: any) => handleOpenCalendar(e)}
      >
        <TextField
          sx={{
            ...styles.inputStyleRoot,
            ...inputStyleRoot,
            '& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder': {
              color: inputLabelColor,
              fontSize: inputLabelSize,
            },
          }}
          value={
            startDate
              ? moment(startDate ? startDate?.$d : null).format(`${dateFormat}`)
              : ''
          }
          placeholder={startLabel}
          InputProps={{
            style: {
              fontSize: inputFontsize,
              color: inputValueColor,
            },
            startAdornment: (
              <InputAdornment position={'end'} sx={{ mt: '4px' }}>
                {leftInputCalendarIcon}
              </InputAdornment>
            ),
          }}
        />
        <Divider orientation="vertical" flexItem sx={{ ...styles.divider }} />
        <TextField
          sx={{
            ...styles.inputStyleRoot,
            ...inputStyleRoot,
            '& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder': {
              color: inputLabelColor,
              fontSize: inputLabelSize,
            },
          }}
          value={
            endDate
              ? moment(endDate ? endDate.$d : null).format(`${dateFormat}`)
              : ''
          }
          placeholder={endLabel}
          InputProps={{
            style: { fontSize: inputFontsize, color: inputValueColor },
            startAdornment: (
              <InputAdornment position={'start'}>
                {rightInputCalendarIcon}
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <PopoverPopupState
        startViews={startViews}
        endViews={endViews}
        openTo={openTo}
        maxDateStart={maxDateStart}
        minDateStart={minDateStart}
        minDateEnd={minDateEnd}
        maxDateEnd={maxDateEnd}
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
        handleCloseCalendar={() => handleCancelCalendar()}
        handleSubmitCalendar={() => handleSubmitCalendar()}
        endDateHandleChange={(date: Dayjs | null) => handleEndDateChange(date)}
        startDateHandleChange={(date: Dayjs | null) =>
          handleStartDateChange(date)
        }
        onMonthChangeStart={(date: dayjs.Dayjs) => onMonthChangeStart(date)}
        onMonthChangeEnd={(date: Dayjs) => onMonthChangeEnd(date)}
        onYearChangeStart={(date: Dayjs) => handleYearChangeStart(date)}
        onYearChangeEnd={(date: Dayjs) => handleYearChangeEnd(date)}
        selectedDateColor={selectedDateColor}
        selectedRangeBgColor={selectedRangeBgColor}
        bottomButtonStyle={bottomButtonStyle}
        buttonFontSize={buttonFontSize}
        buttonLabelColor={buttonLabelColor}
        calenderPopoverStyle={calenderPopoverStyle}
        cancelButtonLabel={cancelButtonLabel}
        submitButtonLabel={submitButtonLabel}
        selectedHoverBgColor={selectedHoverBgColor}
        selectedHoverTextColor={selectedHoverTextColor}
        startCalendarMaxHeight={startCalendarMaxHeight}
        startCalendarMinHeight={startCalendarMinHeight}
        endCalendarMaxHeight={endCalendarMaxHeight}
        endCalendarMinHeight={endCalendarMinHeight}
        startCalendarHeight={startCalendarHeight}
        endCalendarHeight={endCalendarHeight}
      />
    </>
  );
}

SingleInputDateRangePicker.defaultProps = {
  inputContainerStyle: {},
  inputBorderColor: '#E9E9E9',
  inputBorderHoverColor: '#B2ADEB',
  inputActiveColor: '#665CD7',
  inputFontsize: 14,
  inputValueColor: '#3B3B3B',
  startLabel: 'Check-in',
  endLabel: 'Check-out',
  inputLabelSize: 14,
  inputLabelColor: '#656363',
  inputStyleRoot: {},

  selectedRangeBgColor: '#B2ADEB',
  selectedDateColor: '#000',
  selectedHoverBgColor: '#EFEEFB',
  selectedHoverTextColor: '#665CD7',

  cancelButtonLabel: 'cancel',
  submitButtonLabel: 'Submit',
  buttonFontSize: 14,
  buttonLabelColor: '#665CD7',
  bottomButtonStyle: {},
  addMoreButtons: [],

  dateFormat: 'DD MMM YY',
  startViews: ['year', 'month', 'day'],
  endViews: ['year', 'day'],
  openTo: 'day',
  maxDateEnd: '',
  minDateEnd: '',
  minDateStart: '',
  maxDateStart: '',
  calenderPopoverStyle: {},
  endCalendarStyle: {},
  startCalendarStyle: {},

  startCalendarMaxHeight: undefined,
  startCalendarMinHeight: undefined,
  endCalendarMaxHeight: undefined,
  endCalendarMinHeight: undefined,
  startCalendarHeight: undefined,
  endCalendarHeight: undefined,

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
