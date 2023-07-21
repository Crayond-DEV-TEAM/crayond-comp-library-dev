import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardContainer from './cardContainer';
import { view_styles } from './styles';
import { DragProps, cardDataProp } from './props';

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
  const [fromIndex, setFromIndex] = useState(0);
  const [hoverId, setHoverId] = useState(0);

  const moveElement = (array: any[], fromIndex: any, toIndex: any) => {
    const element = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, element);
    return array;
  };

  const filterCardStatus = (array: any, key: string) => {
    let status = array.filter((val: any) => val?.status === key);
    return status;
  };

  const getChildItemUsingType = (type: string) => {
    return create?.filter((data: any) => data?.status === type);
  };

  const handleOnDragLeave = (event: React.MouseEvent, id: number | string) => {
    setHoverId(0);
  };

  const handleOnDragEnter = (
    evt: React.DragEvent<HTMLDivElement>,
    id: string | number
  ) => {};

  const onDragOver = (
    evt: React.DragEvent<HTMLDivElement>,
    dragging: boolean,
    status: string
  ) => {
    evt.preventDefault();
    setIsDropped({ status: status });
  };

  const onDragHoverChildCard = (
    evt: React.DragEvent<HTMLDivElement> | any,
    items: cardDataProp,
    index: number
  ) => {
    setFromIndex(index);
    setHoverId(items?.id);
  };

  const onDragStart = (
    evt: React.DragEvent<HTMLDivElement> | any,
    id: any,
    index: number
  ) => {
    evt.dataTransfer.setData('listId', id);
    evt.dataTransfer.effectAllowed = 'move';
    evt.currentTarget.classList.add('dragged');
    let styles = evt.currentTarget.style;
    let childStyles = evt.target.children[0];

    setFromIndex(index);
    setIsDragging(true);
    setTimeout(function () {
      styles.display = 'block';
      styles.border = '2px dashed #665CD7';
      styles.backgroundColor = '#F1F1F1';
      childStyles.style.visibility = 'hidden';
    }, 0);
  };

  const onDragEnd = (
    evt: React.DragEvent<HTMLDivElement> | any,
    items: cardDataProp,
    index: number
  ) => {
    evt.currentTarget.classList.remove('dragged');
    evt.dataTransfer.clearData('listId');
    let styles = evt.currentTarget.style;
    let childStyles = evt.target.children[0];
    const statusKey = items.status;

    let filterContainerData = filterCardStatus(create, statusKey);

    let changeIndex = moveElement(filterContainerData, index, fromIndex);

    const ids = changeIndex?.map((val) => val.id);

    const oldArr = create.filter((val: any) => !ids.includes(val.id));

    setCreate([...oldArr, ...changeIndex]);

    setHoverId(0);

    setTimeout(function () {
      styles.display = 'block';
      styles.border = 'none';
      styles.backgroundColor = '#FFFF';
      childStyles.style.visibility = 'visible';
    }, 0);
  };

  const onDrop = (
    evt: React.DragEvent<HTMLDivElement> | any,
    status: boolean,
    title: string
  ) => {
    evt.preventDefault();
    let dataId = evt.dataTransfer.getData('listId');
    let tasks = create;
    let updated = tasks?.map((task: cardDataProp) => {
      if (task?.id.toString() === dataId.toString()) {
        task.status = title;
      }
      return task;
    });
    setCreate(updated);
    setIsDragging(false);
    setHoverId(0);
  };

  useEffect(() => {
    setCreate(cardData);
  }, []);
  return (
    <>
      <Box sx={{ ...view_styles.rootStyle, ...cardRootStyle }}>
        {cardContainerData.map((container) => (
          <CardContainer
            childItems={getChildItemUsingType(container?.title)}
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
            onDragOver={onDragOver}
            onDragHoverChildCard={onDragHoverChildCard}
            handleClickNotifyIcon={handleClickNotifyIcon}
            handleClickMoreIcon={handleClickMoreIcon}
            handleAddNewButton={handleAddNewButton}
            key={container?.title}
            hoverId={hoverId}
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
