import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';

export default function IconWithText(props: any) {
  const { Celldata, val } = props;
  return (
    <Box display={"flex"} justifyContent={Celldata[val.name]?.label ? "" : "center"}>
    <Box
    sx={Cusmstyle.iconText}
  >
    { Celldata[val.name]?.icon}
    {Celldata[val.name]?.label && 
    <Typography
    sx={Cusmstyle.fontStyle}
    >
      {Celldata[val.name]?.label}
    </Typography>
    }
  </Box>
  </Box>
  );
}

IconWithText.defaultProps = {
  Celldata: {},
  val: {},
};
