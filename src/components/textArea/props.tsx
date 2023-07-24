import { SxProps } from "@mui/material";

export interface TextAreaProps {
    value: string,
    handleChange: (html: string) => void,
    inputHeight?: string,
    reverseToolbarSx?: boolean
    minWidth?: string;
    maxWidth?: string;
    border?: string;
    borderRadius?: string;
    placeholder?:  string;
    background?: string;
    parentSx?: SxProps;
    reactQuillProps: ReactQuillProps;
    
}
 interface RangeStatic {
    index: number;
    length: number;
}
type Sources = "api" | "user" | "silent";
type Range = RangeStatic | null;
interface ReactQuillProps {
    bounds?: string | HTMLElement;
    children?: React.ReactElement<any>;
    className?: string;
    defaultValue?: any;
    formats?: string[];
    id?: string;
    modules?: any;
    onChange?(value: string, delta: any, source: Sources, editor: UnprivilegedEditor): void;
    onChangeSelection?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
    onFocus?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
    onBlur?(previousSelection: Range, source: Sources, editor: UnprivilegedEditor): void;
    onKeyDown?: React.EventHandler<any>;
    onKeyPress?: React.EventHandler<any>;
    onKeyUp?: React.EventHandler<any>;
    placeholder?: string;
    preserveWhitespace?: boolean;
    readOnly?: boolean;
    scrollingContainer?: string | HTMLElement;
    style?: React.CSSProperties;
    tabIndex?: number;
    theme?: string;
    value?: any;
}

interface UnprivilegedEditor {
    getLength(): number;
    getText(index?: number, length?: number): string;
    getHTML(): string;
    // getBounds(index: number, length?: number): BoundsStatic;
    // getSelection(focus?: boolean): RangeStatic;
    // getContents(index?: number, length?: number): DeltaStatic;
}

export interface formatButtons {
    format: [
    {
        className?: "ql-bold",
        value?: "bol"
    },
    {
        className?: "ql-italic",
        value?: "ital"
    },
    {
        className?: "ql-underline",
        value?: "under"
    },
]
}