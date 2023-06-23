interface FilmOptionType {
    title: string;
    year: number;
}

interface CheckedOption {
    title: string;
    isChecked: boolean;
}

export interface SelectBoxProps {
    multiple: boolean,
    data: { title: string; year: number; }[],
    rootStyleSx: object,
    multi: boolean,
    limitTags: number;
    groupingProps: {
        isCloseIcon: boolean,
        isSearch: boolean,
        handleGroupChange: (e: any,
            val: { title: string; year: number; } | { title: string; year: number; }[] | null
        ) => void,
        groupedData: CheckedOption[],
        arrData: CheckedOption[],
        defaultValue: CheckedOption[],
        dropdown: {
            minHeight: string,
            maxWidth: string,
            minWidth: string,
            maxHeight: string,
            backgroundColor: string,
            color: string
        },
        input: {
            minHeight: string,
            maxWidth: string,
            minWidth: string,
            maxHeight: string,
            backgroundColor: string,
            color: string,
            border: string,
            borderRadius: string
        }
    }
    defaultProps: {
        isCloseIcon: boolean,
        isSearch: boolean,
        handleDefaultChange: (e: any,
            val: { title: string; year: number; } | { title: string; year: number; }[] | null
        ) => void,
        defaultData: FilmOptionType[],
        arrData: FilmOptionType[],
        defaultValue: FilmOptionType[],
        dropdown: {
            minHeight: string,
            maxWidth: string,
            minWidth: string,
            maxHeight: string,
            backgroundColor: string,
            color: string
        },
        input: {
            minHeight: string,
            maxWidth: string,
            minWidth: string,
            maxHeight: string,
            backgroundColor: string,
            color: string,
            border: string,
            borderRadius: string
        }
    }
    chipProps: {
        isCloseIcon: boolean,
        isSearch: boolean,
        handleChipChange: (e: any,
            val: { title: string; year: number; } | { title: string; year: number; }[] | null
        ) => void,
        chipData: FilmOptionType[],
        arrData: FilmOptionType[],
        defaultValue: FilmOptionType[],
        dropdown: {
            minHeight: string,
            maxWidth: string,
            minWidth: string,
            maxHeight: string,
            backgroundColor: string,
            color: string
        },
        input: {
            minHeight: string,
            maxWidth: string,
            minWidth: string,
            maxHeight: string,
            backgroundColor: string,
            color: string,
            border: string,
            borderRadius: string
        }
    }
    checkboxProps: {
        isCloseIcon: boolean,
        isSearch: boolean,
        handleCheckedItem: (e: any,
            val: { title: string; isChecked: boolean; }
        ) => void,
        CheckableData: CheckedOption[],
        arrData: CheckedOption[],
        defaultValue: CheckedOption[],
        dropdown: {
            minHeight: string,
            maxWidth: string,
            minWidth: string,
            maxHeight: string,
            backgroundColor: string,
            color: string
        },
        input: {
            minHeight: string,
            maxWidth: string,
            minWidth: string,
            maxHeight: string,
            backgroundColor: string,
            color: string,
            border: string,
            borderRadius: string
        }
    },
    selectType: 'default' | 'chip' | 'checkbox' | 'grouping'
}
