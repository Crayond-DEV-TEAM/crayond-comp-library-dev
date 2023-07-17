interface languageProps {
    langName: string,
    langText: string
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
export interface languageInterface {
    cardStyle: object,
    unselectedCardStyle: object,
    cardTitleStyle: object,
    cardSubtitleStyle: object,
    languagesBoxStyle: object,
    value: FilmOptionType[] | undefined,
    options: { title: string, year: string }[],
    handleDefaultChange: (event: any, val: { title: string, year: string }) => void,
    data: {
        allData: { langName: string; langText: string; };
        suggestionData: { langName: string; langText: string; };
    }[],
    selectedLang: SelectedLangState,
    handleClick: (val: languageProps, index: number, parent: string) => void
}