import {
  Autocomplete,
  Box,
  Divider,
  InputAdornment,
  Paper,
  Popper,
  Stack,
  SxProps,
  TextField,
  Typography,
  createFilterOptions,
  makeStyles,
} from '@mui/material';
import Search from '../../assets/search';
import Close from '../../assets/close';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import './index.css';
import EscapeIcon from '../../assets/escapeIcon';
import EnterIcon from '../../assets/enterIcon';
import ArrowUpDownIcon from '../../assets/arrowUpDownIcon';
import HoverEnter from '../../assets/hoverEnter';

const ControlSearch = (props: any) => {
  return (
    <Stack
      style={{
        cursor: 'pointer',
        height: '34px',
        padding: '9px',
        borderBottomRightRadius:"8px",
        borderBottomLeftRadius:"8px",
      }}
      direction={'row'}
      alignItems={"center"}
      columnGap={"20px"}
      bgcolor={"#E9E9E9"}
    >
      <Stack direction={'row'} alignItems={"center"}>
        <ArrowUpDownIcon />
        <Typography ml={"6px"} color={'#666666'} fontSize={'12px'}>To Navigate</Typography>
      </Stack>
      <Stack direction={'row'} alignItems={"center"}>
        <EnterIcon />
        <Typography ml={"6px"} color={'#666666'} fontSize={'12px'}>To Select</Typography>
      </Stack>
      <Stack direction={'row'} alignItems={"center"}>
        <EscapeIcon />
        <Typography ml={"6px"} color={'#666666'} fontSize={'12px'}>To Close</Typography>
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
        height: '34px',
        padding: '9px',
      }}
    >
      <Typography color={'#929292'} fontSize={'10px'}>
        Recent Search
      </Typography>
      <Stack direction={'row'} mt={'8px'} mb={1}>
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

interface FilterOptionType {}
interface dataType {
  label: string;
  title: string;
}
[];

const data = [
  { label: 'The Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
  { label: '23 Angry Men' },
  { label: '21 Angry women' },
  { label: '190 Angry Old' },
  { label: "Schindler's List" },
  { label: 'Pulp Fiction' },
];

const cardData = [
  {
    label: 'The Redemption uuuuuu',
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

const SearchField = (props: any) => {
  const [searched, setSearched] = useState({ url: '', label: '' });
  const [recentSearch, setRecentSearch] = useState([]);
  const [isOpen, setOpen] = useState(false);

  let isTextSearch = true;
  let isRecentSearch = true;
  let isCardBased = true;
  let isCardWithTitleBased = true;
  let isShortcutKeyBased = true;

  const requestSearch = (val: any) => {
    const filteredRows = data.filter((row) => {
      return row.label.toLowerCase().includes(val.toLowerCase());
    });
    // setSearched(filteredRows);
  };

  const handleOpen = () => {
    setOpen((open) => !open);
  };
  const handleSearchData = (val: any) => {
    setSearched(val);
    setRecentSearch([...recentSearch, val]);
    setOpen((open) => !open);
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
          minWidth: '70%',
        }}
      >
        <Autocomplete
          onClick={() => handleOpen()}
          open={isOpen}
          fullWidth
          value={searched}
          options={cardData}
          onChange={(e, value) => handleOnchange(e, value)}
          getOptionLabel={(option) => option.label}
          sx={{
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
                {/* {isCardBased && (
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
                      className='title1'
                      sx={{ ':hover': { color: '#665CD7' } }}
                    >
                      {option?.label}
                    </Typography>
                  </Stack>
                )} */}

                {/* {isCardWithTitleBased && (
                  <Stack
                    {...props}
                    sx={{
                     
                      p: '14px',
                      cursor: 'pointer',
                      // ':hover': {  backgroundColor: '#665CD7',},
                    }}
                    direction={'row'}
                    alignItems={"center"}
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
                    <Box ml={"8px"}>
                    <Typography
                      color={'#3B3B3B'}
                      fontSize={'12px'}
                      fontWeight={600}
                      className='title1'
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
                )} */}

                {/* {isTextSearch && (
                  <>
                    <Box {...props} onClick={() => handleSearchData(option)}>
                      <Typography
                        color={'#929292'}
                        fontSize={'12px'}
                        className="title1"
                        sx={{ ':hover': { color: '#665CD7' } }}
                      >
                        {option?.label}
                      </Typography>
                    </Box>
                  </>
                )} */}

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
                      <Box sx={{display:"none",mt:"4px"}} className="enterIcon">
                      <HoverEnter/>
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
              style={{
                cursor: 'pointer',
                height: '20%',
                marginTop: '6px',
                marginBottom: '6px',
                borderRadius: '8px',
                boxShadow: '0px 8px 12px #00000014',
                border: '1px solid #665CD7',
              }}
              sx={
                {
                  '& .MuiAutocomplete-listbox': {
                    // display: isCardBased && 'flex',
                    // flexWrap: isCardBased && 'wrap',
                  },
                  '& .MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused':
                    {
                      backgroundColor: '#ffff',
                    },
                  '& .MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected="true"].Mui-focused':
                    {
                      backgroundColor: '#ffff',
                    },
                  '& .MuiAutocomplete-listbox .MuiAutocomplete-option': {
                    display:"flex",justifyContent:"space-between",alignItems:"center",
                    ':hover': {
                     '.enterIcon':{
                      display:"block"
                     },
                      // background: '#FFFF',
                      background:'#EFEEFB',
                      '& .title1': {
                        color: '#665CD7',
                      },
                    },
                  },
                } as SxProps
              }
            >
              {/* <Box mb={1}>
                <RecentSearch recentVal={recentSearch} />
              </Box> */}
              {children}
              <Box>
                <ControlSearch />
              </Box>
            </Paper>
          )}
          renderInput={(params) => (
            <TextField
              placeholder="Search"
              onChange={(e) => requestSearch(e.target.value)}
              onClick={() => handleOpen()}
              {...params}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <InputAdornment
                      position="start"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleOpen()}
                    >
                      {searched?.url ? (
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
                        <Search />
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
                      <Close />
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
  Option: [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
  ],
};
