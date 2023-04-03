import Box from '@mui/material/Box';
import { Cusmstyle } from '../table/style';
import Typography from '@mui/material/Typography';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';

interface GrowthProps {
  variant: "NEGATIVE" | "POSITIVE" | undefined ,
  value: string | number,
}
export default function Growth(props: GrowthProps) {
  const { variant, value } = props;
  return (
    <>
      {variant === 'NEGATIVE' && (
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent="center"
          gap={'3px'}
        >
          <Typography sx={Cusmstyle.negativeGrowth}>{value ?? 0} % </Typography>{' '}
          <SouthIcon fontSize="inherit" sx={{ color: '#F44F5A' }} />
        </Box>
      )}
      {variant === 'POSITIVE' && (
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent="center"
          gap={'3px'}
        >
          <Typography sx={Cusmstyle.positiveGrowth}>
            {value ?? 0} %{' '}
            <NorthIcon fontSize="inherit" sx={{ color: '#25C460' }} />{' '}
          </Typography>
        </Box>
      )}
    </>
  );
}

Growth.defaultProps = {
  variant: 'POSITIVE',
  value: '0',
};
