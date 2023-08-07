import {
  DragDropContext,
  DraggableLocation,
  DropResult,
  Droppable,
} from '@hello-pangea/dnd';
import React, { useState } from 'react';
import Column from '../Column/Column';
import { Container } from './Board.styled';
import { ColumnType } from '../api';
import { Box, SxProps } from '@mui/material';

type DragDropProps = (
  source: DraggableLocation,
  destination: DraggableLocation,
) => void;

interface RowDropshadow {
  marginTop: number;
  height: number;
}

interface DragAndDrop {
  dragData: ColumnType[];
  rootStyle: SxProps;
  columnContainerRootStyle: SxProps;
  columnTitleBoxStyle: SxProps;
  columnTitleStyle: SxProps;
  columnTitleColor: string;

  rowDropShadowStyles: SxProps;
  rowDropShadowWidth: number | string;
  rowDropShadowBgColor: string;
  rowDropShadowBorderColor: string;

  addButtonLabelSize: number | string;
  addButtonLabelColor: string;
  addTodoButtonRootStyle: SxProps;
  addButtonLabelStyle: SxProps;
  columnContainerBgColor: string;

  rowChildItemRootStyle: SxProps;
  childItemBgColor: string;
  childItemComponentBgColor: string;
  rowChildItemComponentRootStyle: SxProps;

  childItemHoverBorderColor: string;
  childItemHoverRootStyle: SxProps;
  childItemActiveBorderColor: string;
  childItemActiveRootStyle: SxProps;

  childItemComponentHoverBorderColor: string;
  childItemComponentHoverRootStyle: SxProps;
  childItemComponentActiveBorderColor: string;
  childItemComponentActiveRootStyle: SxProps;

  handleStartFun: (event: any) => void;
  handleUpdateFun: (event: any) => void;
  handleEndFun: (event: any) => void;
}

const getDraggedElement = (draggableId: string) => {
  const queryAttr = 'data-rfd-drag-handle-draggable-id';
  const domQuery = `[${queryAttr}='${draggableId}']`;
  const draggedElement = document.querySelector(domQuery);
  return draggedElement;
};

const getUpdatedChildrenArray = (
  draggedElement: Element,
  destinationIndex: number,
  sourceIndex: number,
) => {
  const child: Element[] = [...draggedElement!.parentNode!.children];

  if (destinationIndex === sourceIndex) return child;
  const draggedItem = child[sourceIndex];

  child.splice(sourceIndex, 1);

  return child.splice(0, destinationIndex, draggedItem);
};

const getStyle = (
  updatedChildrenArray: Element[],
  destinationIndex: number,
  property: any,
  clientDirection: 'clientHeight' | 'clientWidth',
) =>
  updatedChildrenArray.slice(0, destinationIndex).reduce((total, curr) => {
    const style = window.getComputedStyle(curr);
    const prop = parseFloat(style[property]);
    return total + curr[clientDirection] + prop;
  }, 0);

