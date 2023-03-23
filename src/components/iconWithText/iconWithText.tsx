import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';

export default function IconWithText(props: any) {
  const { Celldata, val } = props;
  return (
    <Box display={"flex"}>
    <Box
    sx={Cusmstyle.iconText}
  >
    { Celldata[val.name]?.icon}
    <Typography
    >
      {Celldata[val.name]?.label}
    </Typography>
  </Box>
  </Box>
  );
}

IconWithText.defaultProps = {
  Celldata: {},
  val: {},
};
