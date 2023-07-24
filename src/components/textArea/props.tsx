import { SxProps } from "@mui/material";

interface EditorFormatButtons {
    formats: ('ql-font' | 'ql-size' | 'ql-bold' | 'ql-italic' | 'ql-underline' | 'ql-strike' | 'ql-color' | 'ql-background' | 'ql-list' | 'ql-indent' | 'ql-script' | 'ql-header' | 'ql-blockquote' | 'ql-code-block' | 'ql-direction' | 'ql-align' | 'ql-link' | 'ql-image' | 'ql-video' | 'ql-formula')[];
}

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
    formatButtons?: EditorFormatButtons;
    state?: ({
        className: string;
        options: string[];
        value?: undefined;
    } | {
        className: string;
        value: string;
        options?: undefined;
    } | {
        className: string;
        options?: undefined;
        value?: undefined;
    })[]
    
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