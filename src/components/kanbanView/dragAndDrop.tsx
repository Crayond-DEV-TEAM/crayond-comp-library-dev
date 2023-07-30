import React from 'react'
import DragDropProvider from './DragDropProvider'
import { Board } from './Board'

const DragAndDrop = (props:any) => {
  const {}=props;

   return (
      <div>
         <DragDropProvider>
            <Board />
         </DragDropProvider>
      </div>
   )
}
 
DragAndDrop.defaultProps={



}


export default DragAndDrop
