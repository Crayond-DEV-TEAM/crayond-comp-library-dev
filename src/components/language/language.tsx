import { Box, Typography, Grid } from '@mui/material';
import { Styles } from './styles';
import { SelectBoxComponent } from '../selectBox';
import GlobeSvg from '../../assets/globe';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { languageInterface } from './props';

export default function Language(props: languageInterface) {
  const {
    cardStyle,
    unselectedCardStyle,
    cardSubtitleStyle,
    languagesBoxStyle,
    data = {
      allData: [],
      suggestionData: [],
    },
    cardTitleStyle,
    value,
    handleDefaultChange,
    selectedLang = {
      allData: {
        langName: '',

      },
      suggestionData: {
        langName: '',
      }
    },
    handleClick,
    options
  } = props;

  interface languageProps {
    langName: string,
    langText: string
  }


  console.log(data, 'data');

  return (
    <Box>
      <Box py={2}>
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
            defaultData: value,
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
                fontWeight: '600',
                color: '#091B29',
                fontSize: '14px',
              }
            },
            dropdown: {
              minWidth: '200px ',
              maxWidth: '200px '
            }
          }}

        />
      </Box>
      <Box sx={{ ...Styles?.parentBox, ...languagesBoxStyle }}>
        <Typography sx={Styles?.title}>Select your language</Typography>
        <Typography sx={Styles?.subTitle}>Suggested for you</Typography>
        <Grid container>
          {
            data?.suggestionData?.map((val: languageProps, index: number) => (
              <Grid item xs={3} key={index} onClick={() => handleClick(val, index, 'suggestionData')}>
                <Box sx={
                  val?.langName === selectedLang?.suggestionData?.langName ?
                    { ...Styles.unSelectedCard, ...cardStyle } : { ...Styles?.card, ...unselectedCardStyle }
                }>
                  <Typography sx={Styles?.langName}>{val?.langName}</Typography>
                  <Typography sx={Styles?.langText}>{val?.langText}</Typography>
                </Box>
              </Grid>
            ))
          }
        </Grid>
        <Typography mt={1} sx={Styles?.title}>All languages</Typography>
        <Grid container width={'100%'}
          sx={{
            backgroundColor: '#fff'
          }}>
          {
            data?.allData?.map((val: languageProps, index: number) => (
              <Grid item xs={3} key={index} onClick={() => handleClick(val, index, 'allData')}>
                <Box sx={val?.langName === selectedLang?.allData?.langName ?
                  { ...Styles.unSelectedCard, ...cardStyle } : { ...Styles?.card, ...unselectedCardStyle }}>
                  <Typography sx={{ ...Styles?.langName, ...cardTitleStyle }}>{val?.langName}</Typography>
                  <Typography sx={{ ...Styles?.langText, ...cardSubtitleStyle }}>{val?.langText}</Typography>
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