// import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
// import { times, identity, splitEvery } from "ramda";
// import {
//   addDays,
//   addMonths,
//   addYears,
//   differenceInCalendarDays,
//   endOfMonth,
//   format,
//   getMonth,
//   getYear,
//   isSameDay,
//   isSameMonth,
//   isWeekend,
//   isWithinInterval,
//   setMonth,
//   setYear,
//   startOfMonth,
//   startOfYear,
// } from "date-fns/fp";
// import startOfWeek from "date-fns/startOfWeek";
// import endOfWeek from "date-fns/startOfWeek";

// type Range = [Date | null, Date | null];
// const noop = () => {};
// const WEEK_STARTS_ON = 1;

// const keyMap: Partial<Record<string, number>> = {
//   ArrowUp: -7,
//   ArrowDown: 7,
//   ArrowLeft: -1,
//   ArrowRight: 1,
// };

// const DateApp = () => {
//   const today = new Date();
//   const [sampleRange, setSampleRange] = useState<Range>([
//     addDays(-5, today),
//     addDays(-3, today),
//   ]);

//   return (
//     <div className="App">
//       <DatePicker
//         onChange={(x) => setSampleRange(x)}
//         onSelect={(x) => console.log(x)}
//         range={sampleRange}
//       />
//       <div className="inputs-wrapper">
//         <input
//           type="text"
//           readOnly
//           value={sampleRange
//             .map((x) => (x ? format("dd/MM/yyyy", x) : "empty"))
//             .join(" | ")}
//         />
//         <button onClick={() => setSampleRange([null, null])}>clear</button>
//       </div>
//     </div>
//   );
// };

// const DatePicker = ({
//   onChange = noop,
//   onSelect = noop,
//   range,
//   selected: initialSelected = new Date(),
// }: {
//   onChange?(x: Range): void;
//   onSelect?(x: Date): void;
//   range: Range;
//   selected?: Date;
// }) => {
//   const [selected, setSelected] = useState(initialSelected);
//   const [focused, setFocused] = useState<null | Date>(null);
//   const [monthView, setMonthView] = useState(initialSelected);
//   const [[start, end], setRange] = useState<Range>([null, null]);

//   const nextMonth = addMonths(1, monthView);

//   const handleSelect = useCallback(
//     (x: Date) => {
//       if (!end) {
//         const min = Math.min();
//         const sorted = [start, x]
//           .slice()
//           .sort(
//             (a, b) => (a?.getTime() ?? min) - (b?.getTime() ?? min)
//           ) as Range;
//         setRange(sorted);
//         onChange(sorted);
//       } else {
//         setRange([x, null]);
//       }
//       setSelected(x);
//       onSelect(x);
//     },
//     [start, end, onChange, onSelect]
//   );

//   const increment = (x: number) => () =>
//     setMonthView((prev) => addMonths(x, prev));
//   const handleKeyPress: React.KeyboardEventHandler<HTMLDivElement> = ({
//     key,
//   }) => {
//     const daysToAdd = keyMap[key];
//     if (focused && daysToAdd) {
//       setFocused(addDays(daysToAdd, focused));
//     }
//   };

//   return (
//     <div className="datepicker" onKeyDown={handleKeyPress}>
//       <div className="months-wrapper">
//         <Month
//           focused={focused}
//           month={monthView}
//           onDayFocus={setFocused}
//           onSelect={handleSelect}
//           range={range}
//           selected={selected}
//           customHeader={
//             <>
//               <MonthSelector month={monthView} onSelect={setMonthView} />
//               <YearSelector year={monthView} onSelect={setMonthView} />
//             </>
//           }
//         />
//         <Month
//           focused={focused}
//           month={nextMonth}
//           onDayFocus={setFocused}
//           onSelect={handleSelect}
//           range={range}
//           selected={selected}
//         />
//       </div>
//       <div className="controls">
//         <button onClick={increment(-1)}>prev</button>
//         <button onClick={() => setMonthView(new Date())}>today</button>
//         <button onClick={increment(1)}>next</button>
//       </div>
//     </div>
//   );
// };

// const Month = ({
//   month,
//   onSelect: onChange,
//   range,
//   selected,
//   customHeader,
//   onDayFocus,
//   focused,
// }: {
//   range: Range;
//   month: Date;
//   onSelect(x: Date): void;
//   selected: Date | null;
//   customHeader?: ReactNode;
//   onDayFocus(d: Date): void;
//   focused: Date | null;
// }) => {
//   const sm = startOfMonth(month);
//   const sfw = startOfWeek(sm, { weekStartsOn: WEEK_STARTS_ON });
//   const em = endOfMonth(sm);
//   const elw = endOfWeek(em, {
//     weekStartsOn: WEEK_STARTS_ON,
//   });
//   const totalDays = differenceInCalendarDays(sfw, elw) + 1;
//   const days = times(identity, totalDays).map((_:any, idx:any) => addDays(idx, sfw));