const DragAndDrop = (props: DragAndDrop) => {
  const {
    rootStyle,
    dragData,
    columnContainerRootStyle,

    columnTitleBoxStyle,
    columnTitleStyle,
    columnTitleColor,

    rowDropShadowStyles,
    rowDropShadowWidth,
    rowDropShadowBgColor,
    rowDropShadowBorderColor,

    addButtonLabelSize,
    addButtonLabelColor,
    addTodoButtonRootStyle,
    addButtonLabelStyle,
    columnContainerBgColor,

    rowChildItemRootStyle,
    childItemBgColor,
    childItemComponentBgColor,
    rowChildItemComponentRootStyle,

    childItemHoverBorderColor,
    childItemHoverRootStyle,
    childItemActiveBorderColor,
    childItemActiveRootStyle,

    childItemComponentHoverBorderColor,
    childItemComponentHoverRootStyle,
    childItemComponentActiveBorderColor,
    childItemComponentActiveRootStyle,

    handleStartFun,
    handleUpdateFun,
    handleEndFun,
  } = props;

  const [columns, setColumns] = useState<ColumnType[]>(dragData);

  const [rowDropshadowProps, setRowDropshadowProps] = useState<RowDropshadow>({
    marginTop: 0,
    height: 0,
  });

  const moveRowSameColumn: DragDropProps = (source, destination) => {
    setColumns((prev) => {
      const updated = [...prev];
      const [{ tasks }] = updated.filter(({ id }) => id === source.droppableId);
      const [removed] = tasks.splice(source.index, 1);
      tasks.splice(destination.index, 0, removed);
      return updated;
    });
  };

  const moveRowDifferentColumn: DragDropProps = (source, destination) => {
    setColumns((prev) => {
      const updated = [...prev];
      const [sourceColumn] = updated.filter(
        ({ id }) => id === source.droppableId,
      );
      const [destinationColumn] = updated.filter(
        ({ id }) => id === destination.droppableId,
      );

      const sourceRow = sourceColumn.tasks;
      const destinationRow = destinationColumn.tasks;

      const [removed] = sourceRow.splice(source.index, 1);
      destinationRow.splice(destination.index, 0, removed);

      return updated;
    });
  };

  const handleRowMove: DragDropProps = (source, destination) => {
    if (source.droppableId !== destination.droppableId) {
      moveRowDifferentColumn(source, destination);
    } else {
      moveRowSameColumn(source, destination);
    }
  };

  const handleDropShadow = (
    event: any,
    destinationIndex: number,
    sourceIndex: number,
  ) => {
    const draggedElement = getDraggedElement(event.draggableId);
    if (!draggedElement) return;
    const { clientHeight } = draggedElement as Element;
    const updatedChildrenArray: Element[] = getUpdatedChildrenArray(
      draggedElement as Element,
      destinationIndex,
      sourceIndex,
    );
    const marginTop = getStyle(
      updatedChildrenArray,
      destinationIndex,
      'marginBottom',
      'clientHeight',
    );

    setRowDropshadowProps({
      height: clientHeight + 2,
      marginTop: marginTop + 2 * destinationIndex,
    });
  };

  const handleDragUpdate = (event: any) => {
    const { source, destination } = event;

    if (!destination) return;
    handleDropShadow(event, destination.index, source.index);
    if (handleUpdateFun) {
      handleUpdateFun(event);
    }
  };

  const handleDragStart = (event: any) => {
    const { index } = event.source;

    handleDropShadow(event, index, index);
    if (handleStartFun) {
      handleStartFun(event);
    }
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    handleRowMove(source, destination);
    if (handleEndFun) {
      handleEndFun(result);
    }
  };

  return (
    <Box sx={{ ...rootStyle }}>
      <DragDropContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
      >
        <Droppable droppableId="all-columns" direction="vertical" type="column">
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {columns.map((column: ColumnType) => (
                <Column
                  key={column.id}
                  column={column}
                  rowDropshadowProps={rowDropshadowProps}
                  columnContainerRootStyle={columnContainerRootStyle}
                  columnTitleBoxStyle={columnTitleBoxStyle}
                  columnTitleStyle={columnTitleStyle}
                  columnTitleColor={columnTitleColor}
                  rowDropShadowStyles={rowDropShadowStyles}
                  rowDropShadowWidth={rowDropShadowWidth}
                  rowDropShadowBgColor={rowDropShadowBgColor}
                  rowDropShadowBorderColor={rowDropShadowBorderColor}
                  addButtonLabelSize={addButtonLabelSize}
                  addButtonLabelColor={addButtonLabelColor}
                  addTodoButtonRootStyle={addTodoButtonRootStyle}
                  addButtonLabelStyle={addButtonLabelStyle}
                  columnContainerBgColor={columnContainerBgColor}
                  rowChildItemRootStyle={rowChildItemRootStyle}
                  childItemBgColor={childItemBgColor}
                  childItemComponentBgColor={childItemComponentBgColor}
                  rowChildItemComponentRootStyle={
                    rowChildItemComponentRootStyle
                  }
                  childItemHoverBorderColor={childItemHoverBorderColor}
                  childItemHoverRootStyle={childItemHoverRootStyle}
                  childItemActiveBorderColor={childItemActiveBorderColor}
                  childItemActiveRootStyle={childItemActiveRootStyle}
                  childItemComponentHoverBorderColor={
                    childItemComponentHoverBorderColor
                  }
                  childItemComponentHoverRootStyle={
                    childItemComponentHoverRootStyle
                  }
                  childItemComponentActiveBorderColor={
                    childItemComponentActiveBorderColor
                  }
                  childItemComponentActiveRootStyle={
                    childItemComponentActiveRootStyle
                  }
                />
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

DragAndDrop.defaultProps = {
  dragData: [],
  rootStyle: {},
  columnContainerRootStyle: {},

  columnTitleBoxStyle: {},
  columnTitleStyle: {},
  columnTitleColor: '#262626',

  rowDropShadowStyles: {},
  rowDropShadowWidth: '360px',
  rowDropShadowBgColor: '',
  rowDropShadowBorderColor: '#665CD7',

  addButtonLabelSize: 12,
  addButtonLabelColor: '#665CD7',
  addTodoButtonRootStyle: {},
  addButtonLabelStyle: {},
  columnContainerBgColor: 'red',

  rowChildItemRootStyle: {},
  childItemBgColor: '#FFFF',
  childItemComponentBgColor: '#FFFF',
  rowChildItemComponentRootStyle: {},

  childItemHoverBorderColor: '#665CD7',
  childItemHoverRootStyle: {},
  childItemActiveBorderColor: '#665CD7',
  childItemActiveRootStyle: {},

  childItemComponentHoverBorderColor: '#665CD7',
  childItemComponentHoverRootStyle: {},
  childItemComponentActiveBorderColor: '#665CD7',
  childItemComponentActiveRootStyle: {},

  handleStartFun: () => false,
  handleUpdateFun: () => false,
  handleEndFun: () => false,
};
export default DragAndDrop;
