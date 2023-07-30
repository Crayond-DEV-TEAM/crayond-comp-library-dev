import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import DragAndDrops from './components/drag/dragAndDrop';
import DragAndDrop from './components/kanbanView/dragAndDrop';
// import { DragAndDrop } from './components/DragAndDrop';
// import { DragAndDrop } from './components/DragAndDrop';
function App() {

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      {/* <DragAndDrops /> */}
      {/* <DragAndDrop/> */}
      <DragAndDrop/>
    </div>
  );
}

export default App;
 