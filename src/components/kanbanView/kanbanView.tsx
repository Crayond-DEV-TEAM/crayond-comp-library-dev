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

  const { x, y } = position;

  const handleOnDragLeave = (event: React.MouseEvent, id: number | string) => {
    //  console.log(event,id,"handleOnDragLeave")
  };

  const handleOnDragEnter = (
    evt: React.DragEvent<HTMLDivElement>,
    id: string | number
  ) => {
    // console.log(evt,"handleOnDragEnter")
  };


  const onDragStart = (evt: React.DragEvent<HTMLDivElement>|any, id: any) => {
    evt.dataTransfer.setData('listId', id);
    evt.dataTransfer.effectAllowed = 'move';
    evt.currentTarget.classList.add('dragged');
    let styles = evt.currentTarget.style;
    let childStyles = evt.target.children[0];
      styles.width="210px"
         
    setTimeout(function () {
      styles.display = 'block';
      styles.border = '2px dashed #665CD7';
      styles.backgroundColor="#F1F1F1";
      childStyles.style.visibility="hidden";
    }, 0);
    setIsDragging(true);
  };

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>|any) => {
    evt.currentTarget.classList.remove('dragged');
    evt.dataTransfer.clearData('listId');
    let styles = evt.currentTarget.style;
    let childStyles = evt.target.children[0];

    setTimeout(function () {
      styles.display = 'block';
      styles.border = 'none';
      styles.backgroundColor="#FFFF";
      childStyles.style.visibility="visible";
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
    evt: React.DragEvent<HTMLDivElement>|any,
    status: boolean,
    title:string,
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
