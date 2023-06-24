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
import ClockIcon from '../../assets/clockIcon';
import Close from '../../assets/close';
import EnterIcon from '../../assets/enterIcon';
import EscapeIcon from '../../assets/escapeIcon';
import HoverEnter from '../../assets/hoverEnter';
import Search from '../../assets/search';
import './index.css';
import { styles } from './styles';

const SuggestionSearch = (props: any) => {
  const { searchValue, option, handleStoreSearchData = () => {} } = props;

  const filteredRows = option.filter((row: any) => {
    return row.label.toLowerCase().includes(searchValue?.toLowerCase());
  });
  return (
    <>
      {filteredRows?.map((item: any) => (
        <Stack
          direction={'row'}
          columnGap={'8px'}
          rowGap={'24px'}
          p={'0 14px'}
          marginBottom={'16px'}
          onClick={() => handleStoreSearchData(item)}
        >
          <>
            <Box>
              <Search />
            </Box>
            <Box>
              <Typography color={'#262626'} fontSize={'14px'} fontWeight={600}>
                {item?.label}
              </Typography>
            </Box>
          </>
        </Stack>
      ))}
    </>
  );
};

const SuggestionRecentSearch = (props: any) => {
  const { searchValue, option, handleRecentSearchData = () => {} } = props;

  const filteredRows = option.filter((row: any) => {
    return row.label.toLowerCase().includes(searchValue?.toLowerCase());
  });
  return (
    <>
      {filteredRows?.map((item: any) => (
        <Stack
          direction={'row'}
          columnGap={'8px'}
          rowGap={'24px'}
          p={'0 14px'}
          marginBottom={'16px'}
          onClick={() => handleRecentSearchData(item)}
        >
          <>
            <Box>
              <ClockIcon />
            </Box>
            <Box>
              <Typography color={'#262626'} fontSize={'14px'} fontWeight={600}>
                {item?.label}
              </Typography>
            </Box>
          </>
        </Stack>
      ))}{' '}
    </>
  );
};

