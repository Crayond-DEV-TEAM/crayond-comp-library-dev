import { Box, Typography, Checkbox, InputAdornment } from '@mui/material';
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
import Stack from '@mui/material/Stack';

const SelectBox = (props: SelectBoxProps) => {
  const {
    rootStyleSx,
    multi,
    groupingProps = {
      isCloseIcon: false,
      isSearch: true,
      handleGroupChange: () => null,
      groupedData: [],
      arrData: [],
      defaultValue: [],
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
    defaultProps = {
      isCloseIcon: false,
      isSearch: true,
      handleDefaultChange: () => null,
      defaultData: [],
      defaultValue: [],
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
    chipProps = {
      isCloseIcon: false,
      isSearch: true,
      handleChipChange: () => null,
      chipData: [],
      defaultValue: [],
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
    checkboxProps = {
      isCloseIcon: false,
      isSearch: true,
      handleCheckedItem: () => null,
      CheckableData: [],
      defaultValue: [],
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
    selectType,
  } = props;

  const [hovered, setHovered] = React.useState('');

  const handleOptionMouseEnter = (option: string) => {
    setHovered(option);
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
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: ''
    },
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
          <Autocomplete
            // id="grouped-demo"
            options={groupingProps?.arrData}
            defaultValue={groupingProps?.defaultValue}
            limitTags={limitTags}
            value={Array.isArray(groupingProps?.groupedData) ?
              groupingProps?.groupedData?.length > 0 ?
                groupingProps?.groupedData : multi ? [] : null :
              (groupingProps?.groupedData ?? null)
            }
            multiple={multi}
            groupBy={(option: CheckedOption) => option.title
            }
            getOptionLabel={(option: CheckedOption) => option.title}
            onChange={(event, newValue: any) =>
              groupingProps?.handleGroupChange(event, newValue)}
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
                  label={groupingProps?.groupedData?.length > 0 ? '' : 'Select Option'}
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
            renderTags={() =>
              groupingProps?.groupedData?.map((option: any, index: number) => (
                <Typography key={index} sx={styles?.checkboxTextSx}>
                  {`${option.title}
                   ${groupingProps?.groupedData?.length - 1 === index ? '' : ','}`}
                </Typography>
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
            <Autocomplete
              multiple
              limitTags={limitTags}
              defaultValue={checkboxProps?.defaultValue}
              componentsProps={{
                popper: {
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
                    checkboxProps?.input?.maxHeight ? checkboxProps?.input?.maxHeight : '45px',
                  overflow: 'hidden',
                  paddingTop: '0px',
                  paddingRight: '12px !important',
                  paddingBottom: '0px',
                  '& input': {
                    padding: '0 !important'
                  },
                  // '& span': {
                  //   fontWeigt: '500',
                  //   color: '#262626'
                  // },
                  '& .MuiAutocomplete-endAdornment': {
                    '& button': {
                      display: checkboxProps?.isCloseIcon ? 'flex' : 'none'
                    }
                  },
                  '& fieldset': {
                    border:
                      checkboxProps?.input?.border ? checkboxProps?.input?.border : '1px solid rgba(0, 0, 0, 0.23)',
                    borderRadius: checkboxProps?.input?.borderRadius ? checkboxProps?.input?.borderRadius : '4px'
                  }
                }
              }
              }
              id="checkboxes-tags-demo"
              options={checkboxProps?.arrData}
              // value={Array.isArray(checkboxProps?.CheckableData) ?
              //   checkboxProps?.CheckableData?.length > 0 ?
              //     checkboxProps?.CheckableData : multi ? [] : null :
              //   (checkboxProps?.CheckableData ?? null)}
              // onChange={(event, newValue) => {
              //   checkboxProps?.handleCheckedItem(event, newValue)
              // }}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderTags={() =>
                checkboxProps?.CheckableData?.map((option: any, index: number) => (
                  <Typography key={index} sx={styles?.checkboxTextSx}>
                    {`${option.title}
                        `}</Typography>
                ))
              }
              renderOption={(props, option, { selected }) => {

                console.log(selected, 'selected');

                // debugger
                return (
                  <li {...props}>
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
                <>
                  {/* <div style={{ marginBottom: "-24px", width: "30px" }}>
                      {groupingProps?.isSearch ? <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment> : null}
                    </div> */}
                  < TextField {...params} label=""
                    placeholder={
                      !!checkboxProps?.CheckableData?.length ? '' : 'Select Option'
                    }
                  />
                </>
              )}
            />
          </>
        )
      case 'chip':
        return (

          <Autocomplete
            // id="free-solo"
            limitTags={limitTags}
            defaultValue={chipProps?.defaultValue}
            onChange={(event, newValue: any) => {
              chipProps?.handleChipChange(event, newValue)
            }}
            selectOnFocus={true}
            multiple={multi}
            componentsProps={{
              popper: {
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
                  chipProps?.input?.maxHeight ? chipProps?.input?.maxHeight : '45px',
                overflow: 'hidden',
                paddingTop: '0px',
                paddingRight: '12px !important',
                paddingBottom: '0px',
                '& input': {
                  padding: '0 !important'
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
                  border:
                    chipProps?.input?.border ? chipProps?.input?.border : '1px solid rgba(0, 0, 0, 0.23)',
                  borderRadius: chipProps?.input?.borderRadius ? chipProps?.input?.borderRadius : '4px'
                }
              }
            }
            }
            options={chipProps?.arrData}
            value={
              Array.isArray(chipProps?.chipData) ?
                chipProps?.chipData?.length > 0 ?
                  chipProps?.chipData : multi ? [] : null :
                (chipProps?.chipData ?? null)
            }
            placeholder={!!chipProps?.chipData?.length ? 'select Option' : ''
            }
            getOptionLabel={(option) => option.title
            }
            renderInput={(params) =>
              <TextField
                {...params}
                label=""
              />}
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
            renderOption={(props, option) => (
              <Typography {...props}
                sx={hovered === option?.title ? {
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
          />

        )

      case 'default':
        return (
          <Autocomplete
            limitTags={limitTags}
            // id="free-solo-demo"
            defaultValue={defaultProps?.defaultValue}
            componentsProps={{
              popper: {
                style: {
                  minWidth:
                    defaultProps?.dropdown?.minWidth ? defaultProps?.dropdown?.minWidth : '400px',
                  maxWidth:
                    defaultProps?.dropdown?.maxWidth ? defaultProps?.dropdown?.maxWidth : '400px',
                  maxHeight:
                    defaultProps?.dropdown?.maxHeight ? defaultProps?.dropdown?.maxHeight : '100px',
                  minHeight:
                    defaultProps?.dropdown?.minHeight ? defaultProps?.dropdown?.minHeight : '100px',
                },
              },
            }}
            sx={{
              height: '100%',
              minWidth: defaultProps?.input?.minWidth ? defaultProps?.input?.minWidth : '400px',
              maxWidth: defaultProps?.input?.maxWidth ? defaultProps?.input?.maxWidth : '400px',
              '& .MuiAutocomplete-inputRoot': {
                height: 'auto',
                minHeight:
                  defaultProps?.input?.minHeight ? defaultProps?.input?.minHeight : '45px',
                maxHeight:
                  defaultProps?.input?.maxHeight ? defaultProps?.input?.maxHeight : '45px',
                overflow: 'hidden',
                paddingTop: '0px',
                paddingRight: '12px !important',
                paddingBottom: '0px',
                '& input': {
                  padding: '0 !important'
                },
                '& .MuiAutocomplete-endAdornment': {
                  '& button': {
                    display: defaultProps?.isCloseIcon ? 'flex' : 'none'
                  }
                },
                '& fieldset': {
                  border:
                    defaultProps?.input?.border ? defaultProps?.input?.border : '1px solid rgba(0, 0, 0, 0.23)',
                  borderRadius: defaultProps?.input?.borderRadius ? defaultProps?.input?.borderRadius : '4px'
                }
              }
            }
            }
            options={defaultProps?.arrData}
            value={
              Array.isArray(defaultProps?.defaultData) ?
                defaultProps?.defaultData?.length > 0 ?
                  defaultProps?.defaultData : multi ? [] : null :
                (defaultProps?.defaultData ?? null)}
            onChange={(event, newValue: any) => {
              defaultProps?.handleDefaultChange(event, newValue)
            }}
            getOptionLabel={(option) => option.title}
            multiple={multi}
            renderInput={(params) => <TextField {...params}
              sx={styles?.defaultInputSx}
              placeholder={!!defaultProps?.defaultData?.length ? '' : 'select Option'} />}
            renderTags={() =>
              defaultProps?.defaultData?.map((option: any, index: number) => (
                <Typography key={index} sx={styles?.checkboxTextSx}>
                  {`${option.title}
                       ${defaultProps?.defaultData?.length - 1 === index ? '' : ','}  `}
                </Typography>
              ))
            }
            renderOption={(props, option) => (
              <Typography {...props}
                sx={hovered === option?.title ? {
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

          />
        )
      default:
        return
    }

  }

  return (
    <Box sx={{ ...styles?.rootSx, ...rootStyleSx }}>
      {/* header */}
      {/* <Label {...getInputLabelProps()}>Customized hook</Label> */}
      <Stack direction={'row'}>
        {renderDropdown(selectType)}
      </Stack>
    </Box >
  );
}

export default SelectBox

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