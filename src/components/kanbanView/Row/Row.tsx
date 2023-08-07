import { Draggable, DraggableProvided } from '@hello-pangea/dnd';
import React from 'react';
import { styles } from '../styles';
import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  SxProps,
  Typography,
} from '@mui/material';

interface RowProps {
  task: any;
  index: number;
  rowChildItemRootStyle?: SxProps;
  childItemBgColor?: string;
  childItemComponentBgColor?: string;
  rowChildItemComponentRootStyle?: SxProps;

  childItemHoverBorderColor?: string;
  childItemHoverRootStyle?: SxProps;
  childItemActiveBorderColor?: string;
  childItemActiveRootStyle?: SxProps;

  childItemComponentHoverBorderColor?: string;
  childItemComponentHoverRootStyle?: SxProps;
  childItemComponentActiveBorderColor?: string;
  childItemComponentActiveRootStyle?: SxProps;
}

const Row = (props: RowProps) => {
  const {
    task,
    index,
    rowChildItemRootStyle,
    childItemBgColor,
    rowChildItemComponentRootStyle,
    childItemComponentBgColor,

    childItemHoverBorderColor,
    childItemHoverRootStyle,
    childItemActiveBorderColor,
    childItemActiveRootStyle,

    childItemComponentHoverBorderColor,
    childItemComponentHoverRootStyle,
    childItemComponentActiveBorderColor,
    childItemComponentActiveRootStyle,
  } = props;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: DraggableProvided) => (
        <>
          {task?.component ? (
            <>
              <Box
                sx={
                  {
                    ...styles.childBoxContainer,
                    ...rowChildItemComponentRootStyle,
                    backgroundColor: childItemComponentBgColor,
                    '&:hover': {
                      border: `1px solid ${childItemComponentHoverBorderColor}`,
                      ...childItemComponentHoverRootStyle,
                    },
                    '&:active': {
                      border: `1px solid ${childItemComponentActiveBorderColor}`,
                      ...childItemComponentActiveRootStyle,
                    },
                  } as SxProps
                }
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Box sx={{ p: '12px', ...rowChildItemComponentRootStyle }}>
                  {task?.component}
                </Box>
              </Box>
            </>
          ) : (
            <Box
              sx={
                {
                  ...styles.childBoxContainer,
                  ...rowChildItemRootStyle,
                  backgroundColor: childItemBgColor,
                  '&:hover': {
                    border: `1px solid ${childItemHoverBorderColor}`,
                    ...childItemHoverRootStyle,
                  },
                  '&:active': {
                    border: `1px solid ${childItemActiveBorderColor}`,
                    ...childItemActiveRootStyle,
                  },
                } as SxProps
              }
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <Box sx={{ p: '12px' }}>
                <Box sx={{ ...styles.childTitleContainer }}>
                  <Box>
                    <Typography sx={{ ...styles.titleStyle }}>
                      {task?.cardTitle}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', columnGap: '12px' }}>
                    <IconButton onClick={() => false}>
                      {task?.notifyIcon}
                    </IconButton>
                    <IconButton onClick={() => false}>
                      {task?.moreIcon}
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ ...styles.designBlock }}>
                  {task?.subTitles?.map((value: any) => (
                    <Box
                      key={value?.id}
                      sx={
                        {
                          ...styles.designBox,
                          background: value?.bgColor ?? '#DEE6F9',
                          border: value?.borderColor
                            ? `1px solid ${value?.borderColor}`
                            : '',
                        } as SxProps
                      }
                    >
                      <Typography
                        sx={
                          {
                            ...styles.titleStyle,
                            marginBottom: '0px',
                            color: value?.textColor
                              ? value?.textColor
                              : '#929292',
                          } as SxProps
                        }
                      >
                        {value?.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ ...styles.childTitleContainer }}>
                  <AvatarGroup>
                    {task?.images?.map((val: any, i: number) => (
                      <Avatar
                        key={i}
                        alt="Rem Sharp"
                        src={val?.img}
                        sx={{ width: 24, height: 24 }}
                      />
                    ))}
                  </AvatarGroup>

                  <Typography
                    sx={{
                      ...styles.subTitleStyle,
                      color: '#929292',
                      mb: '0px',
                    }}
                  >
                    {task?.createdAt}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </>
      )}
    </Draggable>
  );
};

export default Row;
