import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { MapComponent } from './components/customMap';
import adayar from './assets/adayar.jpg';
import pinned from './assets/pinned.svg';
import junior from './assets/junior.jpeg';

function App() {
  const locations = [
    {
      name: 'Adayar',
      location: {
        lat: 13.003387,
        lng: 80.255043,
      },
      address:
        'Adyar is a large neighbourhood in south Chennai, Tamil Nadu, India',
      image: adayar,
      pinnedIcon: pinned,
    },
    {
      name: 'Neelankarai',
      location: {
        lat: 12.949282,
        lng: 80.255013,
      },
      address:
        'Neelangarai is a census town and is a locality in the south of Chennai.',
      image: '',
      pinnedIcon: pinned,
    },
    {
      name: 'Bay Breeze Suites',
      location: {
        lat: 12.95790649960084,
        lng: 80.26010930368109,
      },
      address:
        '4/222, Pushpa Ave, MGR Salai, Palavakkam, Chennai, Tamil Nadu 600041',
      image: '',
      pinnedIcon: pinned,
    },
    {
      name: 'Palavakam Beach',
      location: {
        lat: 12.965173638501662,
        lng: 80.26237489796081,
      },
      address: '28, MGR Salai, Palavakkam, Chennai, Tamil Nadu 600041',
      image: '',
      pinnedIcon: pinned,
    },
    {
      name: 'Junior Kuppanna, ECR',
      location: {
        lat: 12.956786921292327,
        lng: 80.25718652012615,
      },
      address:
        '2/546, LHC, East Coast Rd, illam, Neelankarai, Chennai, Tamil Nadu 600041',
      image: junior,
      pinnedIcon: pinned,
    },
  ];

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <MapComponent
        googleMapApiKey=""
        locations={locations}
       center={{
        lat: 9.8777183,
        lng: 78.0537701
    }} 
        zoom={13}
        isSearchRequired
        setDefaultRoute={false}
        fullscreenControl
        mapTypeControl ={false}
      />
    </div>
  );
}

export default App;
