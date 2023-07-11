import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import Close from './assets/close';
import SearchIcon from './assets/searchIcon';
import { SearchField } from './components/searchField';

function App() {

 
  const cardData =[
    {
      label: 'The Redemption',
      url: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      label: 'The Godfather',
      url: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: 'The Godfather',
      url: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: 'The Dark Knight',
      url: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: '190 Angry Old',
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: '23 Angry Men',
      url: 'https://images.unsplash.com/photo-1606510236980-c7cc4e05012a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: '21 Angry women',
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: "Schindler's List",
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      label: 'Pulp Fiction',
      url: 'https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
  ];

  const textSearchData =[
    { label: 'Redemption' },
    { label: 'Henry' },
    { label: 'Godfather' },
    { label: 'Dark Knight' },
    { label: 'Angry Men' },
    { label: 'Angry women' },
    { label: 'Angry' },
    { label: 'Schindler' },
    { label: 'Pulp Fiction' },
  ];

  return (
    <div
      className="App"
      style={{ width: '100vw', height: '100vh', backgroundColor: '#FFFF' }}
    >
      <div
        style={{
          minHeight: '100%',
          display: 'flex',
          padding: '30px',
          width: '70%',
        }}
      >
        <SearchField
          isTextSearch={true}
          isRecentSearch={false}
          isCardBased={false}
          isCardWithTitleBased={false}
          isShortcutKeyBased={false}
          isShortComponent={false}

          options={textSearchData}  
          primaryCategoryData={cardData}
          secondaryCategoryData={cardData}

          placeHolderText="Search henry"
          startAdornmentIcon={<SearchIcon />}
          endAdornmentIcon={<Close />}
          inputRootStyle={{}}
          placeHolderColor={'#929292'}
          placeHolderSize={12}
          inputBackgroundColor={''}
          inputBorderDefaultColor={'#E9E9E9'}
          inputBorderHoverColor={'#b4aef4'}
          inputBorderFocusColor={'#665CD7'}
          paperBackgroundColor={'#ffffff'}
          paperBorderColor={'#665CD7'}
          listTextHoverColor={'#665CD7'}
          listTextHoverBgColor={'#ffffff'}
          keyDownListBgcolor={''}
          keyDownListTextColor={''}
          cardImgWidth={100}
          cardImgHeight={100}
          imgBorderRadius={4} 
          />
      </div>
      
     
     
    </div>
  )
}

export default App;
