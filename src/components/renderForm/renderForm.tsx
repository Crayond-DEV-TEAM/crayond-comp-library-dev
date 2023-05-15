import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styles } from './styles';
import { MobileInput } from '../mobileInput';
import { InputField } from '../inputField';
import { DateAndTimePicker } from '../dateAndTimePicker';
import { renderFormProps } from './props';
import { Dropdown } from '../dropdown';

const getComponent = (component: any, edit: string | null) => {
  const { inputProps } = component;
  switch (edit ? 'labelAndValue' : component?.type) {
    case 'heading':
      return (
        <Typography
          sx={{ ...styles.heading, ...inputProps.sx }}
          component={'h2'}
        >
          {inputProps?.value}
        </Typography>
      );
    case 'input':
      return (
        <InputField
          endIcon={null}
          rowMax={0}
          rowMin={0}
          isError={''}
          disabled={false}
          isMulti={false}
          fullWidth={true}
          isReadOnly={false}
          helperText={''}
          placeholder={''}
          errorMessage={''}
          endAdornment={<></>}
          defaultValue={{}}
          textFieldStyle={{}}
          {...inputProps}
        />
      );
    case 'date':
      return <DateAndTimePicker type="date" {...inputProps} />;
    case 'dateAndTime':
      return <DateAndTimePicker type="dateAndTime" {...inputProps} />;
    case 'dropDown':
      return <Dropdown {...inputProps} />;
    case 'mobileNumberInput':
      return <MobileInput {...inputProps} />;
    case 'custom':
       return component?.component;

    case 'labelAndValue':
      return (
        <>
          {/* <Typography sx={styles?.viewLabel}>{inputProps?.label}</Typography>
          // <Typography sx={styles?.viewValue}>{inputProps?.value}</Typography> */}
        </>
      );
    default:
      return <></>;
  }
};
export default function RenderForm(props: renderFormProps) {
  const { formList, gridStyle, isEditMode, gridContainerProps } = props;
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container sx={gridStyle} spacing={1} {...gridContainerProps} >
        {formList?.map((form, index: number) => (
          <Grid
            item
            {...form?.breakPoint}
            sx={{ width: '100%' }}
            key={'form' + index + form?.type}
          >
            <Box sx={{ ...styles.inputContainer, ...form?.containerStyle }}>
              {isEditMode
                ? getComponent(form, null)
                : getComponent(form, 'labelAndValue')}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

RenderForm.defaultProps = {
  formList: [],
};
