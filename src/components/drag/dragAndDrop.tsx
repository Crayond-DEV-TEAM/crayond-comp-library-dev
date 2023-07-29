import React from 'react'
import DragDropProvider from './DragDropProvider'
import { Board } from './Board'
import { api } from './api'

const DragAndDrops = () => {
   return (
      <div>
         <DragDropProvider data={api.columns}>
            <Board />
         </DragDropProvider>
      </div>
   )
}
export default DragAndDrops
