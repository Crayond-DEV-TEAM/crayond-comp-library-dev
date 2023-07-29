import {
   Droppable,
   DroppableProvided,
   DroppableStateSnapshot
} from '@hello-pangea/dnd'
import { Box } from '@mui/material'
import React from 'react'
import { useDragDrop } from '../DragDropProvider'
import { Row } from '../Row'
import { ColumnType } from '../api'
import { styles } from '../styles'
import {
   Container,
   DropshadowContainer,
   RowContainer,
   Title,
   TitleContainer
} from './Column.styled'

type Props = {
   column: ColumnType
   columnIndex: number
}

const Column: React.FC<Props> = ({ column, columnIndex }) => {
   const { rowDropshadowProps } = useDragDrop();

   return (
      <>
            <Container>
               <TitleContainer>
                  <Title >{column.title}</Title>
               </TitleContainer>
               <Droppable droppableId={column.id} type="task">
                  {(prov: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                     <RowContainer ref={prov.innerRef} {...prov.droppableProps}>
                        {column.tasks.map((task, taskIndex) => (
                           <Row key={task.id} task={task} index={taskIndex} isDraggingStart={snapshot.isDraggingOver}/>
                        ))}
                        {prov.placeholder}   
                        <DropshadowContainer>
                           {snapshot.isDraggingOver && (
                              <div
                                 style={{
                                    marginTop: rowDropshadowProps.marginTop,
                                    height: rowDropshadowProps.height,
                                    minWidth: '360px',
                                    border: '2px dashed #665CD7',
                                    borderRadius: '8px',
                                 }}
                              />
                           )}
                        </DropshadowContainer>
                     </RowContainer>
                  )}
               </Droppable>
               <Box
              sx={{
                ...styles.addTodoButton,
                width:"100%"
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
               
            </Container>
         
      </>

   )
}

export default Column
