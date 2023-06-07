import Box from '@mui/material/Box';
import LinearProgress, {
  LinearProgressProps,
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { styles } from './style';

interface ProgressProps {
  value: number;
  progressLabel: boolean;
  linearBarStyle: object;
  symbols: string;
  linearThumbColor: string;
  thumbightColor: string;
}

function LinearProgressWithLabel(props: LinearProgressProps & ProgressProps) {
  const {
    value,
    progressLabel,
    linearBarStyle,
    symbols,
    linearThumbColor,
    thumbightColor,
  } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <Tooltip
          title={value}
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
            sx={{
              ...styles.linearBarStyle,
              ...linearBarStyle,
              [`&.${linearProgressClasses.determinate}`]: {
                backgroundColor: `${thumbightColor}`,
              },
              [`&.${linearProgressClasses.determinate} > .${linearProgressClasses.bar1Determinate}`]:
                { backgroundColor: `${linearThumbColor}` },
              '& .MuiLinearProgress-bar': {
                backgroundColor: `${linearThumbColor}`,
              },
            }}
            color="primary"
            variant="determinate"
            {...props}
          />
        </Tooltip>
      </Box>
      {progressLabel && (
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="#707070">{`${Math.round(
            value
          )}${symbols}`}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default function LinearProcess(props: ProgressProps) {
  const {
    value,
    progressLabel,
    linearBarStyle,
    symbols,
    linearThumbColor,
    thumbightColor,
  } = props;
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel
        value={Number(value) ?? 0}
        progressLabel={progressLabel}
        linearBarStyle={linearBarStyle}
        symbols={symbols}
        linearThumbColor={linearThumbColor}
        thumbightColor={thumbightColor}
      />
    </Box>
  );
}

LinearProcess.defaultProps = {
  value: 0,
  progressLabel: false,
  linearBarStyle: {},
  symbols: '',
  linearThumbColor: '',
  thumbightColor: '',
};
