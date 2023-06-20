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
    handleDefaultSelectChange: (val: object, index: number) => void;
    handleChange: (val: object, index: number) => void,
    defaultData: { title: string; year: number; }[],

}
