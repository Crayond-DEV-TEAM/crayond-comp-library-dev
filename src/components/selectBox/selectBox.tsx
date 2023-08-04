import { Box, Typography, Checkbox, InputAdornment, Stack } from '@mui/material';
import { SelectBoxProps } from './props';
import { styles } from './style';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SelectBox = (props: SelectBoxProps) => {
  const {
    SelectDropdownSx,
    multiple,
    groupingProps = {
      isCloseIcon: false,
      isSearch: true,
      handleGroupChange: () => null,
      groupedData: [],
      arrData: [],
      defaultValue: [],
      label: '',
      islabel: false,
      labelPropsSx: {},
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
        borderRadius: '',
        startEndornment: '',
        endEndornment: '',
        isStartIcon: false,
        inputPropsSx: {
          fontWeight: ''
        },
      }
    },
    defaultProps = {
      isCloseIcon: false,
      isSearch: true,
      handleDefaultChange: () => null,
      defaultData: [],
      defaultValue: [],
      label: '',
      islabel: false,
      labelPropsSx: {},
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
        borderRadius: '',
        startEndornment: '',
        endEndornment: '',
        isStartIcon: false,
        inputPropsSx: {
          fontWeight: ''
        },
      }
    },
    chipProps = {
      isCloseIcon: false,
      isSearch: true,
      handleChipChange: () => null,
      chipData: [],
      defaultValue: [],
      label: '',
      islabel: false,
      labelPropsSx: {},
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
        borderRadius: '',
        startEndornment: '',
        endEndornment: '',
        isStartIcon: false,
        inputPropsSx: {
          fontWeight: ''
        },
      }
    },
    checkboxProps = {
      isCloseIcon: false,
      isSearch: true,
      handleCheckedItem: () => null,
      CheckableData: [],
      defaultValue: [],
      arrData: [],
      label: '',
      islabel: false,
      labelPropsSx: {},
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
        borderRadius: '',
        inputPropsSx: {
          fontWeight: ''
        },
        startEndornment: '',
        endEndornment: '',
        isStartIcon: false,
      }
    },
    limitTags,
    selectType,
  } = props;

  const [hovered, setHovered] = React.useState('');

  const handleOptionMouseEnter = (option: string | number) => {
    setHovered(option as string);
  };

  const handleOptionMouseLeave = () => {
    setHovered('');
  };

  const GroupItems = styled('ul')({
    color: '#666666',
    fontWeight: '500',
    fontSize: '15px',
    padding: '8px 0',

    '& li:hover': {
      backgroundColor: 'trans !important',
      cursor: 'pointer',
      color: ''
    },
    '& li:focus': {
      backgroundColor: 'red !important',
      cursor: 'pointer',
      color: ''
    }
  });

  const GroupHeader = styled('div')(() => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: '#BDBDBD',
    fontWeight: '500',
    fontSize: '15px',
    zIndex: '9999',
    background: '#fff'
  }));

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const renderDropdown = (key: string) => {
    switch (key) {
      case 'grouping':
        return (
          <Box>
            {
              groupingProps?.islabel && <Typography sx={{ ...styles?.labelStyle, ...groupingProps?.labelPropsSx }} >{groupingProps?.label}</Typography>
            }
            <Autocomplete
              // id="grouped-demo"
              options={groupingProps?.arrData || []}
              defaultValue={groupingProps?.defaultValue}
              limitTags={limitTags}
              value={Array.isArray(groupingProps?.groupedData) ?
                groupingProps?.groupedData?.length > 0 ?
                  groupingProps?.groupedData : multiple ? [] : null :
                (groupingProps?.groupedData ?? null)
              }
              multiple={multiple}
              groupBy={(option: FilmOptionType) => option.title as string}
              getOptionLabel={(option: FilmOptionType) => option.title as string}
              onChange={(event, newValue) => {
                return groupingProps?.handleGroupChange && groupingProps?.handleGroupChange(event, newValue as FilmOptionType)
              }}
              sx={{
                height: '100%',
                minWidth: groupingProps?.input?.minWidth ? groupingProps?.input?.minWidth : '400px',
                maxWidth: groupingProps?.input?.maxWidth ? groupingProps?.input?.maxWidth : '400px',
                '& .MuiAutocomplete-inputRoot': {
                  height: 'auto',
                  minHeight:
                    groupingProps?.input?.minHeight ? groupingProps?.input?.minHeight : '45px',
                  maxHeight:
                    groupingProps?.input?.maxHeight ? groupingProps?.input?.maxHeight : 'auto',
                  overflow: 'hidden',
                  paddingTop: '0px',
                  paddingRight: '12px !important',
                  paddingBottom: '0px',
                  '& input': {
                    ...{
                      padding: '0 !important',

                    },
                    ...groupingProps?.input?.inputPropsSx
                  },
                  '& .MuiAutocomplete-endAdornment': {
                    '& button': {
                      display: groupingProps?.isCloseIcon ? 'flex' : 'none'
                    }
                  },
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }
              }
              renderInput={(params) =>
                <Stack direction={'row'} alignItems={'center'} sx={{
                  border:
                    groupingProps?.input?.border ? groupingProps?.input?.border : '1px solid rgba(0, 0, 0, 0.23)',
                  borderRadius: groupingProps?.input?.borderRadius ? groupingProps?.input?.borderRadius : '4px',
                  minHeight:
                    groupingProps?.input?.minHeight ? groupingProps?.input?.minHeight : '45px',
                  maxHeight:
                    groupingProps?.input?.maxHeight ? groupingProps?.input?.maxHeight : 'auto',
                  height: 'auto',
                  minWidth: groupingProps?.input?.minWidth ? groupingProps?.input?.minWidth : '400px',
                  maxWidth: groupingProps?.input?.maxWidth ? groupingProps?.input?.maxWidth : '400px',
                  margin: '0 !important',
                  background: groupingProps?.input?.backgroundColor ? groupingProps?.input?.backgroundColor : '#fff'
                }}>
                  {
                    groupingProps?.input?.isStartIcon && <Box sx={{ ...styles?.startIcon }} {...params}>
                      {
                        groupingProps?.input?.startEndornment ? groupingProps?.input?.startEndornment : <SearchIcon />
                      }
                    </Box>
                  }
                  <TextField
                    placeholder='Select Option'
                    {...params}
                    InputLabelProps={{
                      style: {
                        // marginTop: '-5px'
                      }
                    }}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        groupingProps?.isSearch ? (groupingProps?.groupedData?.length || 0 > 0 ? null : <InputAdornment position="start">
                          {groupingProps?.input?.endEndornment ? groupingProps?.input?.endEndornment : <KeyboardArrowDownIcon />}
                        </InputAdornment>) : null
                      ),
                    }}
                  />
                </Stack>
              }
              renderTags={() =>
                groupingProps?.groupedData?.map((option, index) => (
                  <Typography key={index} sx={styles?.checkboxTextSx}>
                    {`${option.title}
                   ${groupingProps?.groupedData && groupingProps?.groupedData?.length - 1 === index ? '' : ','}`}
                  </Typography>
                ))
              }
              componentsProps={{
                popper: {
                  placement: 'bottom-end',
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
              }}
              renderGroup={(params) => (
                <li key={params.key}>
                  <GroupHeader>{params.group}</GroupHeader>
                  <GroupItems>{params.children}</GroupItems>
                </li>
              )}
            />
          </Box>
        )
      case 'checkbox':
        { console.log(checkboxProps?.CheckableData) }
        return (
          <Box>
            {
              checkboxProps?.islabel && <Typography sx={{ ...styles?.labelStyle, ...checkboxProps?.labelPropsSx }} >{checkboxProps?.label}</Typography>
            }
            <Autocomplete
              multiple={multiple}
              limitTags={limitTags}
              defaultValue={checkboxProps?.defaultValue}
              componentsProps={{
                popper: {
                  placement: 'bottom-end',
                  style: {
                    minWidth:
                      checkboxProps?.dropdown?.minWidth ? checkboxProps?.dropdown?.minWidth : '400px',
                    maxWidth:
                      checkboxProps?.dropdown?.maxWidth ? checkboxProps?.dropdown?.maxWidth : '400px',
                    maxHeight:
                      checkboxProps?.dropdown?.maxHeight ? checkboxProps?.dropdown?.maxHeight : '100px',
                    minHeight:
                      checkboxProps?.dropdown?.minHeight ? checkboxProps?.dropdown?.minHeight : '100px',
                  },
                },
              }}
              sx={{
                height: '100%',
                minWidth: checkboxProps?.input?.minWidth ? checkboxProps?.input?.minWidth : '400px',
                maxWidth: checkboxProps?.input?.maxWidth ? checkboxProps?.input?.maxWidth : '400px',
                '& .MuiAutocomplete-inputRoot': {
                  height: 'auto',
                  minHeight:
                    checkboxProps?.input?.minHeight ? checkboxProps?.input?.minHeight : '45px',
                  maxHeight:
                    checkboxProps?.input?.maxHeight ? checkboxProps?.input?.maxHeight : 'auto',
                  overflow: 'hidden',
                  padding: '6px 12px 6px 10px !important',
                  '& input': {
                    ...{
                      padding: '0 !important',

                    },
                    ...checkboxProps?.input?.inputPropsSx
                  },
                  '& span': {
                    margin: '3px 6px 3px 3px'
                  },
                  '& .MuiAutocomplete-endAdornment': {
                    '& button': {
                      display: checkboxProps?.isCloseIcon ? 'flex' : 'none'
                    }
                  },
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }
              }
              options={checkboxProps?.arrData || []}
              value={
                Array.isArray(checkboxProps?.CheckableData) ?
                  checkboxProps?.CheckableData?.length > 0 ?
                    checkboxProps?.CheckableData : multiple ? [] : null :
                  (checkboxProps?.CheckableData ?? null) || ' '}
              onChange={(event, newValue) => {
                checkboxProps?.handleCheckedItem && checkboxProps?.handleCheckedItem(event, newValue as CheckedOption[])
              }}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderTags={() =>
                checkboxProps?.CheckableData?.map((option: CheckedOption, index: number) => (
                  <Typography key={index} sx={styles?.checkboxTextSx} >
                    {`${option.title} ${checkboxProps?.CheckableData && checkboxProps?.CheckableData?.length - 1 === index ? '' : ','} `}</Typography>
                ))
              }
              renderOption={(props, option, { selected }) => {
                return (
                  <li {...props} >
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option?.title}
                  </li>
                )
              }}
              style={{ width: 500 }}
              renderInput={(params) => (
                <Stack direction={'row'} alignItems={'center'} sx={{
                  border:
                    checkboxProps?.input?.border ? checkboxProps?.input?.border : '1px solid rgba(0, 0, 0, 0.23)',
                  borderRadius: checkboxProps?.input?.borderRadius ? checkboxProps?.input?.borderRadius : '4px',
                  minHeight:
                    checkboxProps?.input?.minHeight ? checkboxProps?.input?.minHeight : '45px',
                  maxHeight:
                    checkboxProps?.input?.maxHeight ? checkboxProps?.input?.maxHeight : 'auto',
                  height: 'auto',
                  minWidth: checkboxProps?.input?.minWidth ? checkboxProps?.input?.minWidth : '400px',
                  maxWidth: checkboxProps?.input?.maxWidth ? checkboxProps?.input?.maxWidth : '400px',
                  margin: '0 !important',
                  background: checkboxProps?.input?.backgroundColor ? checkboxProps?.input?.backgroundColor : '#fff'

                }}>
                  {
                    checkboxProps?.input?.isStartIcon && <Box sx={{ ...styles?.startIcon }} {...params}>
                      {
                        checkboxProps?.input?.startEndornment ? checkboxProps?.input?.startEndornment : <SearchIcon />
                      }
                    </Box>
                  }
                  < TextField {...params}
                    InputLabelProps={{
                      style: {
                        display: checkboxProps?.CheckableData?.length || 0 > 0 ? 'block' : 'auto',
                        marginTop: '-4px'
                      },
                    }}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        checkboxProps?.isSearch ? (checkboxProps?.CheckableData?.length || 0 > 0 ? null : <InputAdornment position="start">
                          {checkboxProps?.input?.endEndornment ?
                            checkboxProps?.input?.endEndornment : <KeyboardArrowDownIcon />}
                        </InputAdornment>) : null
                      ),
                    }}
                    placeholder={'Select Option'}
                  />
                </Stack>
              )}
            />
          </Box>
        )
      case 'chip':
        return (
          <Box>
            {
              chipProps?.islabel && <Typography sx={{ ...styles?.labelStyle, ...chipProps?.labelPropsSx }} >{chipProps?.label}</Typography>
            }
            <Autocomplete
              // id="controllable-states-demo"
              limitTags={limitTags}
              defaultValue={chipProps?.defaultValue}
              onChange={(event, newValue) => {
                return chipProps?.handleChipChange && chipProps?.handleChipChange(event, newValue as FilmOptionType);
              }}
              selectOnFocus={true}
              multiple={multiple}
              componentsProps={{
                popper: {
                  placement: 'bottom-end',
                  style: {
                    minWidth:
                      chipProps?.dropdown?.minWidth ? chipProps?.dropdown?.minWidth : '400px',
                    maxWidth:
                      chipProps?.dropdown?.maxWidth ? chipProps?.dropdown?.maxWidth : '400px',
                    maxHeight:
                      chipProps?.dropdown?.maxHeight ? chipProps?.dropdown?.maxHeight : '100px',
                    minHeight:
                      chipProps?.dropdown?.minHeight ? chipProps?.dropdown?.minHeight : '100px',
                  },
                },
              }}
              sx={{
                height: '100%',
                minWidth: chipProps?.input?.minWidth ? chipProps?.input?.minWidth : '400px',
                maxWidth: chipProps?.input?.maxWidth ? chipProps?.input?.maxWidth : '400px',
                '& .MuiAutocomplete-inputRoot': {
                  height: 'auto',
                  minHeight:
                    chipProps?.input?.minHeight ? chipProps?.input?.minHeight : '45px',
                  maxHeight:
                    chipProps?.input?.maxHeight ? chipProps?.input?.maxHeight : 'auto',
                  overflow: 'hidden',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                  padding: '6px 12px 6px 2px !important',
                  '& input': {
                    ...{
                      padding: '0 !important',

                    },
                    ...chipProps?.input?.inputPropsSx
                  },
                  // '& span': {
                  //   fontWeigt: '500',
                  //   color: '#262626'
                  // },
                  '& .MuiAutocomplete-endAdornment': {
                    '& button': {
                      display: chipProps?.isCloseIcon ? 'flex' : 'none'
                    }
                  },
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
              options={chipProps?.arrData || []}
              value={
                Array.isArray(chipProps?.chipData) ?
                  chipProps?.chipData?.length > 0 ?
                    chipProps?.chipData : multiple ? [] : null :
                  (chipProps?.chipData ?? null)
              }
              getOptionLabel={(option) => option.title as string}
              renderInput={(params) =>
                <Stack direction={'row'} alignItems={'center'} sx={{
                  border:
                    chipProps?.input?.border ? chipProps?.input?.border : '1px solid rgba(0, 0, 0, 0.23)',
                  borderRadius: chipProps?.input?.borderRadius ? chipProps?.input?.borderRadius : '4px',
                  minHeight:
                    chipProps?.input?.minHeight ? chipProps?.input?.minHeight : '45px',
                  maxHeight:
                    chipProps?.input?.maxHeight ? chipProps?.input?.maxHeight : 'auto',
                  height: 'auto',
                  minWidth: chipProps?.input?.minWidth ? chipProps?.input?.minWidth : '400px',
                  maxWidth: chipProps?.input?.maxWidth ? chipProps?.input?.maxWidth : '400px',
                  background: chipProps?.input?.backgroundColor ? chipProps?.input?.backgroundColor : '#fff'
                }}>
                  {
                    chipProps?.input?.isStartIcon && <Box sx={{ ...styles?.startIcon }} {...params}>
                      {
                        chipProps?.input?.startEndornment ? chipProps?.input?.startEndornment : <SearchIcon />
                      }
                    </Box>
                  }
                  <TextField
                    {...params}
                    placeholder={'Select Option'}
                    InputLabelProps={{
                      style: {
                        display: chipProps?.chipData?.length || 0 > 0 ? 'block' : 'auto'
                      },
                    }}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        chipProps?.isSearch ? (chipProps?.chipData?.length || 0 > 0 ? null : <InputAdornment position="start">
                          {chipProps?.input?.endEndornment ? chipProps?.input?.endEndornment : <KeyboardArrowDownIcon />}
                        </InputAdornment>) : null
                      ),
                    }}
                  />
                </Stack>}
              renderTags={(value, getTagProps) =>
                value?.map((option, index: number) => (
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
                    }}
                    variant="outlined"
                    label={option?.title}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderOption={(props, option) => (
                <Typography {...props}
                  sx={hovered === option?.title || (Array.isArray(chipProps?.chipData) ? chipProps?.chipData : [chipProps?.chipData])?.map(e => e?.title).includes(option?.title) ? {
                    background: '#E9E9E9',
                    color: '#665CD7'
                  } :
                    {
                      background: '#ffff',
                      color: '#666666'
                    }
                  }
                  onMouseEnter={() => handleOptionMouseEnter(option?.title)}
                  onMouseLeave={handleOptionMouseLeave} >
                  {option?.title}
                </Typography >
              )
              }
            />
          </Box>
        )
      case 'default':

        console.log(defaultProps?.defaultValue, '1234');

        return (
          <Box>
            {
              defaultProps?.islabel && <Typography sx={{ ...styles?.labelStyle, ...defaultProps?.labelPropsSx }} >{defaultProps?.label}</Typography>
            }
            <Autocomplete
              limitTags={limitTags}
              id="checkboxes-tags-demo"
              defaultValue={defaultProps?.defaultValue}
              componentsProps={{
                popper: {
                  placement: 'bottom-end',
                  style: {
                    transform: 'translateX(-100px) !important',
                    left: '-10%',
                    minWidth:
                      defaultProps?.dropdown?.minWidth ? defaultProps?.dropdown?.minWidth : '400px',
                    maxWidth:
                      defaultProps?.dropdown?.maxWidth ? defaultProps?.dropdown?.maxWidth : '400px',
                    width: '100&',
                    maxHeight:
                      defaultProps?.dropdown?.maxHeight ? defaultProps?.dropdown?.maxHeight : '100px',
                    minHeight:
                      defaultProps?.dropdown?.minHeight ? defaultProps?.dropdown?.minHeight : '100px',
                  },
                },
              }}
              sx={{
                height: '100%',
                width: '100%',
                '& label': {
                  display: 'none !important'
                },
                '& .MuiAutocomplete-inputRoot': {
                  height: '100%',
                  overflow: 'hidden',
                  paddingTop: '0px',
                  paddingRight: '12px !important',
                  paddingBottom: '0px',
                  '& input': {
                    ...{
                      padding: '0 !important',

                    },
                    ...defaultProps?.input?.inputPropsSx
                  },
                  '& span': {
                    margin: '3px 6px 3px 3px'
                  },
                  '& .MuiAutocomplete-endAdornment': {
                    '& button': {
                      display: defaultProps?.isCloseIcon ? 'flex' : 'none'
                    }
                  },
                  '& fieldset': {
                    border: 'none'
                  }
                }
              }}
              options={defaultProps?.arrData}
              value={
                Array.isArray(defaultProps?.defaultData) ?
                  defaultProps?.defaultData?.length > 0 ?
                    defaultProps?.defaultData : multiple ? [] : null :
                  (defaultProps?.defaultData ?? null)
              }
              onChange={(event, newValue) => {
                defaultProps?.handleDefaultChange && defaultProps?.handleDefaultChange(event, newValue as FilmOptionType)
              }}
              getOptionLabel={(option) => option.title as string}
              multiple={multiple}
              renderInput={(params) =>
                <Stack direction={'row'} alignItems={'center'}
                  sx={
                    {
                      border:
                        defaultProps?.input?.border ? defaultProps?.input?.border : '1px solid rgba(0, 0, 0, 0.23)',
                      borderRadius: defaultProps?.input?.borderRadius ? defaultProps?.input?.borderRadius : '4px',
                      minHeight:
                        defaultProps?.input?.minHeight ? defaultProps?.input?.minHeight : '45px',
                      maxHeight:
                        defaultProps?.input?.maxHeight ? defaultProps?.input?.maxHeight : 'auto',
                      height: 'auto',
                      minWidth: defaultProps?.input?.minWidth ? defaultProps?.input?.minWidth : '400px',
                      width: 'auto',
                      maxWidth: defaultProps?.input?.maxWidth ? defaultProps?.input?.maxWidth : '400px',
                      background: defaultProps?.input?.backgroundColor ? defaultProps?.input?.backgroundColor : '#fff'
                    }
                  }>
                  {
                    defaultProps?.input?.isStartIcon && <Box sx={{ ...styles?.startIcon }} {...params}>
                      {
                        defaultProps?.input?.startEndornment ? defaultProps?.input?.startEndornment : <SearchIcon />
                      }
                    </Box>
                  }
                  <TextField {...params}
                    sx={styles?.defaultInputSx}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        defaultProps?.isSearch ? (defaultProps?.defaultData?.length || 0 > 0 ? null : <InputAdornment position="start">
                          {defaultProps?.input?.endEndornment ? defaultProps?.input?.endEndornment : <KeyboardArrowDownIcon />}
                        </InputAdornment>) : <KeyboardArrowDownIcon />
                      ),
                    }}
                    placeholder={defaultProps?.defaultData?.length || 0 > 0 ? '' : 'Select Option'}
                  />
                </Stack>
              }
              renderTags={() =>
                defaultProps?.defaultData?.map((option, index) => (
                  <Typography key={index} sx={styles?.checkboxTextSx}>
                    {`${option.title}
                       ${defaultProps?.defaultData && defaultProps?.defaultData?.length - 1 === index ? '' : ','}  `}
                  </Typography>
                ))
              }
              renderOption={(props, option) => {
                return (

                  <Typography {...props}
                    sx={hovered === option?.title || (
                      (Array.isArray(defaultProps?.defaultData) ? defaultProps?.defaultData : [defaultProps?.defaultData]).map(e => e?.title).includes(option.title))
                      ? {
                        background: '#E9E9E9',
                        color: '#665CD7'
                      } :
                      {
                        background: '#ffff',
                        color: '#666666'

                      }}
                    onMouseEnter={() => handleOptionMouseEnter(option?.title)}
                    onMouseLeave={handleOptionMouseLeave} >
                    {option?.title}
                  </Typography >
                )
              }
              }
            />
          </Box>
        )
      default:
        return
    }
  }
  return (
    <Box sx={{ ...styles?.rootSx, ...SelectDropdownSx }}>
      {/* header */}
      <Box>
        {renderDropdown(selectType)}

      </Box>
    </Box >
  );
}

