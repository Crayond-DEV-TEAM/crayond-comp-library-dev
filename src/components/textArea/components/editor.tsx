import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./customToolbar";
import { Box, SxProps } from '@mui/material';
import { TextAreaProps } from "../props";

const Editor = (props: TextAreaProps) => {
    const {
        value,
        handleChange,
        parentStyleProps,
        editorStyleProps,
        formatButtonStyleProps,
        reverseToolbarSx,
        inputHeight,
        minWidth,
        maxWidth,
        border,
        borderRadius,
        placeholder,
        reactQuillProps,
        state
    } = props

    const modules = {
        toolbar: {
            container: "#toolbar"
        }
    };
    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script',
        'header', 'blockquote', 'code-block',
        'indent', 'list',
        'direction', 'align',
        'link', 'image', 'video', 'formula',
    ]
    
    return (
        <>
            <Box sx={{
                ...{
                    display: 'flex',
                    minWidth: minWidth ? minWidth : '100%',
                    background: '#fff',
                    maxWidth: maxWidth ? maxWidth : '100%',
                    width: 'auto',
                    margin: 'auto',
                    borderRadius: borderRadius ? borderRadius : '4px',
                    border: border ? border : '1px solid #E9E9E9 !important',
                    flexDirection: reverseToolbarSx ? 'column-reverse' : 'column'
                },
                ...parentStyleProps as SxProps,
                ...{
                    '.ql-container': {
                        border: 'none !important',
                        ...{
                            '.ql-editor': {
                            height: inputHeight ? inputHeight : '200px',
                            color: '#000',
                            '&::-webkit-scrollbar': {
                                width: '6px !important'
                            },
                            '&::-webkit-scrollbar-track': {
                                background: 'transparent !important'
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'rgba(0, 0, 0, 0.23) !important',
                                borderRadius: '24px',
                                transition: 'all 0.5s',
                                cursor: 'pointer'
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                background: 'rgba(146, 151, 165, 1) !important'
                            },
                            '&::-webkit-scrollbar-button': {
                                backgroundColor: 'transparent !important'
                            },
                            '&::-webkit-scrollbar-corner': {
                                backgroundColor: 'transparent !important'
                            },
                            '&::before': {
                                fontStyle: 'inherit !important',
                                fontWeight: '500'
                            }
                        },
                    ...editorStyleProps},
                    }
                }
            }}>
                <ReactQuill
                    placeholder={placeholder ? placeholder : "Placeholder"}
                    value={value}
                    onChange={handleChange}
                    modules={modules}
                    formats={formats}
                    {...reactQuillProps}
                />
                <CustomToolbar state={state} formatButtonStyleProps={formatButtonStyleProps}/>
            </Box >

        </>
    );
};

export default Editor;
