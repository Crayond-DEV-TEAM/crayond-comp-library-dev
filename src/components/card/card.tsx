import { Card as MuiCard, Typography, Box, CardActions } from '@mui/material';
import React from 'react';
import { CardProps } from './cardprops';
import { Card_Style } from './style';
import { Image } from '../image';
import { BasicButtons } from '../button';

const Card: React.FC<CardProps> = ({
  title,
  description,
  logo,
  alt,
  children,
  inlinestyle,
  cardStyle,
  buttonText,
  btnClick,
  actions,
  bottomText,
  actionText,
  onActionClick,
  actionstyle,
  titleStyle,
  btnStyle,
  bottomTextStyle,
  sx,
  ...rest
}) => {
  return (
    <MuiCard
      style={inlinestyle}
      sx={{ ...Card_Style.cardSx, ...cardStyle }}
      {...rest}
    >
      {logo && (
        <Image
          src={logo?.logoSrc}
          alt={logo?.alt}
          aria-label="logo"
          imageStyle={logo?.logoStyle}
          height={logo?.logoHeight}
          width={logo?.logoWidth}
        />
      )}
      {title && (
        <Typography sx={{...Card_Style.titleSx,...titleStyle}} color="text.primary" gutterBottom>
          {title}
        </Typography>
      )}
      {description && (
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {description}
        </Typography>
      )}
      <Box>{children}</Box>
      {buttonText && (
        <BasicButtons type="submit" inLineStyles={{...Card_Style.buttonSx,...btnStyle}} onClick={btnClick}>
          {buttonText}
        </BasicButtons>
      )}
      {bottomText &&
        <CardActions>
          <Typography sx={{...Card_Style.actionsSx,...bottomTextStyle}}>
            {bottomText}{' '}
            {actionText && <span
              style={actionstyle}
              onClick={onActionClick}
            >
              {actionText}
            </span>}

          </Typography>
        </CardActions>}
    </MuiCard>
  );
};

export default Card;

Card.defaultProps = {
  title: "",
  subtitle: "",
  logo:{},
  alt: "",
  description: "",
  inlinestyle: {},
  cardStyle: {},
  buttonText: "",
  btnClick: undefined,
  bottomText: "",
  actionText: "",
  actions: {},
  onActionClick: undefined,
  actionstyle: {},
  children: null,
  titleStyle: {},
  btnStyle: {},
  bottomTextStyle: {},
}