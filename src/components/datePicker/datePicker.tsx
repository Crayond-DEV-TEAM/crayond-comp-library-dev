import Box from '@mui/material/Box';
import { DatePicker, pickersLayoutClasses } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import CalendarIcon from '../../assets/calendarIcon';
import { styles } from './styles';
interface SingleDatePickerProps {
  label: string;
  onChange: () => void;
  value: any;
  inputStyleRoot:object;
  dateFormat:string;
  disablePast:boolean;
}

const SingleDatePicker = (props: SingleDatePickerProps) => {
  const { value, onChange ,inputStyleRoot,dateFormat,disablePast} = props;
  const [values, setValue] = useState<any>(null);

  const handleDateChange = (date: any) => {
    setValue(date);
  };

  return (
    <>
      <Box sx={styles.root}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{...styles.inputStyleRoot,...inputStyleRoot}}
            value={values}
            format={'DD MMM YY'}
            disablePast={disablePast}            
            views={['year', 'month', 'day']}
            onChange={handleDateChange}
            components={{
              OpenPickerIcon: CalendarIcon,
            }}
            disableFuture={true}
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
};
export default SingleDatePicker;

