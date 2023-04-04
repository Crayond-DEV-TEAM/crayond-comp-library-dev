import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface NoDataFoundProps {
  fontSize: string;
  fontWeight: string;
  color: string;
  bgColor: string;
  text: string;
  component: React.ReactNode | null;
}
export default function NoDataFound(props: NoDataFoundProps) {
  const { fontSize, fontWeight, color, bgColor, text, component } = props;
  const absoluteProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%);',
    height: '100%',
    width: '100%',
  };
  return (
    <>
      {component ? (
        component
      ) : (
        <Box sx={{ ...absoluteProps, backgroundColor: bgColor }}>
          <Typography
            sx={{
              ...absoluteProps,
              height: 'auto',
              width: 'auto',
              fontSize: fontSize,
              fontWeight: fontWeight,
              color: color,
            }}
          >
            {text}
          </Typography>
        </Box>
      )}
    </>
  );
}

NoDataFound.defaultProps = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#353448',
  bgColor: '#F7F7F7',
  text: 'No Data Found!',
  component: null,
};
