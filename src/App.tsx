import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { Viewer } from './components/viewer';
import DeleteIcon from './assets/deleteIcon';
import React from 'react';
import { Stack, Typography } from '@mui/material';
import { ChatBox } from './components/chatBox';

function App() {
  const chatData = {
    chatId: 'group_chat_1234',
    name: 'Awesome Group Chat',
    chatType: 'group',
    participants: [
      {
        userId: 'user_1',
        username: 'John',
        profileImage:''
      },
      {
        userId: 'user_2',
        username: 'Emily',
        profileImage:''
      },
    ],
    messages: [
      {
        messageId: 'msg_1',
        senderId: 'user_1',
        content: "Hey everyone, how's it going?",
        timestamp: '2023-06-28T10:00:00Z',
        reactions: {
          thumbsUp: 3,
          heart: 1,
          laugh: 2,
        },
      },
      {
        messageId: 'msg_2',
        senderId: 'user_2',
        content: 'Hi John! Things are great here. How about you?',
        timestamp: '2023-06-28T10:05:00Z',
        reactions: {
          thumbsUp: 2,
          laugh: 1,
        },
      },
      {
        messageId: 'msg_3',
        senderId: 'user_2',
        content: "Hey guys! I'm doing well too. Any exciting news?",
        timestamp: '2023-06-28T10:10:00Z',
        reactions: {
          thumbsUp: 1,
          heart: 1,
        },
      },
      {
        messageId: 'msg_4',
        senderId: 'user_1',
        content:
          'Not much, just enjoying the weekend. How about we plan a meetup?',
        timestamp: '2023-06-29T10:15:00Z',
        reactions: {
          thumbsUp: 2,
          thumbsDown: 1,
        },
      },
      {
        messageId: 'msg_5',
        senderId: 'user_2',
        content:
          "That's a great idea! I'm available next week. What about you, Alex?",
        timestamp: '2023-06-29T12:00:00Z',
        reactions: {
          thumbsUp: 1,
          clap: 2,
        },
      },
    ],
  };
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <Typography variant="h3" mb={4}>
        Chat Box
      </Typography>
      <Stack direction={'row'} justifyContent={'center'}>
        <ChatBox chatData={chatData} />
      </Stack>
    </div>
  );
}

export default App;