//   return (
//     <div className="month-wrapper">
//       <div className="month-title">
//         {customHeader ? customHeader : format("MMM", sm)}
//       </div>
//       <div className="month">
//         {splitEvery(7, days).map((week:any, weekIdx:any) => {
//           return (
//             <div className="week" key={weekIdx}>
//               {week.map((x:any) => (
//                 <Day
//                   value={x}
//                   month={month}
//                   key={x.getTime()}
//                   onSelect={onChange}
//                   range={range}
//                   selected={selected}
//                   focused={focused}
//                   onDayFocus={onDayFocus}
//                 />
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const Day = ({
//   value,
//   month,
//   onSelect: onChange,
//   range: [start, end],
//   selected,
//   onDayFocus,
//   focused,
// }: {
//   value: Date;
//   month: Date;
//   onSelect(x: Date): void;
//   range: Range;
//   selected: Date | null;
//   onDayFocus(d: Date): void;
//   focused: Date | null;
// }) => {
//   const today = isSameDay(value, new Date());
//   const grayout = !isSameMonth(value, month);
//   const weekend = isWeekend(value);
//   const inRange = start && end && isWithinInterval({ start, end }, value);
//   const isSelected = selected && isSameDay(selected, value);
//   const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = ({
//     key,
//   }) => {
//     switch (key) {
//       case "Enter":
//       case " ":
//         onChange(value);
//         break;
//       default:
//         break;
//     }
//   };
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (
//       focused &&
//       ref.current &&
//       isSameDay(focused, value) &&
//       !grayout &&
//       document.activeElement !== ref.current
//     ) {
//       ref.current.focus();
//     }
//   }, [value, focused, grayout]);

//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       ref={ref}
//     //   className={cx("day", {
//     //     today,
//     //     grayout,
//     //     weekend,
//     //     selected: isSelected,
//     //     "in-range": inRange,
//     //   })}
//       onFocus={() => onDayFocus(value)}
//       onKeyDown={handleKeyDown}
//       onClick={() => onChange(value)}
//     >
//       {format("d", value)}
//     </div>
//   );
// };

// const MonthSelector = ({
//   month,
//   onSelect = noop,
// }: {
//   month: Date;
//   onSelect?(s: Date): void;
// }) => {
//   const sy = startOfYear(month);
//   const formatter = format("MMM");
//   const months = times(identity, 12).map((_:any, idx:any) => addMonths(idx, sy));
//   return (
//     <select
//       value={getMonth(month)}
//       onChange={({ target: { value } }) =>
//         onSelect(setMonth(parseInt(value), month))
//       }
//     >
//       {months.map((x:any, idx:any) => (
//         <option key={idx} value={getMonth(x)}>
//           {formatter(x)}
//         </option>
//       ))}
//     </select>
//   );
// };

// const YearSelector = ({
//   year,
//   onSelect = noop,
// }: {
//   year: Date;
//   onSelect?(s: Date): void;
// }) => {
//   const fromYear = addYears(-4, year);
//   const years = times(identity, 10).map((_, idx) => addYears(idx, fromYear));

//   return (
//     <select
//       value={getYear(year)}
//       onChange={({ target: { value } }) =>
//         onSelect(setYear(parseInt(value), year))
//       }
//     >
//       {years.map((y, idx) => (
//         <option key={idx}>{format("yyyy", y)}</option>
//       ))}
//     </select>
//   );
// };

// export default DateApp;

// function times(identity: any, totalDays: number) {
//     throw new Error("Function not implemented.");
// }




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
  const [selectedStart, setSelectedStart] = useState<any>(null);
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
  
    let startYears = moment(prevMonth).get('year');
    let nextYear = moment(nextMonth).get('year');
    debugger;

    if (startYears === nextYear) {
    let prev = date.setMonth(date.getMonth());
    let prevMonthValue = moment(prev).format('YYYY MM DD');
    setPrevMonth(prevMonthValue);

    date.setMonth(date.getMonth() - 1, 1);
    let nextMonthValue = moment(date).format('YYYY MM DD');
    setNextMonth(nextMonthValue);
    }
    
    // let year = startYear.setMonth(date.getMonth());
    // let merge = new Date(year);
    // setPrevMonth(moment(merge).format('YYYY MM DD'));

    debugger;
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
    let date = e?.$d;

    let startYears = moment(prevMonth).get('year');
    let nextYear = moment(nextMonth).get('year');
    debugger;

    if (startYears === nextYear) {
    let prev = date.setMonth(date.getMonth());
    let prevMonthValue = moment(prev).format('YYYY MM DD');
    setPrevMonth(prevMonthValue);

    date.setMonth(date.getMonth() - 1, 1);
    let nextMonthValue = moment(date).format('YYYY MM DD');
    setNextMonth(nextMonthValue);
    }
    // setStartDate(null);
    // setEndDate(null);
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
    setPrevMonth(date);
    setEndYear(date);
    debugger;
    let startYears = moment(prevMonth).get('year');
    let nextYear = moment(date).get('year');

    let startOfMonth = moment(date).startOf('year').format('YYYY MM DD');
    let combined = new Date(startOfMonth);

    if (startYears > nextYear) {
    console.log(combined, '==handleYearChangeEnd');
    let next = combined.setMonth(combined.getMonth() + 1, 1);
    let nextMonths = moment(next).format('YYYY MM DD');
    setNextMonth(nextMonths);

    let prev = combined.setMonth(combined.getMonth());
    let days = moment(prev).format('YYYY MM DD');
    setPrevMonth(days);
    }
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
          value={moment(startDate?.$d).format('DD MMM YY')}
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
          value={moment(endDate?.$d).format('DD MMM YY')}
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          ...calenderStyles,
          maxHeight: '315px',
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

