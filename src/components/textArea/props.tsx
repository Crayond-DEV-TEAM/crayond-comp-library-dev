export interface TextAreaProps {
    value: string,
    handleChange: (html: React.SetStateAction<string>) => void,
    inputHeight?: string,
    reverseToolbarSx?: boolean
    minWidth?: string;
    maxWidth?: string;
    border?: string;
    borderRadius?: string;
    placeholder?:  string
}