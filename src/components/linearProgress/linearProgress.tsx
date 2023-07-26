import Box from '@mui/material/Box';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { styles } from './style';
import { Stack } from '@mui/material';
import { ProgressProps } from './props';

function LinearProgressWithLabel(props: LinearProgressProps & ProgressProps) {
  const {
    value,
    variant,
    valueBuffer,
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack direction={'row'} alignItems={'center'}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <Tooltip
          open={isShowToolTip && isOpen}
          onMouseEnter={() => {
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            setIsOpen(false);
          }}
          title={value}
          placement={'top'}
          componentsProps={{
            tooltip: {
              sx: {
                color: TooltipTextColor,
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
            variant={variant}
            valueBuffer={valueBuffer}
            value={value}
            sx={{
              ...styles.linearBarStyle,
              ...linearBarStyle,
              '&.MuiLinearProgress-root': {
                backgroundColor: thumbSecondaryColor,
              },
              '& .MuiLinearProgress-barColorPrimary': {
                backgroundColor: thumbPrimaryColor,
              },
              height: thumbHeight,
            }}
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
    </Stack>
  );
}

export default function LinearProcess(props: ProgressProps) {
  const {
    value,
    variant,
    valueBuffer,
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
        onChange={() => {}}
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
        valueBuffer={valueBuffer}
        variant={variant}
      />
    </Box>
  );
}

LinearProcess.defaultProps = {
  value: 0,
  variant: 'determinate',
  valueBuffer: 0,
  progressLabel: false,
  linearBarStyle: {},
  symbols: '',
  thumbHeight: 10,
  isShowToolTip: false,
  TooltipTextColor: '',
  TooltipBgColor: '',
  TooltipArrowColor: '',
  symbolsColor: '',
  thumbPrimaryColor: '',
  thumbSecondaryColor: '',
};
