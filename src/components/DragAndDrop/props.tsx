export interface DragAndDropProps {}
export interface DragStart {
  draggableId: number;
  mode: string;
  type: string;
  source: {
    droppableId: string;
    index: number;
  };
}

export interface RowDropShadow {
  marginTop: number;
  height: number;
}
export interface DragUpdate {
  combine: null;
  destination: {
    droppableId: string;
    index: number;
  };
  draggableId: number;
  mode: string;
  source: {
    droppableId: string;
    index: number;
  };
  type: string;
}

export interface DragEndColumn {
  requested: {
    name: string;
    items: [];
    bottomButton: {
      icon: React.ReactNode;
      buttonLabel: string;
    };
  };
  inProgress: {
    name: string;
    items: [];
    bottomButton: {
      icon: React.ReactNode;
      buttonLabel: string;
    };
  };
  done: {
    name: string;
    items: [];
    bottomButton: {
      icon: React.ReactNode;
      buttonLabel: string;
    };
  };
}
