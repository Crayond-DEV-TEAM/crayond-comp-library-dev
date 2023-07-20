import { Box, Typography } from '@mui/material';
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
        // onDragEnd={(e) => onDragEnd(e)}
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
                  handleClickNotifyIcon={handleClickNotifyIcon}
                  handleClickMoreIcon={handleClickMoreIcon}
                  isDragging={isDragging}
                  isDropped={isDropped}
                  key={index}
                />
              </>
            ))}
            
          </Box>

          <Box
            sx={{ ...view_styles.addTodoButton, ...bottomButtonStyle }}
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
