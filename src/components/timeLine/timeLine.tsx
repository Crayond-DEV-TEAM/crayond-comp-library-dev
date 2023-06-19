import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box, Stack, Typography } from '@mui/material';
import { CardProps, TimelineProps } from './props';

const timeDate = [
  {
    text1: '18 Mins ago',
    text2: 'Elit convallis',
    text3: 'invited you',
    profileComponent: '',
    profileUrl:
      'https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922',
  },
  {
    text1: '18 Mins ago',
    text2:
      'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh.',
    text3: '',
    profileComponent: '',
    profileUrl:
      'https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922',
  },
  {
    text1: '18 Mins ago',
    text2: 'Elit convallis',
    text3: 'invited you',
    profileComponent: (
      <>
        <img
          src="https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922"
          alt="profile"
          height={'24px'}
          width={'24px'}
          style={{ borderRadius: '50%' }}
        />
      </>
    ),
    profileUrl: '',
  },
  {
    text1: '18 Mins ago',
    text2: 'Elit convallis',
    text3: 'invited you',
    profileComponent: (
      <>
        <img
          src="https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922"
          alt="profile"
          height={'24px'}
          width={'24px'}
          style={{ borderRadius: '50%' }}
        />
      </>
    ),
    profileUrl: '',
  },
  {
    text1: '18 Mins ago',
    text2:
      'Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh.',
    text3: '',
    profileComponent: '',
    profileUrl:
      'https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922',
  },
];

const Card = (props: CardProps) => {
  const {
    data,
    cardWidth,
    cardMinWidth,
    cardMaxWidth,
    cardMaxHeight,
    cardMinHeight,
    cardHeight,
    CardBackground,
    CardHoverStyle,
    CardStyle,
    hoverBorderStyle,
    hoverBgColor,
    text1Size,
    text1Color,
    text2Size,
    text2Color,
    text3Size,
    text3Color,
    profileUrlHeight,
    profileUrlWidth,
    handleClick = () => {},
  } = props;
  return (
    <Box
      onClick={() => handleClick()}
      sx={{
        ...CardStyle,
        width: cardWidth,
        minWidth: cardMinWidth,
        maxWidth: cardMaxWidth,
        height: cardHeight,
        minHeight: cardMinHeight,
        maxHeight: cardMaxHeight,
        cursor: 'pointer',
        padding: '12px',
        background: CardBackground,
        borderRadius: '6px',
        '&:hover': {
          ...CardHoverStyle,
          border: hoverBorderStyle,
          backgroundColor: hoverBgColor,
        },
      }}
    >
      <Box sx={{ display: 'flex' }}>
        {data.profileComponent && (
          <Box pr={data.profileComponent && 1}>{data.profileComponent}</Box>
        )}
        {data.profileUrl && (
          <img
            src={data?.profileUrl}
            alt="profile"
            height={profileUrlHeight}
            width={profileUrlWidth}
            style={{ borderRadius: '50%' }}
          />
        )}
        <Box>
          <Typography fontSize={text1Size} color={text1Color}>
            {data.text1}
          </Typography>
          <Stack direction={'row'} alignItems={'center'} mt={'10px'}>
            <Typography fontSize={text2Size} color={text2Color}>
              {data.text2}
            </Typography>
            <Typography fontSize={text3Size} color={text3Color} ml={'4px'}>
              {data.text3}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const TimeLine = (props: TimelineProps) => {
  const {
    variation2,
    timeLinePosition,
    TimelineConnectorColor,
    TimelineConnectorWidth,
    TimelineDotVariant,
    TimelineDotColor,
    TimelineDotBorder,
    TimelineDotHeight,
    TimelineDotWidth,
    profileUrlHeight,
    profileUrlWidth,

    cardWidth,
    cardMinWidth,
    cardMaxWidth,
    cardMaxHeight,
    cardMinHeight,
    cardHeight,
    CardBackground,
    CardHoverStyle,
    CardStyle,
    hoverBorderStyle,
    hoverBgColor,
    text1Size,
    text1Color,
    text2Size,
    text2Color,
    text3Size,
    text3Color,
    handleClick,
    rootStyle,
  } = props;
  return (
    <>
      <Box sx={{...rootStyle }}>
        <Timeline position={timeLinePosition}>
          {timeDate.map((card, index) => (
            <>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{
                      backgroundColor: TimelineConnectorColor,
                      width: TimelineConnectorWidth,
                    }}
                  />
                  <TimelineDot
                    variant={TimelineDotVariant}
                    sx={{
                      backgroundColor: TimelineDotColor,
                      border: TimelineDotBorder,
                      width: TimelineDotWidth,
                      height: TimelineDotHeight,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    children={
                      <>
                        {card.profileUrl && variation2 ? (
                          <img
                            src={`${card.profileUrl}`}
                            alt="profile"
                            height={profileUrlHeight}
                            width={profileUrlWidth}
                            style={{ borderRadius: '50%' }}
                          />
                        ) : (
                          ''
                        )}
                        {card.profileComponent && variation2 ? (
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {card?.profileComponent}
                          </Box>
                        ) : (
                          ''
                        )}
                      </>
                    }
                  />

                  <TimelineConnector
                    sx={{
                      bgcolor: TimelineConnectorColor,
                      width: TimelineConnectorWidth,
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Card
                    data={card}
                    key={index}
                    cardWidth={cardWidth}
                    cardMinWidth={cardMinWidth}
                    cardMaxWidth={cardMaxWidth}
                    cardMaxHeight={cardMaxHeight}
                    cardMinHeight={cardMinHeight}
                    cardHeight={cardHeight}
                    CardBackground={CardBackground}
                    CardHoverStyle={CardHoverStyle}
                    CardStyle={CardStyle}
                    hoverBorderStyle={hoverBorderStyle}
                    hoverBgColor={hoverBgColor}
                    text1Size={text1Size}
                    text1Color={text1Color}
                    text2Size={text2Size}
                    text2Color={text2Color}
                    text3Size={text3Size}
                    text3Color={text3Color}
                    profileUrlHeight={profileUrlHeight}
                    profileUrlWidth={profileUrlWidth}
                    handleClick={handleClick}
                  />
                </TimelineContent>
              </TimelineItem>
            </>
          ))}
        </Timeline>
      </Box>
    </>
  );
};

export default TimeLine;

TimeLine.defaultProps = {
  variation2: false,

  timeLinePosition: 'right',
  TimelineConnectorColor: '',
  TimelineConnectorWidth: 2,

  TimelineDotVariant: 'filled',
  TimelineDotHeight: 2,
  TimelineDotWidth: 2,
  TimelineDotColor: '#929292',
  TimelineDotBorder: '',
  profileUrlHeight: 24,
  profileUrlWidth: 24,

  cardWidth: 0,
  cardMinWidth: 212,
  cardMaxWidth: 0,
  cardMaxHeight: 131,
  cardMinHeight: 0,
  cardHeight: undefined,
  CardBackground: '#FFFFFF',
  CardHoverStyle: {},
  CardStyle: {},
  hoverBorderStyle: '',
  hoverBgColor: '#EEEE',
  text1Size: 10,
  text1Color: '#929292',
  text2Size: 12,
  text2Color: '#3B3B3B',
  text3Size: 10,
  text3Color: '#929292',
  handleClick: () => {},
  rootStyle:{
    background:"#F5F5F5"
  }
};
