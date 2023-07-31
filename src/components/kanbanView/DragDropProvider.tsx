import React, { useContext, useState } from 'react';
import { DraggableLocation, DropResult } from '@hello-pangea/dnd';
import { ColumnType, TaskBoardType, api } from './api';

type DragDropProps = (
  source: DraggableLocation,
  destination: DraggableLocation,
) => void;

type RowDropshadowProps = (
  event: any,
  destinationIndex: number,
  sourceIndex: number,
) => void;

interface RowDropshadow {
  marginTop: number;
  height: number;
}

interface DragDropContextProps  {
  handleDragEnd: (result: DropResult) => void;
  handleDragStart: (event: any) => void;
  handleDragUpdate: (event: any) => void;
  rowDropshadowProps: RowDropshadow;
  draggedStartID: number;
  columns: ColumnType[];
  setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
  // children: any;
  columnData: TaskBoardType;
  columnContainerRootStyle: React.CSSProperties | object;
  columnTitleBoxStyle: React.CSSProperties | undefined;
  columnTitleStyle: React.CSSProperties | undefined;

  rowDropShadowPropsStyle: React.CSSProperties | undefined;
  rowChildItemRootStyle: React.CSSProperties | undefined;
  rowChildItemComponentRootStyle: React.CSSProperties | undefined;

  addTodoButtonRootStyle: React.CSSProperties | undefined;
  addButtonLabelStyle: React.CSSProperties | undefined;
};

const DragDropContext = React.createContext<DragDropContextProps | undefined>(
  undefined,
);

const getDraggedElement = (draggableId: any) => {
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

const DragDropProvider = ({
  children,
  columnData,
  columnContainerRootStyle,
  columnTitleBoxStyle,
  columnTitleStyle,

  rowDropShadowPropsStyle,
  rowChildItemRootStyle,
  rowChildItemComponentRootStyle,

  addTodoButtonRootStyle,
  addButtonLabelStyle,
}: DragDropContextProps | any) => {
  const [draggedStartID, setDraggedStartId] = useState(0);
  const [columns, setColumns] = useState<ColumnType[]>(columnData);

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
  };

  const handleDragStart = (event: any) => {
    setDraggedStartId(event?.draggableId);
    const { index } = event.source;

    handleDropShadow(event, index, index);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    handleRowMove(source, destination);
  };

  return (
    <DragDropContext.Provider
      value={{
        handleDragEnd,
        handleDragStart,
        handleDragUpdate,
        rowDropshadowProps,
        draggedStartID,
        columns,
        setColumns,

        columnData,
        columnContainerRootStyle,
        columnTitleBoxStyle,
        columnTitleStyle,

        rowChildItemRootStyle,
        rowChildItemComponentRootStyle,
        rowDropShadowPropsStyle,

        addTodoButtonRootStyle,
        addButtonLabelStyle,
      }}
    >
      {children}
    </DragDropContext.Provider>
  );
};

export function useDragDrop() {
  const context = useContext(DragDropContext);
  if (context === undefined) {
    throw new Error('useDragDrop must be used inside DragDropProvider');
  }

  return context;
}

DragDropProvider.defaultProps = {
  columnData:[],
  columnContainerRootStyle: {},
  columnTitleBoxStyle: {},
  columnTitleStyle: {},

  rowChildItemRootStyle: {},
  rowChildItemComponentRootStyle: {},
  rowDropShadowPropsStyle: {},

  addTodoButtonRootStyle: {},
  addButtonLabelStyle: {},
};
export default DragDropProvider;
