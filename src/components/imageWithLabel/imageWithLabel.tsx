import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';

interface ImageWithLabel {
  variant: 'circular' | 'rounded' | 'square' | undefined;
  label: string;
  image: string | undefined;
}
export default function ImageWithLabel(props: ImageWithLabel) {
  const { image, variant, label } = props;
  return (
    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
      <Avatar variant={variant} sx={Cusmstyle.labelImage} alt="" src={image}>
        <Typography component={'h6'} sx={Cusmstyle.fontStyle}>{label[0]}</Typography>
      </Avatar>
      <Typography sx={Cusmstyle.fontStyle}>{label}</Typography>
    </Box>
  );
}

ImageWithLabel.defaultProps = {
  image: '',
  label: '',
  variant: 'circular',
};
