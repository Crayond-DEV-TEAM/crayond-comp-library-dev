import { Box } from '@mui/material';
import { pickersLayoutClasses } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import CalendarIcon from '../../assets/calendarIcon';
import './style.css';
// import { styles } from './styles';

const styles = {
  mainBox: {
    '&: hover': {
      border: ' 1px solid #B2ADEB',
    },
    '&:focus-within': {
      border: ' 1px solid#665CD7',
    },
  },

  inputStyleRoot: {
    border: '1px solid #E9E9E9',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
      display: 'none',
    },
    '&.MuiFormControl-root': {
      border: 'none',
    },
    '& .MuiOutlinedInput-input': {
      marginLeft: '12px',
    },
    '& .MuiOutlinedInput-root': {
      width: '100%',
      '&:focus': {
        outline: 'none',
      },
      alignItems: 'center',
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&:focused fieldset': {
        border: 'none',
      },
    },
    '& .MuiFormLabel-root': {
      background: '#fff',
      padding: '0px 8px',
      opacity: 0,
    },
    '& .MuiTypography-root': {
        //   opacity: 0,
        // '&::before': {
        //   content: '"|"',
        // },
        // '&::after': {
        //   content: '"|"',
        //   background: '#f91c1c',
        //   opacity: 0
        // },
    },
  },
};
interface DateRangePickerProps {
  onChange: () => void;
  value: any;
  inputStyleRoot: object;
  dateFormat: string;
  startText: string;
  endText: string;
  disablePast: boolean;
  disableFuture: boolean;
  calenderIcon: React.ReactNode;
}

interface DateRangePickerProps {}
export default function SingleInputDateRangePicker(
  props: DateRangePickerProps
) {
  const {
    value,
    onChange,
    inputStyleRoot,
    dateFormat,
    disablePast,
    disableFuture,
    startText,
    endText,
    calenderIcon,
  } = props;

  const [startValues, setStartValue] = useState<any>(null);

  const handleStartDateChange = (date: any) => {
    setStartValue(date);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ ...styles.mainBox }}>
          <DateRangePicker
            sx={{ ...styles.inputStyleRoot, ...inputStyleRoot }}
            // value={value}
            format={dateFormat}
            disablePast={disablePast}
            disableFuture={disableFuture}
            onChange={onChange}
            // localeText={{ start: startText, end: endText }}
            slotProps={{
              textField: {
                InputProps: {
                  startAdornment: calenderIcon,
                  placeholder: 'Select a date',
                },
              },
              layout: {
                sx: {
                  [`.${pickersLayoutClasses.contentWrapper}`]: {
                    borderRadius: '8px',
                    border: '1px solid #665CD7',
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

SingleInputDateRangePicker.defaultProps = {
  onChange: () => {},
  value: '',
  inputStyleRoot: {},
  dateFormat: 'DD MMM YY',
  startText: 'CheckIn',
  endText: 'CheckOut',
  disablePast: false,
  disableFuture: false,
  calenderIcon: <CalendarIcon />,
};
