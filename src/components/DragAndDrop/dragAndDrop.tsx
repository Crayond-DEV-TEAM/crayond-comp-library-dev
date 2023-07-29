import { DragDropContext } from '@hello-pangea/dnd';
import { Box } from '@mui/material';
import { useState } from 'react';
import ActiveNotification from '../../assets/activeNotification';
import MoreIcon from '../../assets/moreIcon';
import NormalNotification from '../../assets/normalNotification';
import DragContainerCard from './dragContainer';
import { styles } from './styles';
import AddNewButtonIcon from '../../assets/addNewBtn';
import { RowDropShadow } from './props';

const cardData = [
  {
    id: 1,
    title: 'title1',
    status: 'Progress',
    cardTitle: 'Progress Create Components',
    isActive: true,
    notifyIcon: <ActiveNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 2,
    title: 'title2',
    status: 'Progress',
    cardTitle: 'Progress Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 3,
    title: 'title3',
    status: 'Progress',
    cardTitle: 'Progress Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 4,
    title: 'title4',
    status: 'Pending',
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <ActiveNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 5,
    title: 'title5',
    status: 'Pending',
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 6,
    title: 'title3',
    status: 'Completed',
    cardTitle: ' Completed Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 7,
    title: 'title3',
    status: 'Completed',
    cardTitle: 'Completed Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 8,
    title: 'title3',
    status: 'Completed',
    cardTitle: 'Completed Create Components',
    isActive: true,
    notifyIcon: <ActiveNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 9,
    title: 'title3',
    status: 'Pending',
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 10,
    title: 'title3',
    status: 'Pending',
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
  {
    id: 11,
    title: 'title3',
    status: 'Pending',
    cardTitle: 'Pending Create Components',
    isActive: true,
    notifyIcon: <NormalNotification />,
    moreIcon: <MoreIcon />,
    subTitles: [
      {
        label: '# design',
        bgColor: '',
        borderColor: '#D3D3D3',
        textColor: '',
      },
      {
        label: 'Design System',
        bgColor: '#DEE6F9',
        borderColor: '',
        textColor: '#2B5ED6',
      },
    ],
    images: [
      { img: '/sample.jpg', height: '', width: '' },
      { img: '/sample.jpg', height: '', width: '' },
    ],
    created_at: 'On 17 Mar, 23',
  },
];

const taskStatus = {
  requested: {
    name: 'Requested',
    items: cardData,
    bottomButton: {
      icon: <AddNewButtonIcon />,
      buttonLabel: 'Add New',
    },
  },
  inProgress: {
    name: 'Progress',
    items: [],
    bottomButton: {
      icon: <AddNewButtonIcon />,
      buttonLabel: 'Add New',
    },
  },
  done: {
    name: 'Done',
    items: [],
    bottomButton: {
      icon: <AddNewButtonIcon />,
      buttonLabel: 'Add New',
    },
  },
};

const getDraggedElement = (draggableId: any) => {
  console.log(draggableId, 'draggedElement');

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
}

const DragAndDrop = (props: any) => {
  const [columns, setColumns] = useState(taskStatus);
  const [dragItemIndex, setDragItemIndex] = useState("");
  const [rowDropShadowProps, setRowDropShadowProps] = useState<RowDropShadow>({
    marginTop: 0,
    height: 0,
  });

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


  const handleDropShadowRow = (event: any, destinationIndex: number, sourceIndex: number) => {
    const draggedElement = getDraggedElement(event.draggableId);
    console.log(draggedElement, 'henry');

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
    
    setRowDropShadowProps({
      height: clientHeight + 2,
      marginTop: marginTop + 2 * destinationIndex,
    });
  };

  const onDragStart = (result: any) => {
    const { source,draggableId, destination } = result;
    console.log(result,"onDragStart");
    handleDropShadowRow(result,source.index,source.index)
    // setDragItemIndex(source);
  };

  const onDragUpdate = (val: any) => {
     const {destination,draggableId,source}=val;
     handleDropShadowRow(val,destination.index, source.index)
    // console.log(val,"ondragUpdate");
  };
  
  const onDragEnd = (result: any, columns: any, setColumns: any) => {
   console.log(result,"ondragEnd");
   

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
    setDragItemIndex("")
  };

  return (
    <>
      <div>
        <Box sx={{ ...styles.rootStyle }}>
          <DragDropContext
            onDragUpdate={(result) => onDragUpdate(result)}
            onDragStart={(result) => onDragStart(result)}
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns)?.map(([columnId, column], index) => {
              return (
                <DragContainerCard
                  columnId={columnId}
                  column={column}
                  // data={columns}
                  // index={index}
                  rowDropShadowProps={rowDropShadowProps}
                  dragItemIndex={dragItemIndex}
                />
              );
            })}
          </DragDropContext>
        </Box>
      </div>
    </>
  );
};

export default DragAndDrop;
