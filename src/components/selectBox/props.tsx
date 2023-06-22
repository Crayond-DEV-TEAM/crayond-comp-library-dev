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
    checkboxIcon: React.ReactElement,
    uncheckedIcon: React.ReactElement,
    checkboxWidth: string,
    checkboxHeight: string,
    checkboxBorderRadius: string,
    CheckableData: { title: string; isChecked: boolean; }[],
    handleCheckedItem: (val: object, index: number) => void,
    handleDefaultSelectChange: (val: any, newValue: object) => void;
    handleChange: (val: object, index: number) => void,
    defaultData: { title: string; year: number; }[],
    multi: boolean,
    checkBoxData: { title: string; isChecked: boolean; }[];
    limitTags: number;
    groupingProps: {
        isCloseIcon: boolean,
        isSearch: boolean,
        handleChange: (key: string, e: any,
            val: { title: string; isChecked: boolean; } | { title: string; isChecked: boolean; }[] | null
        ) => void,
        groupedData: CheckedOption[] | CheckedOption,
        arrData: CheckedOption[],
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

}
