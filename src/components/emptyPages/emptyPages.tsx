import { Box, Stack, SxProps, Typography } from '@mui/material';
import EmptyIcon from '../../assets/emptyIcon';
import { BasicButtons } from '../button';
import { EmptyPageProps } from './props';
import { styles } from './styles';

const EmptyPages = (props: EmptyPageProps) => {
  const {
    emptyPageIcon,
    emptyPageInfographic,
    emptyPageUrl,
    emptyPageUrlHeight,
    emptyPageUrlWidth,
    iconContainerStyle,
    handleClickIcon = () => {},
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
    buttonColumnGap,
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
            onClick={() => handleClickIcon()}
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
          {title1 && (
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
          )}
          {title2 && (
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
          )}
        </Stack>

        <Stack mt={buttonMarginTop} direction={'row'} columnGap={buttonColumnGap} >
          {buttons?.map((btn: any) => (
            <Box
              onClick={() => btn?.handleClick()}
            >
              <BasicButtons
                inLineStyles={{
                  ...buttonStyles,
                  ...styles.btnStyle,
                  backgroundColor: btn?.backgroundColor,
                  color: btn?.color,
                }}
              >
                {btn?.label}
              </BasicButtons>
            </Box>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default EmptyPages;

EmptyPages.defaultProps = {
  containerStyle: {},

  emptyPageIcon: <EmptyIcon />,
  emptyPageInfographic: '',
  emptyPageUrl: '',
  emptyPageUrlHeight: 225,
  emptyPageUrlWidth: 225,

  handleClickIcon: () => {},
  iconContainerStyle: {},
  emptyPageIconBgColor: '',

  title1Styles: {},
  title1MarginTop: 0,
  title1MarginBottom: 0,
  title1Size: 0,
  title1Weight: 0,
  title1Color: '',
  title1: '',

  title2Styles: {},
  title2MarginTop: 0,
  title2MarginBottom: 0,
  title2Size: 12,
  title2Weight: 0,
  title2Color: '',
  title2: '',

  buttonColumnGap:2,
  buttonMarginTop: 2,
  buttonStyles: {},
  buttons: [],
};
