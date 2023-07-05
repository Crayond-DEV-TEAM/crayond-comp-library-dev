    
import {  SvgIcon } from '@mui/material';

export function CancelIcon(props:any) {
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
    <path id="Subtraction_1" data-name="Subtraction 1" d="M-2259-989a10.011,10.011,0,0,1-10-10,10.011,10.011,0,0,1,10-10,10.011,10.011,0,0,1,10,10A10.011,10.011,0,0,1-2259-989Zm0-9.231h0l3.044,3.044.769-.769-3.046-3.045,3.046-3.045-.769-.768-3.045,3.045-3.045-3.045-.768.768,3.045,3.045-3.045,3.045.768.769,3.044-3.044Z" transform="translate(2269 1009)" fill="#666"/>
  </SvgIcon>
  );
}