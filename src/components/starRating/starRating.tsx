import Box from '@mui/material/Box';
import { Cusmstyle } from '../table/style';
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';

interface StarRatingProps {
  value: number;
}
export default function StarRating(props: StarRatingProps) {
  const { value } = props;
  return (
    <Tooltip
      title={value}
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
        <Rating value={value} readOnly precision={0.5} />
      </span>
    </Tooltip>
  );
}

StarRating.defaultProps = {
  value: 0,
};
