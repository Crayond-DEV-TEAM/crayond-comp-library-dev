import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography, Grid } from '@mui/material';
import { timelineV2Style } from './style';
import { timelineV2props } from './props';

const TimeLineV2 = (props: timelineV2props) => {
  const {
    timelineItems,
    timelineItemImageStyle,
    variation2,

    timelineContainerStyle,
    timelinePosition,
    timelineStyle,

    timelineDotStyle,
    timelineDotVariant,
    timelineDotColor,
    timelineDotChildren,
    timelineDotChildrenStyle,

    timelineConnectorStyle,

    timelineSeperatorStyle,

    timelineContentStyle,

    timelineContentBoxStyle,

    ...rest
  } = props;

  const currentTime = new Date();

  return (
    <Box sx={{ ...timelineV2Style?.rootSx, ...timelineContainerStyle }}>
      <Timeline position={timelinePosition} sx={{ ...timelineStyle }}>
        {timelineItems?.map((items, index) => (
          <TimelineItem
            sx={{
              ...(timelinePosition === 'left' && {
                '& .MuiTimelineContent-positionLeft': {
                  display: 'flex',
                  justifyContent: 'flex-end',
                },
              }),
              // If the timelinePosition is 'alternate' and index is even
              ...(timelinePosition === 'alternate' &&
                index % 2 !== 0 && {
                  '& .MuiTimelineContent-positionAlternate': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                  },
                }),
            }}
            key={index}
          >
            <TimelineSeparator sx={{ ...timelineSeperatorStyle }}>
              <TimelineDot
                variant={timelineDotVariant}
                color={timelineDotColor}
                sx={{ ...timelineDotStyle }}
                children={
                  typeof timelineDotChildren === 'string' ? (
                    <img
                      src={timelineDotChildren}
                      alt="Dot Image"
                      style={timelineDotChildrenStyle}
                    />
                  ) : (
                    timelineDotChildren
                  )
                }
              />
              <TimelineConnector sx={{ ...timelineConnectorStyle }} />
            </TimelineSeparator>

            <TimelineContent
              sx={{ ...timelineContentStyle, ...timelineV2Style?.contentStyle }}
            >
              {/* {!variation2 && (
                <Box
                  sx={{
                    minWidth: '196px',
                    minHeight: '61px',
                    padding: '15px',
                    ...timelineContentBoxStyle,
                  }}
                >
                  <Grid container columnGap={2}>
                    <Grid item xs={2}>
                      {typeof items.image === 'string' ? (
                        <img
                          src={items.image}
                          alt="Image"
                          style={{
                            ...timelineV2Style?.profileStyle,
                            ...timelineItemImageStyle,
                          }}
                        />
                      ) : typeof items.image === 'object' &&
                        React.isValidElement(items.image) ? (
                        items.image
                      ) : (
                        <></>
                      )}
                    </Grid>
                    <Grid item xs={items.image ? 9 : 12}>
                      {currentTime.getDate() === items?.time?.getDate() ? (
                        <Typography
                          sx={{
                            ...timelineV2Style?.contentTypographyStyle,
                            ...timelineV2Style?.typographyTime,
                          }}
                        >
                          {items?.time?.getMinutes()} Mins ago
                        </Typography>
                      ) : null}
                      <Typography
                        sx={{
                          ...timelineV2Style?.contentTypographyStyle,
                          ...timelineV2Style?.typographyContent1,
                        }}
                      >
                        {items?.content1}
                      </Typography>
                      <Typography
                        sx={{
                          ...timelineV2Style?.contentTypographyStyle,
                          ...timelineV2Style?.typographyContent2,
                        }}
                      >
                        {items?.content2}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              )} */}

              {currentTime.getDate() === items?.time?.getDate() &&
              variation2 ? (
                <Typography
                  sx={{
                    ...timelineV2Style?.contentTypographyStyle,
                    ...timelineV2Style?.typographyTime,
                  }}
                >
                  {items?.time?.getMinutes()} Mins ago
                </Typography>
              ) : null}

              {variation2 && (
                <Box
                  sx={{
                    minWidth: '196px',
                    minHeight: '61px',
                    padding: '15px',
                    ...timelineContentBoxStyle,
                  }}
                >
                  <Grid container columnGap={2}>
                    <Grid item xs={2}>
                      {typeof items.image === 'string' ? (
                        <img
                          src={items.image}
                          alt="Image"
                          style={{
                            ...timelineV2Style?.profileStyle,
                            ...timelineItemImageStyle,
                          }}
                        />
                      ) : typeof items.image === 'object' &&
                        React.isValidElement(items.image) ? (
                        items.image
                      ) : (
                        <></>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          ...timelineV2Style?.contentTypographyStyle,
                          ...timelineV2Style?.typographyContent1,
                        }}
                      >
                        {items?.content1}
                      </Typography>
                      <Typography
                        sx={{
                          ...timelineV2Style?.contentTypographyStyle,
                          ...timelineV2Style?.typographyContent2,
                        }}
                      >
                        {items?.content2}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimeLineV2;
