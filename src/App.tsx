import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import DragAndDrop from './components/kanbanView/dragAndDrop';
function App() {

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <DragAndDrop/>
    </div>
  );
}

export default App;
 