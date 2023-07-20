import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { MapComponent } from './components/customMap';



function App() {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      {/* <MapApp /> */}
      <MapComponent />
    </div>
  )
}

export default App;
