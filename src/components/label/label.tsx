import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';

interface LabelProps {
  color: string;
  bgColor: string;
  label: string;
  onClickFun: Function;
}
export default function Label(props: LabelProps) {
  const { color, bgColor, label, onClickFun } = props;
  return (
    <Box
      onClick={()=>onClickFun()}
      sx={{
        ...Cusmstyle.labelBackground,
        backgroundColor: bgColor,
      }}
    >
      <Typography
        sx={{
          ...Cusmstyle.labelText,
          color: color,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

Label.defaultProps = {
  color: '#e2eafa',
  bgColor: '#7692cc',
  label: '',
  onClickFun:()=>{}
};
