import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatBox } from './index';

export default {
  title: 'CommonTable/ChatBox',
  component: ChatBox,
} as ComponentMeta<typeof ChatBox>;

const Template: ComponentStory<typeof ChatBox> = (args) => (
  <ChatBox {...args} />
);

export const Primary = Template.bind({});


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
      timestamp: '2023-06-29T12:00:00Z',
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


Primary.args = {
  chatId:'chat_1',
  chatBoxRootStyle:{},
  headerData:headerData,
  chatData:chatData,
  editorData:editorData,
  onEnterMessage:onEnterMessage,
  onReactionChange:console.log,
  reactionEnable:true,
};
