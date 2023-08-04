import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Language } from './index';
import React, { useState } from 'react';
import GlobeSvg from '../../assets/globe';


export default {
  title: 'CommonTable/language',
  component: Language,
} as ComponentMeta<typeof Language>;

const Template: ComponentStory<typeof Language> = () => {
  interface languageProps {
    langName: string;
    langText: string;
  }

  interface FilmOptionType {
    title: string | number;
    year: number | string;
  }

  const data = {
    allData: [
      {
        langName: 'Hindi',
        langText: 'हिन्दी',
      },
      {
        langName: 'Tamil',
        langText: 'தமிழ்',
      },
      {
        langName: 'Malayalam',
        langText: 'മലയാളം',
      },
      {
        langName: 'English',
        langText: 'English',
      },
      {
        langName: 'Arabic',
        langText: 'اَلْعَرَبِيَّةُ',
      },
      {
        langName: 'Sanskrit',
        langText: 'संस्कृत ',
      },
      {
        langName: 'Greek',
        langText: 'Ελληνικά',
      },
      {
        langName: 'Chinese',
        langText: '中國人',
      },
      {
        langName: 'Russian',
        langText: 'французский',
      },
      {
        langName: 'Marathi',
        langText: 'मराठी',
      },
    ],
    suggestionData: [
      {
        langName: 'Hindi',
        langText: 'हिन्दी',
      },
      {
        langName: 'Tamil',
        langText: 'தமிழ்',
      },
      {
        langName: 'Malayalam',
        langText: 'മലയാളം',
      },
      {
        langName: 'English',
        langText: 'English',
      },
      {
        langName: 'Arabic',
        langText: 'اَلْعَرَبِيَّةُ',
      },
    ],
  };
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
      langText: '',
    },
    suggestionData: {
      langName: '',
      langText: '',
    },
  });

  const [optionValue, setOptionValue] = useState();

  const handleClick = (val: languageProps, index: number, parent: string) => {
    if (parent === 'allData') {
      setSelectedLang({
        ...selectedLang,
        allData: val,
      });
    } else {
      setSelectedLang({
        ...selectedLang,
        suggestionData: val,
      });
    }
  };

  const options = data?.allData?.map((val: languageProps) => {
    return {
      title: val?.langName,
      year: val?.langText,
    };
  });

  const handleDefaultChange = (e: any, val: FilmOptionType) => {
    const newValue = val as FilmOptionType 
    setOptionValue(val as never);
    setSelectedLang({
      ...selectedLang,
      allData: {
        langName: newValue?.title as string,
        langText: newValue?.year as string,
      },
    });
  };

  return (
    <Language
      subTitle="Suggested for you"
      titleLabel="Select your language"
      allLaguageLabel="All languages"
      subTitleStyle={{}}
      titleLabelStyle={{}}
      cardStyle={{}}
      unselectedCardStyle={{}}
      cardSubtitleStyle={{}}
      languagesBoxStyle={{}}
      data={data}
      cardTitleStyle={{}}
      value={optionValue}
      handleDefaultChange={handleDefaultChange}
      selectedLang={selectedLang}
      handleClick={handleClick}
      options={options}
      selectProps={{
        isCloseIcon: false,
        isSearch: false,
        defaultValue: options,
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
          startEndornment: <GlobeSvg />,
          endEndornment:  <></>,
        },
      }}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
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
  value: [],
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
    defaultValue: [],
    isCloseIcon: false,
    isSearch: false,
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
      endEndornment: <></>,
    },
  },
};
