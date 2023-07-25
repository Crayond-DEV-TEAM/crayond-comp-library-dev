import { Box, Stack, SxProps, Typography } from "@mui/material";
import { CardProps } from "./props";
import { styles } from "./style";

export const Card = (props: CardProps) => {
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
      text1Styles,
      text2Styles,
      text3Styles,
      profileUrlHeight,
      profileUrlWidth,
      profileComponentContainer,
      profileUrlRadius,
      handleClick = () => {},
    } = props;
    return (
      <Box
        onClick={() => handleClick()}
        sx={{
          width: cardWidth,
          minWidth: cardMinWidth,
          maxWidth: cardMaxWidth,
          height: cardHeight,
          minHeight: cardMinHeight,
          maxHeight: cardMaxHeight,
          background: CardBackground,
          '&:hover': {
            ...CardHoverStyle,
            border: hoverBorderStyle,
            backgroundColor: hoverBgColor,
          },
          ...styles.cardStyle,
          ...CardStyle,
        } as SxProps}
      >
        <Box sx={{ display: 'flex' }}>
          {data.profileComponent && (
            <Box
              pr={data.profileComponent && 1}
              sx={{ ...profileComponentContainer }}
            >
              {data.profileComponent}
            </Box>
          )}
          {data.profileUrl && (
            <img
              src={data?.profileUrl}
              alt="profile"
              height={profileUrlHeight}
              width={profileUrlWidth}
              style={{ borderRadius: profileUrlRadius }}
            />
          )}
          <Box pl={data.profileUrl && 1}>
            <Typography fontSize={text1Size} color={text1Color} sx={{...text1Styles}}>
              {data.text1}
            </Typography>
            <Stack direction={'row'} alignItems={'center'} mt={'10px'}>
              <Typography fontSize={text2Size} color={text2Color} sx={{...text2Styles}}>
                {data.text2}
              </Typography>
              <Typography fontSize={text3Size} color={text3Color} ml={'4px'} sx={{...text3Styles}}>
                {data.text3}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  };