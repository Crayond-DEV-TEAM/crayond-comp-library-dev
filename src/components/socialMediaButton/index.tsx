import { Box, IconButton, Typography } from '@mui/material';
import { SocialMediaButtonProps } from './props';

export const SocialMediaButton = (props: SocialMediaButtonProps) => {
  const
    { startIcon,
      fontWeight,
      color,
      width,
      textAlign,
      fontSize,
      rootStyle,
      bgColor,
      padding,
      borderRadius,
      display,
      alignItems,
      cursor,
      onClick = () => { } } = props

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        padding: padding,
        borderRadius: borderRadius,
        display: display,
        alignItems: alignItems,
        cursor: cursor,
        ...rootStyle
      }}
      onClick={onClick}>
      <IconButton>
        {startIcon}
        {/* <DeleteIcon /> */}
      </IconButton>
      <Typography
        sx={{
          fontSize: fontSize,
          textAlign: textAlign,
          width: width,
          color: color,
          fontWeight: fontWeight
        }}
      >
        {props?.buttonText}
      </Typography>
    </Box>
  );
};

SocialMediaButton.defaultProps = {
  onClick: () => { },
  cursor: '',
  bgColor: '',
  padding: '',
  rootStyle: {},
  borderRadius: '',
  display: '',
  alignItems: '',
  size: 'medium',
  variant: 'contained',
  color: 'primary',
  children: null,
  className: 'button',
  href: '',
};