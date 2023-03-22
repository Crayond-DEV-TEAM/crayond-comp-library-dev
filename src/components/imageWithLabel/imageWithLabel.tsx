import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';

export default function ImageWithLabel(props: any) {
  const { Celldata, val } = props;
  return (
    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
      <Avatar
        variant={val?.variant}
        sx={Cusmstyle.labelImage}
        alt=""
        src={Celldata[val.name]?.image}
      />
      <Typography>{Celldata[val.name]?.label}</Typography>
    </Box>
  );
}

ImageWithLabel.defaultProps = {
  Celldata: {},
  val: {},
};
