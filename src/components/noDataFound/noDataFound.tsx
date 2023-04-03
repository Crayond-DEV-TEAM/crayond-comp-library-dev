import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
 
export default function NoDataFound(props: any) {
  const { data } = props;
 const absoluteProps = {
     position:"absolute",
      top:"50%",
      left:"50%",
      transform: "translate(-50%, -50%);",
      height:"100%",
      width:"100%",
 }
  return (
    <>
    {data?.component ? data?.component : 
    <Box
    sx={{...absoluteProps, backgroundColor:data?.bgColor}}
    >
      <Typography sx={{...absoluteProps,height:"auto", width:"auto", fontSize:data?.fontSize, fontWeight:data?.fontWeight, color:data?.color }}>No Data Found!</Typography>
    </Box>
    }
    </>
  );
}

NoDataFound.defaultProps = {
  noDataFound:{}
};
