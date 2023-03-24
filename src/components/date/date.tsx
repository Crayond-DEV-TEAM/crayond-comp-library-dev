import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';
import moment from 'moment';

export default function Date(props: any) {
   const {Celldata, val} = props;
  return (
    <Typography sx={Cusmstyle.fontStyle}>{moment(Celldata[val.name]).format(val.format)} </Typography>
  );
}

Date.defaultProps = {
  Celldata: {},
  val: {},
};