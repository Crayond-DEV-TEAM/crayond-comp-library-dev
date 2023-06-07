import { Divider, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import {
  DatePicker,
  StaticDatePicker,
  pickersLayoutClasses,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  PickersLayoutContentWrapper,
  PickersLayoutRoot,
  usePickerLayout,
} from '@mui/x-date-pickers/PickersLayout';
import { useState } from 'react';
import CalendarIcon from '../../assets/calendarIcon';
import './style.css';
import { styles } from './styles';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

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
  const [isOpenCalendar, setOpenCalendar] = useState<HTMLButtonElement | null>(
    null
  );

  const handleStartDateChange = (date: any) => {
    console.log(date, 'start');

    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    console.log(date, 'end');

    setEndDate(date);
  };

  const handleOpenCalendar = (event: any) => {
    setOpenCalendar(event.currentTarget);
    console.log('henry');
  };

  const handleCloseCalendar = () => {
    setOpenCalendar(null);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            ...styles.mainBox,
            borderColor: isOpenCalendar ? '#665CD7' : ' #E9E9E9',
          }}
          onClick={handleOpenCalendar}
        >
          <DatePicker
            sx={{ ...styles.inputStyleRoot, ...inputStyleRoot }}
            value={startDate}
            format={'DD MMM YY'}
            disablePast={disablePast}
            views={['year', 'month', 'day']}
            // onChange={handleDateChange}
            components={{
              OpenPickerIcon: CalendarIcon,
            }}
            disableFuture={true}
            slotProps={{
              textField: {
                InputProps: {
                  placeholder: 'Check-in',
                },
              },
              day: {
                backgroundColor: '#EFEEFB',
              } as any,
            }}
          />

          <Divider orientation="vertical" flexItem sx={{ ...styles.divider }} />

          <DatePicker
            // open={isCalendarOpen}
            sx={{ ...styles.inputStyleRoot, ...inputStyleRoot }}
            value={endDate}
            format={'DD MMM YY'}
            // disablePast={disablePast}
            // disableFuture={true}
            views={['year', 'month', 'day']}
            // onChange={handleEndDateChange}
            slotProps={{
              textField: {
                InputProps: {
                  placeholder: 'Check-out',
                },
              },
              day: {
                backgroundColor: '#EFEEFB',
              } as any,
            }}
          />
        </Box>
      </LocalizationProvider>
      <PopoverPopupState
        views={['year', 'month', 'day']}
        openTo="day"
        isOpenCalendar={isOpenCalendar}
        handleCloseCalendar={handleCloseCalendar}
        startDateHandleChange={handleStartDateChange}
        endDateHandleChange={handleEndDateChange}
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
    views,
    openTo,
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
      >
        <Box
          sx={{
            ...styles.calendarContainer,
          }}
        >
          <Box>
            <MyCustomLayout
              value={startDate}
              onChange={startDateHandleChange}
              views={views}
              openTo={openTo}
            />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ color: '#929292' }} />
          <Box>
            <MyCustomLayout
              value={endDate}
              onChange={endDateHandleChange}
              views={views}
              openTo={openTo}
            />
            <Box sx={{display:"flex",justifyContent:"flex-end",alignItems:"center",}}>
              <Button onClick={handleCloseCalendar}>Cancel</Button>
              <Button onClick={handleCloseCalendar}>Submit</Button>
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

function MyCustomLayout(props: any) {
  const {
    value,
    onChange = () => {},
    views,
    openTo,
    disableFuture,
    disablePast,
  } = props;

  // Put the action bar before the content
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={value}
        views={views}
        openTo={openTo}
        disableFuture={disableFuture}
        disablePast={disablePast}
        onChange={(newValue) => onChange(newValue)}
      />{' '}
    </LocalizationProvider>
  );
}
