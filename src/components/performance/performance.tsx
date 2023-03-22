import Box from '@mui/material/Box';
import  Tooltip from '@mui/material/Tooltip';
import PerformanceIcon from '../../assets/performanceIcon';

export default function Performance(props: any) {
   const {Celldata, val} = props;
  return (
    <Tooltip
    title={Celldata[val.name]}
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
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <PerformanceIcon variant={Celldata[val.name]} />
    </Box>
  </Tooltip>
  );
}

Performance.defaultProps = {
  Celldata: {},
  val: {},
};