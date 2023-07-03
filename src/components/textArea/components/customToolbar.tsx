import React from "react";
import { styled } from '@mui/system';
import formats from "./toolbarOptions.js";
import { Typography } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';

const renderOptions = (formatData: { options: any; className?: any; }) => {
    const { className, options } = formatData;
    return (
        <select className={className}>
            <option selected="selected"></option>
            {options.map((value: string | number | readonly string[] | undefined) => {

                // eslint-disable-next-line react/jsx-key
                return <option value={value}>
                    <FormatBoldIcon />
                </option>;
            })}
        </select>
    );
};

const formatsSvg = (key: string) => {
    switch (key) {
        case 'ql-bold':
            return <FormatBoldIcon />
        case 'ql-italic':
            return
        case 'ql-underline':
            return <FormatBoldIcon />
        case 'ql-strike':
            return <FormatBoldIcon />
        case 'ql-list':
            return <FormatBoldIcon />
        case 'ql-script':
            return <FormatBoldIcon />
        default:
            break;
    }
}
const renderSingle = (formatData: { options?: any; className?: any; value?: any; }) => {
    const { className, value } = formatData;
    // debugger
    return <ToolBox type="button" >
        {formatsSvg(className)}
        {/* {
            className === 'ql-bold' ? <FormatBoldIcon /> : <h1>hsad</h1>
        } */}
        {/* <Typography sx={{ color: 'red' }}>hsbda</Typography> */}
        {/* nfsd */}
        {/* <FormatBoldIcon /> */}
    </ToolBox >
};

const ToolBox = styled('button')({
    // padding: 8,
    // borderRadius: 4,
    // border: '5px solid red'
    '& svg': {
        '& path': {
            fill: 'red !important'
        }
    }
});
const CustomToolbar = () => (
    <div id="toolbar">
        {/* <ToolBox> */}
        {formats.map((classes: { options: any; }[]) => {
            return (
                // eslint-disable-next-line react/jsx-key
                <span className="ql-formats">
                    {classes.map((formatData: { options: unknown; }) => {
                        debugger
                        // return formatData.options
                        //     ? renderOptions(formatData)
                        //     : renderSingle(formatData);
                        return renderSingle(formatData);
                    })}
                </span>
            );
        })}
        {/* </ToolBox> */}

    </div>
);
export default CustomToolbar;
