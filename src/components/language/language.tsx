import { Box, Typography, Grid, SxProps } from '@mui/material';
import { Styles } from './styles';
import { SelectBoxComponent } from '../selectBox';
import GlobeSvg from '../../assets/globe';
import { languageInterface } from './props';

export default function Language(props: languageInterface) {
  const {
    subTitle,
    titleLabel,
    titleLabelStyle,
    subTitleStyle,
    allLaguageLabel,
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
        langText: '',
      },
      suggestionData: {
        langName: '',
        langText: '',
      },
    },
    handleClick,
    selectProps = {
      isCloseIcon: false,
      isSearch: false,
      arrData: [],
      defaultValue: [],
      label: '',
      labelPropsSx: {},
      islabel: false,
      dropdown: {
        minHeight: '',
        maxWidth: '',
        minWidth: '',
        maxHeight: '',
        backgroundColor: '',
        color: '',
      },
      input: {
        minHeight: '',
        maxWidth: '',
        minWidth: '',
        maxHeight: '',
        backgroundColor: '',
        color: '',
        border: '',
        borderRadius: '',
        inputPropsSx: {},
        isStartIcon: false,
        startEndornment: <></>,
        endEndornment: '',
      },
    },
    options,
  } = props;

  interface languageProps {
    langName: string;
    langText: string;
  }

  console.log(options, 'selectProps?.defaultValue');
  

  return (
    <Box sx={{background:"#F5F5F5", padding:'8px'}}>
      <Box py={2} >
        {/* <SelectBoxComponent
          SelectDropdownSx={{
            padding: '0',
            display: 'flex',
            justifyContent: 'end',
          }}
          multiple={false}
          selectType="default"
          defaultProps={{
            isSearch: selectProps?.isSearch ? selectProps?.isSearch : false,
            islabel: selectProps?.islabel ? selectProps?.islabel : false,
            handleDefaultChange: handleDefaultChange,
            defaultData: value,
            defaultValue: selectProps?.defaultValue && selectProps?.defaultValue,
            label: selectProps?.label ? selectProps?.label : '',
            input: {
              minWidth: selectProps?.input?.minWidth
                ? selectProps?.input?.minWidth
                : '200px !important',
              maxWidth: selectProps?.input?.maxWidth
                ? selectProps?.input?.maxWidth
                : '200px !important ',
              backgroundColor: selectProps?.input?.backgroundColor
                ? selectProps?.input?.backgroundColor
                : 'white',
              borderRadius: selectProps?.input?.borderRadius
                ? selectProps?.input?.borderRadius
                : '8px',
              border: selectProps?.input?.border
                ? selectProps?.input?.border
                : 'none',
              isStartIcon: selectProps?.input?.isStartIcon
                ? selectProps?.input?.isStartIcon
                : true,
              startEndornment: selectProps?.input?.startEndornment
                ? selectProps?.input?.startEndornment
                : <GlobeSvg />, 
              // endEndornment: <KeyboardArrowDownIcon />,
              inputPropsSx: {
                ...{ fontWeight: '600', color: '#091B29', fontSize: '14px' },
                ...selectProps?.input?.inputPropsSx,
              },
            },
            arrData:options,
            dropdown: {
              minWidth: '200px ',
              maxWidth: '200px ',
            },
          }}
        /> */}
      </Box>
      <Box sx={{ ...Styles?.parentBox, ...languagesBoxStyle }}>
        <Typography sx={{...Styles?.title, ...titleLabelStyle}}>{titleLabel}</Typography>
        <Typography sx={{...Styles?.subTitle, subTitleStyle} as SxProps}>{subTitle}</Typography>
        <Grid container>
          {data?.suggestionData?.map((val: languageProps, index: number) => (
            <Grid
              item
              xs={3}
              key={index}
              onClick={() => handleClick(val, index, 'suggestionData')}
            >
              <Box
                sx={
                  val?.langName === selectedLang?.suggestionData?.langName
                    ? { ...Styles.unSelectedCard, ...cardStyle }
                    : { ...Styles?.card, ...unselectedCardStyle }
                }
              >
                <Typography sx={Styles?.langName}>{val?.langName}</Typography>
                <Typography sx={Styles?.langText}>{val?.langText}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography mt={1} sx={Styles?.title}>
          {allLaguageLabel}
        </Typography>
        <Grid
          container
          width={'100%'}
          sx={{
            backgroundColor: '#fff',
          }}
        >
          {data?.allData?.map((val: languageProps, index: number) => (
            <Grid
              item
              xs={3}
              key={index}
              onClick={() => handleClick(val, index, 'allData')}
            >
              <Box
                sx={
                  val?.langName === selectedLang?.allData?.langName
                    ? { ...Styles.unSelectedCard, ...cardStyle }
                    : { ...Styles?.card, ...unselectedCardStyle }
                }
              >
                <Typography sx={{ ...Styles?.langName, ...cardTitleStyle }}>
                  {val?.langName}
                </Typography>
                <Typography sx={{ ...Styles?.langText, ...cardSubtitleStyle }}>
                  {val?.langText}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

Language.defaultProps = {
  subTitle: 'Suggested for you',
  titleLabel: 'Select your language',
  allLaguageLabel: 'All languages',
  subTitleStyle: {},
  titleLabelStyle: {},
  cardStyle: {},
  unselectedCardStyle: {},
  cardSubtitleStyle: {},
  languagesBoxStyle: {},
  data: {
    allData: [],
    suggestionData: [],
  },
  cardTitleStyle: {},
  value: '',
  handleDefaultChange: () => false,
  selectedLang: {
    allData: {
      langName: '',
      langText: '',
    },
    suggestionData: {
      langName: '',
      langText: '',
    },
  },
  handleClick: () => false,
  options: [],
  selectProps: {
    isCloseIcon: false,
    isSearch: false,
    defaultData: [],
    arrData: [],
    defaultValue: [],
    label: '',
    labelPropsSx: {},
    islabel: false,
    dropdown: {
      minHeight: '',
      maxWidth: '',
      minWidth: '',
      maxHeight: '',
      backgroundColor: '',
      color: '',
    },
    input: {
      minHeight: '',
      maxWidth: '',
      minWidth: '',
      maxHeight: '',
      backgroundColor: '',
      color: '',
      border: '',
      borderRadius: '',
      inputPropsSx: {},
      isStartIcon: false,
      startEndornment: '',
      endEndornment: '',
    },
  },
};
