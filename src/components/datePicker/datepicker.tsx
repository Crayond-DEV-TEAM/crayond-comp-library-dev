import Box from '@mui/material/Box';
import { DatePicker, pickersLayoutClasses } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Moment } from 'moment';
import { useState } from 'react';
import CalendarIcon from '../../assets/calendarIcon';
import { styles } from './style';
import { SxProps } from '@mui/material';

interface SingleDatePickerProps {
  label: string;
  onChangeFun: (e: Moment | null) => void;
  value: Moment;
  inputStyleRoot: object;
  dateFormat: string;
  disablePast: boolean;
  disableFuture: boolean;
  OpenPickerIcon: any;
  iconPosition: 'left' | 'right';
  hoverInputColor: string;
  focusedInputColor: string;
  defaultBorderColor: string;
  inputRootStyle: SxProps;
  views: ['year', 'month', 'day'];
  calenderBorderColor: string;
  calendarBackgroundColor: string;
}

const SingleDatePicker = (props: SingleDatePickerProps) => {
  const {
    onChangeFun,
    inputStyleRoot,
    dateFormat,
    disablePast,
    disableFuture,
    OpenPickerIcon,
    iconPosition,
    hoverInputColor,
    focusedInputColor,
    defaultBorderColor,
    views,
    calenderBorderColor,
    calendarBackgroundColor,
  } = props;

  const [value, setValue] = useState<Moment | null>();

  const handleDateChange = (date: Moment | null) => {
    if (onChangeFun) {
      onChangeFun(date);
    }
    setValue(date);
  };

  return (
    <>
      <Box sx={{ ...styles.root }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
              ...styles.inputStyleRoot,
              ...inputStyleRoot,             
              '& .MuiPaper-root': { backgroundColor: 'red', },
              '& .MuiOutlinedInput-root': {
                border: `1px solid ${defaultBorderColor}`,
                flexDirection: iconPosition === 'left' ? 'row-reverse' : '',
                '&:hover fieldset': {
                  border: `1px solid ${hoverInputColor}`,
                },
                '&:focused fieldset': {
                  border: `1px solid ${focusedInputColor}`,
                },
              },
            }}
            value={value}
            format={`${dateFormat}`}
            disablePast={disablePast}
            views={views}
            onChange={(date: Moment | null) => handleDateChange(date)}
            components={{
              OpenPickerIcon: OpenPickerIcon,
            }}
            disableFuture={disableFuture}
            
            slotProps={{
              desktopPaper: {
                elevation:0,
                sx:{
                  marginTop:"8px",
                }
              },
              layout: {
                sx: {
                  [`.${pickersLayoutClasses.contentWrapper}`]: {
                    borderRadius: '8px',
                    border: `1px solid ${calenderBorderColor} `,
                    backgroundColor: calendarBackgroundColor,
                  },
                },
              },
              day: {
                backgroundColor: '#ffffff',
              } as any,
            }}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
};
SingleDatePicker.defaultProps = {
  onChangeFun: () => {},
  value: '',
  views: [],
  inputStyleRoot: {},
  dateFormat: 'DD MMM YY',
  disablePast: false,
  disableFuture: false,
  OpenPickerIcon: CalendarIcon,
  iconPosition: 'left',
  hoverInputColor: '#B2ADEB',
  focusedInputColor: '#665CD7',
  inputRootStyle: {},
  defaultBorderColor: '#E9E9E9',
  calenderBorderColor: '#665CD7',
  calendarBackgroundColor: '',
};
export default SingleDatePicker;
