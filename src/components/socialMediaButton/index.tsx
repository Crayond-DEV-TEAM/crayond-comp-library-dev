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
      buttonText,
      onClick = () => { },
      socialmediaTextStyle } = props

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
      onClick={onClick}
    >
      <IconButton>
        {startIcon}
      </IconButton>
      <Typography
        sx={{
          fontSize: fontSize,
          textAlign: textAlign,
          width: width,
          color: color,
          fontWeight: fontWeight,
          ...socialmediaTextStyle
        }}
      >
        {buttonText}
      </Typography>
    </Box>
  );
};

SocialMediaButton.defaultProps = {
  sx: {},
  startIcon: undefined,
  icon: undefined,
  buttonText: "",
  id: undefined,
  type: "button",
  name: "button",
  onClick: undefined,
  inLineStyles: {},
  size: undefined,
  variant: "text",
  children: undefined,
  className: "",
  disabled: false,
  bgColor: undefined,
  padding: undefined,
  fontSize: undefined,
  textAlign: undefined,
  width: undefined,
  color: undefined,
  fontWeight: undefined,
  rootStyle: {},
  borderRadius: undefined,
  display: undefined,
  alignItems: undefined,
  cursor: undefined,
  href: "",
  socialmediaTextStyle: {},
};
