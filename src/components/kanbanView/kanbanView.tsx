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

  const handleMouseDown = (event: React.MouseEvent) => {
    // console.log(event,"handleMouseDown")
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    // console.log(event,"handleMouseUp")
  };

  const handleOnDragEnter = (
    evt: React.DragEvent<HTMLDivElement>,
    id: string | number
  ) => {
    // console.log(evt,"handleOnDragEnter")
  };

  const handleOnDrag = (
    evt: React.DragEvent<HTMLDivElement>,
    id: string | number
  ) => {
    evt.preventDefault();
    let styles = evt.currentTarget.style;
    // console.log(evt,"handleOnDrag");
    // console.log("🚀 ~ file: kanbanView.tsx:113 ~ KanbanView ~ evt:", evt)
    setTimeout(() => {
      // let childElements = evt.target.children[0];
        // evt.currentTarget.style.opacity = '1'
        console.log("🚀 ~ file: kanbanView.tsx:58 ~ setTimeout ~ evt.currentTarget:", evt.currentTarget)
      // console.log("🚀 ~ file: kanbanView.tsx:112 ~ KanbanView ~ evt:", evt.target.style)
    }, 0);
    // setPosition({ x: evt.clientX, y: evt.clientY });
    // styles.width = '335px';
    // styles.padding = '12px';
    // styles.backgroundColor = '#FFFFFF';
    // styles.position = 'absolute';

    // styles.left = `${cursorPosition.y}`;
    // styles.top = `${cursorPosition.x}`;
    // styles.transform = `translate(${x}px, ${y}px)`;

    // setTimeout(function () {
    //   styles.display = 'none';
    // }, 0);
  };

  const onDragStart = (evt: React.DragEvent<HTMLDivElement> | any, id: any) => {
    // console.log(evt,"handleOnDrag");
    evt.dataTransfer.setData('listId', id);
    evt.dataTransfer.effectAllowed = 'move';
    evt.currentTarget.classList.add('dragged');
    let styles = evt.currentTarget.style;
    let childElements = evt.target.children[0]; 
    setTimeout(function () {
      // styles.display = 'block';
      styles.border = '2px dashed #665CD7';
      // console.log("🚀 ~ file: kanbanView.tsx:81 ~ styles:", styles)
      styles.borderRadius = '8px';
      styles.backgroundColor = '#F1F1F1';
      childElements.style.visibility = 'hidden';
    }, 0);
    setIsDragging(true);

    // setPosition({ x: evt.clientX, y: evt.clientY });
  };

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.currentTarget.classList.remove('dragged');
    evt.dataTransfer.clearData('listId');
    console.log("🚀 ~ file: kanbanView.tsx:94 ~ onDragEnd ~ evt:", evt)
    let styles = evt.currentTarget.style;
    let childElements = evt.target.children[0];
    // setPosition({ x: evt.clientX, y: evt.clientY });

    setTimeout(function () {
      styles.display = 'block';
      styles.border = 'none';
      styles.backgroundColor = '#ffff';
      childElements.style.visibility = 'visible';
      childElements.style.opacity = "0.8";
    }, 0);
  };

  const onDragOver = (
    evt: React.DragEvent<HTMLDivElement>,
    dragging: boolean,
    status: string
  ) => {
    evt.preventDefault();
    // console.log("🚀 ~ file: kanbanView.tsx:113 ~ KanbanView ~ evt:", evt)
    // setTimeout(() => {
    //   let childElements = evt.target.children[0];
    //   childElements.style.backgroundColor = 'red'
    //   // console.log("🚀 ~ file: kanbanView.tsx:112 ~ KanbanView ~ evt:", evt.target.style)
    // }, 0);
    setIsDropped({ status: status });
    // console.log("hover");
  };

  const onDrop = (
    evt: React.DragEvent<HTMLDivElement>,
    dragging: boolean,
    status: string
  ) => {
    evt.preventDefault();
    let dataId = evt.dataTransfer.getData('listId');
    let tasks = create;
    console.log(tasks, '0000');
    console.log(dataId, 'dataId');

    let updated = tasks?.map((task: cardDataProp) => {
      if (task?.id.toString() === dataId.toString()) {
        task.status = status;
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
