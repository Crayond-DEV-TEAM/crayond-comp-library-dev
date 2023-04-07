import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import PerformanceIcon from '../../assets/performanceIcon';

interface PerformanceProps {
  value: string;
}
export default function Performance(props: PerformanceProps) {
  const { value } = props;
  return (
    <Tooltip
      title={value}
      placement={'bottom'}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'primary.main',
            '& .MuiTooltip-arrow': {
              color: 'primary.main',
            },
          },
        },
      }}
      arrow
    >
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <PerformanceIcon variant={value} />
      </Box>
    </Tooltip>
  );
}

Performance.defaultProps = {
  value: 'Good',
};
