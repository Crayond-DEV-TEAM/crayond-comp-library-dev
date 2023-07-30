import React from 'react'
import DragDropProvider from './DragDropProvider'
import { Board } from './Board'
import { api } from './api'

const DragAndDrop = (props:any) => {
  const {}=props;




   return (
      <div>
         <DragDropProvider data={api.columns}>
            <Board />
         </DragDropProvider>
      </div>
   )
}
 
DragAndDrop.defaultProps={



}


export default DragAndDrop
