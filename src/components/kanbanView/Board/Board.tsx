import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import React from 'react';
import Column from '../Column/Column';
import { useDragDrop } from '../DragDropProvider';
import { Container } from './Board.styled';

const Board: React.FC = () => {
  const {
    handleDragEnd,
    handleDragStart,
    handleDragUpdate,
    columns,
    columnContainerRootStyle,
  } = useDragDrop();

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragUpdate={handleDragUpdate}
    >
      <Droppable droppableId="all-columns" direction="vertical" type="column">
        {(provided, snapshot) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {columns.map((column, columnIndex) => (
              <Column
                key={column.id}
                column={column}
                columnIndex={columnIndex}
                columnContainerRootStyle={columnContainerRootStyle}
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
