import { styled } from '@mui/system';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import SubscriptIcon from '@mui/icons-material/Subscript';

const renderOptions = (formatData: { options: any; className?: any; }) => {
    const { className, options } = formatData;
    return (
        <select className={className}>
            <option selected={true}></option>
            {options?.map((value: string | number | readonly string[] | undefined) => {
                // eslint-disable-next-line react/jsx-key
                return <option value={value}></option>;
            })}
        </select>
    );
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
});

const formatsSvg = (key: string | undefined, value: string | undefined) => {
    switch (key) {
        case 'ql-bold':
            return <FormatBoldIcon />
        case 'ql-italic':
            return <FormatItalicIcon />
        case 'ql-underline':
            return <FormatUnderlinedIcon />
        case 'ql-strike':
            return <StrikethroughSIcon />
        case 'ql-script':
            return value === 'sub' ? <SubscriptIcon /> : <SuperscriptIcon />
        case 'ql-list':
            return value === 'ordered' ? <FormatListNumberedIcon /> : <FormatListBulletedIcon />
        default:
            break;
    }
}
const renderSingle = (formatData: { className?: string; value?: string; }) => {
    const { className, value } = formatData;
    return <ToolBox type="button" className={className} value={value}>
        {formatsSvg(className, value)}
    </ToolBox>
};

const CustomToolbar = (props: any) => {
    
    return (
        <div id="toolbar" style={{
            border: '1px solid #E9E9E9',
            borderRadius: '4px'
        }}>
            <span className="ql-formats" >
            {props?.state?.map((classes: any, index: number) => {
                return (<span>
                    {
                      classes?.options ? renderOptions(classes) : renderSingle(classes)
                    }
                    </span>);
                })
                }
                </span>
    
        </div>
    )
};
export default CustomToolbar;