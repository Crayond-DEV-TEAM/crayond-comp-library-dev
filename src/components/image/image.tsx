import { Box } from '@mui/material';
import { ImageProps } from "./imageProps";
export default function Image(props: ImageProps) {
    const { inLineStyles, className, imageStyle, ...imgProps } = props;

    return (
        // <Box sx={inLineStyles} className={className}>
        <img style={imageStyle} {...imgProps} />
        // </Box >
    );
}
Image.defaultProps = {
    alt: '',
    color: 'inherit',
    component: 'img',
    crossOrigin: undefined,
    decoding: 'async',
    height: 'auto',
    sizes: '',
    src: '',
    srcSet: '',
    width: '100%',
    inLineStyles: {},
    className: '',
    imageStyle: {},
    aspectRatio: undefined,

};