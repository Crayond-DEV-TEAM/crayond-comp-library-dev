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
    timelineDotSize,
    timelineDotColor,
    timelineDotBorderColor,
    timelineDotGapRadius,
    timelineDotChildrenStyle,

    timelineConnectorStyle,

    timelineConnectorColor,
    timelineSeperatorStyle,

    timelineContentStyle,

    timelineContentBoxStyle,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    ...rest
  } = props;

  const currentTime = new Date();
  return (
    <Box sx={{ ...timelineV2Style?.rootSx, ...timelineContainerStyle }}>
      <Timeline position={timelinePosition} sx={{ ...timelineStyle }}>
        {timelineItems?.map((items, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator sx={{ ...timelineSeperatorStyle,  '& .MuiTimelineDot-root': {
                    marginTop: timelineDotGapRadius,
                    marginBottom: timelineDotGapRadius,
                  }, }}>
              <TimelineDot
                variant={timelineDotVariant}
                sx={{
                  backgroundColor: timelineDotColor,
                  ...(timelineDotVariant === 'outlined' && {
                    borderColor: timelineDotBorderColor,
                  }),
                  padding: timelineDotSize,
                  ...timelineDotStyle,
                }}
                children={
                  variation2 &&
                  /* Render the component when variation2 is true */
                  (typeof items?.image === 'string' ? (
                    <img
                      src={items.image}
                      alt="Image"
                      style={{
                        ...timelineItemImageStyle,
                        ...timelineDotChildrenStyle,
                      }}
                    />
                  ) : typeof items?.image === 'object' ? (
                    <>{items?.image}</>
                  ) : (
                    <>wrong format</>
                  ))
                  // :
                  // typeof timelineDotChildren === 'string' ? (
                  //   <img
                  //     src={timelineDotChildren}
                  //     alt="Dot Image"
                  //     style={timelineDotChildrenStyle}
                  //   />
                  // ) : (
                  //   timelineDotChildren
                  // )
                }
              />
              <TimelineConnector
                sx={{
                  backgroundColor: timelineConnectorColor,
                  ...timelineConnectorStyle,
                }}
              />
            </TimelineSeparator>

            <TimelineContent
              sx={{
                ...timelineContentStyle,
                ...timelineV2Style?.contentStyle,
                ...(timelinePosition === 'left' && {
                  '& .MuiBox-root': {
                    display: 'inline-block',
                    textAlign: 'left',
                  },
                }),
                ...(timelinePosition === 'alternate' && {
                  '& .MuiBox-root': {
                    display: 'inline-block',
                    textAlign: 'left',
                  },
                }),
              }}
            >
              {/* For variation2 == false condition */}
              {!variation2 && (
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
              )}

              {/* For variation2 == true condition */}
              {variation2 && (
                <React.Fragment>
                  <Typography
                    sx={{
                      ...timelineV2Style?.contentTypographyStyle,
                      ...timelineV2Style?.typographyTime,
                      paddingTop: '3px',
                      paddingBottom: '5px',
                    }}
                  >
                    {items?.time?.getMinutes()} Mins ago
                  </Typography>
                  <Box
                    sx={{
                      minWidth: '196px',
                      minHeight: '61px',
                      padding: '15px',
                      ...timelineContentBoxStyle,
                    }}
                  >
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
                  </Box>
                </React.Fragment>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimeLineV2;
