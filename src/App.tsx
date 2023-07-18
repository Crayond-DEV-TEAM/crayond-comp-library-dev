import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import Close from './assets/close';
import SearchIcon from './assets/searchIcon';
import { SearchField } from './components/searchField';
import ArrowUpDownIcon from './assets/arrowUpDownIcon';
import EnterIcon from './assets/enterIcon';
import EscapeIcon from './assets/escapeIcon';

function App() {
  const cardData = [
    {
      id: 1,
      label: 'The Redemption',
      url: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 2,
      label: 'The Godfather',
      url: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 3,
      label: 'The Manufacturing',
      url: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 4,
      label: 'The Dark Knight',
      url: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 5,
      label: '190 Angry Old',
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 6,
      label: '23 Angry Men',
      url: 'https://images.unsplash.com/photo-1606510236980-c7cc4e05012a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 7,
      label: '21 Angry women',
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 8,
      label: "Schindler's List",
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 9,
      label: 'Pulp Fiction',
      url: 'https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
  ];
  const cardData2 = [
    {
      id: 1,
      label: 'The Redemption',
      subTitle: 'Developer',
      url: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 2,
      label: 'The Godfather',
      subTitle: 'Disinter',
      url: 'https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 3,
      label: 'The Manufacturing',
      subTitle: 'Devin',
      url: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 4,
      label: 'The Dark Knight',
      subTitle: 'Testing',
      url: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 5,
      label: '190 Angry Old',
      subTitle: 'Analyst',
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 6,
      label: '23 Angry Men',
      subTitle: 'manager',
      url: 'https://images.unsplash.com/photo-1606510236980-c7cc4e05012a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    }
  ];

  const navigation =[
    {
      navigateLabel: 'To Navigate',
      icon: <ArrowUpDownIcon />,
      onClick: () => {},
      url: '',
    },
    {
      navigateLabel: 'To Select',
      icon: <EnterIcon />,
      onClick: () => {},
      url: '',
    },
    {
      navigateLabel: 'To Escape',
      icon: <EscapeIcon />,
      onClick: () => {},
      url: '',
    },
  ]

  const textSearchData = [
        { label: 'Redemption', id: 1 },
        { label: 'Random', id: 2 },
        { label: 'Godfather', id: 3 },
        { label: 'Dark Knight', id: 4 },
        { label: 'Angry Men', id: 5 },
        { label: 'Angry women', id: 6 },
        { label: 'Angry', id: 7 },
        { label: 'Schindler', id: 8 },
        { label: 'Mandela', id: 9 },
        { label: 'savanna', id: 10 },
        { label: 'surely', id: 11 },
        { label: 'Pulp Fiction', id: 12 },
        { label: 'Pulp Fiction', id: 12 },
        { label: 'Pulp Fiction', id: 12 },
        { label: 'Pulp Fiction', id: 12 },
  ];

  return (
    <div
      className="App"
      style={{
        width: '80vw',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '100px',
      }}
    >
      <SearchField
        variant={"isShortComponent"}

        options={cardData}
        primaryCategoryData={cardData}
        secondaryCategoryData={cardData2}
        navigateData={navigation}
        recentSearchOption={[]}


        placeHolderText="Search..."
        placeHolderColor={'#929292'}
        placeHolderSize={12}
        inputBackgroundColor={""}
        inputBorderDefaultColor={'#E9E9E9'}
        inputBorderHoverColor={'#b4aef4'}
        inputBorderFocusColor={'#665CD7'}
        startAdornmentIcon={<SearchIcon />}
        endAdornmentIcon={<Close />}
        inputRootStyle={{ minHeight: '20px'}}
        
        listItemLabelColor={'#929292'}
        listTextHoverColor={'#665CD7'}
        listTextHoverBgColor={'#fff'}
        listItemSubTextColor={'#666666'}

        paperBorderColor={'#665CD7'}
        paperBackgroundColor={'#fff'}
        paperRootStyle={{}}
        paperHeight={undefined} 
        paperMinHeight={300} 
        paperMaxHeight={undefined} 

        recentLabel={'Recent Search'}
        recentLabelTextColor={"#929292"}
        recentLabelFontSize={10}
        recentLabelStyle={{}}
        recentSearchItemStyles={{fontWeight:"500"}}
        recentSearchItemTextColor={"#666666"}
        recentSearchItemBgcolor={"#E9E9E9"}
        recentSearchItemSize={10}

        cardImgWidth={100}
        cardImgHeight={100}
        imgBorderRadius={4}

        cardTitleImgWidth={50}
        cardTitleImgHeight={50}
        TitleImgBorderRadius={4}

        keyDownListBgcolor={''}
        keyDownListTextColor={''}
        
        componentColumnDirection={"column"}
        handleInputOnChange={(e) => {}}
        onSelectSearchDataFun={(e) => {}}
        handleOptionChange={(e) => {}}
       
      />
    </div>
  );
}

export default App;
