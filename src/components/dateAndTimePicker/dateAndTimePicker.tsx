import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateAndTimePickerProps } from './props';
import { styles } from './styles';
import { Typography } from '@mui/material';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';

export default function DateAndTimePicker(props: DateAndTimePickerProps) {
  const {
    labelVariant,
    label,
    type,
    required,
    errorMessage,
    helperText,
    error,
    value,
    onChange,
  } = props;
  return (
    <Box sx={styles.root}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {labelVariant === 'standard' && (
          <InputLabel sx={styles.label} id="date-label">
            {label} {required && <span>*</span>}
          </InputLabel>
        )}
        {type === 'dateAndTime' ? (
          <DateTimePicker
            sx={styles.datePicker}
            {...props}
            label={labelVariant === 'standard' ? '' : label}
            onChange={(newValue) => onChange(newValue)}
          />
        ) : (
          <DatePicker
            sx={{
              ...styles.datePicker,
              '& fieldset': {
                border: `1px solid ${error ? '#FF4D4A' : '#E9E9E9'}`,
              },
            }}
            {...props}
            onChange={(newValue) => onChange(newValue)}
            // defaultValue={dayjs(new Date(value ?? ""))}
            value={value ? dayjs(new Date(value)) : null}
            label={labelVariant === 'standard' ? null : label}
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
  value: null
};
