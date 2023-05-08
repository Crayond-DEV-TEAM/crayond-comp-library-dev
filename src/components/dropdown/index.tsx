import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { dropdown_style } from './style';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { DropDownProps } from './props';
export function Dropdown(props: DropDownProps) {
  const {
    rootStyle = {},
    value='',
    optionListStyle = {},
    selectOption = [],
    isError,
    placeholder = 'Select',
    onChange = () => {},
    className = '',
    helperText = '',
    label,
    labelVariant = 'standard',
    required = false,
    errorMessage,
    ...rest
  } = props;

  return (
    <>
      {labelVariant === 'standard' && (
        <InputLabel
          sx={dropdown_style.staticLabel}
          id="demo-simple-select-label"
        >
          {label} {required && <span>*</span>}
        </InputLabel>
      )}
      <FormControl sx={dropdown_style.formRoot} required fullWidth>
        {labelVariant !== 'standard' && (
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        )}
        <Select
          className={`${className}`}
          {...rest}
          sx={{ ...dropdown_style.rootSx, ...rootStyle }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={labelVariant === 'standard' ? '' : label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          fullWidth
          size="small"
          variant="outlined"
          error={isError}
          displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{
            sx: { ...dropdown_style.optionListSx, ...optionListStyle },
          }}
          IconComponent={ExpandMoreRoundedIcon}
        >
          <MenuItem value="">
           <em>{placeholder}</em>
            </MenuItem>
          {selectOption?.map((option: any) => (
            <MenuItem key={option?.value} disabled={option?.disabled ?? false} value={option?.value}>
              {option?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Field required Message */}
      {isError && (
        <Typography
          sx={{ mt: 0.5, mb: 0 }}
          variant="caption"
          color="error"
          component={'p'}
        >
          {errorMessage}
        </Typography>
      )}
      {helperText?.length > 0 && (
        <Typography sx={{ mt: 0.5 }} variant="caption">
          {helperText}
        </Typography>
      )}
    </>
  );
}
