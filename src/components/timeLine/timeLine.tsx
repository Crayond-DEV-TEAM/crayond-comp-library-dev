import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box } from '@mui/material';
import { Card } from './helperComponents';
import { TimelineProps } from './props';

const TimeLine = (props: TimelineProps) => {
  const {
    timeLineData,
    variation2,
    timeLinePosition,
    TimelineConnectorColor,
    TimelineConnectorWidth,
    TimelineDotVariant,
    TimelineDotColor,
    TimelineDotBorder,
    TimelineDotHeight,
    TimelineDotWidth,
    TimelineDotProfileUrlHeight,
    TimelineDotProfileUrlWidth,
    TimelineDotProfileUrlRadius,

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
    text1Styles,
    text2Styles,
    text3Styles,
    handleClick,
    rootStyle,
    profileComponentContainer,
    profileUrlRadius,
  } = props;
  return (
    <>
      <Box sx={{ ...rootStyle }}>
        <Timeline position={timeLinePosition}>
          {timeLineData?.map((card, index) => (
            <>
              <TimelineItem>
                <TimelineSeparator>
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
                      margin: '6.5px 0px',
                    }}
                    children={
                      <>
                        {card?.profileUrl && variation2 ? (
                          <img
                            src={`${card?.profileUrl}`}
                            alt="profile"
                            height={TimelineDotProfileUrlHeight}
                            width={TimelineDotProfileUrlWidth}
                            style={{
                              borderRadius: TimelineDotProfileUrlRadius,
                            }}
                          />
                        ) : (
                          ''
                        )}
                        {card?.profileComponent && variation2 ? (
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
                    key={card.id}
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
                    profileComponentContainer={profileComponentContainer}
                    profileUrlRadius={profileUrlRadius}
                    handleClick={handleClick}
                    text1Styles={text1Styles}
                    text2Styles={text2Styles}
                    text3Styles={text3Styles}
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

  timeLinePosition: '',
  TimelineConnectorColor: '',
  TimelineConnectorWidth: 0,

  TimelineDotVariant: 'filled',
  TimelineDotHeight: 0,
  TimelineDotWidth: 0,
  TimelineDotColor: '',
  TimelineDotBorder: '',
  TimelineDotProfileUrlHeight: 0,
  TimelineDotProfileUrlWidth: 0,
  TimelineDotProfileUrlRadius: 1,

  profileUrlHeight: 24,
  profileUrlWidth: 24,

  profileUrlRadius: 5,
  cardWidth: 0,
  cardMinWidth: 0,
  cardMaxWidth: 0,
  cardMaxHeight: 0,
  cardMinHeight: 0,
  cardHeight: 0,
  CardBackground: '',
  CardHoverStyle: {},
  CardStyle: {},
  hoverBorderStyle: '',
  hoverBgColor: '',
  text1Size: 12,
  text1Color: '',
  text2Size: 12,
  text2Color: '',
  text3Size: 10,
  text3Color: '',
  text1Styles: {},
  text2Styles: {},
  text3Styles: {},
  handleClick: () => {},
  profileComponentContainer: {},
  rootStyle: {},
  timeLineData: [],
};
