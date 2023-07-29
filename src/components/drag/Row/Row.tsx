import React from 'react';
import { Draggable, DraggableProvided } from '@hello-pangea/dnd';
import styled from '@emotion/styled';
import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  SxProps,
  Typography,
} from '@mui/material';
import { styles } from '../styles';
import { useDragDrop } from '../DragDropProvider';

const Container = styled.div`
  border-radius: 8px;
  padding:12px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #ffff;
  border: 1px solid #665cd7;
`;

type Props = {
  task: any;
  index: number;
  isDraggingStart:boolean;

};

const Row: React.FC<Props> = ({ task, index,isDraggingStart }) => {
   const { draggedStartID } = useDragDrop();

   console.log(task,draggedStartID);
   

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: DraggableProvided) => (
        <Box
          sx={{...styles.childBoxContainer}}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Box padding={"12px"}>
            <Box sx={{ ...styles.childTitleContainer }}>
              <Box>
                <Typography sx={{ ...styles.titleStyle }}>
                  {task?.cardTitle}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', columnGap: '12px' }}>
                <IconButton onClick={() => {}}>
                  {task?.notifyIcon}
                </IconButton>
                <IconButton onClick={() =>{}}>
                  {task?.moreIcon}
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ ...styles.designBlock }}>
              {task?.subTitles?.map((value: any) => (
                <Box
                  sx={{
                    ...styles.designBox,
                    background: value?.bgColor ?? '#DEE6F9',
                    border: value?.borderColor
                      ? `1px solid ${value?.borderColor}`
                      : '',
                  }}
                >
                  <Typography
                    sx={{
                      ...styles.titleStyle,
                      marginBottom: '0px',
                      color: value?.textColor ? value?.textColor : '#929292',
                    }}
                  >
                    {value?.label}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ ...styles.childTitleContainer }}>
              <AvatarGroup>
                {task?.images?.map((val: any) => (
                  <Avatar
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
                {task?.created_at}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

export default Row;
