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
  isShowToolTip:boolean;
  thumbHeight: number;
  progressLabel: boolean;
  linearBarStyle: object;
  symbols: string;
  symbolsColor: string;
  TooltipTextColor: string;
  TooltipBgColor: string;
  TooltipArrowColor: string;
  thumbPrimaryColor: string;
  thumbSecondaryColor: string;
}

function LinearProgressWithLabel(props: LinearProgressProps & ProgressProps) {
  const {
    value,
    progressLabel,
    linearBarStyle,
    symbols,
    isShowToolTip,
    symbolsColor,
    thumbHeight,
    TooltipTextColor,
    TooltipBgColor,
    TooltipArrowColor,
    thumbPrimaryColor,
    thumbSecondaryColor,
  } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <Tooltip
          open={isShowToolTip}
          title={value}
          placement={'top'}
          componentsProps={{
            tooltip: {
              sx: {
                color:TooltipTextColor,
                bgcolor: TooltipBgColor,
                '& .MuiTooltip-arrow': {
                  color: TooltipArrowColor,
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
                backgroundColor: `${thumbSecondaryColor}`,
                strokeLinecap: 'round',
              },
              [`&.${linearProgressClasses.determinate} > .${linearProgressClasses.bar1Determinate}`]:
                { backgroundColor: `${thumbPrimaryColor}` },
              '& .MuiLinearProgress-bar': {
                backgroundColor: `${thumbPrimaryColor}`,
              },
              height: thumbHeight,
            }}
            variant="buffer"
            // valueBuffer={'buffer'}
            {...props}
          />
        </Tooltip>
      </Box>
      {progressLabel && (
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color={symbolsColor}>{`${Math.round(
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
    symbolsColor,
    thumbHeight,
    isShowToolTip,
    TooltipTextColor,
    TooltipBgColor,
    TooltipArrowColor,
    thumbPrimaryColor,
    thumbSecondaryColor,
  } = props;
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel
        value={Number(value) ?? 0}
        onChange={() => { } }
        thumbHeight={thumbHeight}
        progressLabel={progressLabel}
        linearBarStyle={linearBarStyle}
        symbols={symbols}
        TooltipTextColor={TooltipTextColor}
        TooltipBgColor={TooltipBgColor}
        TooltipArrowColor={TooltipArrowColor}
        thumbPrimaryColor={thumbPrimaryColor}
        thumbSecondaryColor={thumbSecondaryColor}
        symbolsColor={symbolsColor} 
        isShowToolTip={isShowToolTip}     
        />
    </Box>
  );
}

LinearProcess.defaultProps = {
  value: 60,
  progressLabel: false,
  linearBarStyle: {},
  symbols: '',
  thumbHeight: 10,
  isShowToolTip:false,
  TooltipTextColor:'',
  TooltipBgColor: '',
  TooltipArrowColor: '',
  symbolsColor: '',
  thumbPrimaryColor: '',
  thumbSecondaryColor: '',
};
