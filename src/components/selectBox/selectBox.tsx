import { Avatar, Box, Grid, Icon, Typography, CheckboxProps, Checkbox, InputAdornment } from '@mui/material';
import { SelectBoxProps } from './props';
import { styles } from './style';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import useAutocomplete from '@mui/material/useAutocomplete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BpCheckedIcon, BpIcon } from './checkboxComp';
import NorthIcon from '@mui/icons-material/North';
import SearchIcon from '@mui/icons-material/Search';

const Root = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
  font-size: 14px;
`,
);

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(
  ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #665CD7;
  }

  &.focused {
    border-color: #665CD7;
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);


function Tag(props: any) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span style={{
        color: '#929292',
      }}>{label}</span>
      {/* <CloseIcon onClick={onDelete} /> */}
    </div>
  );
}

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#E9E9E9'
    };
  border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: '#665CD7'
    background-color: '#e6f7ff'
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const CheckableBox = styled('ul')(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & div {
    padding: 5px 12px;
    display: flex;
    cursor: pointer;
    & span {
    
    }
    & svg {
      color: transparent;
    }
  }

  & div[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & div.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);


export default function SelectBox(props: SelectBoxProps) {
  const {
    data,
    CheckableData,
    rootStyleSx,
    checkboxIcon,
    uncheckedIcon,
    handleCheckedItem,
    checkboxWidth,
    checkboxHeight,
    defaultData,
    checkBoxData,
    handleDefaultSelectChange,
    checkboxBorderRadius,
    multi,
    handleChange,
    groupingProps = {
      isCloseIcon: false,
      isSearch: true,
      handleChange: () => null,
      groupedData: [],
      arrData: [],
      dropdown: {
        minHeight: '',
        maxHeight: '',
        minWidth: '',
        maxWidth: '',
        backgroundColor: '',
        color: ''
      },
      input: {
        minHeight: '',
        minWidth: '',
        maxWidth: '',
        maxHeight: '',
        backgroundColor: '',
        color: '',
        border: '',
        borderRadius: ''
      }
    },
    limitTags,
  } = props;

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,

    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    // defaultValue: [data[1]],
    multiple: true,
    options: checkBoxData,
    getOptionLabel: (option) => option?.title,
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

  const GroupItems = styled('ul')({
    color: '#666666',
    fontWeight: '500',
    fontSize: '15px',
    padding: '8px 0',

    '& li:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: ''
    },
  });

  const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: '#BDBDBD',
    fontWeight: '500',
    fontSize: '15px',
    zIndex: '9999',
    background: '#fff'
  }));


  const renderDropdown = (key: string) => {

    console.log(groupingProps?.groupedData, 'groupingProps?.isCloseIcon');

    switch (key) {
      case 'grouping':
        return (
          <Autocomplete
            id="grouped-demo"
            options={groupingProps?.arrData}
            limitTags={limitTags}
            value={groupingProps?.groupedData}
            multiple={multi}
            groupBy={(option: CheckedOption) => option.title}
            getOptionLabel={(option: CheckedOption) => option.title}
            onChange={(event, newValue) =>
              groupingProps?.handleChange('grouped', event, newValue)}
            sx={{
              height: '100%',
              minWidth: groupingProps?.input?.minWidth ? groupingProps?.input?.minWidth : '400px',
              maxWidth: groupingProps?.input?.maxWidth ? groupingProps?.input?.maxWidth : '400px',
              '& .MuiAutocomplete-inputRoot': {
                height: 'auto',
                minHeight:
                  groupingProps?.input?.minHeight ? groupingProps?.input?.minHeight : '45px',
                maxHeight:
                  groupingProps?.input?.maxHeight ? groupingProps?.input?.maxHeight : '45px',
                overflow: 'hidden',
                paddingTop: '0px',
                paddingRight: '12px !important',
                paddingBottom: '0px',
                '& input': {
                  padding: '0 !important'
                },
                '& .MuiAutocomplete-endAdornment': {
                  '& button': {
                    display: groupingProps?.isCloseIcon ? 'flex' : 'none'
                  }
                },
                '& fieldset': {
                  border:
                    groupingProps?.input?.border ? groupingProps?.input?.border : '1px solid rgba(0, 0, 0, 0.23)',
                  borderRadius: groupingProps?.input?.borderRadius ? groupingProps?.input?.borderRadius : '4px'
                }
              }
            }
            }
            renderInput={(params) =>
              <>
                {/* <div style={{ marginBottom: "-24px",width:"30px" }}>
                  {groupingProps?.isSearch ? <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment> : null}
                </div> */}
                <TextField
                  label={value?.length > 0 ? '' : 'Select Option'}
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      groupingProps?.isSearch ? <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment> : null
                    ),
                  }}
                />
              </>
            }
            renderTags={(value: any) =>
              value?.map((option: any) => (
                // eslint-disable-next-line react/jsx-key
                <Typography sx={styles?.checkboxTextSx}>{`${option.title} ,`}</Typography>
              ))
            }
            componentsProps={{
              popper: {
                style: {
                  minWidth:
                    groupingProps?.dropdown?.minWidth ? groupingProps?.dropdown?.minWidth : '400px',
                  maxWidth:
                    groupingProps?.dropdown?.maxWidth ? groupingProps?.dropdown?.maxWidth : '400px',
                  maxHeight:
                    groupingProps?.dropdown?.maxHeight ? groupingProps?.dropdown?.maxHeight : '100px',
                  minHeight:
                    groupingProps?.dropdown?.minHeight ? groupingProps?.dropdown?.minHeight : '100px',
                },
              },
              popupIndicator: {
                style: {
                  fontSize: '3px',
                },
              }
            }}
            renderGroup={(params) => (
              <li key={params.key}>
                <GroupHeader>{params.group}</GroupHeader>
                <GroupItems>{params.children}</GroupItems>
              </li>
            )}
          />
        )
      case 'checkbox':
        return (
          <>
            <Root>
              <div {...getRootProps()}>
                {/* <Label {...getInputLabelProps()}>Customized hook</Label> */}
                <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                  {CheckableData?.map((option: CheckedOption, index: number) => (
                    <Typography key={index} sx={styles?.checkboxTextSx}>{`${option?.title} ,`}</Typography>
                  ))}
                  <input {...getInputProps()}
                    placeholder={CheckableData?.length > 0 ? '' : 'Select Option'}
                    style={{ color: 'green' }} />
                </InputWrapper>
              </div>
              {groupedOptions.length > 0 ? (
                <CheckableBox {...getListboxProps()}>
                  {(groupedOptions as typeof checkBoxData)?.map((option: CheckedOption, index: number) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Stack direction={'row'} alignItems={'center'}
                        onClick={() => handleCheckedItem(option, index)}>
                        <BpCheckbox
                          checked={option?.isChecked}
                          defaultChecked={false}
                          sx={{
                            '& span': {
                              backgroundColor:
                                option?.isChecked === CheckableData.includes(option?.isChecked) ? '' : '#665CD7'
                            }
                          }}
                          onChange={() => handleChange(option, index)}
                        />
                        <p key={index}
                          style={{
                            margin: '6px'
                          }}
                          {...getOptionProps({ option, index })} >
                          <span style={{
                            color:
                              option?.isChecked !== CheckableData.includes(option?.isChecked) ? '#665CD7' : '#666666'
                          }}>{option?.title}</span>
                        </p>
                      </Stack>
                    )
                  })}
                </CheckableBox>
              ) : null}
            </Root >
          </>
        )
      case 'chip':
        return (

          <Autocomplete
            id="free-solo"
            limitTags={2}
            onChange={(event, newValue) => {
              handleDefaultSelectChange(event, newValue)
            }}
            selectOnFocus={true}
            multiple={multi}
            sx={{
              height: '100%',
              width: '300px',
              '& .MuiAutocomplete-inputRoot': {
                height: 'auto',
                minHeight: '45px',
                overflow: 'hidden',
                paddingTop: '0px',
                paddingRight: '12px !important',
                paddingBottom: '0px',
                '& input': {
                  padding: '0 !important'
                }
              }
            }}
            options={data}
            value={defaultData}
            placeholder={defaultData?.length > 0 ? 'select Option' : ''}
            getOptionLabel={(option) => option.title
            }
            renderInput={(params) =>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <TextField
                  {...params}
                  label=""
                />
                <Box>
                  <KeyboardArrowDownIcon />
                </Box>
              </Stack>}
            renderTags={(value: any, getTagProps) =>
              value?.map((option: any, index: number) => (
                // eslint-disable-next-line react/jsx-key
                <Chip
                  sx={{
                    background: ' #E9E9E9',
                    borderRadius: '6px',
                    margin: '5px !important',
                    border: 0,
                    '& span': {
                      color: '#929292'
                    },
                    '& svg': {
                      display: 'none'
                    }
                  }
                  }
                  variant="outlined"
                  label={option?.title}
                  {...getTagProps({ index })}
                />
              ))
            }
          // renderOption={(props, option) => (
          //   <li {...props}>
          //     {option?.title}
          //   </li>
          // )}
          />

        )

      case 'default':
        return (
          <Autocomplete
            id="free-solo-demo"
            sx={{
              height: '100%',
              width: '300px',
              '& .MuiAutocomplete-inputRoot': {
                minHeight: '45px',
                overflow: 'hidden',
                paddingTop: '0px',
                paddingRight: '12px !important',
                paddingBottom: '0px',
                '& input': {
                  padding: '0 !important'
                }
              }
            }}
            options={data}
            getOptionLabel={(option) => option.title}
            multiple={multi}
            renderInput={(params) => <TextField {...params}
              sx={styles?.defaultInputSx} label="" />}
            renderTags={(value: any) =>
              value?.map((option: any) => (
                // eslint-disable-next-line react/jsx-key
                <Typography sx={styles?.checkboxTextSx}>{`${option.title}, `}</Typography>
              ))
            }
          />
        )
      default:
        return
        break
    }

  }

  return (
    <Box sx={{ ...styles?.rootSx, ...rootStyleSx }}>
      {/* header */}
      <Label {...getInputLabelProps()}>Customized hook</Label>
      <Stack direction={'row'}>
        {renderDropdown('default')}
        {/* {renderDropdown('chip')} */}
        {/* {renderDropdown('checkbox')} */}
        {/* {renderDropdown('grouping')} */}
      </Stack>
    </Box >
  );
}

SelectBox.defaultProps = {

};

interface FilmOptionType {
  title: string;
  year: number;
}

interface CheckedOption {
  title: string;
  isChecked: boolean;
}