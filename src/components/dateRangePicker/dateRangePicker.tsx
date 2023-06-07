import { Divider, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import {
  DatePicker,
  DatePickerToolbar,
  DatePickerToolbarProps,
  pickersLayoutClasses,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  PickersLayoutContentWrapper,
  PickersLayoutProps,
  PickersLayoutRoot,
  usePickerLayout,
} from '@mui/x-date-pickers/PickersLayout';
import { DateView } from '@mui/x-date-pickers/models';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import CalendarIcon from '../../assets/calendarIcon';
import { styles } from './styles';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import './style.css';
import React from 'react';
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

  const [startValues, setStartValue] = useState<any>(null);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const handleStartDateChange = (date: any) => {
    setStartValue(date);
  };

  const handleOpenCalendar = () => {
    setCalendarOpen(true);
  };


  const CustomDatePickerIcon = (props: any) => {
    return (
      <IconButton {...props}>
        <CalendarIcon />
      </IconButton>
    );
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
       

        <Box
          sx={{
            ...styles.root,
            ':hover': {
              border: ' 1px solid#B2ADEB',
            },
          }}
          onClick={handleOpenCalendar}
        >
          <DatePicker
            open={false}
            sx={{ ...styles.inputStyleRoot, ...inputStyleRoot }}
            value={startValues}
            // label={
            //   <InputLabel
            //     sx={{ color: 'red', background: 'red' }}
            //     shrink={true}
            //     htmlFor="date-picker-placeholder"
            //   >
            //     Select a date
            //   </InputLabel>
            // }
            format={'DD MMM YY'}
            // disablePast={disablePast}
            // disableFuture={true}
            views={['year', 'month', 'day']}
            onChange={handleStartDateChange}
            components={{ OpenPickerIcon: CalendarIcon }}
            slots={{ layout: CustomLayout }}
            slotProps={{
              layout: {
                sx: {
                  [`.${pickersLayoutClasses.contentWrapper}`]: {
                    borderRadius: '8px',
                    border: '1px solid #665CD7',
                    marginTop: '10px',
                  },
                },
              },
              day: {
                backgroundColor: '#EFEEFB',
              } as any,
            }}
          />

          <Divider
            orientation="vertical"
            flexItem
            sx={{ maxHeight: '30px', marginTop: '13px', color: '#929292' }}
          />

          <DatePicker
            open={isCalendarOpen}
            sx={{ ...styles.inputStyleRoot, ...inputStyleRoot }}
            value={EndValues}
            format={'DD MMM YY'}
            // disablePast={disablePast}
            // disableFuture={true}
            views={['year', 'month', 'day']}
            onChange={handleEndDateChange}
            slots={{
              layout: CustomLayout,

              toolbar: CustomToolbar,
            }}
            slotProps={{
              toolbar: {
                toolbarFormat: 'YYYY',
                toolbarPlaceholder: '??',
              },
              actionBar: {
                actions: ['clear','accept'],
              },
              layout: {
                sx: {
                  [`.${pickersLayoutClasses.contentWrapper}`]: {
                    borderRadius: '8px',
                    border: '1px solid #665CD7',
                    marginTop: '10px',
                  },
                },
              },
              day: {
                backgroundColor: '#EFEEFB',
              } as any,
            }}
          />
        </Box>
      </LocalizationProvider>

    </>
  );
}
