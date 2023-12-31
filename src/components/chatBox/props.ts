import { InputBaseProps, SxProps } from '@mui/material';

export type chatMessageProps = {
  messageId: string | number;
  senderId: string | number;
  content: string;
  timestamp: string | Date;
  reactions?: {
    id: string;
    emoji: any;
    count: number;
    shortcodes?: string;
    unified?: string;
    senderId: Array<string | number>;
    [key: string]: any;
  }[];
};

export type participantsProps = {
  userId: string;
  username: string;
  profileImage?: string | URL;
};
export interface chatBoxProps {
  chatId: string | number;
  chatBoxRootStyle?: SxProps;
  reactionEnable?: true | false;
  emojiPickerProps?: emojiProps;
  onEnterMessage?: ({
    event,
    enteredMessage,
    messageList,
  }: {
    event: React.FormEvent<HTMLFormElement>;
    enteredMessage?: chatMessageProps;
    messageList?: chatMessageProps[];
  }) => void;
  onReactionChange?: ({
    data,
    enteredMessage,
    messageList,
  }: {
    data: {
      id: string;
      shortcodes?: string;
      unified?: string;
      emoji: any;
      data: chatMessageProps;
    };
    enteredMessage?: chatMessageProps;
    messageList?: chatMessageProps[];
  }) => void;
  headerData: {
    chatName: string;
    profileImage?: string | URL;
    status?: 'online' | 'offline' | string;
    customComponent?: React.ReactNode;
    functions?: {
      onClickProfile?: ({
        event,
        chatId,
      }: {
        event?: Event | React.MouseEvent<HTMLDivElement, MouseEvent>;
        chatId?: string | number;
      }) => void;
      onClickMore?: ({
        event,
      }: {
        event?: Event | React.MouseEvent<HTMLButtonElement, MouseEvent>;
      }) => void;
      onClickMinimize?: ({
        event,
      }: {
        event?: Event | React.MouseEvent<HTMLButtonElement, MouseEvent>;
      }) => void;
      onClickClose?: ({
        event,
      }: {
        event?: Event | React.MouseEvent<HTMLButtonElement, MouseEvent>;
      }) => void;
    };
    styles?: {
      headerRootStyle?: SxProps;
      profileIconStyle?: SxProps;
      titleStyle?: SxProps;
      subTitleStyle?: SxProps;
    };
  };
  chatData: {
    chatType: 'group' | string;
    loginUser: string | number;
    participants: participantsProps[];
    messages: chatMessageProps[];
    styles?: {
      chatContainerStyle?: SxProps;
      chatScrollStyle?: SxProps;
      chatListStyle?: SxProps;
      messageContainerStyle?: SxProps;
      messageProfileStyle?: SxProps;
      chatDetailsStyle?: SxProps;
      massagerNameStyle?: SxProps;
      massageTimeStyles?: SxProps;
      senderMessageStyle?: SxProps;
      receiverMessageStyle?: SxProps;
      messageTextStyle?: SxProps;
      reactionBoxStyle?: SxProps;
      reactionBoxReceiverStyle?: SxProps;
    };
    functions?: {
      onClickMassagerProfile?: ({
        event,
        profile_details,
      }: {
        event?: Event | React.MouseEvent<HTMLDivElement, MouseEvent>;
        profile_details?: participantsProps;
      }) => void;
      onClickMassagerContent?: ({ event }: { event?: Event }) => void;
    };
  };
  editorData?: {
    inputProps?: InputBaseProps | null;
    styles?: {
      textEditorStyle?: SxProps;
      iconContainerStyle?: SxProps;
      iconStyle?: SxProps;
    };
    icons?: {
      emojiIcon?: React.ReactNode;
      micIcon?: React.ReactNode;
      typographyIcon?: React.ReactNode;
      attachFileIcon?: React.ReactNode;
    };
    functions?: {
      onClickEmojiIcon?: ({
        event,
      }: {
        event?: Event | React.MouseEvent<HTMLButtonElement, MouseEvent>;
      }) => void;
      onClickMicIcon?: ({
        event,
      }: {
        event?: Event | React.MouseEvent<HTMLButtonElement, MouseEvent>;
      }) => void;
      onClickTypographyIcon?: ({
        event,
      }: {
        event?: Event | React.MouseEvent<HTMLButtonElement, MouseEvent>;
      }) => void;
      onClickAttachFileIcon?: ({
        event,
      }: {
        event?: Event | React.MouseEvent<HTMLButtonElement, MouseEvent>;
      }) => void;
    };
  };
}

//This Props defined Emoji Mart Package 
export type emojiProps = {
  autoFocus?: {
    value: boolean;
  };
  dynamicWidth?: {
    value: boolean;
  };
  emojiButtonColors?: {
    value: any;
  };
  emojiButtonRadius?: {
    value: string;
  };
  emojiButtonSize?: {
    value: number;
  };
  emojiSize?: {
    value: number;
  };
  emojiVersion?: {
    value: number;
    choices: number[];
  };
  exceptEmojis?: {
    value: any[];
  };
  icons?: {
    value: string;
    choices: string[];
  };
  locale?: {
    value: string;
    choices: string[];
  };
  maxFrequentRows?: {
    value: number;
  };
  navPosition?: {
    value: string;
    choices: string[];
  };
  noCountryFlags?: {
    value: boolean;
  };
  noResultsEmoji?: {
    value: any;
  };
  perLine?: {
    value: number;
  };
  previewEmoji?: {
    value: any;
  };
  previewPosition?: {
    value: string;
    choices: string[];
  };
  searchPosition?: {
    value: string;
    choices: string[];
  };
  set?: {
    value: string;
    choices: string[];
  };
  skin?: {
    value: number;
    choices: number[];
  };
  skinTonePosition?: {
    value: string;
    choices: string[];
  };
  theme?: {
    value: string;
    choices: string[];
  };
  categories?: any;
  categoryIcons?: any;
  custom?: any;
  data?: any;
  i18n?: any;
  getImageURL?: any;
  getSpritesheetURL?: any;
  onAddCustomEmoji?: any;
  onClickOutside?: any;
  onEmojiSelect?: any;
  stickySearch?: {
    deprecated?: boolean;
    value?: boolean;
  };
};
