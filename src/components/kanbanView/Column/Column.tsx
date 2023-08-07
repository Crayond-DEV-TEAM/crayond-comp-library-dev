import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from '@hello-pangea/dnd';
import { Box, SxProps } from '@mui/material';
import React, { CSSProperties } from 'react';
import { Row } from '../Row';
import { styles } from '../styles';
import {
  Container,
  DropshadowContainer,
  RowContainer,
  Title,
  TitleContainer,
} from './Column.styled';
import { ColumnType, cardItemProp } from '../api';

interface ShadowProp {
  marginTop: number | string;
  height: number | string;
}

interface ColumnProps {
  column: ColumnType;

  rowDropshadowProps: ShadowProp;

  rootStyle?: SxProps;
  columnContainerRootStyle?: SxProps;
  columnTitleBoxStyle?: SxProps;
  columnTitleStyle?: SxProps;
  columnTitleColor?: string;

  rowDropShadowStyles?: SxProps;
  rowDropShadowWidth?: number | string;
  rowDropShadowBgColor?: string;
  rowDropShadowBorderColor?: string;

  addButtonLabelSize?: number | string;
  addButtonLabelColor?: string;
  addTodoButtonRootStyle?: SxProps;
  addButtonLabelStyle?: SxProps;
  columnContainerBgColor?: string;

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

const Column = (props: ColumnProps) => {
  const {
    column,
    rowDropshadowProps,
    columnContainerRootStyle,

    columnTitleBoxStyle,
    columnTitleStyle,
    columnTitleColor,

    rowDropShadowStyles,
    rowDropShadowWidth,
    rowDropShadowBgColor,
    rowDropShadowBorderColor,

    addButtonLabelSize,
    addButtonLabelColor,
    addTodoButtonRootStyle,
    addButtonLabelStyle,
    columnContainerBgColor,

    rowChildItemRootStyle,
    childItemBgColor,
    childItemComponentBgColor,
    rowChildItemComponentRootStyle,

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
    <>
      <Container
        style={
          {
            ...columnContainerRootStyle,
            backgroundColor: columnContainerBgColor,
          } as CSSProperties
        }
      >
        <TitleContainer style={{ ...columnTitleBoxStyle } as CSSProperties}>
          <Title
            style={
              { ...columnTitleStyle, color: columnTitleColor } as CSSProperties
            }
          >
            {column?.title}
          </Title>
        </TitleContainer>
        <Droppable droppableId={column?.id} type="task">
          {(prov: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <RowContainer ref={prov.innerRef} {...prov.droppableProps}>
              {column?.tasks?.map((task: cardItemProp, taskIndex: number) => (
                <Row
                  key={task?.id}
                  task={task}
                  index={taskIndex}
                  rowChildItemRootStyle={rowChildItemRootStyle}
                  childItemBgColor={childItemBgColor}
                  rowChildItemComponentRootStyle={
                    rowChildItemComponentRootStyle
                  }
                  childItemComponentBgColor={childItemComponentBgColor}
                  childItemHoverBorderColor={childItemHoverBorderColor}
                  childItemHoverRootStyle={childItemHoverRootStyle}
                  childItemActiveBorderColor={childItemActiveBorderColor}
                  childItemActiveRootStyle={childItemActiveRootStyle}
                  childItemComponentHoverBorderColor={
                    childItemComponentHoverBorderColor
                  }
                  childItemComponentHoverRootStyle={
                    childItemComponentHoverRootStyle
                  }
                  childItemComponentActiveBorderColor={
                    childItemComponentActiveBorderColor
                  }
                  childItemComponentActiveRootStyle={
                    childItemComponentActiveRootStyle
                  }
                />
              ))}
              {prov.placeholder}
              <DropshadowContainer>
                {snapshot.isDraggingOver && (
                  <div
                    style={
                      {
                        marginTop: rowDropshadowProps.marginTop,
                        height: rowDropshadowProps.height,
                        minWidth: rowDropShadowWidth,
                        border: `2px dashed ${rowDropShadowBorderColor}`,
                        borderRadius: '8px',
                        backgroundColor: rowDropShadowBgColor,
                        ...rowDropShadowStyles,
                      } as CSSProperties
                    }
                  />
                )}
              </DropshadowContainer>
            </RowContainer>
          )}
        </Droppable>
        <Box
          sx={{
            ...styles.addTodoButton,
            width: '100%',
            ...addTodoButtonRootStyle,
          }}
          onClick={() => column?.bottomButton?.onClick()}
        >
          <span style={{ marginTop: '5px' }}>{column?.bottomButton?.icon}</span>
          <span
            style={
              {
                color: addButtonLabelColor,
                fontSize: addButtonLabelSize,
                ...addButtonLabelStyle,
              } as CSSProperties
            }
          >
            {' '}
            {column?.bottomButton?.buttonLabel}
          </span>
        </Box>
      </Container>
    </>
  );
};

export default Column;
