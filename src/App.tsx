import React, { useState } from 'react';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { BasicButtons, TimeLineV2 } from './components';
import { timelineV2props } from './components/timelineV2/props';
import AlertIcon from './assets/alertIcon';

function App() {
  const timeLineV2args: timelineV2props = {
    variation2: true,
    timelineContainerStyle: { },
    timelinePosition: 'right',

    timelineDotColor: 'error',
    timelineDotVariant: 'filled',
    // timelineDotChildren:  'eye.png',
    timelineDotStyle: {
      width: '4px',
      height: '4px',
      backgroundColor: '#929292',
      marginTop: '3px',
      marginBottom: '3px',
      padding: '2px',
    },
    timelineDotChildrenStyle: { width: '5px', height: '5px' },

    timelineContentStyle: {
   
    },

    timelineContentBoxStyle: {
      backgroundColor: '#fff',
      width: '220px',
      borderRadius: '4px',
      margin: '0px',
      height: '260px'
    },

    timelineItemImageStyle: { width: '30px', height: '30px' },
    timelineItems: [
      {
        time: new Date('2023-07-31 10:11:24'),
        content1: 'Hello chan',
        content2: 'Invited you',
        // image: 'user.png'
      },
      {
        time: new Date('2023-07-31 10:58:58'),
        content1: 'Hello chan  pseudo-element selector, which selects and styles the first letter of the element that its applied to.the Text will not wrap, but instead will truncate with a text overflow ellipsis.Note that text overflow can only happen with block or inline-block level elements ',
        // content2: 'Invited you',
        image: 'user.png'
      },
      {
        time: new Date('2023-07-31 10:50:24'),
        content1: 'Hello chan',
        content2: 'Invited you',
        image: 'eye.png',
      },      
     
      {
        time: new Date('2023-07-31 10:50:24'),
        content1: 'Hello chan',
        content2: 'Invited you',
        // image: 'eye.png',
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
