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
      {moment(value).format(format)}
    </Typography>
  );
}

Date.defaultProps = {
  value: '',
  format: 'YYYY MMM DD',
};
