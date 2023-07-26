import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { DragAndDrop } from './components';
function App() {
  const initialColumns = [
    {
      id: 1,
      status:"Progress",
      list: ['item 1', 'item 2', 'item 3', 'item 4'],
    },
    {
      id: 2,
      status:"Pending",
      list: [],
    },
    {
      id: 3,
      status:"completed",
      list: [],
    },
  ];

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <DragAndDrop />
    </div>
  );
}

export default App;
