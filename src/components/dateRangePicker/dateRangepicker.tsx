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
import {
  CustomPickerDayProps,
  MyCustomLayoutProps,
  PopoverPopupProps,
} from './props';
import { styles } from './style';
import './styles.css';
import { color } from '@mui/system';
export default function SingleInputDateRangePicker(props: any) {
  const {
    rightInputCalendarIcon,
    rightIconPosition,
    leftInputCalendarIcon,
    leftIconPosition,
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
  } = props;

  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(null));
  const [endDate, setEndDate] = useState<any>(dayjs(null));
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

  const handleEndDateChange = (date: Date) => {
    setNextMonth(date);
    setEndDate(date);
  };

  const handleSubmitCalendar = () => {
    if(prevMonth && nextMonth){
      alert(prevMonth, 'statDate', nextMonth, 'EndDate');
      setOpenCalendar(null);
    }
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
        onClick={handleOpenCalendar}
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
              ? moment(startDate ? startDate.$d : null).format(`${dateFormat}`)
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
              <InputAdornment position={rightIconPosition}>
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
        handleSubmitCalendar={handleSubmitCalendar}
        endDateHandleChange={(date: Date) => handleEndDateChange(date)}
        startDateHandleChange={(date: Date) => handleStartDateChange(date)}
        onMonthChangeStart={(date: Date) => onMonthChangeStart(date)}
        onMonthChangeEnd={(date: Date) => onMonthChangeEnd(date)}
        onYearChangeStart={(date: Date) => handleYearChangeStart(date)}
        onYearChangeEnd={(date: Date) => handleYearChangeEnd(date)}
        selectedDateColor={selectedDateColor}
        selectedRangeBgColor={selectedRangeBgColor}
        bottomButtonStyle={bottomButtonStyle}
        buttonFontSize={buttonFontSize}
        buttonLabelColor={buttonLabelColor}
        calenderPopoverStyle={calenderPopoverStyle}
        cancelButtonLabel={cancelButtonLabel}
        submitButtonLabel={submitButtonLabel}
      />
    </>
  );
}
const PopoverPopupState = (props: PopoverPopupProps) => {
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

    calenderPopoverStyle,
    selectedDateColor,
    selectedRangeBgColor,

    bottomButtonStyle,
    buttonFontSize,
    buttonLabelColor,
    cancelButtonLabel,
    submitButtonLabel,
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
            ...calenderPopoverStyle,
            marginTop: '12px',
            borderRadius: ' 8px',
            '& .MuiPickersMonth-monthButton': {
              padding: '1px',
            },
            '& .MuiPickersYear-yearButton': {
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
        <Box sx={{ ...styles.calendarContainer }}>
          <Box sx={{ ...styles.calendarBox }}>
            <Box>
              <MyCustomLayout
                views={startViews}
                openTo={openTo}
                Day={StartDay}
                maxDate={dayjs(`${maxDateStart}`)}
                minDate={dayjs(`${minDateStart}`)}
                disableFuture={disableFuture}
                disablePast={disablePast}
                value={dayjs(`${startDefaultValue}`)}
                selectedDay={selectedDayStart}
                defaultValue={dayjs(`${startDefaultValue}`)}
                onMonthChange={onMonthChangeStart}
                onChange={startDateHandleChange}
                onYearChange={onYearChangeStart}
                selectedRangeBgColor={selectedRangeBgColor}
                selectedDateColor={selectedDateColor}
              />
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ color: '#929292' }}
            />
            <Box>
              <MyCustomLayout
                views={endViews}
                openTo={openTo}
                Day={EndDay}
                maxDate={dayjs(`${maxDateEnd}`)}
                minDate={dayjs(`${minDateEnd}`)}
                disableFuture={disableFuture}
                disablePast={disablePast}
                selectedDay={selectedDayEnd}
                value={dayjs(`${endDefaultValue}`)}
                defaultValue={dayjs(`${endDefaultValue}`)}
                onMonthChange={onMonthChangeEnd}
                onChange={endDateHandleChange}
                onYearChange={onYearChangeEnd}
                selectedRangeBgColor={selectedRangeBgColor}
                selectedDateColor={selectedDateColor}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '4px 20px',
            }}
          >
             {addMoreButtons?.map((val: any) => (
              <>
                <Button
                  sx={{
                    mr: '4px',
                    ...bottomButtonStyle,
                    color: buttonLabelColor,
                    fontSize: buttonFontSize,
                  }}
                  onClick={() => val.handleFunction(val)}
                >
                  {val?.label}
                </Button>
              </>
            ))}
            <Button
              sx={{
                mr: '4px',
                ...bottomButtonStyle,
                color: buttonLabelColor,
                fontSize: buttonFontSize,
              }}
              onClick={() => handleCloseCalendar()}
            >
              {cancelButtonLabel}
            </Button>
            <Button
              sx={{
                mr: '4px',
                ...bottomButtonStyle,
                color: buttonLabelColor,
                fontSize: buttonFontSize,
              }}
              onClick={() => handleSubmitCalendar()}
            >
              {submitButtonLabel}
            </Button>
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
    maxDate,
    minDate,
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
        sx={{ maxHeight: '318px', fontWeight: '600' }}
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
        maxDate={maxDate}
        minDate={minDate}
        slotProps={{
          day: {
            selectedDay: selectedDay,
            color: selectedDateColor,
            backgroundColor: selectedRangeBgColor,
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

  cancelButtonLabel : 'cancel',
  submitButtonLabel : 'Submit',
  buttonFontSize: 14,
  buttonLabelColor: '#665CD7',
  bottomButtonStyle: {},
  addMoreButtons: [
    {
      label: '',
      handleFunction: () => false,
    },
  ],

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

  leftInputCalendarIcon: (
    <>
      <CalendarIcon />
    </>
  ),
  rightInputCalendarIcon: <>{<CalendarIcon />}</>,
  // rightIconPosition: 'end',
  // leftIconPosition: 'start',

  onChange: () => {},
  dateFormat: 'YYYY MM DD',
};
