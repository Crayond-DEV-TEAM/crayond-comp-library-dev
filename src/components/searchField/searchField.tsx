import {
  Autocomplete,
  Box,
  InputAdornment,
  Paper,
  Popper,
  Stack,
  TextField,
  Typography,
  createFilterOptions,
  makeStyles,
} from '@mui/material';
import Search from '../../assets/search';
import Close from '../../assets/close';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { option } from 'yargs';
import './index.css';

const Component = (props: any) => {
  const { findData = false, searchData, handleSearchData = () => {} } = props;

  return (
    <Stack
      style={{
        cursor: 'pointer',
        height: '20%',
        marginTop: '6px',
        marginBottom: '6px',
        borderRadius: '8px',
        padding: '14px',
        boxShadow: '0px 8px 12px #00000014',
        border: '1px solid #665CD7',
      }}
    >
      {searchData?.map((val: any) => (
        <Box onClick={() => handleSearchData(val)}>
          <Typography color={'#929292'} fontSize={'12px'} mb={'12px'}>
            {val?.label}
          </Typography>
        </Box>
      ))}
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
    label: '23 Angry Men',
    url: 'https://images.unsplash.com/photo-1606510236980-c7cc4e05012a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    label: '21 Angry women',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
  },
  {
    label: '190 Angry Old',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
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
  const [searched, setSearched] = useState([{}]);
  const [isOpen, setOpen] = useState(false);
  let isRecentSearch = true;
  let isTextSearch = true;

  const requestSearch = (val: any) => {
    const filteredRows = data.filter((row) => {
      return row.label.toLowerCase().includes(val.toLowerCase());
    });
    setSearched(filteredRows);
  };

  const handleOpen = () => {
    setOpen((open) => !open);
    console.log('open');
  };
  const handleOnchange = (e: any, v: any) => {
    setSearched(v);
    setOpen((open) => !open);
  };

  useEffect(() => {
    setSearched(data);
  }, []);
  return (
    <>
      <Autocomplete
        onClick={() => handleOpen()}
        open={isOpen}
        fullWidth
        options={cardData}
        onChange={(e, value) => handleOnchange(e, value)}
        getOptionLabel={(option) => option.label}
        sx={{
          '&.MuiAutocomplete-root .MuiOutlinedInput-root': {
            padding: '0px 12px',
          },
        }}
        renderOption={(props: any, option) => {
          return (
            <>
              <Stack sx={{}}>

              </Stack>

              {/* {isTextSearch && (
                <Box
                  {...props}
                  sx={{
                    ':hover': {
                      backgroundColor: 'red',
                    },
                  }}
                  // onClick={() => handleSearchData(val)}
                >
                  <Typography
                    color={'#929292'}
                    fontSize={'12px'}
                    sx={{ ':hover': { color: '#665CD7' } }}
                  >
                    {option?.label}
                  </Typography>
                </Box>
              )} */}
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
          >
            {children}
            <Component />
          </Paper>
        )}
        renderInput={(params) => (
          <TextField
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
                    <Search />
                  </InputAdornment>
                </>
              ),
              endAdornment: (
                <>
                  <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
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
