import { DragDropContext } from '@hello-pangea/dnd';
import { Box } from '@mui/material';
import { useState } from 'react';
import ActiveNotification from '../../assets/activeNotification';
import MoreIcon from '../../assets/moreIcon';
import NormalNotification from '../../assets/normalNotification';
import DragContainerCard from './dragContainer';
import { styles } from './styles';

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
  },
  inProgress: {
    name: 'Progress',
    items: [],
  },
  done: {
    name: 'Done',
    items: [],
  },
};
const DragAndDrop = (props: any) => {
  const [columns, setColumns] = useState(taskStatus);

  const onDragEnd = (result: any, columns: any, setColumns: any) => {
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
      <div>
        <Box sx={{ ...styles.rootStyle }}>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <DragContainerCard
                  columnId={columnId}
                  column={column}
                  index={index}
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
