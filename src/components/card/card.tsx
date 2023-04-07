import { Box, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { BasicButtons } from '../button';
import { CardProps } from './cardprops';
import { Card_Style } from './style';


export default function BasicCard(props: CardProps) {
  return (
    <Box>
      <Card sx={{ ...Card_Style.cardSx, ...props?.cardStyle }}>
        <CardHeader
          avatar={
            <img src={props?.companyLogo} aria-label="companyLogo" />
          }
        />
        <CardContent>
          <Typography sx={Card_Style.titleSx} color="text.primary" gutterBottom>
            {props?.title}
          </Typography>
          <Typography sx={{ fontSize: 14, }} color="text.secondary" gutterBottom>
            {props?.description}
          </Typography>{props?.button ? (<BasicButtons type='submit' inLineStyles={Card_Style.buttonSx}>{props?.buttonText}</BasicButtons>) : ''}        </CardContent>
        <CardActions>
          <Typography sx={Card_Style.actionsSx}>{props?.bottomText} <span style={{ color: '#665CD7', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }} onClick={() => { }}>{props.actionText}</span></Typography>
        </CardActions>
      </Card>
    </Box>
  );
}
BasicCard.defaultProps = {
  variant: 'outlined',
  title: '',
  description: '',
  buttonText: '',
  bottomText: '',
  actionText: '',
  button:'',
}; 
