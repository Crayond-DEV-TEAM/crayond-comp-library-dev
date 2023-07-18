import { styles } from './style';
import './emojiFont.css';
import {
  Avatar,
  IconButton,
  InputBase,
  Stack,
  SxProps,
  Typography,
  Box,
} from '@mui/material';
import emojiData from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
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
import { AddEmoji, AddEmojiOutline } from '../../assets/addEmoji';
export default function ChatBox(props: chatBoxProps) {
  const {
    chatData,
    headerData,
    chatBoxRootStyle,
    chatId,
    editorData = {},
    onEnterMessage,
    onReactionChange,
    reactionEnable = true,
    emojiPickerProps,
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
  const [currentMessage, setCurrentMessage] =
    useState<chatMessageProps | null>();
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [isShowEmojiPiker, setIsShowEmojiPiker] = useState(false);
  const onSubmitMessage = (e: React.FormEvent<HTMLFormElement> | any) => {
    e?.preventDefault();
    const content = e?.target?.message?.value;
    setIsShowEmojiPiker(false);
    if (content.trim()) {
      setInputValue('');

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
      setTimeout(() => {
        handleScroll();
      }, 500);
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
    const userAlreadyReaction = oldReactions?.senderId.some(
      (user) => user === loginUser
    );
    let reactionDataTemp = msgData?.reactions || [];
    const reactionIndex = msgData?.reactions?.findIndex(
      (re) => re.id === data?.id
    );

    //Get Current Reactions
    let reactionData = {
      id: data.id,
      emoji: data.emoji,
      count: 1,
      shortcodes: data.shortcodes,
      unified: data.unified,
      senderId: userAlreadyReaction
        ? oldReactions?.senderId || []
        : [...(oldReactions?.senderId || []), loginUser],
    };

    const count = oldReactions?.count || 0;
    reactionData.count = userAlreadyReaction ? count - 1 : count + 1;

    if (reactionIndex !== null && reactionIndex !== undefined) {
      if (reactionIndex >= 0) {
        reactionDataTemp[reactionIndex] = reactionData;
      } else if (reactionIndex < 0) {
        reactionDataTemp = [...reactionDataTemp, reactionData];
      }
    }

    if (userAlreadyReaction) {
      if (reactionIndex !== null && reactionIndex !== undefined) {
        const senderIndex = reactionDataTemp[reactionIndex]?.senderId.findIndex(
          (data) => data === loginUser
        );
        reactionDataTemp[reactionIndex]?.senderId.splice(senderIndex, 1);
        reactionDataTemp[reactionIndex].count =
          reactionDataTemp[reactionIndex].count - 1;
        if (reactionDataTemp[reactionIndex].count <= 0) {
          reactionDataTemp.splice(reactionIndex, 1);
        }
      }
    }

    const messageData: chatMessageProps = {
      messageId: msgData?.messageId || '',
      senderId: msgData?.senderId || '',
      content: msgData?.content || '',
      timestamp: msgData?.timestamp || '',
      reactions: reactionDataTemp,
    };
    let msg_temp = chatMessage;
    const chatIndex = chatMessage.findIndex(
      (val) => val?.messageId === msgData?.messageId
    );
    msg_temp[chatIndex] = messageData;
    onReactionChange &&
      onReactionChange({
        data: data,
        enteredMessage: messageData,
        messageList: msg_temp,
      });
    setChatMessage([...msg_temp]);
  };
  const clickAway = () => {
    if (openEmoji) {
      setOpenEmoji('');
    }
    if (isShowEmojiPiker) {
      setIsShowEmojiPiker(false);
    }
  };
  const addMoreEmoji = ({ message }: { message: chatMessageProps }) => {
    setCurrentMessage(message);
    setIsShowEmojiPiker(true);
  };
  const onchangeEmoji = (e: any) => {
    if (currentMessage?.messageId) {
      setEmojiCount({
        data: currentMessage,
        id: e?.id,
        shortcodes: e?.shortcodes,
        unified: e?.unified,
        emoji: e?.native,
      });
      setCurrentMessage(null);
      setIsShowEmojiPiker(false);
    } else {
      console.log(e, 'ddddddddddddddddddd');
      setInputValue((prv) => prv + e?.native);
    }
  };
  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  React.useEffect(() => {
    handleScroll();
  }, []);

  const getWeekDays = (date: string | Date) => {
    const formatted = moment(date).calendar(null, {
      sameDay: '[Today]',
      lastDay: '[Yesterday]',
      lastWeek: 'dddd',
      sameElse: 'D MMM YYYY',
    });
    return formatted;
  };

  var filleterData: string | null = null;
  const getIsAfter = (date: any): boolean => {
    const newDate = moment(date).format('DD MM YYYY');
    let status = filleterData !== newDate ? true : false;
    filleterData = newDate;
    return status;
  };

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
          onClick={() => clickAway()}
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
                <React.Fragment key={message?.messageId}>
                  <Box>
                    {getIsAfter(message?.timestamp) && (
                      <Typography sx={styles.dateDivider} align="center">
                        {getWeekDays(message?.timestamp)}
                      </Typography>
                    )}
                  </Box>
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
                        <IconButton
                          onClick={() =>
                            setEmojiCount({
                              id: 'cry',
                              emoji: '😢',
                              shortcodes: ':cry:',
                              unified: '1f622',
                              data: message,
                            })
                          }
                          size="small"
                          disableRipple
                        >
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
                        <IconButton
                          onClick={() => addMoreEmoji({ message: message })}
                          size="small"
                          disableRipple
                        >
                          <AddEmoji color="#ffcc4d" fontSize="24px" />
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
                              sameDay: `[${
                                moment(message?.timestamp)
                                  .fromNow()
                                  .toString() === 'a few seconds ago'
                                  ? 'Just now'
                                  : moment(message?.timestamp)
                                      .fromNow()
                                      .toString()
                              }]`,
                              // lastDay: '[Yesterday]',
                              // lastWeek: '[Last] dddd',
                              sameElse: 'hh:mm A',
                            })}
                          </Typography>
                        </Stack>
                        <Box
                          className="chat-message-body"
                          // onDoubleClick={() => setEmojiOpen(message)}
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
                                fontFamily: 'Poppins, EmojiMart, sans-serif',
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
                              flexWrap={'wrap'}
                              alignItems={'center'}
                            >
                              {message?.reactions?.map((reaction, index) => (
                                <Box
                                  key={index + reaction?.id}
                                  onClick={() => {
                                    !isYou &&
                                      setEmojiCount({
                                        id: reaction?.id,
                                        shortcodes: reaction?.shortcodes,
                                        unified: reaction?.unified,
                                        emoji: reaction?.emoji,
                                        data: message,
                                      });
                                  }}
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
                                    {reaction?.emoji}
                                  </Typography>
                                  <p id="count">{reaction?.count}</p>
                                </Box>
                              ))}
                              {!isYou && (
                                <Box
                                  onClick={() => setEmojiOpen(message)}
                                  sx={
                                    {
                                      ...styles.reactionBox2,
                                      ...chatStyles?.reactionBoxReceiverStyle,
                                      display: 'flex',
                                      padding: '4px 8px',
                                    } as SxProps
                                  }
                                >
                                  {/* <Box> */}
                                  <AddEmojiOutline
                                    style={{
                                      color: '#666666',
                                      display: 'block',
                                    }}
                                  />
                                  {/* </Box> */}
                                </Box>
                              )}
                            </Stack>
                          )}
                        </Box>
                      </>
                    </Box>
                  </Stack>
                </React.Fragment>
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
              onClick={(e) => {
                editorFunctions?.onClickEmojiIcon &&
                  editorFunctions?.onClickEmojiIcon({ event: e });
                setIsShowEmojiPiker(true);
              }}
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
                  sx={{
                    ...styles.inputStyle,
                    fontFamily: 'Poppins, EmojiMart, sans-serif',
                  }}
                  placeholder="Enter message"
                  {...inputProps}
                  value={inputValue}
                  inputProps={{
                    autoComplete: 'off',
                  }}
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
      {isShowEmojiPiker && (
        <Box sx={{ ...styles.emojiPickerContainer }}>
          <Picker
            {...emojiPickerProps}
            data={emojiData}
            onEmojiSelect={(e: any) => onchangeEmoji(e)}
          />
        </Box>
      )}
    </Box>
  );
}

ChatBox.defaultProps = {
  chatId: '',
  chatBoxRootStyle: {},
  emojiPickerProps: {},
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
