import { Box, Typography } from '@mui/material';
import { view_styles } from './styles';
import CardItems from './cardItem';

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
  onDragStart: Function;
  cardContainerStyle: object;
  childCardStyle: object;
  childItems: any;
  isDropped: any;
  isDragging: boolean;
  cardContainerData: any;
}

const CardContainer = (props: ContainerProps) => {
  const {
    onDragOver,
    onDrop,
    onDragStart,
    onDragEnd,
    cardContainerStyle,
    cardContainerData,
    childCardStyle,
    childItems,
    isDropped,
    isDragging,
  } = props;
  console.log(childItems);

  return (
    <>
      {childItems?.map((child: any) => (
        <div
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e, false, child?.title)}
          onDrop={(e) => onDrop(e, false, child?.title)}
        >
          <Box sx={{ ...view_styles.cardContainer, ...cardContainerStyle }}>
            <Typography sx={{ ...view_styles.titleStyle }}>
              {child?.title}
            </Typography>
            {child?.component ? (
              <Box>{child?.component}</Box>
            ) : (
              <Box>
                {child?.child?.map((items: any, index: number) => (
                  <>
                    <CardItems
                      childCardStyle={childCardStyle}
                      childItems={items}
                      onDragStart={onDragStart}
                      onDragEnd={onDragEnd}
                      isDragging={isDragging}
                    />
                  </>
                ))}
                {isDragging && child?.title === isDropped?.status && (
                  <Box
                    sx={{ ...view_styles.childOnDraggedBox }}
                    draggable
                  ></Box>
                )}
              </Box>
            )}

            <Box sx={{ ...view_styles.addTodoButton }}>
              <span style={{ marginTop: '5px' }}>
                <img src="/add-Todo.svg" alt="noti" />
              </span>
              <span style={{ color: '#665CD7' }}>Add New</span>
            </Box>
          </Box>
        </div>
      ))}
    </>
  );
};

export default CardContainer;
