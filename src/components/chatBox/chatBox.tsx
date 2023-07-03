import Box from '@mui/material/Box';
import { styles } from './style';
import {
  Avatar,
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
import { chatBoxProps } from './props';

export default function ChatBox(props: chatBoxProps) {
  const {
    chatData,
    headerData,
    chatBoxRootStyle,
    chatId,
    editorData = {},
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

  const [chatMessage, setChatMessage ] = useState(messages);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);
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
            {chatMessage.map((message) => {
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
                  <Box
                    className="chat-message-details"
                    sx={
                      {
                        ...styles.chatDetails,
                        ...chatStyles?.messageContainerStyle,
                      } as SxProps
                    }
                  >
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
                    </Box>
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
                onSubmit={(e: any) => {
                  e.preventDefault();
                  console.log(e.target.message.value);
                }}
              >
                <InputBase
                  className="chat-input"
                  name={'message'}
                  fullWidth
                  sx={{ ...styles.inputStyle }}
                  placeholder="Enter message"
                  {...inputProps}
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
              {editorIcon?.attachFileIcon ? editorIcon?.attachFileIcon : <AttachFileIcon />}
            </IconButton>
          </Stack>
        </Box>
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
