import { Typography } from '@mui/material';
import { Cusmstyle } from '../table/style';
 
export default function Link(props: any) {
  const { Celldata, val } = props;
  
  return (
     <Typography component={"span"} sx={Cusmstyle.link} onClick={()=>val?.viewHandel(Celldata?.id)}>{val?.label}</Typography>
  );
}

Link.defaultProps = {
  Celldata: {},
  val: {},
};
