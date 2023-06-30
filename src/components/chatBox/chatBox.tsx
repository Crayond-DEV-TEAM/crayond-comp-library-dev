import Box from '@mui/material/Box';
import { styles } from './style';
import {
  Avatar,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from '@mui/material';
import UserIcon from '../../assets/userIcon';
import CloseIcon from '../../assets/closeIcon';
import DeleteIcon from '../../assets/deleteIcon';
import SearchIcon from '../../assets/searchIcon';
import React from 'react';
import moment from 'moment';

export default function ChatBox(props: any) {
  const { chatData } = props;
  const { messages, participants } = chatData;
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);
  return (
    <Box className="chat-root" sx={{ ...styles.chatBoxRoot }}>
      <Box className="chat-header" sx={{ ...styles.header }}>
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
          >
            <Avatar sx={{ ...styles.profileIcon }}>
              <UserIcon />
            </Avatar>
            <Box>
              <Typography sx={{ ...styles.title }}>Group Name</Typography>
              <Typography sx={{ ...styles.subTitle }}>12 Members</Typography>
            </Box>
          </Stack>
          <Box display={'flex'} gap="12px">
            <IconButton size="small" disableRipple>
              <DeleteIcon />
            </IconButton>
            <IconButton size="small" disableRipple>
              <SearchIcon />
            </IconButton>
            <IconButton size="small" disableRipple>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
      </Box>
      <Box className="chat-container" sx={{ ...styles.chatContainer }}>
        <Box ref={scrollRef} sx={{ ...styles.overflow }}>
          <Box className="chat-list" sx={{ ...styles.chatList }}>
            {messages.map((message: any) => {
              const isYou = message.senderId === 'user_2';
              const sender = participants?.find(
                (send: { userId: string }) => send?.userId === message?.senderId
              );
              return (
                <Stack
                  key={message?.messageId}
                  direction={isYou ? 'row-reverse' : 'row'}
                  gap="8px"
                  sx={{
                    ...styles.messageContainer,
                    marginLeft: isYou ? 'auto' : '0',
                  }}
                >
                  <Avatar
                    className="chat-message-profile"
                    sx={{ ...styles.messageProfile }}
                  >
                    <UserIcon />
                  </Avatar>
                  <Box
                    className="chat-message-details"
                    sx={{ ...styles.chatDetails }}
                  >
                    <Stack
                      sx={{ marginBottom: '4px' }}
                      direction={isYou ? 'row-reverse' : 'row'}
                      gap="8px"
                      alignItems={'center'}
                    >
                      <Typography sx={{ ...styles.massagerName }}>
                        {sender.username}
                      </Typography>
                      <Typography sx={{ ...styles.massagerTime }}>
                        {moment(message?.timestamp).calendar(new Date(), {
                          sameDay: `${'['+(moment(message?.timestamp).fromNow()).toString()+']'}`,
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
                          ? { ...styles.messageBodyYou }
                          : { ...styles.messageBody }
                      }
                    >
                      <Typography
                        className="chat-message-text"
                        sx={{ ...styles.messageText }}
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
        <Box className="chat-editor" sx={{ ...styles.textEditor }}>
          <Stack direction={'row'} gap="12px">
            <IconButton size="small" disableRipple>
              <DeleteIcon />
            </IconButton>
            <Box flexGrow={1}>
              <InputBase
                className="chat-input"
                fullWidth
                sx={styles.inputStyle}
                placeholder="Enter message"
              />
            </Box>
            <IconButton size="small" disableRipple>
              <SearchIcon />
            </IconButton>
            <IconButton size="small" disableRipple>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

ChatBox.defaultProps = {};
