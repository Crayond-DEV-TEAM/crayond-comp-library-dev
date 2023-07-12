import Box from '@mui/material/Box';
import emojiData from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { styles } from './style';
import './emojiFont.css';

import {
  Avatar,
  Badge,
  IconButton,
  InputBase,
  Stack,
  SxProps,
  Typography,
} from '@mui/material';
import UserIcon from '../../assets/userIcon';
import CloseIcon from '../../assets/closeIcon';
import React, { useState } from 'react';
import moment from 'moment';
import EmojiIcon from '../../assets/emojiIcon';
import MicIcon from '../../assets/micIcon';
import AttachFileIcon from '../../assets/attachFileIcon';
import MoreIcon from '../../assets/moreIcon';
import MinimizeIcon from '../../assets/minimizeIcon';
import { chatBoxProps, chatMessageProps } from './props';
import { Thump, Smile, Ohh, Sad, Angry } from '../../assets/emojis';

export default function ChatBox(props: chatBoxProps) {
  const {
    chatData,
    headerData,
    chatBoxRootStyle,
    chatId,
    editorData = {},
    onEnterMessage,
    reactionEnable = true,
  } = props;
  const {
    messages,
    participants,
    loginUser,
    functions: chatFunctions,
    styles: chatStyles,
  } = chatData;
  const { styles: headerStyles, functions: headerFunctions } = headerData;
  const {
    inputProps,
    styles: editorStyle,
    icons: editorIcon,
    functions: editorFunctions,
  } = editorData;
  const [openEmoji, setOpenEmoji] = useState('');

  const setEmojiOpen = (message: chatMessageProps) => {
    setOpenEmoji(message?.messageId as string);
  };
  const [inputValue, setInputValue] = useState('');
  const chatInputOnchange = (
    e: React.ChangeEventHandler<HTMLInputElement> | any
  ) => {
    setInputValue(e?.target?.value);
  };

  const [chatMessage, setChatMessage] = useState(messages);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const onSubmitMessage = (e: React.FormEvent<HTMLFormElement> | any) => {
    e?.preventDefault();
    setInputValue('');
    const content = e?.target?.message?.value;

    const messageData = {
      messageId: `msg_${new Date().getTime()}`,
      senderId: loginUser,
      content: content,
      timestamp: new Date().toISOString(),
    };

    const messageList = [...chatMessage, messageData];
    setChatMessage(messageList);
    onEnterMessage &&
      onEnterMessage({
        event: e,
        enteredMessage: messageData,
        messageList: messageList,
      });
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  const setEmojiCount = (data: {
    id: string;
    shortcodes?: string;
    unified?: string;
    emoji: any;
    data: chatMessageProps;
  }) => {
    //Get Current Msg
    const msgData = chatMessage?.find(
      (msg: chatMessageProps) => msg?.messageId === data?.data?.messageId
    );
    //Get Current Reactions
    const oldReactions = msgData?.reactions?.find((re) => re.id === data?.id);
    
   //Get Current Reactions
    let reactionData = {
      id: data.id,
      emoji: data.emoji,
      count: 1,
      shortcodes: data.shortcodes,
      unified: data.unified,
      senderId: [...(oldReactions?.senderId || []), loginUser],
    };

    const count = oldReactions?.count || 0;
    reactionData.count = count + 1;
    const re = msgData?.reactions || [];

    const messageData: chatMessageProps = {
      messageId: msgData?.messageId || '',
      senderId: msgData?.senderId || '',
      content: msgData?.content || '',
      timestamp: msgData?.timestamp || '',
      reactions: [...re, reactionData],
    };
    let msg_temp = chatMessage;
    const chatIndex = chatMessage.findIndex(
      (val) => val?.messageId === msgData?.messageId
    );
    msg_temp[chatIndex] = messageData;
    setChatMessage(msg_temp);
  };
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessage]);
  return (
    <Box
      className="chat-root"
      sx={{ ...styles.chatBoxRoot, ...chatBoxRootStyle } as SxProps}
    >
      {headerData?.customComponent ? (
        headerData?.customComponent
      ) : (
        <Box
          className="chat-header"
          sx={{ ...styles.header, ...headerStyles?.headerRootStyle } as SxProps}
        >
          <Stack
            direction={'row'}
            gap="12px"
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack
              direction={'row'}
              gap="9px"
              alignItems={'center'}
              justifyContent={'space-between'}
              onClick={(e) =>
                headerFunctions?.onClickProfile &&
                headerFunctions?.onClickProfile({ event: e, chatId: chatId })
              }
            >
              <Avatar
                sx={
                  {
                    ...styles.profileIcon,
                    ...headerStyles?.profileIconStyle,
                  } as SxProps
                }
              >
                <UserIcon />
              </Avatar>
              <Box>
                <Typography
                  sx={
                    { ...styles.title, ...headerStyles?.titleStyle } as SxProps
                  }
                >
                  {headerData?.chatName}
                </Typography>
                <Typography
                  sx={
                    {
                      ...styles.subTitle,
                      ...headerStyles?.subTitleStyle,
                    } as SxProps
                  }
                >
                  {headerData?.status}
                </Typography>
              </Box>
            </Stack>
            <Box display={'flex'} gap="12px">
              <IconButton
                size="small"
                disableRipple
                onClick={(e) =>
                  headerFunctions?.onClickMore &&
                  headerFunctions?.onClickMore({ event: e })
                }
              >
                <MoreIcon />
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                onClick={(e) =>
                  headerFunctions?.onClickMinimize &&
                  headerFunctions?.onClickMinimize({ event: e })
                }
              >
                <MinimizeIcon />
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                onClick={(e) =>
                  headerFunctions?.onClickClose &&
                  headerFunctions?.onClickClose({ event: e })
                }
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Stack>
        </Box>
      )}
      <Box
        className="chat-container"
        sx={
          {
            ...styles.chatContainer,
            ...chatStyles?.chatContainerStyle,
          } as SxProps
        }
      >
        <Box
          ref={scrollRef}
          className="chat-scroll"
          sx={{ ...styles.overflow, ...chatStyles?.chatScrollStyle } as SxProps}
          onClick={() => setOpenEmoji('')}
        >
          <Box
            className="chat-list"
            sx={
              {
                ...styles.chatList,
                ...chatStyles?.messageContainerStyle,
              } as SxProps
            }
          >
            {chatMessage.map((message: chatMessageProps) => {
              const isYou = message.senderId === loginUser;
              const sender = participants?.find(
                (send: { userId: string }) => send?.userId === message?.senderId
              );

              return (
                <Stack
                  key={message?.messageId}
                  direction={isYou ? 'row-reverse' : 'row'}
                  gap="8px"
                  sx={
                    {
                      ...styles.messageContainer,
                      marginLeft: isYou ? 'auto' : '0',
                      ...chatStyles?.messageContainerStyle,
                    } as SxProps
                  }
                  // onClick={chatStyles}
                >
                  <Avatar
                    className="chat-message-profile"
                    onClick={(e) =>
                      chatFunctions?.onClickMassagerProfile &&
                      chatFunctions?.onClickMassagerProfile({
                        event: e,
                        profile_details: sender,
                      })
                    }
                    sx={
                      {
                        ...styles.messageProfile,
                        cursor: isYou ? 'initial' : 'pointer',
                        ...chatStyles?.messageProfileStyle,
                      } as SxProps
                    }
                  >
                    <UserIcon />
                  </Avatar>
                  {/* badge */}
                  {!isYou && openEmoji === message?.messageId && (
                    <Stack
                      sx={styles.badge}
                      direction={'row'}
                      gap="5px"
                      alignItems={'center'}
                    >
                      <IconButton
                        onClick={() =>
                          setEmojiCount({
                            id: '+1',
                            emoji: '👍',
                            shortcodes: ':+1:',
                            unified: '1f44d',
                            data: message,
                          })
                        }
                        size="small"
                        disableRipple
                      >
                        <Thump />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          setEmojiCount({
                            id: 'grinning',
                            emoji: '😀',
                            shortcodes: ':grinning:',
                            unified: '1f600',
                            data: message,
                          })
                        }
                        size="small"
                        disableRipple
                      >
                        <Smile />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          setEmojiCount({
                            id: 'open_mouth',
                            emoji: '😮',
                            shortcodes: ':open_mouth:',
                            unified: '1f62e',
                            data: message,
                          })
                        }
                        size="small"
                        disableRipple
                      >
                        <Ohh />
                      </IconButton>
                      <IconButton size="small" disableRipple>
                        <Sad />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          setEmojiCount({
                            id: 'angry',
                            emoji: '😠',
                            shortcodes: ':angry:',
                            unified: '1f620',
                            data: message,
                          })
                        }
                        size="small"
                        disableRipple
                      >
                        <Angry />
                      </IconButton>
                    </Stack>
                  )}
                  <Box
                    className="chat-message-details"
                    sx={
                      {
                        ...styles.chatDetails,
                        ...chatStyles?.messageContainerStyle,
                      } as SxProps
                    }
                  >
                    <>
                      <Stack
                        sx={{ marginBottom: '4px' }}
                        direction={isYou ? 'row-reverse' : 'row'}
                        gap="8px"
                        alignItems={'center'}
                      >
                        <Typography
                          sx={
                            {
                              ...styles.massagerName,
                              ...chatStyles?.massagerNameStyle,
                            } as SxProps
                          }
                        >
                          {sender?.username}
                        </Typography>
                        <Typography
                          sx={
                            {
                              ...styles.massagerTime,
                              ...chatStyles?.massageTimeStyles,
                            } as SxProps
                          }
                        >
                          {moment(message?.timestamp).calendar(new Date(), {
                            sameDay: `[${moment(message?.timestamp)
                              .fromNow()
                              .toString()}]`,
                            // lastDay: '[Yesterday]',
                            // lastWeek: '[Last] dddd',
                            sameElse: 'LLL',
                          })}
                        </Typography>
                      </Stack>
                      <Box
                        className="chat-message-body"
                        onDoubleClick={() => setEmojiOpen(message)}
                        sx={
                          isYou
                            ? ({
                                ...styles.messageBodyYou,
                                ...chatStyles?.senderMessageStyle,
                              } as SxProps)
                            : ({
                                ...styles.messageBody,
                                ...chatStyles?.receiverMessageStyle,
                              } as SxProps)
                        }
                      >
                        <Typography
                          className="chat-message-text"
                          sx={
                            {
                              ...styles.messageText,
                              ...chatStyles?.messageTextStyle,
                            } as SxProps
                          }
                        >
                          {message?.content}
                        </Typography>
                        {reactionEnable && (
                          <Stack
                            sx={{ ...styles.reactionContainer }}
                            direction={isYou ? 'row-reverse' : 'row'}
                            gap="8px"
                            alignItems={'center'}
                          >
                            {message?.reactions?.map((reaction, index) => {
                              return (
                                <Box
                                  key={index + reaction?.id}
                                  sx={
                                    isYou
                                      ? ({
                                          ...styles.reactionBox,
                                          ...chatStyles?.reactionBoxStyle,
                                        } as SxProps)
                                      : ({
                                          ...styles.reactionBox2,
                                          ...chatStyles?.reactionBoxReceiverStyle,
                                        } as SxProps)
                                  }
                                >
                                  <Typography sx={{ fontFamily: 'EmojiMart' }}>
                                    {reaction?.emoji}{' '}
                                    <span>{reaction?.count}</span>
                                  </Typography>
                                </Box>
                              );
                            })}
                          </Stack>
                        )}
                      </Box>
                    </>
                  </Box>
                </Stack>
              );
            })}
          </Box>
        </Box>
        <Box
          className="chat-editor"
          sx={
            { ...styles.textEditor, ...editorStyle?.textEditorStyle } as SxProps
          }
        >
          <Stack
            direction={'row'}
            gap="8px"
            sx={editorStyle?.iconContainerStyle}
          >
            <IconButton
              size="small"
              disableRipple
              sx={editorStyle?.iconStyle}
              onClick={(e) =>
                editorFunctions?.onClickEmojiIcon &&
                editorFunctions?.onClickEmojiIcon({ event: e })
              }
            >
              {editorIcon?.emojiIcon ? editorIcon?.emojiIcon : <EmojiIcon />}
            </IconButton>
            <Box flexGrow={1}>
              <form
                action=""
                onSubmit={(e) => {
                  onSubmitMessage(e);
                }}
              >
                <InputBase
                  className="chat-input"
                  name={'message'}
                  fullWidth
                  sx={{ ...styles.inputStyle }}
                  placeholder="Enter message"
                  {...inputProps}
                  value={inputValue}
                  onChange={(e) => {
                    inputProps?.onChange && inputProps?.onChange(e);
                    chatInputOnchange(e);
                  }}
                />
              </form>
            </Box>
            <IconButton
              size="small"
              disableRipple
              sx={editorStyle?.iconStyle}
              onClick={(e) =>
                editorFunctions?.onClickMicIcon &&
                editorFunctions?.onClickMicIcon({ event: e })
              }
            >
              {editorIcon?.micIcon ? editorIcon?.micIcon : <MicIcon />}
            </IconButton>
            <IconButton
              size="small"
              disableRipple
              sx={editorStyle?.iconStyle}
              onClick={(e) =>
                editorFunctions?.onClickTypographyIcon &&
                editorFunctions?.onClickTypographyIcon({ event: e })
              }
            >
              {editorIcon?.typographyIcon ? (
                editorIcon?.typographyIcon
              ) : (
                <Typography sx={{ color: '#3B3B3B', fontSize: '16px' }}>
                  A
                </Typography>
              )}
            </IconButton>
            <IconButton
              size="small"
              disableRipple
              sx={editorStyle?.iconStyle}
              onClick={(e) =>
                editorFunctions?.onClickAttachFileIcon &&
                editorFunctions?.onClickAttachFileIcon({ event: e })
              }
            >
              {editorIcon?.attachFileIcon ? (
                editorIcon?.attachFileIcon
              ) : (
                <AttachFileIcon />
              )}
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ fontFamily: 'EmojiMart' }}>
        <Picker data={emojiData} onEmojiSelect={(e: any) => console.log(e)} />
      </Box>
    </Box>
  );
}

ChatBox.defaultProps = {
  chatId: '',
  chatBoxRootStyle: {},
  chatData: {
    chatType: 'group',
    loginUser: '',
    participants: [],
    messages: [],
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
      onClickMassagerProfile: () => null,
      onClickMassagerContent: () => null,
    },
  },

  headerData: {
    chatName: '',
    profileImage: '',
    status: '',
    customComponent: null,
    functions: {
      onClickProfile: () => {},
      onClickMore: () => null,
      onClickMinimize: () => null,
      onClickClose: () => null,
    },
    styles: {
      headerRootStyle: {},
      profileIconStyle: {},
      titleStyle: {},
      subTitleStyle: {},
    },
  },

  editorData: {
    inputProps: {},
    styles: {
      textEditorStyle: {},
      iconContainerStyle: {},
      iconStyle: {},
      inputStyle: {},
    },
    icons: {
      emojiIcon: null,
      micIcon: null,
      typographyIcon: null,
      attachFileIcon: null,
    },
    functions: {
      onClickEmojiIcon: () => null,
      onClickMicIcon: () => null,
      onClickTypographyIcon: () => null,
      onClickAttachFileIcon: () => null,
    },
  },
};
