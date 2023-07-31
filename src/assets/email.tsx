
        
import {  SvgIcon } from '@mui/material';

export function EmailIcon(props:any) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    width: 24,
    height: 24,
    color: 'rgba(24,87,76,0.48)',
    ...rootStyle,
  };
  return (

<SvgIcon xmlns="http://www.w3.org/2000/svg" width="19.113" height="15.291" viewBox="0 0 19.113 15.291" {...rest}
    sx={rootSx}>
<path id="icons8-mail-50" d="M7.106,8A3.117,3.117,0,0,0,4,11.106v9.079a3.117,3.117,0,0,0,3.106,3.106h12.9a3.117,3.117,0,0,0,3.106-3.106V11.106A3.117,3.117,0,0,0,20.007,8Zm0,1.434h12.9a1.662,1.662,0,0,1,1.672,1.672v.528l-8.123,4.391L5.434,11.634v-.528A1.662,1.662,0,0,1,7.106,9.434Zm-1.672,3.83,7.783,4.207a.717.717,0,0,0,.681,0l7.783-4.207v6.921a1.662,1.662,0,0,1-1.672,1.672H7.106a1.662,1.662,0,0,1-1.672-1.672Z" transform="translate(-4 -8)" fill="#666"/>
</SvgIcon>
  );
}