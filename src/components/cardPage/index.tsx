import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  SxProps,
  Typography,
} from '@mui/material';
import { BasicButtons } from '../button';
import { CardPageProps } from './props';
import { styles } from './style';

export default function CardPage(props: CardPageProps) {
  const {
    cardImage,
    buttons,
    title,
    mailId,
    mobile,
    divider,
    desc,
    variant,
    cardStyle,
    cardWrapperStyle,
    cardMediastyle,
    cardContentStyle,
    titleStyle,
    subTitleWrapStyle,
    mailIdStyle,
    dotStyle,
    mobileNumberStyle,
    dividerStyle,
    descStyle,
    buttonWrapStyle,
  } = props;

  const isImageOriented = variant === 'imageOriented';

  return (
    <Box sx={{ ...styles.cardWrapper, ...cardWrapperStyle }}>
      <Card
        sx={{
          borderRadius: isImageOriented ? '12px' : '12px 12px 0px 0px',
          ...styles.cardStyle,
          ...cardStyle,
        }}
      >
        <CardMedia
          component="img"
          src={cardImage}
          alt="image"
          width={isImageOriented ? '364px' : '364px'}
          height={isImageOriented ? '374px' : '184px'}
          sx={{ ...cardMediastyle }}
        />

        <CardContent
          sx={{
            ...(isImageOriented
              ? {
                  mt: -15,
                  backgroundColor: '#262626',
                  opacity: 0.7,
                  color: '#fff',
                  alignItems: 'center',
                  pb: 2,
                  '&:last-child': {
                    paddingBottom: '16px',
                  },
                  ...cardContentStyle,
                }
              : { px: 0, ...cardContentStyle }),
          }}
        >
          {title && (
            <>
              <Typography
                gutterBottom
                component="div"
                sx={
                  {
                    color: isImageOriented ? '#E9E9E9' : '#262626',
                    ...styles.titleStyle,
                    ...titleStyle,
                  } as SxProps
                }
              >
                {title}
              </Typography>
              <Box sx={{ ...styles.subTitleWrapStyle, ...subTitleWrapStyle }}>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    color: isImageOriented ? '#E9E9E9' : '#666666',
                    ...styles.mail,
                    ...mailIdStyle,
                  }}
                >
                  {mailId}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: isImageOriented ? '#E9E9E9' : '#666666',
                    ...styles.dotStyle,
                    ...dotStyle,
                  }}
                />
                <Typography
                  component="div"
                  sx={{
                    color: isImageOriented ? '#E9E9E9' : '#666666',
                    ...styles.mobileNumberStyle,
                    ...mobileNumberStyle,
                  }}
                >
                  {mobile}
                </Typography>
              </Box>
            </>
          )}
          {!isImageOriented && divider && (
            <Divider sx={{ my: 1, ...dividerStyle }} />
          )}
          {!isImageOriented && desc && (
            <Typography
              sx={{ ...styles.descStyle, ...descStyle }}
              variant="body2"
            >
              {desc}
            </Typography>
          )}
        </CardContent>

        {!isImageOriented && buttons && (
          <CardActions sx={{ ...styles.buttonWrapStyle, ...buttonWrapStyle }}>
            {buttons.map((button, index) => (
              <BasicButtons
                key={index}
                type="submit"
                inLineStyles={{ ...button.style }}
                onClick={button.onClick}
                disabled={button.disabled}
              >
                {button.text}
              </BasicButtons>
            ))}
          </CardActions>
        )}
      </Card>
    </Box>
  );
}
CardPage.defaultProps = {
  variant: 'contentOriented',
  title: 'Jerry Foster',
  mailId: 'ethan.holmes@mail.com',
  mobile: '(621)668-1434',
  divider: true,
  desc: 'Integer ac interdum lacus. Nunc porta semper lacus a varius.',
  cardStyle: {},
  cardWrapperStyle: {},
  cardMediastyle: {},
  cardContentStyle: {},
  titleStyle: {},
  subTitleWrapStyle: {},
  mailIdStyle: {},
  dotStyle: {},
  mobileNumberStyle: {},
  dividerStyle: {},
  descStyle: {},
  buttonWrapStyle: {},
};
