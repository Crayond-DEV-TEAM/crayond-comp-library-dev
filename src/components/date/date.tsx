import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';
import moment from 'moment';

interface DateProps {
  format: string;
  value: any;
}
export default function Date(props: DateProps) {
  const { format, value } = props;
  return (
    <Typography sx={Cusmstyle.fontStyle}>
      {moment(format).format(value)}
    </Typography>
  );
}

Date.defaultProps = {
  value: '',
  format: 'YYYY MMM DD',
};
