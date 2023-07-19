import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { CompareFeature } from './components/compareFeature';
import TickIcon from './assets/tickIcon';

const columnData = [
  { id: 1, title: '' },
  { id: 2, title: 'Starter' },
  { id: 3, title: 'Personal' },
  { id: 4, title: 'Professional' },
];
const rowData = [
  {
    id: 1,
    title: 'Import Data from Cloud Storage Services',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
  },
  {
    id: 2,
    title: 'Upload Excel and CSV Files',
    Starter: '',
    Personal: <TickIcon />,
    Professional: <TickIcon />,
  },
  {
    id: 3,
    title: 'Export Charts',
    Starter: <TickIcon />,
    Personal: '',
    Professional: <TickIcon />,
  },
  {
    id: 3,
    title: 'Import Data from Cloud Storage Services',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
  },
  {
    id: 4,
    title: 'Share Charts with Other Users',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
  },
];

function App() {
  return (
    <div
      className="App"
      style={{
        width: '80vw',
        background: '#fff',
        height: '50vh',
        padding: '100px',
      }}
    >
      <CompareFeature
        rowBorderColor={''}
        columnData={columnData}
        rowData={rowData}
      />
    </div>
  );
}

export default App;
