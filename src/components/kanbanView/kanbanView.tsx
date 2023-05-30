import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardContainer from './cardContainer';
import { view_styles } from './styles';
interface DragProps {
  cardRootStyle: object;
  childCardStyle: object;
  cardContainerStyle: object;
  cardContainerData: [{ title: string }, { title: string }, { title: string }];
  cardData: any;
  // cardData: [
  //   {
  //     id: number;
  //     title: string;
  //     status: string;
  //     cardTitle: string;
  //     isActive: boolean;
  //     notifyIcon: React.ReactNode;
  //     moreIcon: React.ReactNode;
  //     subTitles: [
  //       {
  //         label: string;
  //         bgColor: string;
  //         borderColor: string;
  //         textColor: string;
  //       }
  //     ];
  //     images: [
  //       { img: string; height: string | number; width: string | number }
  //     ];
  //     created_at: string;
  //     done?: boolean;
  //   },
    
  // ];
}

const KanbanView = (props: DragProps) => {
  const {
    cardData,
    cardRootStyle,
    childCardStyle,
    cardContainerStyle,
    // cardContainerData,
  } = props;
  const [create, setCreate] = useState<any>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isDropped, setIsDropped] = useState({ status: '' });

  const onDragStart = (evt: React.DragEvent<HTMLDivElement>, id: string) => {
    let element = evt.dataTransfer;
    evt.dataTransfer.setData('listId', id);
    evt.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.currentTarget.classList.remove('dragged');
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
  let pending = create?.filter((data: any) => data?.status === 'Pending');
  let process = create?.filter((data: any) => data?.status === 'Progress');
  let complete = create?.filter((data: any) => data?.status === 'Completed');

  const containers = [
    { title: 'Pending', child: pending,component:"" },
    { title: 'Progress', child: process,component:"" },
    { title: 'Completed', child: complete, component:""},
  ];

  useEffect(() => {
    setCreate(cardData);
  }, [create]);
  return (
    <>
      <Box sx={{ ...view_styles.rootStyle, ...cardRootStyle }}>
        <CardContainer
          // cardContainerData={cardContainerData}
          childCardStyle={childCardStyle}
          childItems={containers}
          cardContainerStyle={cardContainerStyle}
          isDragging={isDragging}
          isDropped={isDropped}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDrop={onDrop}
          onDragOver={onDragOver} cardContainerData={undefined}        />
      </Box>
    </>
  );
};

export default KanbanView;
