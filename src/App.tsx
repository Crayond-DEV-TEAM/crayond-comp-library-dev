import { Language } from "./components/language";
import React, { useState } from 'react';


function App() {
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

  const handleDefaultChange = (e: any, val: { title: string, year: string }) => {
    debugger
    setOptionValue(val as never)
    setSelectedLang({
      ...selectedLang, allData: {
        langName: val?.title,
        langText: val?.year,
      }
    })
  }

  console.log(selectedLang);
  return (
    <div className="App" style={{ width: '100%', background: '#F5F5F5', padding: '12px' }}>
      <Language
        cardStyle={{}}
        unselectedCardStyle={{}}
        cardTitleStyle={{}}
        cardSubtitleStyle={{}}
        languagesBoxStyle={{}}
        value={optionValue}
        selectedLang={selectedLang}
        options={options}
        handleDefaultChange={handleDefaultChange}
        data={data}
        handleClick={handleClick}
      />
    </div>
  )
}

export default App;
