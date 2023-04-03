import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';

interface TextProps  {
  value:string
}
export default function Text(props: TextProps) {
  const { value } = props;
  return (
    <Typography sx={Cusmstyle.fontStyle}>{value} </Typography>
  );
}

Text.defaultProps = {
  value: "",
};
