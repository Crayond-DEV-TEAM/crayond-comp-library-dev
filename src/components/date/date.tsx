import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';

export default function Date(props: any) {
   const {Celldata, val} = props;
  return (
    <Typography sx={Cusmstyle.cellText}>{Celldata?.[val.name]} </Typography>
  );
}