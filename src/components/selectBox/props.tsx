interface FilmOptionType {
    title: string;
    year: number;
}

interface CheckedOption {
    title: string;
    isChecked: boolean;
}

export interface SelectBoxProps {
    multiple?: boolean,
    rootStyle: object,
    limitTags?: number;
    groupingProps?: {
        isCloseIcon?: boolean,
        isSearch?: boolean,
        handleGroupChange?: (e: any,
            val: FilmOptionType[]
        ) => void,
        groupedData?: FilmOptionType[],
        arrData?: FilmOptionType[],
        defaultValue?: FilmOptionType[],
        label?: string,
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
            borderRadius?: string
        }
    }
    defaultProps?: {
        isCloseIcon?: boolean,
        isSearch?: boolean,
        handleDefaultChange?: (e: any,
            val: FilmOptionType[]
        ) => void,
        defaultData?: FilmOptionType[],
        arrData?: FilmOptionType[],
        defaultValue?: FilmOptionType[],
        label?: string,
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
            borderRadius?: string
        }
    }
    chipProps?: {
        isCloseIcon?: boolean,
        isSearch?: boolean,
        handleChipChange?: (e: any,
            val: FilmOptionType[]
        ) => void,
        chipData?: FilmOptionType[],
        arrData?: FilmOptionType[],
        defaultValue?: FilmOptionType[],
        label?: string,
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
            borderRadius?: string
        }
    }
    checkboxProps?: {
        isCloseIcon?: boolean,
        isSearch?: boolean,
        handleCheckedItem?: (e: any,
            val: CheckedOption[]) => void,
        CheckableData: CheckedOption[],
        arrData?: CheckedOption[],
        label?: string,
        defaultValue?: CheckedOption[],
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
            borderRadius?: string
        }
    },
    selectType: 'default' | 'chip' | 'checkbox' | 'grouping'
}
