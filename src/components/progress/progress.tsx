import * as React from 'react';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import { Cusmstyle } from '../table/style';
 
interface ProgressProps {
  value:number;
}
function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <Tooltip
          title={props.value}
          placement={'top'}
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
          <LinearProgress
            sx={Cusmstyle.progressBar}
            variant="determinate"
            {...props}
          />
        </Tooltip>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Progress(props: ProgressProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={Number(props?.value) ?? 0} />
    </Box>
  );
}

Progress.defaultProps = {
  value: 0,
};
