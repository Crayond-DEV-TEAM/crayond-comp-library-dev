import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { CompareFeature } from './components/compareFeature';
import TickIcon from './assets/tickIcon';

const columnData = [
  { id: 1, key: 'title', title: '', style: {} },
  { id: 2, key: 'Starter', title: 'Starter', style: {} },
  { id: 3, key: 'Personal', title: 'Personal', style: {} },
  { id: 4, key: 'Professional', title: 'Professional', style: {}},
];
const rowData = [
  {
    id: 1,
    title: 'Import Data from Cloud Storage Services',
    Personal: "",
    Starter: <TickIcon />,
    Professional: <TickIcon />,
    style: {},
  },
  {
    id: 2,
    title: 'Upload Excel and CSV Files',
    Starter:<TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
    style: {}
  },
  {
    id: 3,
    title: 'Export Charts',
    Starter: <TickIcon />,
    Personal: '',
    Professional: <TickIcon />,
    style: {},
  },
  {
    id: 3,
    title: 'Import Data from Cloud Storage Services',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
    style: {},
  },
  {
    id: 4,
    title: 'Share Charts with Other Users',
    Starter: <TickIcon />,
    Personal: <TickIcon />,
    Professional: <TickIcon />,
    style: {},
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
        compareHeadingColor={''}
        compareHeadingSize={12}
        compareHeadingStyle={{}}
        compareHeadingAlign={"left"}
        rowAlign={'left'}
        compareRowTitleColor={''}
        compareRowTitleSize={12}
        compareRowTitleStyle={{}}
        rowBorderColor={''}
        tableRootStyle={{}}
        columnData={columnData}
        rowData={rowData}
      />
    </div>
  );
}

export default App;
