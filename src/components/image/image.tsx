import { Box } from '@mui/material';
import { ImageProps } from './imageProps';
import { Image_Style } from './style';


export default function Image(props: ImageProps) {
    return (
        <Box sx={{ ...Image_Style.imageSx, ...props?.imageStyle }}>
            <img src={props?.imageSrc} alt={props?.altText} width={props?.imageWidth} height={props?.imageHeight} />
        </Box>
    );
}
Image.defaultProps = {
    imageSrc: '',
    imageWidth: 0,
    imageHeight: 0,
    altText: '',
    className: "image",


};
