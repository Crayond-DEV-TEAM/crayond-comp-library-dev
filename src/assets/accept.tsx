
        
import {  SvgIcon } from '@mui/material';

export function AcceptIcon(props:any) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    width: 24,
    height: 24,
    color: 'rgba(24,87,76,0.48)',
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"  {...rest}
    sx={rootSx}>
    <path id="Subtraction_3" data-name="Subtraction 3" d="M-2259-989a10.011,10.011,0,0,1-10-10,10.011,10.011,0,0,1,10-10,10.011,10.011,0,0,1,10,10A10.011,10.011,0,0,1-2259-989Zm-3.458-9.741h0l-.9.9,2.6,2.6.174.183,6.892-6.892-.9-.9-5.991,5.992-1.879-1.879Z" transform="translate(2269 1009)" fill="#776def"/>
  </SvgIcon>
  );
}