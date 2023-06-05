import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import { view_styles } from './styles';

interface CardItemProps {
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, id: number | string) => void;
  onDragLeave: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  onDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>, id: number | string) => void;
  childItems: {
    id: number;
    title: string;
    status: string;
    cardTitle: string;
    component: React.ReactNode;
    isActive: boolean;
    notifyIcon: React.ReactNode;
    moreIcon: React.ReactNode;
    subTitles: [
      {
        label: string;
        bgColor: string;
        borderColor: string;
        textColor: string;
      }
    ];
    images: [{ img: string; height: string | number; width: string | number }];
    created_at: string;
    done?: boolean;
  };
  childCardStyle: object;
  childCardComponentStyle: object;
  isDragging: boolean;
  isDropped: { x: number; y: number };
  handleClickNotifyIcon: () => void;
  handleClickMoreIcon: () => void;
  onMouseUp: (e: React.MouseEvent<HTMLDivElement>, id: number | string) => void;
  onMouseDown: (
    e: React.MouseEvent<HTMLDivElement>,
    id: number | string
  ) => void;
}

const CardItems = (props: CardItemProps) => {
  const {
    onDragStart = () => {},
    onDragEnd = () => {},
    onDragEnter = () => {},
    onDragLeave = () => {},
    onDrag = () => {},
    onMouseUp = () => {},
    onMouseDown = () => {},
    handleClickMoreIcon = () => {},
    handleClickNotifyIcon = () => {},
    childCardComponentStyle,
    childItems,
    isDragging,
    isDropped,
    childCardStyle,
  } = props;

 
  return (
    <>
      {childItems?.component ? (
       
          <div
            onDragEnter={(e) => onDragEnter(e, childItems?.id)}
            onDragLeave={(e) => onDragLeave(e, childItems?.id)}
            onDragStart={(e) => onDragStart(e, childItems?.id)}
            onDragEnd={(e) => onDragEnd(e, childItems?.id)}
            onDrag={(e) => onDrag(e, childItems?.id)}
            onMouseDown={(e) => onMouseDown(e, childItems?.id)}
            onClick={(e) => onMouseUp(e, childItems?.id)}
            style={{
              ...view_styles.childBoxContainer,
              ...childCardComponentStyle,
            }}
            draggable
          >
            {childItems?.component}
          </div>
      ) : (
      
        <Box
          onDragEnter={(e) => onDragEnter(e, childItems?.id)}
          onDragLeave={(e) => onDragLeave(e, childItems?.id)}
          onDragStart={(e) => onDragStart(e, childItems?.id)}
          onDragEnd={(e) => onDragEnd(e, childItems?.id)}
          onDrag={(e) => onDrag(e, childItems?.id)}
          onMouseDown={(e) => onMouseDown(e, childItems?.id)}
          onMouseUp={(e) => onMouseUp(e, childItems?.id)}
          sx={{ ...view_styles.childBoxContainer, ...childCardStyle}}
          draggable
        >
          <Box sx={{ ...view_styles.childTitleContainer }}>
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
      )}
    </>
  );
};

CardItems.defaultProps = {
  onDragStart: () => {},
  // onDragEnd: () => {},
  onDragLeave: () => {},
  onDragEnter: () => {},
  onDrag: () => {},
  onMouseUp: () => {},
  onMouseDown: () => {},
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
