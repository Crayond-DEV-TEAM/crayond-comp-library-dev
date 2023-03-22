import Box from '@mui/material/Box';
import { Cusmstyle } from '../table/style';
import Typography from '@mui/material/Typography';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';

export default function Growth(props: any) {
   const {Celldata, val} = props;
  return (
    <>
    {Celldata[val.name]?.variant === 'NEGATIVE' && (
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent="center"
        gap={'3px'}
      >
        <Typography sx={Cusmstyle.negativeGrowth}>
          {Celldata[val.name]?.value ?? 0} %{' '}
        </Typography>{' '}
        <SouthIcon fontSize="inherit" sx={{ color: '#F44F5A' }} />
      </Box>
    )}
    {Celldata[val.name]?.variant === 'POSITIVE' && (
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent="center"
        gap={'3px'}
      >
        <Typography sx={Cusmstyle.positiveGrowth}>
          {Celldata[val.name]?.value ?? 0} %{' '}
          <NorthIcon fontSize="inherit" sx={{ color: '#25C460' }} />{' '}
        </Typography>
      </Box>
    )}
    </>
  );
}

Growth.defaultProps = {
  Celldata: {},
  val: {},
};