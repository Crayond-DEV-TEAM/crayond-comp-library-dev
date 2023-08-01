import React from 'react';
import { SvgIcon } from '@mui/material';

function MapPointer(props: any) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 12,
    width: 12,
    color: '#0E1824',
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="24.943"
      viewBox="0 0 18 24.943"
      {...rest}
      sx={rootSx}
    >
      <path
        id="Path_103628"
        data-name="Path 103628"
        d="M9,0a9,9,0,0,1,9,9c0,4.971-7.163,15.943-9,15.943S0,13.971,0,9A9,9,0,0,1,9,0Z"
        fill="#665cd7"
      />
    </SvgIcon>
  );
}

export default MapPointer;
