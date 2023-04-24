import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Cusmstyle } from '../table/style';
import FunnelIcon from '../../assets/funnelIcon';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Tooltip from '@mui/material/Tooltip';
interface IconWithLabelProps {
  label: string;
  maskText: string;
  isDataMask: Boolean;
}
export default function MaskData(props: IconWithLabelProps) {
  const { label, maskText, isDataMask } = props;
  const [visibleMask, setVisibleMask] = React.useState<Boolean>(
    isDataMask ? false : true
  );
const [tooltipText, setTooltipText] = React.useState<string>("Click to copy");
  const onChangeVisible = (status: boolean) => {
    setVisibleMask(status);
    if(status){
      setTooltipText("Click to copy")
    }
  };

  React.useEffect(() => {
    setVisibleMask(isDataMask);
  }, [isDataMask]);

  const getRandomLetter = () => {
    const minChar = 8; // minimum number of characters
    const maxChar = 14; // maximum number of characters
    const numChar =
      Math.floor(Math.random() * (maxChar - minChar + 1)) + minChar;
    let characters = '';

    // Generate random star
    for (let i = 0; i < numChar; i++) {
      characters += maskText;
    }
    return characters;
  };
  
  const copyClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setTooltipText("Copied!") 
      } 
    );
  };
  return (
    <Box display={'flex'} alignItems={'center'}>
      <Box
        sx={Cusmstyle.iconText}
        justifyContent={'space-between'}
        width={'100%'}
      >
        {visibleMask ? (
          label && (
            <Tooltip
              title={tooltipText}
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
              <Typography
                onClick={() => copyClipboard(label)}
                sx={{ ...Cusmstyle.fontStyle, marginTop: '0px' }}
              >
                {label}
              </Typography>
            </Tooltip>
          )
        ) : (
          <Typography sx={{ ...Cusmstyle.fontStyle, marginTop: '8px' }}>
            {getRandomLetter()}
          </Typography>
        )}
        {visibleMask ? (
          <VisibilityOffIcon
            onClick={() => onChangeVisible(false)}
            sx={{ cursor: 'pointer' }}
            fontSize="small"
          />
        ) : (
          <VisibilityIcon
            onClick={() => {
              onChangeVisible(true);
            }}
            sx={{ cursor: 'pointer' }}
            fontSize="small"
          />
        )}
      </Box>
    </Box>
  );
}

MaskData.defaultProps = {
  label: '',
  maskText: '*',
  isDataMask: false,
};
