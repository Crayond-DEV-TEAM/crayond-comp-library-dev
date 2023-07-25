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
  Divider,
  Typography,
} from '@mui/material';
import { BasicButtons } from '../button';

export default function CardPage(props: CardPageProps) {
  const { cardImage, buttons, title, mailId, mobile, divider, ...rest } = props;
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
            {title && (
              <>
                <Typography gutterBottom component="div">
                  {title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ color: '#666666', fontSize: '14px' }}
                  >
                    {mailId}
                  </Typography>
                  <Box
                    sx={{
                      width: '7px',
                      height: '7px',
                      backgroundColor: '#666666',
                      borderRadius: '100%',
                    }}
                  ></Box>
                  <Typography
                    component="div"
                    sx={{ color: '#666666', fontSize: '14px' }}
                  >
                    {mobile}
                  </Typography>
                </Box>
              </>
            )}
            {divider && <Divider  />}
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
