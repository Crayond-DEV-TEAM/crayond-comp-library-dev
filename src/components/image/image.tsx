import { Box } from '@mui/material';
import { ImageProps } from "./imageProps";
export default function Image(props: ImageProps) {
    const { inLineStyles, className, imageStyle, ...imgProps } = props;

    return (
        <Box sx={inLineStyles} className={className}>
            <img style={imageStyle} {...imgProps} />
        </Box >
    );
}
