import React from 'react';
import { Box, Button, Stack, SxProps, Typography } from '@mui/material';
import EmptyIcon from '../../assets/emptyIcon';
import { styles } from './styles';
import EmptyIconB from '../../assets/emptyIconB';
import { ButtonProps, EmptyPageProps } from './props';

const EmptyPages = (props: EmptyPageProps) => {
  const {
    emptyPageIcon,
    emptyPageInfographic,
    emptyPageUrl,
    emptyPageUrlHeight,
    emptyPageUrlWidth,
    iconContainerStyle,
    handleClickIcon=()=>{},
    emptyPageIconBgColor,
    title1Styles,
    title2Styles,
    title1,
    title2,
    buttons,
    title1Color,
    title1Size,
    title1Weight,
    title2Color,
    title2Size,
    title2Weight,
    buttonStyles,
    containerStyle,
    title1MarginTop,
    title1MarginBottom,
    title2MarginTop,
    title2MarginBottom,
    buttonMarginTop,
  } = props;
  return (
    <>
      <Stack sx={{ ...styles.containerStyle, ...containerStyle } as SxProps}>
        {emptyPageInfographic && <Box>{emptyPageInfographic}</Box>}
        {emptyPageIcon && (
          <Box
           onClick={()=>handleClickIcon()}
            sx={{
              ...styles.iconContainer,
              ...iconContainerStyle,
              background: emptyPageIconBgColor,
            }}
          >
            {emptyPageIcon}
          </Box>
        )}
        {emptyPageUrl && (
          <Box>
            <img
              src={emptyPageUrl}
              alt="emptyPage"
              height={emptyPageUrlHeight}
              width={emptyPageUrlWidth}
            />
          </Box>
        )}
        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Typography
            sx={{ ...title1Styles }}
            color={title1Color}
            fontSize={title1Size}
            fontWeight={title1Weight}
            mt={title1MarginTop}
            mb={title1MarginBottom}
          >
            {title1}
          </Typography>
          <Typography
            sx={{ ...title2Styles }}
            color={title2Color}
            fontSize={title2Size}
            fontWeight={title2Weight}
            mt={title2MarginTop}
            mb={title2MarginBottom}
          >
            {title2}
          </Typography>
        </Stack>
        <Stack mt={buttonMarginTop} direction={'row'}>
          {buttons?.map((btn: ButtonProps) => (
            <Box
              sx={{
                ...styles.btnStyle,
                ...buttonStyles,
                backgroundColor: btn?.backgroundColor,
              }}
              onClick={() => btn?.handleClick()}
            >
              <Button
                sx={{
                  color: btn?.color,
                  padding: '0px',
                  textTransform: 'none',
                }}
              >
                {btn?.label}
              </Button>
            </Box>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default EmptyPages;

EmptyPages.defaultProps = {
  containerStyle: { background: '#ffff', minHeight: '100vh' },

  emptyPageIcon: <EmptyIcon />,
  emptyPageInfographic: !(<EmptyIconB />),
  emptyPageUrl:
    !'https://thumbs.dreamstime.com/b/d-cartoon-man-sleeping-pile-books-illustration-isolated-white-background-248545459.jpg',

  emptyPageUrlHeight: 225,
  emptyPageUrlWidth: 225,

  handleClickIcon:()=>{},
  iconContainerStyle: {},
  emptyPageIconBgColor: '#EFEEFB',

  title1Styles: {},
  title1MarginTop: 2,
  title1MarginBottom: 3,
  title1Size: 16,
  title1Weight: 600,
  title1Color: '#3B3B3B',
  title1: 'Add Bookmark',

  title2Styles: {},
  title2MarginTop: 0,
  title2MarginBottom: 0,
  title2Size: 14,
  title2Weight: 500,
  title2Color: '#3B3B3B',
  title2: 'Click the above icon to add',

  buttonMarginTop: 2,
  buttonStyles: {},
  buttons: [
    {
      label: 'Add Now',
      handleClick: () => {
        alert('add');
      },
      color: '#FFFF',
      backgroundColor: '#665CD7',
    },
  ],
};
