import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';
import FunnelIcon from '../../assets/funnelIcon';
interface IconWithLabelProps {
  label: string;
  icon: React.ReactNode;
}
export default function IconWithText(props: IconWithLabelProps) {
  const { label, icon } = props;
  return (
    <Box display={'flex'} justifyContent={label ? '' : 'center'}>
      <Box sx={Cusmstyle.iconText}>
        {icon}
        {label && <Typography sx={Cusmstyle.fontStyle}>{label}</Typography>}
      </Box>
    </Box>
  );
}

IconWithText.defaultProps = {
  label: 'Sent',
  icon: <FunnelIcon />,
};
