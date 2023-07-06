import { Box, Typography, Grid, Stack } from '@mui/material';
import { Styles } from './styles';
import React, { useState } from 'react';

export default function Action(props: languageProps) {
  const {
    // actionList,
  } = props;

  interface languageProps {
    langName: string,
    langText: string
  }

  const data = {
    allData: [
      {
        id: 1,
        langName: 'Hindi',
        langText: 'हिन्दी',
      },
      {
        id: 2,
        langName: 'Tamil',
        langText: 'தமிழ்'
      },
      {
        id: 3,
        langName: 'Malayalam',
        langText: 'മലയാളം'
      },
      {
        id: 4,
        langName: 'English',
        langText: 'English'
      },
      {
        id: 5,
        langName: 'Arabic',
        langText: 'اَلْعَرَبِيَّةُ'
      },
      {
        id: 6,
        langName: 'Sanskrit',
        langText: 'संस्कृत '
      },
      {
        id: 7,
        langName: 'Greek',
        langText: 'Ελληνικά'
      },
      {
        id: 8,
        langName: 'Chinese',
        langText: '中國人'
      },
      {
        id: 9,
        langName: 'Russian',
        langText: 'французский'
      },
      {
        id: 10,
        langName: 'Marathi',
        langText: 'मराठी'
      }
    ],
    suggestionData: [
      {
        langName: 'Hindi',
        langText: 'हिन्दी'
      },
      {
        langName: 'Tamil',
        langText: 'தமிழ்'
      },
      {
        langName: 'Malayalam',
        langText: 'മലയാളം'
      },
      {
        langName: 'English',
        langText: 'English'
      },
      {
        langName: 'Arabic',
        langText: 'اَلْعَرَبِيَّةُ'
      }
    ]
  }

  const [selectedLang, setSelectedLang] = useState({
    allData: {
    },
    suggestionData: {
    }
  })


  const handleClick = (val: languageProps, index: number, parent: string) => {

    if (parent === 'allData') {
      setSelectedLang({
        ...selectedLang, allData: val
      })
    } else {
      setSelectedLang({
        ...selectedLang, suggestionData: val
      })
    }
  }
  console.log(selectedLang);

  return (
    <Box>

      <Box sx={Styles?.parentBox}>
        <Stack direction='row' alignItems='center'>
          <Box>
            <Typography sx={Styles?.title}>Select your language</Typography>
            <Typography sx={Styles?.subTitle}>Suggested for you</Typography>
          </Box>
        </Stack>
        <Grid container>
          {
            data?.suggestionData?.map((val: languageProps, index: number) => (
              <Grid item xs={3} key={index} onClick={() => handleClick(val, index, 'allData')}>
                <Box sx={val?.langName === selectedLang?.allData?.langName ? Styles.unSelectedCard : Styles?.card}>
                  <Typography sx={Styles?.langName}>{val?.langName}</Typography>
                  <Typography sx={Styles?.langText}>{val?.langText}</Typography>
                </Box>
              </Grid>
            ))
          }
        </Grid>
        <Typography mt={1} sx={Styles?.title}>All languages </Typography>
      </Box >
      <Box>
        <Grid container>
          {
            data?.allData?.map((val: languageProps, index: number) => (
              <Grid item xs={3} key={index} onClick={() => handleClick(val, index, 'suggestionData')}>
                <Box sx={val?.langName === selectedLang?.suggestionData?.langName ? Styles.unSelectedCard : Styles?.card}>
                  <Typography sx={Styles?.langName}>{val?.langName}</Typography>
                  <Typography sx={Styles?.langText}>{val?.langText}</Typography>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box >
  );
}

Action.defaultProps = {

};