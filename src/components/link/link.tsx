import { Typography } from '@mui/material';
import { Cusmstyle } from '../table/style';

interface LinkProps {
  id: string | number;
  label: string;
  viewHandel:Function;
  rowData: object | undefined;
}
export default function Link(props: LinkProps) {
  const { id, label, viewHandel, rowData } = props;

  return (
    <Typography
      component={'span'}
      sx={Cusmstyle.link}
      onClick={(e) =>viewHandel(id, rowData, e)}
    >
      {label}
    </Typography>
  );
}

Link.defaultProps = {
  id: '',
  label: '',
  viewHandel:()=>{}
};
