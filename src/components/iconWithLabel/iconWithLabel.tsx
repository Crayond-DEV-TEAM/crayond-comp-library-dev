import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';

export default function IconWithLabel(props: any) {
   const {Celldata, val} = props;
  return (
    <Box display={"flex"}>
    <Box
    sx={{
      ...Cusmstyle.labelIconBackground,
      backgroundColor: Celldata[val.name]?.bgColor
        ? Celldata[val.name]?.bgColor
        : '#e2eafa',
    }}
  >
    { Celldata[val.name]?.icon}
    <Typography
      sx={{
        ...Cusmstyle.labelText,
        color: Celldata[val.name]?.color
          ? Celldata[val.name]?.color
          : '#7692cc',
      }}
    >
      {Celldata[val.name]?.label}
    </Typography>
  </Box>
  </Box>
  );
}

IconWithLabel.defaultProps = {
  Celldata: {},
  val: {},
};