import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import DragItem from './dragItem';
import { Box } from '@mui/material';
import { styles } from './styles';

interface ColumnProps {
  col: {
    id: string;
    list: string[];
  };
}
const data = [
    {
      id: '1',
      Task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.',
      // Assigned_To: 'Beltran',
      // Assignee: 'Romona',
      // Status: 'To-do',
      // Priority: 'Low',
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

const DragContainerColumn: React.FC<ColumnProps> = ({  item, index }:any) => {
    const [columns, setColumns] = useState(columnsFromBackend);

    const onDragEnd = ({result, columns, setColumns}:any) => {
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
    // <Droppable droppableId={id}>
    //   {(provided) => (
    //     <Box sx={{ ...styles.styledColumn }}>
    //       <h2>{id}</h2>
    //       <Box
    //         sx={{ ...styles.styledList }}
    //         {...provided.droppableProps}
    //         ref={provided.innerRef}
    //       >
    //         {list.map((text, index) => (
    //           <DragItem key={text} text={text} index={index} />
    //         ))}
    //         {provided.placeholder}
    //       </Box>
    //     </Box>
    //   )}
    // </Droppable>

    <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Box sx={{...styles.divStyle}}>
          <p>{item.Task}</p>
          <div className="secondary-details">
            <p>
              <span>
                {new Date(item.Due_Date).toLocaleDateString('en-us', {
                  month: 'short',
                  day: '2-digit',
                })}
              </span>
            </p>
          </div>
        </Box>
      </div>
    )}
  </Draggable>
  );
};

export default DragContainerColumn;
