import { Droppable } from '@hello-pangea/dnd';
import { Box, Typography } from '@mui/material';
import DragItem from './dragItem';
import { styles } from './styles';

const DragContainerCard = (props:any) => {
    const {column,columnId,index}= props;
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

                  <Box
                    sx={{ background: '#F1F1F1', borderRadius: '12px', p: 2 }}
                  >
                    <Typography
                      sx={{
                        mb: '12px',
                        fontSize: '14px',
                        color: '#262626',
                        fontWeight: '600',
                      }}
                    >
                      {'Tittle'}
                    </Typography>

                    <div style={{ margin: 0 }}>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <>
                              <Box
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                sx={{
                                  ...styles.columnContainerStyle,
                                  // border: snapshot.isDraggingOver
                                  //   ? '2px dashed red'
                                  //   : '',
                                }}
                              >
                                {column.items.map((item: { id: number; }, index: any) => {
                                  return (
                                    <>
                                      <DragItem item={item} index={index} />
                                      {item?.id=== 2 && (
                                        <Box
                                          sx={{
                                            height:"90px",
                                            width:"100%",
                                            border: snapshot.isDraggingOver
                                              ? '2px dashed red'
                                              : '',
                                          }}
                                        ></Box>
                                      )}
                                    </>
                                  );
                                })}

                                {provided.placeholder}
                              </Box>
                            </>
                          );
                        }}
                      </Droppable>
                      <Box
                        sx={{
                          ...styles.addTodoButton,
                        }}
                        onClick={() => {}}
                      >
                        <span style={{ marginTop: '5px' }}>
                          <img src="/add-Todo.svg" alt="button" />
                        </span>
                        <span style={{ color: '#665CD7' }}>{'buttonName'}</span>
                      </Box>
                    </div>
                  </Box>
                </Box>
    </>
  )
}

export default DragContainerCard