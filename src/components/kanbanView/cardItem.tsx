import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
import { view_styles } from './styles';

interface CardItemProps {
  onDragStart: () => void;
  onDragEnd: () => void;
  childItems: [];
  childCardStyle: object;
  isDragging: boolean;
}

const CardItems = (props: any) => {
  const {
    onDragStart = () => {},
    onDragEnd = () => {},
    childItems,
    childCardStyle,
  } = props;

  return (
    <>
      <Box
        sx={{ ...view_styles.childBoxContainer, ...childCardStyle }}
        onDragStart={(e) => onDragStart(e, childItems?.id)}
        onDragEnd={(e) => onDragEnd(e, childItems?.id)}
        draggable
      >
        <Box sx={{ ...view_styles.childTitleContainer }}>
          <Box>
            <Typography sx={{ ...view_styles.titleStyle }}>
              {childItems?.cardTitle}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', columnGap: '12px' }}>
            <span>{childItems?.notifyIcon}</span>
            <span>{childItems?.moreIcon}</span>
          </Box>
        </Box>
        <Box sx={{ ...view_styles.designBlock }}>
          {childItems?.subTitles?.map((value: any) => (
            <Box
              sx={{
                ...view_styles.designBox,
                background: value?.bgColor ?? '#DEE6F9',
                border: value?.borderColor
                  ? `1px solid ${value?.borderColor}`
                  : '',
              }}
            >
              <Typography
                sx={{
                  ...view_styles.titleStyle,
                  marginBottom: '0px',
                  color: value?.textColor ? value?.textColor : '#929292',
                }}
              >
                {value?.label}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ ...view_styles.childTitleContainer }}>
          <AvatarGroup>
            {childItems?.images?.map((val: any) => (
              <Avatar
                alt="Rem Sharp"
                src={val?.img}
                sx={{ width: 24, height: 24 }}
              />
            ))}
          </AvatarGroup>

          <Typography
            sx={{ ...view_styles.subTitleStyle, color: '#929292', mb: '0px' }}
          >
            {childItems?.created_at}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default CardItems;
