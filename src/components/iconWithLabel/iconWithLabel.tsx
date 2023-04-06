import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';

interface IconWithLabelProps {
  color: string;
  bgColor: string;
  label: string;
  cellStyle: {
    fontSize: string;
    fontWeight: string;
  };
  icon: React.ReactNode;
}
export default function IconWithLabel(props: IconWithLabelProps) {
  const { label, cellStyle, bgColor, color, icon } = props;
  return (
    <Box display={'flex'}>
      <Box
        sx={{
          ...Cusmstyle.labelIconBackground,
          backgroundColor: bgColor,
        }}
      >
        {icon}
        <Typography
          sx={{
            ...Cusmstyle.labelText,
            color: color,
            fontSize: cellStyle?.fontSize,
            fontWeight: cellStyle?.fontWeight,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

IconWithLabel.defaultProps = {
  color: '#e2eafa',
  bgColor: '#7692cc',
  label: 'label',
  icon: <></>,
  cellStyle: {},
};
