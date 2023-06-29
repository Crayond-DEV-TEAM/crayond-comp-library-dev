import React, { useState } from "react";
import ReactQuill, { Quill, editor } from "react-quill";
// import ImageResize  from 'quill-image-resize-module';
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./customToolbar";
import { Styles } from "../style";
// import styled from 'styled-components';
import { styled } from '@mui/system';
import { Box } from '@mui/material';


const Editor = () => {
    const [text, setText] = useState("");

    const handleChange = (html: React.SetStateAction<string>) => {
        setText(html);
    };
    const modules = {
        toolbar: {
            container: "#toolbar"
        }
    };
    const formats = [
        "font",
        "size",
        "bold",
        "underline",
        "strike",
        "color",
        "background",
        "script",
        "header",
        "blockquote",
        "code-block",
        "indent",
        "list",
        "direction",
        "align",
        "link",
        "image",
        "video",
        "formula"
    ];

    return (
        <>
            <Box sx={{
                '.ql-editor': {
                    height: '200px',
                    color: '#000',
                    '&::before': {
                        fontStyle: 'inherit !important'
                    }
                }
            }}>
                <ReactQuill
                    placeholder="Placeholder"
                    value={text}
                    onChange={handleChange}
                    modules={modules}
                    formats={formats}
                />
                <CustomToolbar />
            </Box>

        </>
    );
};

export default Editor;
