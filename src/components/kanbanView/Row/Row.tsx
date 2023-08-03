import { Draggable, DraggableProvided } from '@hello-pangea/dnd';
import React from 'react';
import { useDragDrop } from '../DragDropProvider';
import { styles } from '../styles';
import { Avatar, AvatarGroup, Box, IconButton, SxProps, Typography } from '@mui/material';

type Props = {
  task: any;
  index: number;
  isDraggingStart: boolean;
};

const Row: React.FC<Props> = ({ task, index }) => {
  const { rowChildItemRootStyle, rowChildItemComponentRootStyle } =
    useDragDrop();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: DraggableProvided) => (
        <>
          {task?.component ? (
            <>
              <Box
                sx={{ ...styles.childBoxContainer }}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Box sx={{ p: '12px', ...rowChildItemComponentRootStyle }}>
                  {task?.component}
                </Box>
              </Box>
            </>
          ) : (
            <Box
              sx={{ ...styles.childBoxContainer }}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <Box sx={{ p: '12px', ...rowChildItemRootStyle }}>
                <Box sx={{ ...styles.childTitleContainer }}>
                  <Box>
                    <Typography sx={{ ...styles.titleStyle }}>
                      {task?.cardTitle}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', columnGap: '12px' }}>
                    <IconButton onClick={() => false}>
                      {task?.notifyIcon}
                    </IconButton>
                    <IconButton onClick={() => false}>{task?.moreIcon}</IconButton>
                  </Box>
                </Box>
                <Box sx={{ ...styles.designBlock }}>
                  {task?.subTitles?.map((value: any) => (
                    <Box
                    key={value?.id}
                      sx={{
                        ...styles.designBox,
                        background: value?.bgColor ?? '#DEE6F9',
                        border: value?.borderColor
                          ? `1px solid ${value?.borderColor}`
                          : '',
                      } as SxProps}
                    >
                      <Typography
                        sx={{
                          ...styles.titleStyle,
                          marginBottom: '0px',
                          color: value?.textColor
                            ? value?.textColor
                            : '#929292',
                        } as SxProps}
                      >
                        {value?.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ ...styles.childTitleContainer }}>
                  <AvatarGroup>
                    {task?.images?.map((val: any,i:number) => (
                      <Avatar
                        key={i}
                        alt="Rem Sharp"
                        src={val?.img}
                        sx={{ width: 24, height: 24 }}
                      />
                    ))}
                  </AvatarGroup>

                  <Typography
                    sx={{
                      ...styles.subTitleStyle,
                      color: '#929292',
                      mb: '0px',
                    }}
                  >
                    {task?.createdAt}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </>
      )}
    </Draggable>
  );
};

export default Row;
