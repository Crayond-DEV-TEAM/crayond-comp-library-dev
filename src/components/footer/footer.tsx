import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { FooterProps } from './props';
import { footer_style } from './style';
import Link from '@mui/material/Link';

const Footer: React.FC<FooterProps> = ({
  footerData,
  footerLogo,
  rootStyles,
  componentStyle,
  logoContainerStyle,
  headingStyle,
  subTitleStyle,
  companyLogoBlockStyle,
  subscriptionBlockStyle,
  bottomTextBlockStyle,
  bottomTexStyle,
  hoverHeading,
  hoverSubTitle,
}) => {
  const currentDate = new Date();
  const reservedYear = currentDate.getFullYear();

  const NestedHeader = (props: any) => {
    const { nestedChild } = props;
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
            }}
          >
            {nestedChild?.nested?.heading?.title}
          </Typography>
          {nestedChild?.nested?.subTitle?.map((nestVal: any) => (
            <Box
              sx={
                nestVal?.iconDirection === 'left'
                  ? { ...footer_style.subTitleLeftIcon }
                  : { ...footer_style.subTitleRightIcon }
              }
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
                    ':hover': hoverSubTitle,
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
                    ':hover': hoverSubTitle,
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

  return (
    <>
      <Container>
        <Box sx={{ ...footer_style.background, ...rootStyles }}>
          <Box sx={{ ...footer_style.container }}>
            {footerData?.map((value: any) => (
              <>
                <Box sx={{ order: value?.order }}>
                  <Box
                    sx={
                      value?.heading?.iconDirection === 'left'
                        ? { ...footer_style.subTitleLeftIcon }
                        : { ...footer_style.subTitleRightIcon }
                    }
                  >
                    <span>{value?.heading?.icon}</span>
                    <Typography
                      onClick={() => value?.heading?.onClick()}
                      sx={{
                        ...footer_style.heading,
                        ...headingStyle,
                        ...value?.heading?.styles,
                        ':hover': hoverHeading,
                      }}
                    >
                      {value?.heading?.title}
                    </Typography>
                  </Box>
                  {value?.subTitle?.map((sub: any) => (
                    <>
                      <Box
                        sx={
                          sub?.iconDirection === 'left'
                            ? { ...footer_style.subTitleLeftIcon }
                            : { ...footer_style.subTitleRightIcon }
                        }
                      >
                        <span>{sub?.icon}</span>

                        {sub?.link ? (
                          <Link
                            href={sub?.link}
                            underline="hover"
                            sx={{
                              ...footer_style.subTitle,
                              ...subTitleStyle,
                              ...sub?.styles,
                              ':hover': hoverSubTitle,
                            }}
                          >
                            {sub?.subValue}
                          </Link>
                        ) : (
                          <Typography
                            onClick={() => sub?.onClick()}
                            sx={{
                              ...footer_style.subTitle,
                              ...subTitleStyle,
                              ...sub?.styles,
                              ':hover': hoverSubTitle,
                            }}
                          >
                            {sub?.subValue}
                          </Typography>
                        )}
                      </Box>
                      {sub.nested ? <NestedHeader nestedChild={sub} /> : ''}
                    </>
                  ))}

                  <Box sx={{ ...componentStyle, pb: '8px' }}>
                    {value?.component}
                  </Box>
                </Box>
              </>
            ))}
          </Box>
          <Box sx={{ ...footer_style.footerBottomContainer }}>
            {footerLogo.map((val: any) => (
              <>
                <Box
                  sx={{ ...footer_style.logoContainer, ...logoContainerStyle }}
                >
                  <Box
                    sx={{ ...footer_style.logoBlock, ...companyLogoBlockStyle }}
                  >
                    <span style={{ ...footer_style.logoText }}>
                      {val?.companyLogo?.logo}
                    </span>
                    <span style={{ ...footer_style.logoText }}>
                      {val?.companyLogo?.label}
                    </span>
                  </Box>
                  <Box
                    sx={{
                      ...footer_style.subscribeBlock,
                      ...subscriptionBlockStyle,
                    }}
                  >
                    {val?.subscribes.map((item: any, i: Number) => (
                      <>
                        <span
                          onClick={item?.onClick}
                          style={{
                            cursor: 'pointer',
                            paddingRight:
                              val?.subscribes.length - 1 === i ? '0' : '22px',
                          }}
                        >
                          {item?.icon}
                        </span>
                      </>
                    ))}
                  </Box>
                </Box>

                <Box
                  sx={{ ...footer_style.footerBottom, ...bottomTextBlockStyle }}
                >
                  {val?.termsOfPolicy?.map((term: any) => (
                    <Box>
                      <span
                        style={{
                          ...footer_style.bottomText,
                          ...bottomTexStyle,
                        }}
                      >
                        {term?.label}
                      </span>
                    </Box>
                  ))}

                  <Box>
                    {val?.copyRight?.map((policy: any) => (
                      <span
                        style={{
                          ...footer_style.bottomText,
                          ...bottomTexStyle,
                          paddingRight: '6px',
                        }}
                      >
                        {' '}
                        {policy?.label}
                      </span>
                    ))}
                    <span style={{ ...footer_style.bottomText }}>
                      {reservedYear}
                    </span>
                  </Box>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Footer;
