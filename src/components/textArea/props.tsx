export interface TextAreaProps {
    value: string,
    handleChange: (html: React.SetStateAction<string>) => void,
    inputHeight: string,
    reverseToolbarSx: boolean
    minWidth: string;
    maxWidth: string
}