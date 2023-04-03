import { Typography } from '@mui/material';
import { Cusmstyle } from '../table/style';

interface LinkProps {
  id: string | number;
  label: string;
  viewHandel:Function;
}
export default function Link(props: LinkProps) {
  const { id, label, viewHandel } = props;

  return (
    <Typography
      component={'span'}
      sx={Cusmstyle.link}
      onClick={() =>viewHandel(id)}
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