export default SelectBox

SelectBox.defaultProps = {
  limitTags: 2,
  groupingProps: {
    isCloseIcon: true,
    isSearch: true,
    defaultValue: [],
    handleGroupChange: () => null,
    groupedData: [],
    arrData: [],
    label: '',
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }
  },
  defaultProps: {
    isCloseIcon: true,
    isSearch: true,
    handleDefaultChange: () => null,
    defaultData: [],
    arrData: [],
    defaultValue: [],
    label: '',
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }

  },
  chipProps: {
    isCloseIcon: true,
    label: '',
    isSearch: true,
    handleChipChange: () => null,
    chipData: [],
    arrData: [],
    defaultValue: [],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }
  },
  checkboxProps: {
    isCloseIcon: true,
    isSearch: true,
    defaultValue: [],
    label: '',
    handleCheckedItem: () => null,
    CheckableData: [],
    arrData: [],
    dropdown: {
      minHeight: '',
      maxHeight: '',
      maxWidth: '',
      minWidth: '',
      backgroundColor: '',
      color: ''
    },
    input: {
      minHeight: '',
      minWidth: '',
      backgroundColor: '',
      maxWidth: '',
      maxHeight: '',
      color: '',
      border: '',
      borderRadius: ''
    }
  },
  selectType: 'chip',
  multiple: true
};

interface FilmOptionType {
  title: string | number;
  year: string | number;
}

interface CheckedOption {
  title: string;
  isChecked: boolean;
}