import {
  Autocomplete,
  Box,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  SxProps,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import ArrowUpDownIcon from '../../assets/arrowUpDownIcon';
import Close from '../../assets/close';
import EnterIcon from '../../assets/enterIcon';
import EscapeIcon from '../../assets/escapeIcon';
import HoverEnter from '../../assets/hoverEnter';
import Search from '../../assets/search';
import {
  ControlSearch,
  EmployeeCategory,
  FoodCategory,
  RecentSearch,
  SuggestionRecentSearch,
} from './helperComponents';
import './index.css';
import { Category1Props, ParamsProps, SearchFieldProps } from './props';
import { styles } from './styles';

const SearchField = (props: SearchFieldProps) => {
  const {
    options,

    isTextSearch,
    isRecentSearch,
    isCardBased,
    isCardWithTitleBased,
    isShortcutKeyBased,
    isShortComponent,

    paperRootStyle,

    placeHolderText,
    placeHolderColor,
    placeHolderSize,
    inputRootStyle,
    inputFontSize,
    inputFontColor,
    inputBackgroundColor,
    inputBorderDefaultColor,
    inputBorderHoverColor,
    inputBorderFocusColor,
    startAdornmentIcon,
    endAdornmentIcon,

    paperBackgroundColor,
    paperBorderColor,
    paperHeight,
    paperMinHeight,
    paperMaxHeight,

    listTextHoverColor,
    listTextHoverBgColor,
    keyDownListBgcolor,
    keyDownListTextColor,
    listItemSubTextStyles,
    listItemSubTextColor,
    listItemSubTextSize,
    listItemLabelStyles,
    listItemLabelColor,
    listItemLabelSize,
    cardImgStyle,
    cardImgWidth,
    cardImgHeight,
    imgBorderRadius,

    recentLabel,
    recentLabelTextColor,
    recentLabelFontSize,
    recentLabelStyle,
    recentSearchItemStyles,
    recentSearchItemTextColor,
    recentSearchItemBgcolor,
    recentSearchItemSize,

    controlsRootStyles,
    controlsBgColor,
    controlsTextColor,
    controlsTextSize,
    navigateData,

    componentColumnDirection,
    recentSearchLabelColor,
    recentSearchLabelSize,
    recentSearchLabel,
    categoryLabel1,
    categoryLabel2,
    categoryLabel1Color,
    categoryLabel1Size,
    categoryLabel2Color,
    categoryLabel2Size,
    primaryCategoryData,
    secondaryCategoryData,

    handleInputOnChange = () => {},
    handleOptionChange = () => {},
  } = props;

  const [searched, setSearched] = useState<ParamsProps>({ label: '', url: '' });
  const [search, setSearch] = useState('');
  const [recentSearch, setRecentSearch] = useState<Category1Props['option']>(
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const requestOnInputSearch = (val: string) => {
    if (handleInputOnChange) {
      handleInputOnChange(val);
    }
    setSearch(val);
  };

  const handleSearchData = (val: ParamsProps) => {
    setSearched(val);
    if (isRecentSearch) {
      setRecentSearch([...recentSearch, val]);
    }
    setIsOpen(false);
  };

  const handleOnchange = (e:React.ChangeEvent<{}>, val: ParamsProps) => {
    setSearched(val);
    if (handleOptionChange) {
      handleOptionChange(val);
    }
  };

  const handleRecentSearch = (val: ParamsProps) => {
    setSearched(val);
    setIsOpen(false);
  };

  const handleInputChange = (event:any, value:any, reason:any) => {
   
    console.log(reason,"___");
    console.log(value,"+++");
  };

  const handleSelectChange = (option:any) => {
    setSearched(option);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSearched({ label: '', url: '' });
  };

  return (
    <>
      <Autocomplete
        open={isOpen}
        onOpen={() => handleOpen()}
        onClose={() => {}}
        clearOnEscape={true}
        fullWidth
        value={searched}
        options={options}
        onChange={(e:React.ChangeEvent<{}>, value:any) => handleOnchange(e, value)}
        getOptionLabel={(option) => option?.label}
        inputValue={searched?.label || ''}
        // onSelect={(e:React.ChangeEvent<{}>,option:any)=>handleSelectChange(e,option)}

        sx={{
          '&.MuiAutocomplete-root .MuiOutlinedInput-root': {
            ...inputRootStyle,
            fontSize: inputFontSize,
            color: inputFontColor,
            padding: '0px 12px',
            backgroundColor: `${inputBackgroundColor}`,
            border: `1px solid ${inputBorderDefaultColor}`,
            borderRadius: '8px',
            ':hover': {
              border: `1px solid ${inputBorderHoverColor}`,
            },
            ':focus-within': {
              border: `1px solid ${inputBorderFocusColor}`,
            },
            '& input::placeholder': {
              fontSize: placeHolderSize,
              color: placeHolderColor,
            },
          },
          '&.MuiAutocomplete-root .MuiAutocomplete-inputRoot': {
            paddingRight: '12px !important',
          },
        }}
        renderOption={(props: any, option) => {
          return (
            <>
              {isTextSearch && (
                <>
                  <Box {...props} onClick={() => handleSearchData(option)}>
                    <Typography
                      color={listItemLabelColor}
                      fontSize={listItemLabelSize}
                      className="title1"
                      sx={{ ...listItemLabelStyles }}
                      style={
                        {
                          // fontWeight:search&&option?.label?.toLowerCase()?.includes(search?.toLowerCase())&&'600',
                          // color:search&&option?.label?.toLowerCase()?.includes(search?.toLowerCase())&&'#001C3C',
                        }
                      }
                    >
                      {option?.label}
                    </Typography>
                  </Box>
                </>
              )}

              {isCardBased && (
                <Stack
                  {...props}
                  sx={{ p: '14px', cursor: 'pointer' }}
                  direction={'column'}
                  onClick={() => handleSearchData(option)}
                >
                  <img
                    src={option?.url}
                    alt=" "
                    style={{
                      // ...cardImgStyle,
                      width: cardImgWidth,
                      height: cardImgHeight,
                      borderRadius: imgBorderRadius,
                    }}
                  />
                  <Typography
                    color={listItemLabelColor}
                    fontSize={listItemLabelSize}
                    noWrap
                    mt={'6px'}
                    width={'74px'}
                    className="title1"
                    sx={{ ...listItemLabelStyles }}
                  >
                    {option?.label}
                  </Typography>
                </Stack>
              )}

              {isCardWithTitleBased && (
                <Stack
                  {...props}
                  sx={{
                    p: '14px',
                    cursor: 'pointer',
                    // ':hover': {  backgroundColor: '#665CD7',},
                  }}
                  direction={'row'}
                  alignItems={'center'}
                  onClick={() => handleSearchData(option)}
                >
                  <Box>
                    <img
                      src={option?.url}
                      alt=" "
                      style={{
                        // ...cardImgStyle,
                        width: cardImgWidth,
                        height: cardImgHeight,
                        borderRadius: imgBorderRadius,
                      }}
                    />
                  </Box>
                  <Box ml={'8px'}>
                    <Typography
                      color={listItemLabelColor}
                      fontSize={listItemLabelSize}
                      fontWeight={600}
                      className="title1"
                      sx={{ ...listItemLabelStyles }}
                    >
                      {option?.label}
                    </Typography>
                    <Typography
                      color={listItemSubTextColor}
                      fontSize={listItemSubTextSize}
                      mt={'6px'}
                      sx={{ ...listItemSubTextStyles }}
                    >
                      {option?.label}
                    </Typography>
                  </Box>
                </Stack>
              )}

              {isShortcutKeyBased && (
                <>
                  <Box {...props} onClick={() => handleSearchData(option)}>
                    <Box>
                      <Typography
                        color={listItemLabelColor}
                        fontSize={listItemLabelSize}
                        className="title1"
                        sx={{ ...listItemLabelStyles }}
                      >
                        {option?.label}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: 'none', mt: '5px' }}
                      className="enterIcon"
                    >
                      <HoverEnter />
                    </Box>
                  </Box>
                </>
              )}

              {isShortComponent && (
                <>
                  <Stack
                    direction={'row'}
                    columnGap={'8px'}
                    rowGap={'24px'}
                    p={'0 14px'}
                    marginBottom={'16px'}
                    onClick={() => handleSearchData(option)}
                  >
                    <>
                      <Box>
                        <Search />
                      </Box>
                      <Box>
                        <Typography
                          color={listItemLabelColor}
                          fontSize={listItemLabelSize}
                          fontWeight={600}
                          className="title1"
                          sx={{ ...listItemLabelStyles }}
                        >
                          {option?.label}
                        </Typography>
                      </Box>
                    </>
                  </Stack>
                </>
              )}
            </>
          );
        }}
        PaperComponent={({ children }) => (
          <Paper
            elevation={0}
            sx={
              {
                height: paperHeight,
                minHeight: paperMinHeight,
                maxHeight: paperMaxHeight,
                overflow: 'scroll',

                ...styles.paperRootStyle,
                ...paperRootStyle,
                border: `1px solid ${paperBorderColor}`,
                backgroundColor: paperBackgroundColor,
                '& .MuiAutocomplete-listbox': {
                  display: isCardBased && 'flex',
                  flexWrap: isCardBased && 'wrap',
                },

                '& .MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused':
                  {
                    backgroundColor: keyDownListBgcolor,
                    '& .title1': {
                      color: keyDownListTextColor,
                    },
                    '.enterIcon': {
                      display: 'block',
                    },
                  },
                '& .MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected="true"].Mui-focused':
                  {
                    backgroundColor: '#ffff',
                  },
                '& .MuiAutocomplete-listbox .MuiAutocomplete-option': {
                  display: isShortcutKeyBased && 'flex',
                  justifyContent: isShortcutKeyBased && 'space-between',
                  alignItems: isShortcutKeyBased && 'center',
                  ':hover': {
                    '.enterIcon': {
                      display: 'block',
                    },
                    background: listTextHoverBgColor,
                    '& .title1': {
                      color: listTextHoverColor,
                    },
                  },
                },
              } as SxProps
            }
          >
            {isRecentSearch && (
              <Box mb={1}>
                <RecentSearch
                  recentVal={recentSearch}
                  recentLabel={recentLabel}
                  recentLabelTextColor={recentLabelTextColor}
                  recentLabelFontSize={recentLabelFontSize}
                  recentLabelStyle={recentLabelStyle}
                  recentSearchItemStyles={recentSearchItemStyles}
                  recentSearchItemTextColor={recentSearchItemTextColor}
                  recentSearchItemBgcolor={recentSearchItemBgcolor}
                  recentSearchItemSize={recentSearchItemSize}
                  handleRecentSearch={handleRecentSearch}
                />
              </Box>
            )}

            {children}

            {isShortcutKeyBased && (
              <Box>
                <ControlSearch
                  navigateButtons={navigateData}
                  controlsRootStyles={controlsRootStyles}
                  controlsBgColor={controlsBgColor}
                  controlsTextSize={controlsTextSize}
                  controlsTextColor={controlsTextColor}
                />
              </Box>
            )}

            {isShortComponent && (
              <>
                <Divider />
                <Stack direction={'column'}>
                  <Typography
                    color={recentSearchLabelColor}
                    fontSize={recentSearchLabelSize}
                    mt={'24px'}
                    mb={'12px'}
                    pl={'16px'}
                  >
                    {recentSearchLabel}
                  </Typography>
                </Stack>
                <SuggestionRecentSearch
                  option={recentSearch}
                  searchValue={search}
                />

                <Divider />
                <Stack sx={{ direction: componentColumnDirection }}>
                  <Stack>
                    <Typography
                      color={categoryLabel1Color}
                      fontSize={categoryLabel1Size}
                      mt={'24px'}
                      pl={'16px'}
                    >
                      {categoryLabel1}
                    </Typography>
                    <FoodCategory
                      option={primaryCategoryData}
                      handleCategoryData={handleSearchData}
                      searchValue={undefined}
                    />
                  </Stack>
                  <Divider />
                  <Stack>
                    <Typography
                      color={categoryLabel2Color}
                      fontSize={categoryLabel2Size}
                      mt={'24px'}
                      pl={'16px'}
                    >
                      {categoryLabel2}
                    </Typography>
                    <EmployeeCategory
                      option={secondaryCategoryData}
                      handleCategoryData={handleSearchData}
                      searchValue={undefined}
                    />
                  </Stack>
                </Stack>
              </>
            )}
          </Paper>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeHolderText}
            onChange={(e) => requestOnInputSearch(e.target.value)}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment
                    position="start"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleOpen()}
                  >
                    {isShortComponent && searched?.url && (
                      <Stack
                        direction={'row'}
                        spacing={'10px'}
                        alignItems={'center'}
                      >
                        <> {startAdornmentIcon}</>
                        <img
                          src={searched?.url}
                          alt=" "
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                          }}
                        />
                      </Stack>
                    )}
                    {searched && searched?.url ? (
                      <>
                        {isShortComponent ? (
                          ''
                        ) : (
                          <>
                            {isTextSearch || isRecentSearch ? (
                              <>{startAdornmentIcon}</>
                            ) : (
                              <img
                                src={searched?.url}
                                alt=" "
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                }}
                              />
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <>{startAdornmentIcon}</>
                    )}
                  </InputAdornment>
                </>
              ),
              endAdornment: (
                <>
                  <InputAdornment
                    position="end"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleClear()}
                  >
                    {searched.label ? endAdornmentIcon : ''}
                  </InputAdornment>
                </>
              ),
            }}
            sx={{
              padding: '6px 0px',
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                outline: 'none',
                border: 'none',
              },
            }}
          />
        )}
      />
    </>
  );
};

