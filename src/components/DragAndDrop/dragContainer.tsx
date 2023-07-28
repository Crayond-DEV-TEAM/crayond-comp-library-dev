import { Droppable } from '@hello-pangea/dnd';
import { Box, Typography } from '@mui/material';
import DragItem from './dragItem';
import { styles } from './styles';

const DragContainerCard = (props: any) => {
  const { column, columnId, dragItemIndex } = props;

  // console.log(column);
  // console.log(columnId);
  // console.log(dragItemIndex)
  
  

  // const showDragShadow = dragItemIndex?.droppableId === columnId;

  return (
    <>
      <Box sx={{ ...styles.dragContainerStyle }} key={columnId}>
        {column?.name && (
          <Box sx={{ ...styles.statusStyle }}>
            <Typography style={{ ...styles.statusTitleStyle }}>
              {column.name}
            </Typography>
          </Box>
        )}

        <Box sx={{ background: '#F1F1F1', borderRadius: '12px', p: 2 }}>
          <Typography
            sx={{
              mb: '12px',
              fontSize: '14px',
              color: '#262626',
              fontWeight: '600',
            }}
          >
            {column.name}
          </Typography>

          <div style={{ margin: 0 }}>
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => (
                <>
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    sx={{
                      ...styles.columnContainerStyle,
                    }}
                  >
                    {column?.items?.map((item: any, index: number) => {
                      
                      return (
                        <>
                          <DragItem
                            key={item?.id}
                            item={item}
                            index={index}
                            snapshot={snapshot}
                          />

                          <Box
                            sx={{
                              width: 'auto',
                              position: 'absolute',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-start',
                              flexDirection: 'column',
                              height: '100%',
                              marginTop: '0px',
                            }}
                          >
                            {snapshot?.isDraggingOver&& (
                              <Box
                                sx={{
                                  border: '2px dashed #665CD7',
                                  height: '126px',
                                  width: '350px',
                                  borderRadius: '8px ',
                                }}
                              ></Box>
                            )}
                          </Box>
                        </>
                      );
                    })}

                    {provided.placeholder}
                  </Box>
                </>
              )}
            </Droppable>
            <Box
              sx={{
                ...styles.addTodoButton,
              }}
              onClick={() => {}}
            >
              <span style={{ marginTop: '5px' }}>
                {column?.bottomButton?.icon}
              </span>
              <span style={{ color: '#665CD7' }}>
                {' '}
                {column?.bottomButton?.buttonLabel}
              </span>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default DragContainerCard;
