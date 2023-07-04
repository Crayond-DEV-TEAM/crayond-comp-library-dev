import React from "react";
import { styled } from '@mui/system';
import formats from "./toolbarOptions.js";
import { Typography } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import SubscriptIcon from '@mui/icons-material/Subscript';

// const renderOptions = (formatData: { options: any; className?: any; }) => {
//     const { className, options } = formatData;
//     return (
//         <select className={className}>
//             <option></option>
//             {options.map((value: string | number | readonly string[] | undefined) => {

//                 // eslint-disable-next-line react/jsx-key
//                 return <option value={value}>
//                 </option>;
//             })}
//         </select>
//     );
// };

const formatsSvg = (key: string, value: string) => {
    switch (key) {
        case 'ql-bold':
            return <FormatBoldIcon />
        case 'ql-italic':
            return <FormatItalicIcon />
        case 'ql-underline':
            return <FormatUnderlinedIcon />
        case 'ql-strike':
            return <StrikethroughSIcon />
        case 'ql-list':
            return value === 'ordered' ? <FormatListNumberedIcon /> : <FormatListBulletedIcon />
        case 'ql-script':
            return value === 'sub' ? <SubscriptIcon /> : <SuperscriptIcon />
        default:
            break;
    }
}
const renderSingle = (formatData: { options?: any; className?: any; value?: any; }) => {
    const { className, value } = formatData;
    return <ToolBox type="button" style={{ cursor: 'pointer' }}>
        {formatsSvg(className, value)}
    </ToolBox >
};

const ToolBox = styled('button')({
    // padding: 8,
    // borderRadius: 4,
    // border: '5px solid red'
    '& svg': {
        color: '#3B3B3B !important',
    },
    '&:hover': {
        '& svg': {
            background: '#EFEEFB !important',
            // padding:'3px',
            color: '#665CD7 !important'
        },
    },
    // '& ::focus':{
    //     background: 'yellow',
    // },

});
const CustomToolbar = () => (
    <div id="toolbar">
        {formats.map((classes: ({ className: string; value: string; } | { className: string; value?: undefined; })[], index: number) => {
            // debugger
            return (
                // eslint-disable-next-line react/jsx-key
                <span className="ql-formats" key={index}>
                    {classes.map((formatData: any) => {
                        debugger
                        return renderSingle(formatData);
                    })}
                </span>
            );
        })}

    </div>
);
export default CustomToolbar;
