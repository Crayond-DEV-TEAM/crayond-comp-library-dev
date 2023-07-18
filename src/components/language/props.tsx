interface languageProps {
    langName: string,
    langText: string
}

interface FilmOptionType {
  title: string | number;
  year: string | number;
}

interface selectedLanguageObject {
    allData: {
      langName: string;
      langText: string;
    };
    suggestionData: {
      langName: string;
      langText: string;
    };
  }

interface SelectedLangState {
    allData: {
        langName: string;
        langText: string;
    }[];
    suggestionData: {
        langName: string;
        langText: string;
    }[];
}
export interface languageInterface {
    cardStyle: object,
    unselectedCardStyle: object,
    cardTitleStyle: object,
    cardSubtitleStyle: object,
    languagesBoxStyle: object,
    value: FilmOptionType[] | undefined,
    options: { title: string, year: string }[],
    handleDefaultChange: (event: React.SyntheticEvent, val: FilmOptionType) => void,
    data:SelectedLangState,
    selectedLang: selectedLanguageObject,
    handleClick: (val: languageProps, index: number, parent: string) => void
}