import Box from '@mui/material/Box';
import { Cusmstyle } from '../table/style';
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';

export default function StarRating(props: any) {
  const { Celldata, val } = props;
  return (
    <Tooltip
      title={Celldata[val.name]}
      placement={'top'}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: '#ffc43b',
            '& .MuiTooltip-arrow': {
              color: '#ffc43b',
            },
          },
        },
      }}
      arrow
    >
      <span>
      <Rating defaultValue={Celldata[val.name]} readOnly precision={0.5} />
      </span>
    </Tooltip>
  );
}

StarRating.defaultProps = {
  Celldata: {},
  val: {},
};
