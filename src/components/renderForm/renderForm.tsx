import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styles } from './styles';
import { MobileInput } from '../mobileInput';
import { InputField } from '../inputField';
import { DateAndTimePicker } from '../dateAndTimePicker';
import { renderFormProps } from './props';
import { Dropdown } from '../dropdown';
import { useForm, Controller } from 'react-hook-form';
import { BasicButtons } from '../button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SelectedChips from '../SelectedChips/selectedChips';

const getComponent = (
  component: any,
  edit: string | null,
  control: any,
  errors: any,
  setValue:any,
) => {
  console.log("🚀 ~ file: renderForm.tsx:19 ~ errors:", errors)
  const { inputProps } = component;
  // if (inputProps?.regexValidation) {
  //   if (inputProps?.regexValidation?.test(inputProps?.value)) {
  //     console.log('REGEX Validation true');
  //   }
  //   console.log(
  //     'Match ',
  //     inputProps?.value?.match(inputProps?.regexValidation)
  //   );

  //   // if ( inputProps?.value?.match(inputProps?.regexValidation)) {
  //   // }
  // }

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
        <Controller
          control={control}
          rules={inputProps?.rules}
          name={inputProps?.name}
          render={({ field: { onChange, onBlur, value } }: any) => (
            <InputField
              {...inputProps}
              onChange={(e) => {
                onChange(e);
                inputProps?.onChange(e);
              }}
              onBlur={(e) => {
                onBlur(e);
                inputProps?.onBlur(e);
              }}
              value={value}
              fullWidth
              required={inputProps?.rules?.required ?? inputProps?.required}
              error={inputProps?.error ?? errors?.[inputProps?.name] ? true : false}
              errorMessage={errors?.[inputProps?.name]?.message ?? inputProps?.errorMessage}
            />
          )}
        />
      );
    case 'date':
      return (
        <Controller
          control={control}
          rules={inputProps?.rules}
          name={inputProps?.name}
          render={({ field: { onChange, onBlur, value } }: any) => (
            <DateAndTimePicker
              {...inputProps}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              type="date"
              required={inputProps?.rules?.required ?? inputProps?.required}
              error={inputProps?.error ?? errors?.[inputProps?.name] ? true : false}
              errorMessage={errors?.[inputProps?.name]?.message ?? inputProps?.errorMessage}
            />
          )}
        />
      );
    case 'dateAndTime':
      return (
        <Controller
          control={control}
          rules={inputProps?.rules}
          name={inputProps?.name}
          render={({ field: { onChange, onBlur, value } }: any) => (
            <DateAndTimePicker
              {...inputProps}
              onBlur={onBlur}
              onChange={onChange}
              required={inputProps?.rules?.required ?? inputProps?.required}
              value={value}
              type="dateAndTime"
              error={inputProps?.error ?? errors?.[inputProps?.name] ? true : false}
              errorMessage={errors?.[inputProps?.name]?.message ?? inputProps?.errorMessage}
            />
          )}
        />
      );
    case 'dropDown':
      return (
        <Controller
          control={control}
          rules={inputProps?.rules}
          name={inputProps?.name}
          render={({ field: { onChange, onBlur, value } }: any) => (
            <Dropdown
              {...inputProps}
              onBlur={onBlur}
              onChange={onChange}
              required={inputProps?.rules?.required ?? inputProps?.required}
              value={value}
              error={inputProps?.error ?? errors?.[inputProps?.name] ? true : false}
              errorMessage={errors?.[inputProps?.name]?.message ?? inputProps?.errorMessage}
            />
          )}
        />
      );
      case 'chipSelect':
        return (
          <Controller
            control={control}
            rules={inputProps?.rules}
            name={inputProps?.name}
            render={({ field: { onChange, onBlur, value } }: any) => (
              <SelectedChips
                {...inputProps}
                onBlur={onBlur}
                onChange={onChange}
                required={inputProps?.rules?.required ?? inputProps?.required}
                value={value}
                error={inputProps?.error ?? errors?.[inputProps?.name] ? true : false}
                errorMessage={errors?.[inputProps?.name]?.message ?? inputProps?.errorMessage}
              />
            )}
          />
        );
      
      case 'mobileNumberInput':
      return (
        <Controller
          control={control}
          rules={inputProps?.rules}
          name={inputProps?.name}
          render={({ field: { onChange, onBlur, value } }: any) => (
            <MobileInput
              {...inputProps}
              onBlur={onBlur}
              onChange={onChange}
              required={inputProps?.rules?.required ?? inputProps?.required}
              value={value}
              error={inputProps?.error ?? errors?.[inputProps?.name]?.mobile?.message ? true : false}
              errorMessage={errors?.[inputProps?.name]?.mobile?.message ?? inputProps?.errorMessage}
            />
          )}
        />
      );
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
  const {
    formList,
    gridStyle,
    isEditMode,
    gridContainerProps,
    onSubmitFun,
    defaultValues,
    yupSchemaValidation,
  } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({resolver: yupSchemaValidation && yupResolver(yupSchemaValidation)});

  const onSubmit = (data: any) => {
    if (onSubmitFun) {
      onSubmitFun(data);
    }
  };

  React.useEffect(()=>{
    if(defaultValues){
      reset(defaultValues);
    }
  },[defaultValues])
  return (
    <Box sx={{ width: '100%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={gridStyle} spacing={1} {...gridContainerProps}>
          {formList?.map((form, index: number) => (
            <Grid
              item
              {...form?.breakPoint}
              sx={{ width: '100%' }}
              key={'form' + index + form?.type}
            >
              <Box sx={{ ...styles.inputContainer, ...form?.containerStyle }}>
                {isEditMode
                  ? getComponent(form, null, control, errors, setValue)
                  : getComponent(form, 'labelAndValue', '', '', '')}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box display={'flex'} justifyContent={'flex-end'} mt={3}>
          <BasicButtons variant="outlined" inLineStyles={styles.secondaryBtn}>
            Cancel
          </BasicButtons>
          <BasicButtons
            inLineStyles={styles.primaryBtn}
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {isEditMode ? 'Save' : 'Edit'}
          </BasicButtons>
        </Box>
      </form>
    </Box>
  );
}

RenderForm.defaultProps = {
  formList: [],
};
