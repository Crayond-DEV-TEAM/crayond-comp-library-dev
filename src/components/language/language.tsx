import { Box, Typography, Grid } from '@mui/material';
import { Styles } from './styles';
import React, { useState } from 'react';
import { SelectBoxComponent } from '../selectBox';
import GlobeSvg from '../../assets/globe';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Language(props: languageProps) {
  const {
    // actionList,
  } = props;

  interface languageProps {
    langName: string,
    langText: string
  }

  interface FilmOptionType {
    title: string;
    year: string;
  }

  const data = {
    allData: [
      {
        langName: 'Hindi',
        langText: 'हिन्दी',
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
      },
      {
        langName: 'Sanskrit',
        langText: 'संस्कृत '
      },
      {
        langName: 'Greek',
        langText: 'Ελληνικά'
      },
      {
        langName: 'Chinese',
        langText: '中國人'
      },
      {
        langName: 'Russian',
        langText: 'французский'
      },
      {
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
  interface SelectedLangState {
    allData: {
      langName: string;
      langText: string;
    };
    suggestionData: {
      langName: string;
      langText: string;
    };
  }
  const [selectedLang, setSelectedLang] = useState<SelectedLangState>({
    allData: {
      langName: '',
      langText: ''
    },
    suggestionData: {
      langName: '',
      langText: ''
    }
  })

  const [optionValue, setOptionValue] = useState()


  const handleClick = (val: languageProps, index: number, parent: string) => {
    debugger
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

  const options = data?.allData?.map((val: languageProps) => {
    return {
      title: val?.langName,
      year: val?.langText
    }
  })

  const handleDefaultChange = (val: any, newValue: FilmOptionType) => {
    debugger
    setOptionValue(newValue as never)
    setSelectedLang({
      ...selectedLang, allData: {
        langName: newValue?.title,
        langText: newValue?.year,

      }
    })
  }

  console.log(selectedLang);


  return (
    <Box>
      <Box p={2}>
        <SelectBoxComponent
          SelectDropdownSx={{
            padding: '0',
            display: 'flex',
            justifyContent: 'end'
          }}
          multiple={false}
          selectType='default'
          defaultProps={{
            isSearch: false,
            handleDefaultChange: handleDefaultChange,
            defaultData: optionValue,
            arrData: options,
            islabel: false,
            label: '',
            input: {
              minWidth: '200px !important',
              maxWidth: '200px !important ',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: 'none',
              isStartIcon: true,
              startEndornment: <GlobeSvg />,
              // endEndornment: <KeyboardArrowDownIcon />,
              inputPropsSx: {
                fontWeight: '500',
                color: '#091B29',
                fontSize: '16px',
              }
            },
            dropdown: {
              minWidth: '200px ',
              maxWidth: '200px '

            }
          }}

        />
      </Box>
      <Box sx={Styles?.parentBox}>
        <Typography sx={Styles?.title}>Select your language</Typography>
        <Typography sx={Styles?.subTitle}>Suggested for you</Typography>
        <Grid container>
          {
            data?.suggestionData?.map((val: languageProps, index: number) => (
              <Grid item xs={3} key={index} onClick={() => handleClick(val, index, 'suggestionData')}>
                <Box sx={val?.langName === selectedLang?.suggestionData?.langName ? Styles.unSelectedCard : Styles?.card}>
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
        <Grid container width={'100%'} px={2}
          sx={{
            backgroundColor: '#fff'
          }}>
          {
            data?.allData?.map((val: languageProps, index: number) => (
              <Grid item xs={3} key={index} onClick={() => handleClick(val, index, 'allData')}>
                <Box sx={val?.langName === selectedLang?.allData?.langName ? Styles.unSelectedCard : Styles?.card}>
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

Language.defaultProps = {

};