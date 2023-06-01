import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardContainer from './cardContainer';
import { view_styles } from './styles';
import { object } from 'yup';
interface DragProps {
  cardRootStyle: object;
  childCardStyle: object;
  cardContainerStyle: object;
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
    cardContainerStyle,
    childCardComponentStyle,
    handleClickNotifyIcon,
    handleClickMoreIcon,
    handleAddNewButton,
  } = props;
  const [create, setCreate] = useState<any>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isDropped, setIsDropped] = useState({ status: '' });

  const handleOnDragEnter = (
    evt: React.DragEvent<HTMLDivElement>,
    id: string | number
  ) => {
    evt.preventDefault();
  };

  const handleOnDragLeave = (
    evt: React.DragEvent<HTMLDivElement>,
    id: string | number
  ) => {
    evt.preventDefault();
  };

  const onDragStart = (evt: React.DragEvent<HTMLDivElement>, id: any) => {
    evt.dataTransfer.setData('listId', id);
    evt.dataTransfer.effectAllowed = 'move';
    evt.currentTarget.classList.add('dragged');
    let styles = evt.currentTarget.style;
    setTimeout(function () {
      styles.display = 'none';
    }, 0);
  };

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.currentTarget.classList.remove('dragged');
    evt.dataTransfer.clearData('listId');
    let styles = evt.currentTarget.style;
    setTimeout(function () {
      styles.display = 'block';
    }, 0);
  };

  const onDragOver = (
    evt: React.DragEvent<HTMLDivElement>,
    dragging: boolean,
    status: string
  ) => {
    evt.preventDefault();
    setIsDragging(true);
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

  const shuffleSameContainer = (type: string) => {
    return setCreate([...create.slice(1), create[0]]);
  };

  useEffect(() => {
    setCreate(cardData);
  }, [create]);
  return (
    <>
      <Box sx={{ ...view_styles.rootStyle, ...cardRootStyle }}>
        {cardContainerData.map((container, i) => (
          <CardContainer
            childItems={getChildItemUsingType(container.title)}
            containerData={container}
            childCardStyle={childCardStyle}
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
            onDragOver={onDragOver}
            handleClickNotifyIcon={handleClickNotifyIcon}
            handleClickMoreIcon={handleClickMoreIcon}
            handleAddNewButton={handleAddNewButton}
            key={i}
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
  childCardComponentStyle: {},
  handleClickNotifyIcon: () => {},
  handleClickMoreIcon: () => {},
  handleAddNewButton: () => {},
  cardContainerData: { title: "string" },
  cardData: {
    id:0,
    title: "",
    status: "",
    cardTitle: "",
    component: "",
    isActive: false,
    notifyIcon: "",
    moreIcon: "",
    subTitles: {
      label: "",
      bgColor: "",
      borderColor: "",
      textColor: "",
    },
    images: { img: ""},
    created_at: "",
    done: false,
  },
}
export default KanbanView;