const FoodCategory = (props: any) => {
  const { searchValue, option, handleFoodSearchData = () => {} } = props;

  const filteredRows = option.filter((row: any) => {
    return row.label.toLowerCase().includes(searchValue?.toLowerCase());
  });

  return (
    <>
      <Stack direction={'row'} overflow={'scroll'}>
        {option?.map((val: any) => (
          <Stack
            {...props}
            sx={{
              p: '14px',
              cursor: 'pointer',
            }}
            direction={'column'}
            onClick={() => handleFoodSearchData(val)}
          >
            <img
              src={val?.url}
              alt=" "
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
              }}
            />
            <Typography
              color={'#3B3B3B'}
              fontSize={'12px'}
              mt={'6px'}
              width={'74px'}
              className="title1"
              textAlign={'center'}
            >
              {val?.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

const EmployeeCategory = (props: any) => {
  const { searchValue, option, handleEmployeeSearchData = () => {} } = props;

  const filteredRows = option.filter((row: any) => {
    return row?.label?.toLowerCase()?.includes(searchValue?.toLowerCase());
  });
  return (
    <>
      {option?.map((val: any) => (
        <Stack
          {...props}
          sx={{
            p: '14px',
            cursor: 'pointer',
          }}
          direction={'row'}
          alignItems={'center'}
          onClick={() => handleEmployeeSearchData(val)}
        >
          <Box>
            <img
              src={val?.url}
              alt=" "
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '4px',
              }}
            />
          </Box>
          <Box ml={'8px'}>
            <Typography
              color={'#3B3B3B'}
              fontSize={'12px'}
              fontWeight={600}
              className="title1"
            >
              {val?.label}
            </Typography>
            <Typography color={'#666666'} fontSize={'10px'} mt={'6px'}>
              {val?.label}
            </Typography>
          </Box>
        </Stack>
      ))}
    </>
  );
};

const ControlSearch = (props: any) => {
  const {
    navigateButtons,
    controlsRootStyles,
    controlsBgColor,
    controlsTextSize,
    controlsTextColor,
  } = props;
  return (
    <Stack
      style={{
        ...controlsRootStyles,
        cursor: 'pointer',
        minHeight: '34px',
        padding: '9px',
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px',
      }}
      direction={'row'}
      alignItems={'center'}
      columnGap={'20px'}
      bgcolor={controlsBgColor}
    >
      {navigateButtons?.map((val: any) => (
        <Stack
          direction={'row'}
          alignItems={'center'}
          onClick={() => val?.onClick()}
        >
          {val?.icon}
          <Typography
            ml={'6px'}
            color={controlsTextColor}
            fontSize={controlsTextSize}
          >
            {val?.navigateLabel}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

const RecentSearch = (props: RecentSearchProps) => {
  const {
    recentVal,
    recentLabel,
    recentLabelTextColor,
    recentLabelFontSize,
    recentLabelStyle,
    recentSearchItemStyles,
    recentSearchItemTextColor,
    recentSearchItemBgcolor,
    recentSearchItemSize,
  } = props;

  return (
    <Stack
      style={{
        cursor: 'pointer',
        padding: '9px',
      }}
    >
      <Typography
        color={recentLabelTextColor}
        fontSize={recentLabelFontSize}
        sx={{ ...recentLabelStyle }}
      >
        {recentLabel}
      </Typography>
      <Stack direction={'row'} mt={'8px'} mb={1} overflow={'scroll'}>
        {recentVal?.map((val: any) => (
          <>
            <Typography
              fontWeight={600}
              padding={'4px 6px'}
              mr={'12px'}
              color={recentSearchItemTextColor}
              fontSize={recentSearchItemSize}
              bgcolor={recentSearchItemBgcolor}
              borderRadius={'8px'}
              minWidth={'fit-content'}
              sx={{ ...recentSearchItemStyles }}
            >
              {val?.label}
            </Typography>
          </>
        ))}
      </Stack>
      <Divider sx={{ mt: '0px' }} />
    </Stack>
  );
};

interface SearchFieldProps {
  isTextSearch: boolean;
  isRecentSearch: boolean;
  isCardBased: boolean;
  isCardWithTitleBased: boolean;
  isShortcutKeyBased: boolean;
  isShortComponent: boolean;

  paperRootStyle: SxProps;

  placeHolderText: string;
  placeHolderColor: string;
  placeHolderSize: number;
  inputRootStyle: SxProps;
  inputFontSize: number;
  inputFontColor: string;
  inputBackgroundColor: string;
  inputBorderDefaultColor: string;
  inputBorderHoverColor: string;
  inputBorderFocusColor: string;
  startAdornmentIcon: React.ReactNode;
  endAdornmentIcon: React.ReactNode;

  paperBackgroundColor: string;
  paperBorderColor: string;
  listTextHoverColor: string;
  listTextHoverBgColor: string;
  keyDownListBgcolor: string;
  keyDownListTextColor: string;
  listItemSubTextColor: string;
  listItemSubTextSize: number;
  listItemSubTextStyles: SxProps;
  listItemLabelColor: string;
  listItemLabelSize: number;
  listItemLabelStyles: SxProps;
  cardImgStyle: SxProps;
  cardImgWidth: number;
  cardImgHeight: number;
  imgBorderRadius: number;

  recentLabel: string;
  recentLabelTextColor: string;
  recentLabelFontSize: number;
  recentLabelStyle: SxProps;
  recentSearchItemStyles: SxProps;
  recentSearchItemTextColor: string;
  recentSearchItemBgcolor: string;
  recentSearchItemSize: number;

  controlsRootStyles: SxProps;
  controlsTextColor: string;
  controlsBgColor: string;
  controlsTextSize: number;
}
interface RecentSearchProps {
  recentVal: Array<any>;
  recentLabel: string;
  recentLabelTextColor: string;
  recentLabelFontSize: number;
  recentLabelStyle: SxProps;
  recentSearchItemStyles: SxProps;
  recentSearchItemTextColor: string;
  recentSearchItemBgcolor: string;
  recentSearchItemSize: number;
}
interface handleSearchDataProp {
  label: string;
}
interface dataType {
  label: string;
  title: string;
}
[];

const shotcutkeyData = [
  {
    // label: 'suggestion',
    menu: [
      { label: 'Suggestion search here' },
      { label: 'Suggestion search here' },
      { label: 'Suggestion search here' },
    ],
  },
  {
    label: 'RECENT SEARCH',
    menu: [
      { label: 'Recent searched item here', icon: '' },
      { label: 'Recent searched item here', icon: '' },
      { label: 'Recent searched item here', icon: '' },
    ],
  },
  {
    label: 'CATEGORY SUGGEST 1',
    menu: [
      { label: 'Category Name', url: '' },
      { label: 'Category Name', url: '' },
      { label: 'Category Name', url: '' },
    ],
  },
  {
    label: 'CATEGORY SUGGEST 2',
    menu: [
      {
        items: 'Primary text here',
        subText: 'Secondary text here',
        url: 'https://images.unsplash.com/-a36ea2ef75ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      },

      {
        items: 'Primary text here',
        subText: 'Secondary text here',
        url: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&,ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      },

      {
        items: 'Primary text here',
        subText: 'Secondary text here',
        url: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q',
      },
    ],
  },
];

const data = [
  { label: 'Redemption' },
  { label: 'Henry' },
  { label: 'Godfather' },
  { label: 'Dark Knight' },
  { label: 'Angry Men' },
  { label: 'Angry women' },
  { label: 'Angry' },
  { label: 'Schindler' },
  { label: 'Pulp Fiction' },
];

const cardData = [
  {
    label: 'The Redemption',
    url: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    label: 'The Godfather',
    url: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    label: 'The Godfather',
    url: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    label: 'The Dark Knight',
    url: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    label: '190 Angry Old',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    label: '23 Angry Men',
    url: 'https://images.unsplash.com/photo-1606510236980-c7cc4e05012a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    label: '21 Angry women',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    label: "Schindler's List",
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    label: 'Pulp Fiction',
    url: 'https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
];

const navigateData = [
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
];

const SearchField = (props: SearchFieldProps) => {
  const {
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
  } = props;

  const [searched, setSearched] = useState(null);
  const [search, setSearch] = useState('');
  const [recentSearch, setRecentSearch] = useState<Array<object>>([]);
  const [isOpen, setOpen] = useState(false);

  const requestOnInputSearch = (val: string) => {
    setSearch(val);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === '') {
      setOpen(true);
    }
  };

  const handleSearchData = (val: any) => {
    setSearched(val);
    setRecentSearch([...recentSearch, val]);
  };

  const handleOnchange = (e: any, v: any) => {
    setSearched(v);
  };

  const handleClear = () => {
    setSearched(null);
  };

  return (
    <>
      <Box
        sx={{
          minWidth: '100%',
        }}
        // onClick={() => handleOpen()}
      >
        <Autocomplete
          // open={isOpen}
          // onOpen={() => setOpen(true)}
          // onClose={() => setOpen(false)}
          clearOnEscape={true}
          fullWidth
          value={searched}
          options={cardData}
          onChange={(e, value) => handleOnchange(e, value)}
          getOptionLabel={(option) => option?.label}
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
              </>
            );
          }}
          PaperComponent={({ children }) => (
            <Paper
              elevation={0}
              sx={
                {
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
                  <SuggestionSearch
                    option={data}
                    searchValue={search}
                    handleStoreSearchData={handleSearchData}
                  />
                  <Divider />

                  <Typography
                    color={'#929292'}
                    fontSize={'12px'}
                    mt={'24px'}
                    pl={'16px'}
                  >
                    RECENT SEARCH
                  </Typography>
                  <SuggestionRecentSearch
                    option={recentSearch}
                    searchValue={search}
                  />

                  <Divider />

                  <Typography
                    color={'#929292'}
                    fontSize={'12px'}
                    mt={'24px'}
                    pl={'16px'}
                  >
                    CATEGORY SUGGEST 1
                  </Typography>
                  <FoodCategory
                    option={cardData}
                    searchValue={search}
                    handleFoodSearchData={handleSearchData}
                  />

                  <Divider />

                  <Typography
                    color={'#929292'}
                    fontSize={'12px'}
                    mt={'24px'}
                    pl={'16px'}
                  >
                    CATEGORY SUGGEST 2
                  </Typography>
                  <EmployeeCategory
                    option={cardData}
                    searchValue={search}
                    handleEmployeeSearchData={handleSearchData}
                  />
                </>
              )}
            </Paper>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              // onKeyDown={(e)=>handleKeyDown(e)}
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
                      {isShortComponent ? null : searched?.url ? (
                        <img
                          src={searched?.url}
                          alt=" "
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                          }}
                        />
                      ) : (
                        <>{startAdornmentIcon}</>
                      )}

                      {isShortComponent && searched?.url ? (
                        <Stack
                          direction={'row'}
                          spacing={'10px'}
                          alignItems={'center'}
                        >
                          <img
                            src={searched?.url}
                            alt=" "
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                            }}
                          />
                          <> {startAdornmentIcon}</>
                        </Stack>
                      ) : (
                        <> {isShortComponent && { startAdornmentIcon }}</>
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
                      {endAdornmentIcon}
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
      </Box>
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
  placeHolderText: 'Search..',
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

  controlsRootStyles:{},
  controlsTextColor: '#393939dd',
  controlsBgColor:"#E9E9E9",
  controlsTextSize: 12,

};
