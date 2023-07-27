import { Draggable } from '@hello-pangea/dnd';
import { Avatar, AvatarGroup, Box, IconButton, SxProps, Typography } from '@mui/material';
import { styles } from './styles';

const DragItem = (props:any) => {
const {item,index,childItems,snapshot,handleClickNotifyIcon,handleClickMoreIcon}= props;
  
  return (
    <>
      <Draggable  key={item.id} draggableId={item.id.toString()} index={index} >
        {(provided, snapshot) => {
          return (

            <>
            {childItems?.component ? (
              <Box
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
                sx={
                  {
                    ...styles.childBoxContainer,
                ...provided.draggableProps.style,
                  } as SxProps
                }
              >
                <Box>{childItems?.component}</Box>
              </Box>
            ) : (
              <>
                <Box
                 ref={provided.innerRef}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}
                  sx={{ ...styles.childBoxContainer,
                    ...provided.draggableProps.style,
                    border: snapshot.isDragging ? "1px solid #665CD7":""
                   
                }}
                >
                  <Box>
                    <Box sx={{ ...styles.childTitleContainer }}>
                      <Box>
                        <Typography sx={{ ...styles.titleStyle }}>
                          {item?.cardTitle}
                        </Typography>
                      </Box>
      
                      <Box sx={{ display: 'flex', columnGap: '12px' }}>
                        <IconButton onClick={() => handleClickNotifyIcon()}>
                          {item?.notifyIcon}
                        </IconButton>
                        <IconButton onClick={() => handleClickMoreIcon()}>
                          {item?.moreIcon}
                        </IconButton>
                      </Box>
                    </Box>
                    <Box sx={{ ...styles.designBlock }}>
                      {item?.subTitles?.map((value: any) => (
                        <Box
                          sx={{
                            ...styles.designBox,
                            background: value?.bgColor ?? '#DEE6F9',
                            border: value?.borderColor
                              ? `1px solid ${value?.borderColor}`
                              : '',
                          }}
                        >
                          <Typography
                            sx={{
                              ...styles.titleStyle,
                              marginBottom: '0px',
                              color: value?.textColor ? value?.textColor : '#929292',
                            }}
                          >
                            {value?.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>  
      
                    <Box sx={{ ...styles.childTitleContainer}}>
                      <AvatarGroup>
                        {item?.images?.map((val: any) => (
                          <Avatar
                            alt="Rem Sharp"
                            src={val?.img}
                            sx={{ width: 24, height: 24 }}
                          />
                        ))}
                      </AvatarGroup>
      
                      <Typography
                        sx={{
                          ...styles.subTitleStyle,
                          color: '#929292',
                          mb: '0px',
                        }}
                      >
                        {item?.created_at}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </>
          );
        }}
      </Draggable>
     
    </>
  );
};

export default DragItem;
