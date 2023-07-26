import { Box } from '@mui/material';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import DragContainerColumn from './dragContainer';
import { styles } from './styles';
import styled from '@emotion/styled';
import TaskCard from './dragItem';

const DragAndDrop = (props: any) => {
  const { item, index } = props;

  const Container = styled.div`
    display: flex;
  `;

  const TaskList = styled.div`
    min-height: 100px/;
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
    min-width: 341px;
    border-radius: 5px;
    padding: 15px 15px;
    margin-right: 45px;
  `;

  const TaskColumnStyles = styled.div`
    margin: 8px;
    display: flex;
    width: 100%;
    min-height: 80vh;
  `;

  const Title = styled.span`
    color: #10957d;
    background: rgba(16, 149, 125, 0.15);
    padding: 2px 10px;
    border-radius: 5px;
    align-self: flex-start;
  `;
  const data = [
    {
      id: '1',
      Task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.',
      // Assigned_To: 'Beltran',
      // Assignee: 'Romona',
      Status: 'To-do',
      Priority: 'Low',
      Due_Date: '25-May-2020',
    },
    {
      id: '2',
      Task: 'Fix Styling',
      // Assigned_To: 'Dave',
      // Assignee: 'Romona',
      // Status: 'To-do',
      // Priority: 'Low',
      Due_Date: '26-May-2020',
    },
    {
      id: '3',
      Task: 'Handle Door Specs',
      // Assigned_To: 'Roman',
      // Assignee: 'Romona',
      // Status: 'To-do',
      // Priority: 'Low',
      Due_Date: '27-May-2020',
    },
    {
      id: '4',
      Task: 'morbi',
      // Assigned_To: 'Gawen',
      // Assignee: 'Kai',
      // Status: 'Done',
      // Priority: 'High',
      Due_Date: '23-Aug-2020',
    },
    {
      id: '5',
      Task: 'proin',
      // Assigned_To: 'Bondon',
      // Assignee: 'Antoinette',
      // Status: 'In Progress',
      // Priority: 'Medium',
      Due_Date: '05-Jan-2021',
    },
  ];
  const columnsFromBackend = {
    dates: {
      title: 'To-do',
      items: data,
    },
    date: {
      title: 'In Progress',
      items: [],
    },
    dateee: {
      title: 'Done',
      items: [],
    },
  };

  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = ({ result, columns }: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Container>
          <TaskColumnStyles>
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided, snapshot) => (
                    <TaskList
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <Title>{column.title}</Title>
                      {column.items.map((item, index) => (
                        <TaskCard key={item} item={item} index={index} />
                      ))}
                      {provided.placeholder}
                    </TaskList>
                  )}
                </Droppable>
              );
            })}
          </TaskColumnStyles>
        </Container>
      </DragDropContext>
    </>
  );
};

export default DragAndDrop;
