import React from 'react'
import Column from '../Column/Column'
import { useDragDrop } from '../DragDropProvider'
import { ColumnDropshadow, Container } from './Board.styled'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'

const Board: React.FC = () => {
   const { handleDragEnd, handleDragStart, handleDragUpdate, colDropshadowProps, columns } =
      useDragDrop()

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
                     <Column key={column.id} column={column} columnIndex={columnIndex} />
                  ))}
                  {provided.placeholder}
                  {snapshot.isDraggingOver && (
                     <ColumnDropshadow
                        marginLeft={colDropshadowProps.marginLeft}
                        height={colDropshadowProps.height}
                     >
                     </ColumnDropshadow>
                  )}
               </Container>
            )}
         </Droppable>
      </DragDropContext>
   )
}

export default Board
