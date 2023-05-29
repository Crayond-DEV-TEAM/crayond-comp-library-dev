import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { view_styles } from './styles';

const ChildCards = (props: any) => {
  const { onDragStart = () => {}, onDragEnd = () => {}, childValue } = props;

  return (
    <Box
      sx={{ ...view_styles.childBoxContainer }}
      onDragStart={(e) => onDragStart(e, childValue?.id)}
      onDragEnd={(e) => onDragEnd(e, childValue?.id)}
      draggable
    >
      <Box sx={{ ...view_styles.childTitleContainer }}>
        <Box>
          <Typography sx={{ ...view_styles.titleStyle }}>
            {childValue?.title}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', columnGap: '12px' }}>
          <span>{childValue?.notifyIcon}</span>
          <span>{childValue?.moreIcon}</span>
        </Box>
      </Box>
      <Box sx={{ ...view_styles.designBlock }}>
        {childValue?.subTitles?.map((value: any) => (
          <Box
            sx={{
              ...view_styles.designBox,
              background: value?.bgColor ? '#DEE6F9' : '',
              border: value?.borderColor
                ? `1px solid ${value?.borderColor}`
                : '',
            }}
          >
            <Typography
              sx={{
                ...view_styles.titleStyle,
                marginBottom: '0px',
                color: value?.textColor ? value?.textColor : '#929292',
              }}
            >
              {value?.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ ...view_styles.childTitleContainer }}>
        <Box>
          <AvatarGroup>
            {childValue?.images?.map((val: any) => (
              <Avatar
                alt="Rem Sharp"
                src={val?.img}
                sx={{ width: 24, height: 24 }}
              />
            ))}
          </AvatarGroup>
        </Box>
        <Box>
          <Typography sx={{ ...view_styles.subTitleStyle, color: '#929292' }}>
            {childValue?.created_at}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const KanbanView = (props: any) => {
  const { cardData } = props;
  const [create, setCreate] = useState<any>([]);

  const onDragEnter = (evt: any) => {
    evt.preventDefault();
    // let element = evt.currentTarget;
    // element.classList.add('dragged-over');
    // evt.dataTransfer.dropEffect = 'move';
  };

  const onDragLeave = (evt: any) => {
    evt.preventDefault();
    // let currentTarget = evt.currentTarget;
    // let newTarget = evt.relatedTarget;
    // if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
    //   return;
    // let element = evt.currentTarget;
    // element.classList.remove('dragged-over');
  };

  const onDragStart = (evt: any, id: number) => {
    console.log('Your are started to dragged');
    let element = evt.dataTransfer;
    evt.dataTransfer.setData('listId', id);
    evt.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnd = (evt: any) => {
    evt.currentTarget.classList.remove('dragged');
  };

  const onDragOver = (evt: any) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (evt: any, value: boolean, status: string) => {
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
  };

  let pending = create.filter((data: object) => data?.status === 'Pending');
  let process = create.filter((data: object) => data?.status === 'Progress');
  let list = create.filter((data: object) => data?.status === 'List');
  let completed = create.filter((data: object) => data?.status === 'Completed');

  useEffect(() => {
    setCreate(cardData);
  }, [create]);
  return (
    <>
      <Box sx={{ display: 'flex', columnGap: '40px' }}>
        <div
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, 'Pending')}
        >
          <Box sx={{ ...view_styles.cardContainer }}>
            <Typography sx={{ ...view_styles.titleStyle }}>{'List'}</Typography>

            {pending?.map((child: Object) => (
              <ChildCards
                childValue={child}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
              />
            ))}

            <Box sx={{ ...view_styles.addTodoButton }}>
              <span style={{ marginTop: '5px' }}>
                <img src="/add-Todo.svg" alt="noti" />
              </span>
              <span style={{ color: '#665CD7' }}>Add New</span>
            </Box>
          </Box>
        </div>

        <div
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, 'Progress')}
        >
          <Box sx={{ ...view_styles.cardContainer }}>
            <Typography sx={{ ...view_styles.titleStyle }}>
              {'Process'}
            </Typography>

            {process?.map((child: object) => (
              <ChildCards
                childValue={child}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
              />
            ))}

            <Box sx={{ ...view_styles.addTodoButton }}>
              <span>
                <img src="/add-Todo.svg" alt="noti" />
              </span>
              <span style={{ color: '#665CD7' }}>Add New</span>
            </Box>
          </Box>
        </div>

        <div
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, 'Completed')}
        >
          <Box sx={{ ...view_styles.cardContainer }}>
            <Typography sx={{ ...view_styles.titleStyle }}>
              {'Completed'}
            </Typography>

            {completed?.map((child: object) => (
              <ChildCards
                childValue={child}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
              />
            ))}

            <Box sx={{ ...view_styles.addTodoButton }}>
              <span>
                <img
                  src="/add-Todo.svg"
                  alt="noti"
                  height={'18px'}
                  width={'18px'}
                />
              </span>
              <span style={{ color: '#665CD7' }}>Add New</span>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default KanbanView;
