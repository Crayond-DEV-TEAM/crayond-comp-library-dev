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

const ControlSearch = (props: any) => {
  return (
    <Stack
      style={{
        cursor: 'pointer',
        height: '34px',
        padding: '9px',
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px',
      }}
      direction={'row'}
      alignItems={'center'}
      columnGap={'20px'}
      bgcolor={'#E9E9E9'}
    >
      <Stack direction={'row'} alignItems={'center'}>
        <ArrowUpDownIcon />
        <Typography ml={'6px'} color={'#666666'} fontSize={'12px'}>
          To Navigate
        </Typography>
      </Stack>
      <Stack direction={'row'} alignItems={'center'}>
        <EnterIcon />
        <Typography ml={'6px'} color={'#666666'} fontSize={'12px'}>
          To Select
        </Typography>
      </Stack>
      <Stack direction={'row'} alignItems={'center'}>
        <EscapeIcon />
        <Typography ml={'6px'} color={'#666666'} fontSize={'12px'}>
          To Close
        </Typography>
      </Stack>
    </Stack>
  );
};

const RecentSearch = (props: any) => {
  const { recentVal } = props;

  return (
    <Stack
      style={{
        cursor: 'pointer',
        padding: '9px',
      }}
    >
      <Typography color={'#929292'} fontSize={'10px'}>
        Recent Search
      </Typography>
      <Stack direction={'row'} mt={'8px'} mb={1} overflow={'scroll'}>
        {recentVal?.map((val: any) => (
          <>
            <Typography
              fontWeight={600}
              padding={'4px 6px'}
              mr={'12px'}
              color={'#929292'}
              fontSize={'10px'}
              bgcolor={'#E9E9E9'}
              borderRadius={'8px'}
              minWidth={'fit-content'}
            >
              {val?.label}
            </Typography>
          </>
        ))}
      </Stack>
      <Divider sx={{ mt: '0px' }} />
      {/* <EscapeIcon/>
      <EnterIcon/>
      <ArrowUpDownIcon/> */}
    </Stack>
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
              ':hover': { color: '#665CD7' },
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
              sx={{ ':hover': { color: '#665CD7' } }}
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
      {option?.map((val: ay) => (
        <Stack
          {...props}
          sx={{
            p: '14px',
            cursor: 'pointer',
            // ':hover': {  backgroundColor: '#665CD7',},
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
              sx={{ ':hover': { color: '#665CD7' } }}
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

interface SearchFieldProps {
  isTextSearch: Boolean;
  isRecentSearch: Boolean;
  isCardBased: Boolean;
  isCardWithTitleBased: Boolean;
  isShortcutKeyBased: Boolean;
  isShortComponent: Boolean;

  paperRootStyle: SxProps;
  placeHolderText: string;
  startAdornmentIcon: React.ReactNode;
  endAdornmentIcon: React.ReactNode;
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
    startAdornmentIcon,
    endAdornmentIcon,
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
    console.log(v,e);
    
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
            fontSize: '14px',
            '&.MuiAutocomplete-root .MuiOutlinedInput-root': {
              padding: '0px 12px',
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
                        color={'#929292'}
                        fontSize={'12px'}
                        className="title1"
                        sx={{ ':hover': { color: '#665CD7' } }}
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
                    sx={{
                      p: '14px',
                      cursor: 'pointer',
                      ':hover': { color: '#665CD7' },
                    }}
                    direction={'column'}
                    onClick={() => handleSearchData(option)}
                  >
                    <img
                      src={option?.url}
                      alt=" "
                      style={{
                        width: '74px',
                        height: '74px',
                        borderRadius: '4px',
                      }}
                    />
                    <Typography
                      color={'#3B3B3B'}
                      fontSize={'12px'}
                      noWrap
                      mt={'6px'}
                      width={'74px'}
                      className="title1"
                      sx={{ ':hover': { color: '#665CD7' } }}
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
                        sx={{ ':hover': { color: '#665CD7' } }}
                      >
                        {option?.label}
                      </Typography>
                      <Typography
                        color={'#666666'}
                        fontSize={'10px'}
                        mt={'6px'}
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
                          color={'#929292'}
                          fontSize={'12px'}
                          className="title1"
                          sx={{ ':hover': { color: '#665CD7' } }}
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
                  border: '1px solid #665CD7',
                  '& .MuiAutocomplete-listbox': {
                    display: isCardBased && 'flex',
                    flexWrap: isCardBased && 'wrap',
                  },

                  '& .MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused':
                    {
                      backgroundColor: '#EFEEFB',
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
                      background:
                        isTextSearch | isCardBased ? '#ffff' : '#EFEEFB',
                      '& .title1': {
                        color: '#665CD7',
                      },
                    },
                  },
                } as SxProps
              }
            >
              {isRecentSearch && (
                <Box mb={1}>
                  <RecentSearch recentVal={recentSearch} />
                </Box>
              )}
              {children}

              {isShortcutKeyBased && (
                <Box>
                  <ControlSearch />
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
                  border: '1px solid #E9E9E9',
                  borderRadius: '8px',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid #665CD7',
                  borderRadius: '8px',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid #665CD7',
                  borderRadius: '8px',
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
  isShortcutKeyBased: true,
  isShortComponent: false,

  paperRootStyle: {},
  placeHolderText: 'Search..',
  startAdornmentIcon: <Search />,
  endAdornmentIcon: <Close />,
};
