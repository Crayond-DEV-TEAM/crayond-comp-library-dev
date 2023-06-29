import React from "react";
import { styled } from '@mui/system';
import formats from "./toolbarOptions.js";

const renderOptions = (formatData: { options: any; className?: any; }) => {
    const { className, options } = formatData;
    return (
        <select className={className}>
            <option selected="selected"></option>
            {options.map((value: string | number | readonly string[] | undefined) => {
                // eslint-disable-next-line react/jsx-key
                return <option value={value}></option>;
            })}
        </select>
    );
};
const renderSingle = (formatData: { options?: any; className?: any; value?: any; }) => {
    const { className, value } = formatData;
    debugger
    return <ToolBox className={className} type="button" value={value}>
            jkasbdkjs
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
                        return formatData.options
                            ? renderOptions(formatData)
                            : renderSingle(formatData);
                    })}
                </span>
            );
        })}
        {/* </ToolBox> */}

    </div>
);
export default CustomToolbar;
