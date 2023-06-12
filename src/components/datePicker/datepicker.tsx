import Box from '@mui/material/Box';
import { DatePicker, pickersLayoutClasses } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import CalendarIcon from '../../assets/calendarIcon';
import { styles } from './style';


interface SingleDatePickerProps {
  label: string;
  onChange: () => void;
  value: any;
  inputStyleRoot: object;
  dateFormat: string;
  disablePast: boolean;
  disableFuture: boolean;
  OpenPickerIcon: React.ReactNode;
  iconPosition:'left'|'right',
}

const SingleDatePicker = (props: SingleDatePickerProps) => {
  const {
    value,
    onChange,
    inputStyleRoot,
    dateFormat,
    disablePast,
    disableFuture,
    OpenPickerIcon,
    iconPosition,
  } = props;
  const [values, setValue] = useState<any>(null);

  const handleDateChange = (date: any) => {
    setValue(date);
  };

  return (
    <>
      <Box sx={styles.root}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
              ...styles.inputStyleRoot,
              ...inputStyleRoot,
              '& .MuiOutlinedInput-root': {
                flexDirection: iconPosition ==="left" ?'row-reverse':"",
              },
            }}
            value={values}
            format={'DD MMM YY'}
            disablePast={disablePast}
            views={['year', 'month', 'day']}
            onChange={handleDateChange}
            components={{
              OpenPickerIcon: CalendarIcon,
            }}
            disableFuture={disableFuture}
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
        </LocalizationProvider>
      </Box>
    </>
  );
};
SingleDatePicker.defaultProps = {
  label: 'Date Picker',
  onChange: () => {},
  value: '',
  inputStyleRoot: {},
  dateFormat: 'YYYY MMM DD',
  disablePast: false,
  disableFuture: false,
//   OpenPickerIcon: CalendarIcon,
  iconPosition:'left',
};
export default SingleDatePicker;
