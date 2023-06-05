import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardContainer from './cardContainer';
import { view_styles } from './styles';
import { style } from '../HeaderTwo/style';
import zIndex from '@mui/material/styles/zIndex';
interface DragProps {
  cardRootStyle: object;
  childCardStyle: object;
  cardContainerStyle: object;
  bottomButtonStyle: object;
  containerTitleStyle: object;
  childCardComponentStyle: object;
  handleClickNotifyIcon: () => void;
  handleClickMoreIcon: () => void;
  handleAddNewButton: () => void;
  cardContainerData: { title: string }[];
  cardData: {
    id: number;
    title: string;
    status: string;
    cardTitle: string;
    component?: React.ReactNode;
    isActive?: boolean;
    notifyIcon: React.ReactNode;
    moreIcon: React.ReactNode;
    subTitles: {
      label: string;
      bgColor: string;
      borderColor: string;
      textColor: string;
    }[];
    images: { img: string; height: string | number; width: string | number }[];
    created_at: string;
    done?: boolean;
  }[];
}

const KanbanView = (props: DragProps) => {
  const {
    cardData,
    cardContainerData,
    cardRootStyle,
    childCardStyle,
    containerTitleStyle,
    bottomButtonStyle,
    cardContainerStyle,
    childCardComponentStyle,
    handleClickNotifyIcon,
    handleClickMoreIcon,
    handleAddNewButton,
  } = props;
  const [create, setCreate] = useState<any>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isDropped, setIsDropped] = useState({ status: '' });
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const { x, y } = position;
  // Update the cursor position when the mouse moves
  const handleOnDragLeave = (
    event: React.MouseEvent,
    id: number | string
  ) => {};

  const handleMouseDown = (event: React.MouseEvent) => {
    const clickStartPosition = {
      x: event.clientX,
      y: event.clientY,
    };
    // Do something with the click start position
    console.log('Mouse Click Start:', clickStartPosition);
  };

  const handleMouseUp = (event: React.MouseEvent) => {
  };

  const handleOnDragEnter = (
    evt: React.DragEvent<HTMLDivElement>,
    id: string | number
  ) => {
    evt.preventDefault();
  };

  const handleOnDrag = (
    evt: React.DragEvent<HTMLDivElement>,
    id: string | number
  ) => {
    setPosition({ x: evt.clientX, y: evt.clientY });
    evt.preventDefault();
    let styles = evt.currentTarget.style;
    styles.width = '335px';
    styles.padding = '12px';
    styles.backgroundColor = '#FFFFFF';
    styles.position = 'absolute';
    // styles.left = `${cursorPosition.y}`;
    // styles.top = `${cursorPosition.x}`;
    styles.transform = `translate(${x}px, ${y}px)`;

    setTimeout(function () {
      // styles.display = 'none';
    }, 0);
  };

  const onDragStart = (evt: React.DragEvent<HTMLDivElement>, id: any) => {
    evt.dataTransfer.setData('listId', id);
    evt.dataTransfer.effectAllowed = 'move';
    evt.currentTarget.classList.add('dragged');
    setTimeout(function () {
      // styles.display = 'none';
    }, 0);
    setPosition({ x: evt.clientX, y: evt.clientY });
  };

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.currentTarget.classList.remove('dragged');
    evt.dataTransfer.clearData('listId');
    let styles = evt.currentTarget.style;
    setPosition({ x: evt.clientX, y: evt.clientY });

    setTimeout(function () {
      // styles.display = 'block';
    }, 0);
  };

  const onDragOver = (
    evt: React.DragEvent<HTMLDivElement>,
    dragging: boolean,
    status: string
  ) => {
    evt.preventDefault();
    setIsDropped({ status: status });
  };

  const onDrop = (
    evt: React.DragEvent<HTMLDivElement>,
    dragging: boolean,
    status: string
  ) => {
    evt.preventDefault();
    let dataId = evt.dataTransfer.getData('listId');
    let tasks = create;
    let updated = tasks?.map((task: any) => {
      if (task?.id.toString() === dataId.toString()) {
        task.status = status;
      }
      return task;
    });
    setCreate(updated);
    setIsDragging(dragging);
  };

  const getChildItemUsingType = (type: string) => {
    return create?.filter((data: any) => data?.status === type);
  };

  useEffect(() => {
    setCreate(cardData);
  }, [create, position]);
  return (
    <>
      
      <Box sx={{ ...view_styles.rootStyle, ...cardRootStyle }}>
        {cardContainerData.map((container) => (
          <CardContainer
            childItems={getChildItemUsingType(container.title)}
            containerData={container}
            childCardStyle={childCardStyle}
            bottomButtonStyle={bottomButtonStyle}
            containerTitleStyle={containerTitleStyle}
            cardContainerStyle={cardContainerStyle}
            childCardComponentStyle={childCardComponentStyle}
            isDragging={isDragging}
            isDropped={isDropped}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={handleOnDragEnter}
            onDragLeave={handleOnDragLeave}
            onDrop={onDrop}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onDrag={handleOnDrag}
            onDragOver={onDragOver}
            handleClickNotifyIcon={handleClickNotifyIcon}
            handleClickMoreIcon={handleClickMoreIcon}
            handleAddNewButton={handleAddNewButton}
            key={container?.title}
          />
        ))}
      </Box>
    </>
  );
};

KanbanView.defaultProps = {
  cardRootStyle: {},
  childCardStyle: {},
  cardContainerStyle: {},
  containerTitleStyle: {},
  bottomButtonStyle: {},
  childCardComponentStyle: {},
  handleClickNotifyIcon: () => {},
  handleClickMoreIcon: () => {},
  handleAddNewButton: () => {},
  cardContainerData: { title: 'string', buttonName: '' },
  cardData: {
    id: 0,
    title: '',
    status: '',
    cardTitle: '',
    component: '',
    isActive: false,
    notifyIcon: '',
    moreIcon: '',
    subTitles: {
      label: '',
      bgColor: '',
      borderColor: '',
      textColor: '',
    },
    images: { img: '' },
    created_at: '',
    done: false,
  },
};
export default KanbanView;
