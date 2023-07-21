import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Typography,
  SxProps,
} from '@mui/material';
import { view_styles } from './styles';
import { CardItemProps } from './props';

const CardItems = (props: CardItemProps) => {
  const {
    onDragStart = () => {},
    onDragEnd = () => {},
    onDragEnter = () => {},
    onDragLeave = () => {},
    onDrag = () => {},
    onDragHoverChildCard = () => {},
    handleClickMoreIcon = () => {},
    handleClickNotifyIcon = () => {},
    childCardComponentStyle,
    childItems,
    childCardStyle,
    getIndex,
  } = props;

  return (
    <>
      {childItems?.component ? (
        <Box
          onDragOver={(e) => onDragHoverChildCard(e, childItems, getIndex)}
          onDragEnter={(e) => onDragEnter(e, childItems?.id, getIndex)}
          onDragLeave={(e) => onDragLeave(e, childItems?.id, getIndex)}
          onDragStart={(e) => onDragStart(e, childItems?.id, getIndex)}
          onDragEnd={(e) => onDragEnd(e, childItems, getIndex)}
          onDrag={(e) => onDrag(e, childItems?.id, getIndex)}
          sx={{
            ...view_styles.childBoxContainer,
            ...childCardComponentStyle,
          } as SxProps}
          draggable
        >
          {childItems?.component}
        </Box>
      ) : (
        <>
        <Box
          onDragOver={(e) => onDragHoverChildCard(e, childItems, getIndex)}
          onDragEnter={(e) => onDragEnter(e, childItems?.id, getIndex)}
          onDragLeave={(e) => onDragLeave(e, childItems?.id, getIndex)}
          onDragStart={(e) => onDragStart(e, childItems?.id, getIndex)}
          onDragEnd={(e) => onDragEnd(e, childItems, getIndex)}
          onDrag={(e) => onDrag(e, childItems?.id, getIndex)}
          sx={{ ...view_styles.childBoxContainer, ...childCardStyle }}
          draggable
        >
          <Box>
            <Box sx={{ ...view_styles.childTitleContainer }}>
              <span style={{color:"red"}}>{childItems.id}</span>
              <Box>
                <Typography sx={{ ...view_styles.titleStyle }}>
                  {childItems?.cardTitle}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', columnGap: '12px' }}>
                <IconButton onClick={() => handleClickNotifyIcon()}>
                  {childItems?.notifyIcon}
                </IconButton>
                <IconButton onClick={() => handleClickMoreIcon()}>
                  {childItems?.moreIcon}
                </IconButton>
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
                sx={{
                  ...view_styles.subTitleStyle,
                  color: '#929292',
                  mb: '0px',
                }}
              >
                {childItems?.created_at}
              </Typography>
            </Box>
          </Box>
        </Box>
        </>
      )}
    </>
  );
};

CardItems.defaultProps = {
  onDragStart: () => {},
  onDragEnd: () => {},
  onDragLeave: () => {},
  onDragEnter: () => {},
  onDrag: () => {},

  childItems: {
    id: 0,
    title: '',
    status: '',
    cardTitle: '',
    component: '',
    isActive: false,
    notifyIcon: '',
    moreIcon: '',
    subTitles: {
      label: '',
      bgColor: '',
      borderColor: '',
      textColor: '',
    },
    images: { img: '' },
    created_at: '',
    done: false,
  },
  childCardStyle: {},
  childCardComponentStyle: {},
  isDragging: false,
  handleClickNotifyIcon: () => {},
  handleClickMoreIcon: () => {},
};
export default CardItems;
