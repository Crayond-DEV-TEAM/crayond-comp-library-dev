import { Box, Button, CheckboxProps, FormControl, Grid, Stack, Typography, Divider } from '@mui/material';
import { styles } from './style';
import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TreeViewProps } from './props';
import { BpCheckedIcon, BpIcon } from './checkboxComp';

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
    checkboxBorderRadius,
    checkboxTitleSx,
    leftSec,
    rightSec,
    dividerPropsSx,
    dataRow,
  } = props;

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
          <Grid item {...leftSec?.breakpoints}
            sx={styles?.borderRightSx}>
            <Box>
              <Typography sx={styles?.headTitle} noWrap pb={1}>{heading}</Typography>
            </Box>
          </Grid>
          <Grid item {...rightSec?.breakpoints}>
            <Stack direction='row' pb={1} alignItems='center' justifyContent='space-around'>
              {
                Object.keys(dataRow?.[0]?.permission)?.map((val: string, i: number) => {
                  return (
                    <Typography sx={{ ...styles?.headItems, ...permissionHeadingSx }} key={i}>
                      {val}</Typography>
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
              <Grid item {...leftSec?.breakpoints} xs={4} sm={4} md={6} lg={8}>
                <Stack direction='row' alignItems='center' justifyContent={'space-between'}>
                  <Box >
                    <Typography sx={{ ...styles.titleSx, ...checkboxTitleSx }}>{e?.title}</Typography>
                  </Box>
                  <Divider orientation='vertical' sx={{ ...styles.dividerSx, ...dividerPropsSx }} />
                </Stack>
              </Grid>
              <Grid item {...rightSec?.breakpoints} xs={8} sm={8} md={6} lg={4}>
                <Stack direction='row' alignItems='center' justifyContent='space-around'>
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
      title: '',
      permission: {
      }
    },
  ],
  heading: '',
  submitBtnText: '',
  submitBtnOptions: {},
  rightSec: {},
  leftSec: {},
  dividerPropsSx: {}
};