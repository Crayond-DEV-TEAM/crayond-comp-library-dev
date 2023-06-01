import { Box, Button, CheckboxProps, FormControl, Grid, Stack, Typography } from '@mui/material';
import { styles } from './style';
import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TreeViewProps } from './props';
import { boolean, string } from 'yup';

export default function TreeView(props: TreeViewProps) {
  const {
    rootStyle,
    formControlPropsSx,
    onSubmit,
    heading,
    permissionHeadingSx,
    submitBtnText,
    submitBtnOptions,
    handleChange,
    checkboxIcon,
    uncheckedIcon,
    checkboxWidth,
    checkboxHeight,
    checkboxBgColor,
    checkboxBorderRadius,
    checkboxTitleSx,
    dataRow
  } = props;

  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: checkboxBgColor ?? '#818181',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: checkboxWidth ?? 16,
      height: checkboxHeight ?? 16,
      backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#151414',
    },
  });


  function BpCheckbox(props: CheckboxProps) {
    return (
      <Checkbox
        sx={{
          '&:hover': { bgcolor: 'transparent' },
          '& svg': {
            width: checkboxWidth ?? '1rem',
            height: checkboxHeight ?? '1rem',
            borderRadius: checkboxBorderRadius ?? '3px'
          }
        }}
        disableRipple

        color="default"
        checkedIcon={checkboxIcon ?? <BpCheckedIcon />}
        icon={uncheckedIcon ?? <BpIcon />}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...props}
      />
    );
  }

  const CustomButton = styled(Button)(() => ({
    color: submitBtnOptions?.textColor,
    backgroundColor: submitBtnOptions?.bgColor,
    '&:hover': {
      backgroundColor: 'purple',
    },
  }));

  return (
    <Box sx={{ ...styles.rootSx, ...rootStyle }}>
      {
        < Grid container sx={styles?.entireContainerSx}>
          <Grid item xs={4} sm={4} md={6} lg={8} sx={styles?.borderSx}>
            <Box>
              <Typography sx={styles?.headTitle} noWrap pb={1}>{heading}</Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={6} lg={4}>
            <Stack direction='row' pb={1} alignItems='center' justifyContent='space-around'>
              {
                Object.keys(dataRow?.[0]?.permission)?.map((val: string, i: number) => {
                  return (
                    <Typography sx={{ ...styles?.headItems, ...permissionHeadingSx }} key={i}>{val}</Typography>
                  )
                })
              }
            </Stack>
          </Grid>
        </Grid>
      }
      {
        dataRow?.map((e: any, parentIndex: number) => {
          return (
            < Grid container key={parentIndex} sx={styles?.containerSx}>
              <Grid item xs={4} sm={4} md={6} lg={8} py={'17px'} sx={styles?.borderSx}>
                <Box >
                  <Typography sx={{ ...styles.titleSx, ...checkboxTitleSx }}>{e?.title}</Typography>
                </Box>
              </Grid>
              <Grid item xs={8} sm={8} md={6} lg={4}>
                <Stack direction='row' alignItems='center' justifyContent='space-around'
                >
                  {
                    Object.keys(dataRow?.[0]?.permission)?.map((val: string, i: number) => {
                      return (
                        <FormControl key={i} sx={{ ...styles?.formControl, ...formControlPropsSx }}>
                          <BpCheckbox
                            checked={e?.permission?.[val]}
                            defaultChecked={true}
                            onChange={(event: any) => handleChange(event, val, parentIndex)} />
                        </FormControl>
                      )
                    })
                  }
                </Stack>
              </Grid>
            </Grid>
          )
        })
      }
      <Box sx={styles?.btnSx}>
        <CustomButton
          variant={submitBtnOptions?.variant}
          onClick={() => onSubmit()}>{submitBtnText}</CustomButton>
      </Box>
    </Box >
  );
}
TreeView.defaultProps = {
  handleChange: () => null,
  checkboxBgImage: '',
  checkboxTitleSx: {},
  rootStyle: {},
  formControlPropsSx: {},
  permissionHeadingSx: {},
  onSubmit: () => null,
  dataRow: [
    {
      title: string,
      permission: {
        create: boolean,
        update: boolean,
        read: boolean,
        delete: boolean,
      }
    },
  ],
  heading: '',
  submitBtnText: '',
  submitBtnOptions: {}
};