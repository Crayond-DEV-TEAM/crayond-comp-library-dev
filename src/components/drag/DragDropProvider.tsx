import React, { useContext, useState } from 'react';
import { DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { v4 } from 'uuid';
import { ColumnType } from './api';

type DragDropProps = (
  source: DraggableLocation,
  destination: DraggableLocation,
) => void;

type RowDropshadowProps = (
  event: any,
  destinationIndex: number,
  sourceIndex: number,
) => void;

type ColumnDropshadowProps = (
  event: any,
  destinationIndex: number,
  sourceIndex: number,
) => void;

type RowDropshadow = { marginTop: number; height: number };
type ColDropshadow = { marginLeft: number; height: number };

type DragDropContextProps = {
  onSubmit: (newRow: string, colIndex: number) => void;
  handleDuplicateTask: (rowIndex: number, colIndex: number) => void;
  handleNewColumn: (newName: string) => void;
  handleRemoveTask: (rowIndex: number, colIndex: number) => void;
  handleDeleteColumn: (colIndex: number) => void;
  handleDragEnd: (result: DropResult) => void;
  handleDragStart: (event: any) => void;
  handleDragUpdate: (event: any) => void;
  rowDropshadowProps: RowDropshadow;
  colDropshadowProps: ColDropshadow;
  draggedStartID:number;
  columns: ColumnType[];
  setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
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
  property: string,
  clientDirection: 'clientHeight' | 'clientWidth',
) =>
  updatedChildrenArray.slice(0, destinationIndex).reduce((total, curr) => {
    const style = window.getComputedStyle(curr);
    const prop = parseFloat(style[property]);
    return total + curr[clientDirection] + prop;
  }, 0);

const DragDropProvider: React.FC<{ data: ColumnType[] }> = ({
  children,
  data,
}: any) => {
  const [draggedStartID ,setDraggedStartId] = useState(0)
  const [columns, setColumns] = useState<ColumnType[]>(data);
  const [colDropshadowProps, setColDropshadowProps] = useState<ColDropshadow>({
    marginLeft: 0,
    height: 0,
  });
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

  const handleColumnMove: DragDropProps = (source, destination) =>
    setColumns((prev) => {
      const updated = [...prev];
      const [removed] = updated.splice(source.index, 1);
      updated.splice(destination.index, 0, removed);
      return updated;
    });

  const handleDropshadowColumn: ColumnDropshadowProps = (
    event,
    destinationIndex,
    sourceIndex,
  ) => {

    const draggedElement: Element | Node | null = getDraggedElement(
      event.draggableId,
    )!.parentNode!.parentNode;
    if (!draggedElement) return;
    const { clientHeight } = draggedElement as Element;
    const updatedChildrenArray: Element[] = getUpdatedChildrenArray(
      draggedElement as Element,
      destinationIndex,
      sourceIndex,
    );
    const marginLeft = getStyle(
      updatedChildrenArray,
      destinationIndex,
      'marginRight',
      'clientWidth',
    );
    setColDropshadowProps({
      height: clientHeight,
      marginLeft,
    });
  };

  const handleDropShadow = (event: any, destinationIndex: number, sourceIndex: number) => {
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

  const handleDragUpdate = (event:any) => {
    const { source, destination } = event;

    if (!destination) return;
    if (event.type === 'column') {
      handleDropshadowColumn(event, destination.index, source.index);
    } else {
      handleDropShadow(event, destination.index, source.index);
    }
  };

  const handleDragStart = (event: any) => {
    console.log(event);
    setDraggedStartId(event?.draggableId)
    const { index } = event.source;
    if (event.type === 'column') {
      handleDropshadowColumn(event, index, index);
    } else {
      handleDropShadow(event, index, index);

    }
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === 'all-columns') {
      handleColumnMove(source, destination);
    } else {
      handleRowMove(source, destination);
    }
  };

  const handleDeleteColumn = (colIndex: number) =>
    setColumns((prev) => {
      const updated = [...prev];
      updated.filter((dat, rowIndex) => rowIndex !== colIndex);
      return updated;
    });

  const onSubmit = (newRow: string, colIndex: number) => {
    setColumns((prev) => {
      const updated = [...prev];
      updated[colIndex].tasks.push({ content: newRow, id: v4() });
      return updated;
    });
  };

  const handleRemoveTask = (rowIndex: number, colIndex: number) => {
    setColumns((prev) => {
      const updated = [...prev];
      updated[colIndex].tasks.splice(rowIndex, 1);
      return updated;
    });
  };

  const handleDuplicateTask = (rowIndex: number, colIndex: number) => {
    setColumns((prev) => {
      const updated = [...prev];
      updated[colIndex].tasks.push({
        content: updated[colIndex].tasks[rowIndex].content,
        id: v4(),
      });
      return updated;
    });
  };

  const handleNewColumn = (newName: string) => {
    setColumns((prev:any) => {
      const updated = [...prev];
      return [
        ...updated,
        {
          id: v4(),
          title: newName,
          tasks: [],
        },
      ];
    });
  };

  return (
    <DragDropContext.Provider
      value={{
        onSubmit,
        handleDuplicateTask,
        handleNewColumn,
        handleRemoveTask,
        handleDeleteColumn,
        handleDragEnd,
        handleDragStart,
        handleDragUpdate,
        rowDropshadowProps,
        colDropshadowProps,
        draggedStartID,
        columns,
        setColumns,
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

export default DragDropProvider;
