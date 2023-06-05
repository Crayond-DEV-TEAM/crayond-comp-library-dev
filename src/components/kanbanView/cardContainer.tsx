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
  onDrag: (
    e: React.DragEvent<HTMLDivElement>,
    id: string|number
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
  bottomButtonStyle: object;
  childItems: any;
  isDropped: any;
  isDragging: boolean;
  containerData: { title: string };
  handleClickNotifyIcon: () => void;
  handleClickMoreIcon: () => void;
  handleAddNewButton: () => void;
  onMouseUp: (e: React.MouseEvent<HTMLDivElement>, id: number | string) => void;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>, id: number | string) => void;
  buttonName:string,
}

const CardContainer = (props: ContainerProps) => {
  const {
    onDragOver,
    onDrop,
    onDrag,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onMouseUp,
    onMouseDown,
    handleClickNotifyIcon,
    handleClickMoreIcon,
    handleAddNewButton,
    cardContainerStyle,
    containerData,
    childCardStyle,
    containerTitleStyle,
    bottomButtonStyle,
    childCardComponentStyle,
    childItems,
    isDropped,
    isDragging,
    buttonName,
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
            sx={{ ...view_styles.containerTitleStyle, ...containerTitleStyle }}
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
                  onDrag={onDrag}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  onDragEnter={onDragEnter}
                  onDragLeave={onDragLeave}
                  onMouseDown={onMouseDown}
                  onMouseUp={onMouseUp}
                  handleClickNotifyIcon={handleClickNotifyIcon}
                  handleClickMoreIcon={handleClickMoreIcon}
                  isDragging={isDragging}
                  isDropped={isDropped}
                  key={index}
                />
              </>
            ))}
            {isDragging && containerData?.title === isDropped?.status && (
              <Box sx={{ ...view_styles.childOnDraggedBox }} draggable></Box>
            )}
          </Box>

          <Box
            sx={{ ...view_styles.addTodoButton, ...bottomButtonStyle}}
            onClick={handleAddNewButton}
          >
            <span style={{ marginTop: '5px' }}>
              <img src="/add-Todo.svg" alt="noti" />
            </span>
            <span style={{ color: '#665CD7' }}>{buttonName}</span>
          </Box>
        </Box>
      </div>
    </>
  );
};

CardContainer.defaultProps = {
  onDragOver: () => {},
  onDrop: () => {},
  onDrag: () => {},
  onDragEnd: () => {},
  onDragStart: () => {},
  onDragEnter: () => {},
  onDragLeave: () => {},
  onMouseUp : () => {},
  onMouseDown: () => {},
  cardContainerStyle: {},
  childCardStyle: {},
  bottomButtonStyle:{},
  childCardComponentStyle: {},
  containerTitleStyle: {},
  childItems: [],
  isDropped: boolean,
  isDragging: boolean,
  containerData: { title: '' },
  handleClickNotifyIcon: () => {},
  handleClickMoreIcon: () => {},
  handleAddNewButton: () => {},
  buttonName:"'Add New'",
};

export default CardContainer;
