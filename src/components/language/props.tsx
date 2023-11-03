import { SxProps } from "@mui/material";

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
    subTitle?: string,
    titleLabel?: string,
    allLaguageLabel?: string,
    subTitleStyle: SxProps,
    titleLabelStyle: SxProps,
    cardStyle?: SxProps,
    unselectedCardStyle?: SxProps,
    cardTitleStyle?: SxProps,
    cardSubtitleStyle?: SxProps,
    languagesBoxStyle?: SxProps,
    value?: FilmOptionType[] | undefined,
    options: FilmOptionType[],
    handleDefaultChange?: (event: React.SyntheticEvent, val: FilmOptionType) => void,
    data?:SelectedLangState,
    selectedLang?: selectedLanguageObject,
    handleClick: (val: languageProps, index: number, parent: string) => void,
    selectProps?: {
        isCloseIcon?: boolean,
        isSearch?: boolean,
        defaultValue: FilmOptionType[],
        label?: string,
        labelPropsSx?: object,
        islabel: boolean,
        dropdown?: {
            minHeight?: string,
            maxWidth?: string,
            minWidth?: string,
            maxHeight?: string,
            backgroundColor?: string,
            color?: string
        },
        input?: {
            minHeight?: string,
            maxWidth?: string,
            minWidth?: string,
            maxHeight?: string,
            backgroundColor?: string,
            color?: string,
            border?: string,
            borderRadius?: string,
            inputPropsSx?: object,
            isStartIcon?: boolean,
            startEndornment: JSX.Element,
            endEndornment: JSX.Element,
      }
    }
}