import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { Stack, Typography } from '@mui/material';
import { ChatBox } from './components/chatBox';
import KanbanView from './components/kanbanView/kanbanView';

function App() {
  const chatData = {
    chatType: 'group',
    loginUser: 'user_1',
    participants: [
      {
        userId: 'user_1',
        username: 'Hari',
        profileImage: '',
      },
      {
        userId: 'user_2',
        username: 'Henry',
        profileImage: '',
      },
    ],
    messages: [
      {
        messageId: 'msg_1',
        senderId: 'user_1',
        content: "Hey everyone, how's it going?",
        timestamp: '2023-06-28T10:00:00Z',
        reactions: [{ id: '+1', emoji: '👍', senderId: ['user_2'], count: 1 }],
      },
      {
        messageId: 'msg_2',
        senderId: 'user_2',
        content: 'Hi John! Things are great here. How about you?',
        timestamp: '2023-06-28T10:05:00Z',
        reactions: [{ id: '+1', emoji: '👍', senderId: ['user_1'], count: 1 }],
      },
      {
        messageId: 'msg_3',
        senderId: 'user_2',
        content: "Hey guys! I'm doing well too. Any exciting news?",
        timestamp: '2023-06-28T10:10:00Z',
        reactions: [{ id: '+1', emoji: '👍', senderId: ['user_1'], count: 1 }],
      },
      {
        messageId: 'msg_4',
        senderId: 'user_1',
        content:
          'Not much, just enjoying the weekend. How about we plan a meetup?',
        timestamp: '2023-06-19T10:15:00Z',
        reactions: [{ id: '+1', emoji: '👍', senderId: ['user_2'], count: 1 }],
      },
      {
        messageId: 'msg_5',
        senderId: 'user_2',
        content:
          "That's a great idea! I'm available next week. What about you, Alex?",
        timestamp: '2023-07-11T12:00:00Z',
        reactions: [{ id: '+1', senderId: ['user_1'], emoji: '👍', count: 1 }],
      },
    ],
    styles: {
      chatContainerStyle: {},
      chatScrollStyle: {},
      chatListStyle: {},
      messageContainerStyle: {},
      messageProfileStyle: {},
      chatDetailsStyle: {},
      massagerNameStyle: {},
      massageTimeStyles: {},
      senderMessageStyle: {},
      receiverMessageStyle: {},
      messageTextStyle: {},
    },
    functions: {
      onClickMassagerProfile: undefined,
      onClickMassagerContent: undefined,
    },
  };

  const headerData = {
    chatName: 'New Group',
    profileImage: '',
    status: '2 Members',
    customComponent: null,
    functions: {
      onClickProfile: undefined,
      onClickMore: undefined,
      onClickMinimize: undefined,
      onClickClose: undefined,
    },
    styles: {
      headerRootStyle: {},
      profileIconStyle: {},
      titleStyle: {},
      subTitleStyle: {},
    },
  };

  const editorData = {
    inputProps: {
      onChange: (e: any) => {},
    },
    styles: {
      textEditorStyle: {},
      iconContainerStyle: {},
      iconStyle: {},
      inputStyle: {},
    },
    icons: {
      emojiIcon: undefined,
      micIcon: undefined,
      typographyIcon: undefined,
      attachFileIcon: undefined,
    },
    functions: {
      onClickEmojiIcon: undefined,
      onClickMicIcon: undefined,
      onClickTypographyIcon: undefined,
      onClickAttachFileIcon: undefined,
    },
  };
  const onEnterMessage = (data: any) => {
    console.log('🚀 ~ file: App.tsx:144 ~ onEnterMessage ~ data:', data);
  };

 const cardContainerData =[
    { title: 'Progress', orderNumber: 1 },
    { title: 'Pending', orderNumber: 2 },
    { title: 'Completed', orderNumber:3 },
  ];
  
 const cardData= [
    {
      id: 1,
      title: 'title1',
      status: 'Progress',
      cardTitle: 'Progress Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="notify" />,
      moreIcon: <img src="/more.svg" alt="more" />,
      subTitles: [
        {
          label: '# design',
          bgColor: '',
          borderColor: '#D3D3D3',
          textColor: '',
        },
        {
          label: 'Design System',
          bgColor: '#DEE6F9',
          borderColor: '',
          textColor: '#2B5ED6',
        },
      ],
      images: [
        { img: '/sample.jpg', height: '', width: '' },
        { img: '/sample.jpg', height: '', width: '' },
      ],
      created_at: 'On 17 Mar, 23',
    },
    {
      id: 2,
      title: 'title2',
      status: 'Progress',
      cardTitle: 'Progress Create Components',
      isActive: true,
      notifyIcon: <img src="/activeNotify.svg" alt="notify" />,
      moreIcon: <img src="/more.svg" alt="more" />,
      subTitles: [
        {
          label: '# design',
          bgColor: '',
          borderColor: '#D3D3D3',
          textColor: '',
        },
        {
          label: 'Design System',
          bgColor: '#DEE6F9',
          borderColor: '',
          textColor: '#2B5ED6',
        },
      ],
      images: [
        { img: '/sample.jpg', height: '', width: '' },
        { img: '/sample.jpg', height: '', width: '' },
      ],
      created_at: 'On 17 Mar, 23',
    },
    {
      id: 3,
      title: 'title3',
      status: 'Progress',
      cardTitle: 'Progress Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="notify" />,
      moreIcon: <img src="/more.svg" alt="more" />,
      subTitles: [
        {
          label: '# design',
          bgColor: '',
          borderColor: '#D3D3D3',
          textColor: '',
        },
        {
          label: 'Design System',
          bgColor: '#DEE6F9',
          borderColor: '',
          textColor: '#2B5ED6',
        },
      ],
      images: [
        { img: '/sample.jpg', height: '', width: '' },
        { img: '/sample.jpg', height: '', width: '' },
      ],
      created_at: 'On 17 Mar, 23',
    },
    {
      id: 4,
      title: 'title4',
      status: 'Pending',
      cardTitle: 'Pending Create Components',
      isActive: true,
      notifyIcon: <img src="/activeNotify.svg" alt="notify" />,
      moreIcon: <img src="/more.svg" alt="more" />,
      subTitles: [
        {
          label: '# design',
          bgColor: '',
          borderColor: '#D3D3D3',
          textColor: '',
        },
        {
          label: 'Design System',
          bgColor: '#DEE6F9',
          borderColor: '',
          textColor: '#2B5ED6',
        },
      ],
      images: [
        { img: '/sample.jpg', height: '', width: '' },
        { img: '/sample.jpg', height: '', width: '' },
      ],
      created_at: 'On 17 Mar, 23',
    },
    {
      id: 5,
      title: 'title5',
      status: 'Pending',
      cardTitle: 'Pending Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="notify" />,
      moreIcon: <img src="/more.svg" alt="more" />,
      subTitles: [
        {
          label: '# design',
          bgColor: '',
          borderColor: '#D3D3D3',
          textColor: '',
        },
        {
          label: 'Design System',
          bgColor: '#DEE6F9',
          borderColor: '',
          textColor: '#2B5ED6',
        },
      ],
      images: [
        { img: '/sample.jpg', height: '', width: '' },
        { img: '/sample.jpg', height: '', width: '' },
      ],
      created_at: 'On 17 Mar, 23',
    },
    {
      id: 6,
      title: 'title3',
      status: 'Completed',
      cardTitle: ' Completed Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="notify" />,
      moreIcon: <img src="/more.svg" alt="more" />,
      subTitles: [
        {
          label: '# design',
          bgColor: '',
          borderColor: '#D3D3D3',
          textColor: '',
        },
        {
          label: 'Design System',
          bgColor: '#DEE6F9',
          borderColor: '',
          textColor: '#2B5ED6',
        },
      ],
      images: [
        { img: '/sample.jpg', height: '', width: '' },
        { img: '/sample.jpg', height: '', width: '' },
      ],
      created_at: 'On 17 Mar, 23',
    },
    {
      id: 7,
      title: 'title3',
      status: 'Completed',
      cardTitle: 'Completed Create Components',
      isActive: true,
      notifyIcon: <img src="/notifi.svg" alt="notify" />,
      moreIcon: <img src="/more.svg" alt="more" />,
      subTitles: [
        {
          label: '# design',
          bgColor: '',
          borderColor: '#D3D3D3',
          textColor: '',
        },
        {
          label: 'Design System',
          bgColor: '#DEE6F9',
          borderColor: '',
          textColor: '#2B5ED6',
        },
      ],
      images: [
        { img: '/sample.jpg', height: '', width: '' },
        { img: '/sample.jpg', height: '', width: '' },
      ],
      created_at: 'On 17 Mar, 23',
    },
    {
      id: 8,
      title: 'title3',
      status: 'Completed',
      cardTitle: 'Completed Create Components',
      isActive: true,
      notifyIcon: <img src="/activeNotify.svg" alt="notify" />,
      moreIcon: <img src="/more.svg" alt="more" />,
      subTitles: [
        {
          label: '# design',
          bgColor: '',
          borderColor: '#D3D3D3',
          textColor: '',
        },
        {
          label: 'Design System',
          bgColor: '#DEE6F9',
          borderColor: '',
          textColor: '#2B5ED6',
        },
      ],
      images: [
        { img: '/sample.jpg', height: '', width: '' },
        { img: '/sample.jpg', height: '', width: '' },
      ],
      created_at: 'On 17 Mar, 23',
    },
    {
      id: 9,
      title: 'title3',
      status: 'Pending',
      cardTitle: 'Pending Create Components',
      isActive: true,
      notifyIcon: <img src="/activeNotify.svg" alt="notify" />,
      moreIcon: <img src="/more.svg" alt="more" />,
      subTitles: [
        {
          label: '# design',
          bgColor: '',
          borderColor: '#D3D3D3',
          textColor: '',
        },
        {
          label: 'Design System',
          bgColor: '#DEE6F9',
          borderColor: '',
          textColor: '#2B5ED6',
        },
      ],
      images: [
        { img: '/sample.jpg', height: '', width: '' },
        { img: '/sample.jpg', height: '', width: '' },
      ],
      created_at: 'On 17 Mar, 23',
    },
  ];
  return (
    <div
      className="App"
      style={{ width: '100vw', height: '100vh', backgroundColor: '#F5F5F5' }}
    >
      <Typography variant="h4" mb={4}>
        Chat Box
      </Typography>
      <Stack direction={'row'} justifyContent={'center'}>
        <ChatBox
          chatId={'chat_1'}
          chatBoxRootStyle={{}}
          headerData={headerData}
          chatData={chatData}
          editorData={editorData}
          onEnterMessage={onEnterMessage}
          onReactionChange={console.log}
          reactionEnable={true}
          emojiPickerProps={{}}
        />
      </Stack>

      <div>
        <KanbanView cardContainerData={cardContainerData} cardData={cardData}/>
      </div>
    </div>
  );
}

export default App;
