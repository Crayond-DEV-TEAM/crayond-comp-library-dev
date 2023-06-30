import { Box, Link, SxProps, Typography } from "@mui/material";
import {  NestedHeaderProps } from "./props";
import { footer_style } from "./style";

 export const NestedHeader = (props: NestedHeaderProps) => {
    const {
      nestedChild,
      headingStyle,
      subTitleStyle,
      hoverHeading,
      hoverHeadingStyles,
      nestedTitleIconAlign,
      nestedSubTitleIconAlign,
      nestedTitleTextAlign,
    } = props;    
    return (
      <>
        <Box>
          <Typography
            onClick={() => nestedChild?.nested?.heading?.onClick()}
            sx={{
              ...footer_style.heading,
              ...headingStyle,
              ...nestedChild?.nested?.heading?.styles,
              ':hover': hoverHeading,
              textAlign:nestedTitleIconAlign,
            } as SxProps}
          >
            {nestedChild?.nested?.heading?.title}
          </Typography>
          {nestedChild?.nested?.subTitle?.map((nestVal: any) => (
            <Box
              sx={{ ...footer_style.titleIcon,
                flexDirection:  nestVal?.iconDirection === 'left' || nestedSubTitleIconAlign ? "row-reverse":"row",
                justifyContent:nestedTitleTextAlign,
              }}
            >
              <span
                style={{
                  paddingRight: nestVal?.icon ? '8px' : '0',
                }}
              >
                {nestVal?.icon}
              </span>
              {nestVal?.link ? (
                <Link
                  href={nestVal?.link}
                  underline="hover"
                  sx={{
                    ...footer_style.subTitle,
                    ...subTitleStyle,
                    ...nestVal?.styles,
                    ':hover': hoverHeadingStyles,
                  }}
                >
                  {nestVal?.subValue}
                </Link>
              ) : (
                <Typography
                  onClick={() => nestVal?.onClick()}
                  sx={{
                    ...footer_style.subTitle,
                    ...subTitleStyle,
                    ...nestVal?.styles,
                    ':hover': hoverHeadingStyles,
                  }}
                >
                  {nestVal?.subValue}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </>
    );
  };