export default SearchField;

SearchField.defaultProps = {
  isTextSearch: false,
  isRecentSearch: false,
  isCardBased: false,
  isCardWithTitleBased: false,
  isShortcutKeyBased: false,
  isShortComponent: false,

  paperRootStyle: {},

  inputRootStyle: {},
  placeHolderText: 'Search',
  placeHolderColor: '#929292',
  placeHolderSize: 12,
  inputFontSize: 12,
  inputFontColor: '#393939dd',
  inputBackgroundColor: '',
  inputBorderDefaultColor: '#E9E9E9',
  inputBorderHoverColor: '#b4aef4',
  inputBorderFocusColor: '#665CD7',
  startAdornmentIcon: <Search />,
  endAdornmentIcon: <Close />,

  paperBackgroundColor: '',
  paperBorderColor: '#665CD7',
  paperHeight: '',
  paperMinHeight: '',
  paperMaxHeight: '',

  listItemSubTextStyles: {},
  listItemSubTextColor: '#E9E9E9',
  listItemSubTextSize: 12,
  listItemLabelStyles: {},
  listItemLabelColor: '#393939dd',
  listItemLabelSize: 12,
  listTextHoverColor: '#665CD7',
  listTextHoverBgColor: '#fdfafa',
  keyDownListBgcolor: '',
  keyDownListTextColor: '',
  cardImgStyle: {},
  cardImgWidth: 30,
  cardImgHeight: 30,
  imgBorderRadius: 4,

  recentLabel: 'Recent Search',
  recentLabelTextColor: '#393939dd',
  recentLabelFontSize: 12,
  recentLabelStyle: {},
  recentSearchItemStyles: {},
  recentSearchItemTextColor: '#393939dd',
  recentSearchItemBgcolor: '#E9E9E9',
  recentSearchItemSize: 10,

  controlsRootStyles: {},
  controlsTextColor: '#393939dd',
  controlsBgColor: '#E9E9E9',
  controlsTextSize: 12,

  componentColumnDirection: '',

  recentSearchLabelColor: '#393939dd',
  recentSearchLabelSize: 12,
  recentSearchLabel: 'Recent Search',

  categoryLabel1Color: '#393939dd',
  categoryLabel1Size: 12,
  categoryLabel1: ' CATEGORY SUGGEST 1',
  categoryLabel2Color: '#393939dd',
  categoryLabel2Size: 12,
  categoryLabel2: 'CATEGORY SUGGEST 2',
  primaryCategoryData: [],
  secondaryCategoryData: [],

  handleInputOnChange: () => {},
  handleOptionChange: () => {},

  navigateData: [
    {
      navigateLabel: 'To Navigate',
      icon: <ArrowUpDownIcon />,
      onClick: () => {
        alert('hii');
      },
      url: '',
    },
    {
      navigateLabel: 'To Select',
      icon: <EnterIcon />,
      onClick: () => {},
      url: '',
    },
    {
      navigateLabel: 'To Escape',
      icon: <EscapeIcon />,
      onClick: () => {},
      url: '',
    },
  ],
};
