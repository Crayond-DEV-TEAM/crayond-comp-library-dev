// import React from 'react'
// import { Draggable } from 'react-beautiful-dnd'
// import { Box } from '@mui/material'
// import { styles } from './styles'

// interface ItemProps {
//   text: string
//   index: number
// }


// const DragItem: React.FC<ItemProps> = ({ text, index }) => {
//   return (
//     <Draggable draggableId={text} index={index}>
//       {provided => (
//         <Box
//          sx={{...styles.itemStyles}}
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//         >
//           {text}
//         </Box>
//       )}
//     </Draggable>
//   )
// }

// export default DragItem

import styled from "@emotion/styled";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
// import CustomAvatar from '../TableComponents/CustomAvatar'
// import { ReactComponent as RedArrow } from '../../assets/icons/High.svg'
// import { ReactComponent as YellowArrow } from '../../assets/icons/Medium.svg'
// import { ReactComponent as BlueArrow } from '../../assets/icons/Low.svg'

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
  /* background: ${() =>
    "isDragging" ? "rgba(255, 59, 59, 0.15)" : "white"}; */
  background: white;
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
  /* .priority{ */
  /* margin-right: 12px; */
  /* align-self: center;
    svg{
      width: 12px !important;
      height: 12px !important;
      margin-right: 12px; */
  /* margin-top: 2px; */
  /* } */
  /* } */
`;

const TaskCard = ({ item, index }:any) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <p>{item.Task}</p>
            <div className="secondary-details">
              <p>
                <span>
                  {new Date(item.Due_Date).toLocaleDateString("en-us", {
                    month: "short",
                    day: "2-digit"
                  })}
                </span>
              </p>
            </div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
