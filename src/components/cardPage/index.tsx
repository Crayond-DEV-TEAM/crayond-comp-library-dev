import React from 'react';
import { CardPageProps } from './props';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { BasicButtons } from '../button';

export default function CardPage(props: CardPageProps) {
  const { cardImage, buttons, ...rest } = props;
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={cardImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        {buttons && (
          <CardActions>
            {buttons.map((button, index) => (
              <BasicButtons
                key={index}
                type="submit"
                inLineStyles={{ ...button.style }}
                onClick={button.onClick}
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
