import { Box, Typography, SxProps } from '@mui/material';
import { boolean } from 'yup';
import CardItems from './cardItem';
import { ContainerProps } from './props';
import { view_styles } from './styles';

const CardContainer = (props: ContainerProps) => {
  const {
    onDragOver,
    onDrop,
    onDrag,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    handleClickNotifyIcon,
    handleClickMoreIcon,
    handleAddNewButton,
    onDragHoverChildCard,
    cardContainerStyle,
    containerData,
    childCardStyle,
    containerTitleStyle,
    bottomButtonStyle,
    childCardComponentStyle,
    childItems,
    hoverId,
    isDropped,
    isDragging,
    buttonName,
  } = props;

  return (
    <>
      <div
        onDragOver={(e) => onDragOver(e, false, containerData?.title)}
        onDrop={(e) => onDrop(e, false, containerData?.title)}
      >
        <Box
          sx={
            { ...view_styles.cardContainer, ...cardContainerStyle } as SxProps
          }
        >
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
                  onDragHoverChildCard={onDragHoverChildCard}
                  handleClickNotifyIcon={handleClickNotifyIcon}
                  handleClickMoreIcon={handleClickMoreIcon}
                  isDragging={isDragging}
                  isDropped={isDropped}
                  key={items?.id}
                  getIndex={index}
                />

                {items.id === hoverId && (
                  <Box
                    sx={{ ...view_styles.childOnDraggedBox }}
                    draggable
                  ></Box>
                )}
              </>
            ))}
          </Box>

          <Box
            sx={{ ...view_styles.addTodoButton, ...bottomButtonStyle }}
            onClick={handleAddNewButton}
          >
            <span style={{ marginTop: '5px' }}>
              <img src="/add-Todo.svg" alt="button" />
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
  onMouseUp: () => {},
  onMouseDown: () => {},
  cardContainerStyle: {},
  childCardStyle: {},
  bottomButtonStyle: {},
  childCardComponentStyle: {},
  containerTitleStyle: {},
  childItems: [],
  isDropped: boolean,
  isDragging: boolean,
  containerData: { title: '' },
  handleClickNotifyIcon: () => {},
  handleClickMoreIcon: () => {},
  handleAddNewButton: () => {},
  buttonName: "'Add New'",
};

export default CardContainer;
