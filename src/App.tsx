import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { BasicButtons, TimeLineV2 } from './components';
import { timelineV2props } from './components/timelineV2/props';
import AlertIcon from './assets/alertIcon';
import UserIcon from './assets/user';

function App() {
  const timeLineV2args: timelineV2props = {
    variation2: false,
    timelineContainerStyle: { },
    timelinePosition: 'right',

    timelineDotColor: '#fff',
    timelineDotBorderColor: '#fff',
    timelineDotVariant: 'filled',
    timelineDotChildrenStyle: { 
      width: '20px', height: '20px' 
    },
    timelineDotStyle: {
      marginTop: '3px',
      marginBottom: '3px',
    },

    timelineConnectorColor : 'black',
    timelineConnectorStyle: { },
  
    //timeline seperator props
    timelineSeperatorStyle: {},
   
    timelineContentStyle: {
   
    },

    timelineContentBoxStyle: {
      backgroundColor: '#fff',
      width: '220px',
      borderRadius: '4px',
      margin: '0px',
      marginTop: '3px',
      height: '260px'
    },

    timelineItemImageStyle: { 
      width: '30px', height: '30px'
     },
    timelineItems: [
      {
        time: new Date('2023-07-31 10:11:24'),
        content1: 'Hello chan',
        content2: 'Invited you',
        // image : <UserIcon style={{width: '20px', height: '20px'}}/>
        image : 'user.png'
      },
      {
        time: new Date('2023-07-31 10:58:58'),
        content1: 'Hello chan  pseudo-element selector, which selects and styles the first letter of the element that its applied to.the Text will not wrap, but instead will truncate with a text overflow ellipsis.Note that text overflow can only happen with block or inline-block level elements ',
        image : 'user.png'
      },
      {
        time: new Date('2023-07-31 10:50:24'),
        content1: 'Hello chan',
        content2: 'Invited you',
        image : 'user.png'
      },      
     
      {
        time: new Date('2023-07-31 10:50:24'),
        content1: 'Hello chan',
        content2: 'Invited you',
        image : 'user.png'
      },
    ],
  };
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <TimeLineV2 {...timeLineV2args}></TimeLineV2>
    </div>
  );
}

export default App;
