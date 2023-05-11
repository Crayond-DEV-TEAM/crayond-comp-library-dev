import * as React from 'react';
import { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers';
import { DateAndTimePickerProps } from './props';
import { styles } from './styles';
import { Typography } from '@mui/material';

export default function DateAndTimePicker(props: DateAndTimePickerProps) {
  const {
    labelVariant,
    label,
    type,
    required,
    errorMessage,
    helperText,
    error,
  } = props;
  return (
    <Box sx={styles.root}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {labelVariant === 'standard' && (
          <InputLabel sx={styles.label} id="date-label">
            {label}{' '}
            {required && (
              <Typography component={'span'} sx={{ color: '#FF4D4A' }}>
                {'*'}
              </Typography>
            )}
          </InputLabel>
        )}
        {type === 'dateAndTime' ? (
          <DateTimePicker
            sx={styles.datePicker}
            {...props}
            label={labelVariant === 'standard' ? '' : label}
          />
        ) : (
          <DatePicker
            sx={{
              ...styles.datePicker,
              '& fieldset': {
                border: `1px solid ${error ? 'red' : ''}`,
              },
            }}
            {...props}
            label={labelVariant === 'standard' ? null : label}
            // openTo="month"
            // format={'MM/DD/YYYY hh:mm:ss'}
            // // maxDate
            // // minDate
            // // onChange={}
            // // disabled
            // views={['year', 'month', 'day']}
            // views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
            // label={''}
          />
        )}
        <Typography
          sx={{ mt: 0.5, mb: 0 }}
          variant="caption"
          color="error"
          component={'p'}
        >
          {error && errorMessage}&nbsp;
        </Typography>

        {helperText?.length > 0 && (
          <Typography sx={{ mt: 0.5 }} variant="caption">
            {helperText}
          </Typography>
        )}
      </LocalizationProvider>
    </Box>
  );
}

DateAndTimePicker.defaultProps = {
  label: 'My Label',
  labelVariant: 'standard',
  type: 'date',
};
