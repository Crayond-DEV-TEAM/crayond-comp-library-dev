import { Box, Typography } from '@mui/material';
import { view_styles } from './styles';
import CardItems from './cardItem';
import { BasicButtons } from '../button';
import { boolean } from 'yup';
interface ContainerProps {
  onDragOver: (
    e: React.DragEvent<HTMLDivElement>,
    status: boolean,
    title: any
  ) => void;
  onDrop: (
    e: React.DragEvent<HTMLDivElement>,
    status: boolean,
    title: string
  ) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  onDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  onDragLeave: (
    e: React.DragEvent<HTMLDivElement>,
    id: number | string
  ) => void;
  cardContainerStyle: object;
  childCardStyle: object;
  childCardComponentStyle: object;
  containerTitleStyle: object;
  childItems: any;
  isDropped: any;
  isDragging: boolean;
  containerData: { title: string };
  handleClickNotifyIcon: () => void;
  handleClickMoreIcon: () => void;
  handleAddNewButton: () => void;
}

const CardContainer = (props: ContainerProps) => {
  const {
    onDragOver,
    onDrop,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    handleClickNotifyIcon,
    handleClickMoreIcon,
    handleAddNewButton,
    cardContainerStyle,
    containerData,
    childCardStyle,
    containerTitleStyle,
    childCardComponentStyle,
    childItems,
    isDropped,
    isDragging,
  } = props;

  return (
    <>
      <div
        onDragEnd={(e) => onDragEnd(e)}
        onDragOver={(e) => onDragOver(e, false, containerData?.title)}
        onDrop={(e) => onDrop(e, false, containerData?.title)}
      >
        <Box sx={{ ...view_styles.cardContainer, ...cardContainerStyle }}>
          <Typography
            sx={{ ...view_styles.titleStyle, ...containerTitleStyle }}
          >
            {containerData?.title}
          </Typography>
          <Box>
            {childItems?.map((items: any, index: number) => (
              <>
                <CardItems
                  childCardStyle={childCardStyle}
                  childCardComponentStyle={childCardComponentStyle}
                  childItems={items}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  onDragEnter={onDragEnter}
                  onDragLeave={onDragLeave}
                  handleClickNotifyIcon={handleClickNotifyIcon}
                  handleClickMoreIcon={handleClickMoreIcon}
                  isDragging={isDragging}
                  key={index}
                />
              </>
            ))}
            {isDragging && containerData?.title === isDropped?.status && (
              <Box sx={{ ...view_styles.childOnDraggedBox }} draggable></Box>
            )}
          </Box>

          <Box
            sx={{ ...view_styles.addTodoButton }}
            onClick={handleAddNewButton}
          >
            <span style={{ marginTop: '5px' }}>
              <img src="/add-Todo.svg" alt="noti" />
            </span>
            <span style={{ color: '#665CD7' }}>{'Add New'}</span>
          </Box>
        </Box>
      </div>
    </>
  );
};

CardContainer.defaultProps ={
  onDragOver: () => {},
  onDrop: () => {},
  onDragEnd: () => {},
  onDragStart: () => {},
  onDragEnter: () => {},
  onDragLeave: () => {},
  cardContainerStyle: {},
  childCardStyle: {},
  childCardComponentStyle: {},
  containerTitleStyle: {},
  childItems:[],
  isDropped: boolean,
  isDragging: boolean,
  containerData: { title: "" },
  handleClickNotifyIcon: () => {},
  handleClickMoreIcon: () => {},
  handleAddNewButton: () => {},
}

export default CardContainer;
