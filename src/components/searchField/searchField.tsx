import {
  Autocomplete,
  Box,
  ClickAwayListener,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  SxProps,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
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
    variant,

    paperRootStyle,

    noOptionsText,
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
    keyBasedOptionStyle,
    listItemLabelSize,
    cardImgStyle,
    cardImgWidth,
    cardImgHeight,
    imgBorderRadius,

    cardTitleImgWidth,
    cardTitleImgHeight,
    TitleImgBorderRadius,

    recentSearchOption,
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

    onSelectSearchDataFun = () => {},
    handleInputOnChange = () => {},
    handleOptionChange = () => {},
  } = props;

  const [searched, setSearched] = useState<ParamsProps>({
    id: 0,
    label: '',
    url: '',
  });
  const [search, setSearch] = useState('');
  const [recentSearch, setRecentSearch] = useState<Category1Props['option']>(
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const requestOnInputSearch = (val: string) => {
    setSearch(val);
  };

  const handleSearchData = (val: ParamsProps) => {
    if (onSelectSearchDataFun) {
      onSelectSearchDataFun(val);
    }
    setSearched(val);
    if (variant === 'isRecentSearch' || variant === 'isShortComponent') {
      if (recentSearch.some((item) => item.id === val?.id)) {
        setRecentSearch([...recentSearch]);
      } else {
        setRecentSearch([...recentSearch, val]);
      }
    }
    setIsOpen(false);
  };

  const handleOnchange = (e: React.ChangeEvent<{}>, val: ParamsProps) => {
    setSearched(val);
    if (handleOptionChange) {
      handleOptionChange(val);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleRecentSearch = (val: ParamsProps) => {
    setSearched(val);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSearched({ id: 0, label: '', url: '' });
  };

  useEffect(() => {
    setRecentSearch(recentSearchOption);
  }, [recentSearchOption]);

  return (
    <>
      <Autocomplete
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        clearOnEscape={true}
        fullWidth
        disablePortal={true}
        value={searched}
        noOptionsText={noOptionsText}
        // options={options}
        options={[
          { recentVal: recentSearch, shortCutKey: navigateData },
          ...options,
        ]}
        onChange={(e: React.ChangeEvent<{}>, value: any) => {
          handleOnchange(e, value);
        }}
        getOptionLabel={(option) => option?.label}
        // onSelect={() =>  setIsOpen(false)}

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
          '& .MuiAutocomplete-noOptions': {
            backgroundColor: 'red',
          },
        }}
        renderOption={(props: any, option) => {
          switch (variant) {
            case 'isTextSearch':
              return (
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
              );

            case 'isRecentSearch':
              return (
                <>
                  {option?.recentVal?.length > 0 && (
                    <Box mb={1}>
                      <RecentSearch
                        recentVal={option?.value}
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

                  <Box {...props} onClick={() => handleSearchData(option)}>
                    <Typography
                      color={listItemLabelColor}
                      fontSize={listItemLabelSize}
                      className="title1"
                      sx={{ ...listItemLabelStyles }}
                    >
                      {option?.label}
                    </Typography>
                  </Box>
                </>
              );

            case 'isCardBased':
              return (
                <>
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
                </>
              );

            case 'isCardWithTitleBased':
              return (
                <>
                  <Stack
                    {...props}
                    sx={{
                      p: '14px',
                      cursor: 'pointer',
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
                          width: cardTitleImgWidth,
                          height: cardTitleImgHeight,
                          borderRadius: TitleImgBorderRadius,
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
                </>
              );

            case 'isShortcutKeyBased':
              return (
                <>
                  <Box
                    {...props}
                    onClick={() => handleSearchData(option)}
                    sx={{
                      ...keyBasedOptionStyle,
                      ...styles.keyBasedOptionStyle,
                      display: 'flex',
                      direction: 'row',
                    }}
                  >
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
                  {option?.shortCutKey && (
                    <Box sx={{bottom:"0px"}}>
                      <ControlSearch
                        navigateButtons={navigateData}
                        controlsRootStyles={controlsRootStyles}
                        controlsBgColor={controlsBgColor}
                        controlsTextSize={controlsTextSize}
                        controlsTextColor={controlsTextColor}
                      />
                    </Box>
                  )}
                </>
              );

            case 'isShortComponent':
              return (
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

                  <Divider />
                  {recentSearch.length > 0 && (
                    <>
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
                        handleRecentSearch={handleRecentSearch}
                      />
                    </>
                  )}
                  <Divider />
                  <Stack direction={componentColumnDirection}>
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
              );

            default:
              variant;
          }
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
                '&.MuiPaper-root .MuiAutocomplete-listbox': {
                  display:
                    variant === 'isCardWithTitleBased' ? 'block' : 'flex',
                },
                '& .MuiAutocomplete-listbox': {
                  display: variant === 'isCardBased' && 'flex',
                  flexWrap: variant === 'isCardBased' && 'wrap',
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
                '&.MuiPaper-root.MuiPaper-root .MuiAutocomplete-listbox': {
                  flexDirection:"column",
                },
                '& .MuiAutocomplete-listbox .MuiAutocomplete-option':{
                  display: variant === 'isShortcutKeyBased' && 'flex',
                  justifyContent:
                    variant === 'isShortcutKeyBased' && 'space-between',
                    alignItems: variant === 'isShortcutKeyBased' && 'center',
                },
                '& .MuiAutocomplete-option .MuiBox-root': {
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
            {children}
          </Paper>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeHolderText}
            onChange={(e) => {
              if (handleInputOnChange) {
                handleInputOnChange(e);
              }
              requestOnInputSearch(e.target.value);
            }}
            onKeyDown={(e: any) => handleKeyDown(e)}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="start" sx={{ cursor: 'pointer' }}>
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
                            {variant === 'isTextSearch' ||
                            variant === 'isRecentSearch' ? (
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
                    {searched?.label ? endAdornmentIcon : ''}
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
  isShortComponent: true,

  variant: 'recent',
  Option: [],
  paperRootStyle: {},

  noOptionsText: 'no option',
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
  keyBasedOptionStyle: {},
  listItemLabelSize: 12,
  listTextHoverColor: '#665CD7',
  listTextHoverBgColor: '#fdfafa',
  keyDownListBgcolor: '',
  keyDownListTextColor: '',
  cardImgStyle: {},
  cardImgWidth: 30,
  cardImgHeight: 30,
  imgBorderRadius: 4,

  cardTitleImgWidth: 40,
  cardTitleImgHeight: 40,
  TitleImgBorderRadius: 4,

  recentSearchOption: [],
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

  onSelectSearchDataFun: () => {},
  handleInputOnChange: () => {},
  handleOptionChange: () => {},

  navigateData: [
    {
      navigateLabel: 'To Navigate',
      icon: <ArrowUpDownIcon />,
      onClick: () => {},
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
