import { Box, Container, Grid, SxProps, Typography } from '@mui/material';
import React from 'react';
import { FooterProps } from './props';
import { footer_style } from './style';
import Link from '@mui/material/Link';
import { NestedHeader } from './nestedHeader';
import Instagram from '../../assets/insta';
import LinkedIn from '../../assets/linkedIn';
import AppStore from '../../assets/appStore';
import PlayStore from '../../assets/plastore';

const Footer: React.FC<FooterProps> = (props) => {
  const {
    footerData,
    footerLogo = [],
    rootStyles,
    componentRootStyle,
    logoContainerStyle,

    headingTitleColor,
    headingTitleSize,
    headingStyle,

    subTitleSize,
    subTitleColor,
    subTitleStyle,
    nestedHoverHeadingStyles,
    nestedHoverHeadingStyle,
    nestedTitleIconAlign,
    nestedSubTitleIconAlign,
    nestedTitleTextAlign,

    companyNameFontColor,
    companyNameFontSize,
    companyNameStyles,
    companyLogoBlockStyle,

    headingTextAlign,
    headingIconAlign,
    
    subTitleTextAlign,
    subTitleIconAlign,


    bottomTextColor,
    bottomFontSize,
    bottomTextBlockStyle,
    bottomTexStyle,

    bottomPolicyTextColor,
    bottomPolicyFontSize,
    reservedYearStyles,
    hoverHeadingStyles,
    subscriptionBlockStyle,
  } = props;
  const currentDate = new Date();
  const reservedYear = currentDate.getFullYear();

  return (
    <>
      <Container>
        <Box sx={{ ...footer_style.background, ...rootStyles }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
             sx={{...footer_style.container}}
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 3, sm: 12, md: 12, lg: 12, xl: 12 }}
            >
              {footerData?.map((value: any) => (
                <>
                  <Grid item xs={3} sx={{ order: value?.order }}>
                    
                      <Box
                        sx={{ ...footer_style.titleIcon,
                          flexDirection: value?.heading?.iconDirection === 'left'|| headingIconAlign ? "row-reverse":"row",
                          justifyContent:headingTextAlign,
                        }}
                      >
                        <span>{value?.heading?.icon}</span>
                        <Typography
                          onClick={() => value?.heading?.onClick()}
                          sx={{
                            ...footer_style.heading,
                            ...headingStyle,
                            ...value?.heading?.styles,
                            ':hover': hoverHeadingStyles,
                            color: headingTitleColor,
                            fontSize: headingTitleSize,
                          }}
                        >
                          {value?.heading?.title}
                        </Typography>
                      </Box>
                      {value?.subTitle?.map((sub: any) => (
                        <>
                          <Box
                            sx={{ ...footer_style.subTitleIcon,
                              flexDirection: value?.heading?.iconDirection === 'left'|| subTitleTextAlign? "row-reverse":"row",
                              justifyContent: subTitleIconAlign ,
                            }}
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
                                  ':hover': hoverHeadingStyles,
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
                                  ':hover': hoverHeadingStyles,
                                  color: subTitleColor,
                                  fontSize: subTitleSize,
                                }}
                              >
                                {sub?.subValue}
                              </Typography>
                            )}
                          </Box>
                          {sub?.nested ? (
                            <NestedHeader
                              nestedChild={sub}
                              subTitleStyle={subTitleStyle}
                              headingStyle={hoverHeadingStyles}
                              nestedTitleIconAlign={nestedTitleIconAlign}
                              nestedSubTitleIconAlign={nestedSubTitleIconAlign}
                              nestedTitleTextAlign={nestedTitleTextAlign}
                              hoverHeading={nestedHoverHeadingStyle}
                              hoverHeadingStyles={nestedHoverHeadingStyles}
                            />
                          ) : (
                            ''
                          )}
                        </>
                      ))}

                      <Box sx={{ ...componentRootStyle, pb: '8px' }}>
                        {value?.component}
                      </Box>
                  </Grid>
                </>
              ))}
            </Grid>
          </Box>

          <Box sx={{ ...footer_style.footerBottomContainer }}>
            {footerLogo?.map((val: any) => (
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
                    <Typography
                      sx={
                        {
                          ...footer_style.logoText,
                          ...companyNameStyles,
                          color: companyNameFontColor,
                          fontSize: companyNameFontSize,
                        } as SxProps
                      }
                    >
                      {val?.companyLogo?.label}
                    </Typography>
                  </Box>
                  <Box
                    sx={
                      {
                        ...footer_style.subscribeBlock,
                        ...subscriptionBlockStyle,
                      } as SxProps
                    }
                  >
                    {val?.subscribes.map((item: any, i: number) => (
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
                  sx={
                    {
                      ...footer_style.footerBottom,
                      ...bottomTextBlockStyle,
                    } as SxProps
                  }
                >
                  <Box sx={{ ...footer_style.bottomTextBlock, gap: '10px' }}>
                    {val?.termsOfPolicy?.map((term: any) => (
                      <Typography
                        sx={
                          {
                            ...footer_style.bottomText,
                            ...bottomTexStyle,
                            color: bottomTextColor,
                            fontSize: bottomFontSize,
                          } as SxProps
                        }
                      >
                        {term?.label}
                      </Typography>
                    ))}
                  </Box>

                  <Box sx={{ ...footer_style.bottomTextBlock, gap: '5px' }}>
                    {val?.copyRight?.map((policy: any) => (
                      <Typography
                        sx={{
                          ...footer_style.bottomText,
                          ...bottomTexStyle,
                          color: bottomPolicyTextColor,
                          fontSize: bottomPolicyFontSize,
                          paddingRight: '6px',
                        }}
                      >
                        {' '}
                        {policy?.label}
                      </Typography>
                    ))}
                    <Typography
                      sx={
                        {
                          ...footer_style.bottomText,
                          ...reservedYearStyles,
                        } as SxProps
                      }
                    >
                      {reservedYear}
                    </Typography>
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

Footer.defaultProps = {
  footerData: [],
  rootStyles: {},
  componentRootStyle: {},
  logoContainerStyle: {},

  headingTitleColor: '#404E61',
  headingTitleSize: 15,
  headingStyle: {},

  nestedSubTitleIconAlign: 'start',
  nestedTitleIconAlign: 'left',
  nestedTitleTextAlign: 'flex-end',

  subTitleTextAlign: 'flex-end',
  subTitleIconAlign: 'left',

  headingTextAlign: 'flex-end',
  headingIconAlign: 'left',

  subTitleSize: 16,
  subTitleColor: '#6E7882',
  subTitleStyle: {},

  companyNameFontColor: '#98A0AC',
  companyNameFontSize: 12,
  companyNameStyles: {},
  companyLogoBlockStyle: {},

  bottomTextColor: '#98A0AC',
  bottomFontSize: 12,
  bottomTextBlockStyle: {},
  bottomTexStyle: {},

  bottomPolicyTextColor: '#98A0AC',
  bottomPolicyFontSize: 12,
  reservedYearStyles: {},
  hoverHeadingStyles: {},
  subscriptionBlockStyle: {},
  footerLogo: [
    {
      companyLogo: {
        label: 'Crayond',
        logo: '⚜',
      },
      subscribes: [
        { icon: <PlayStore /> },
        { icon: <AppStore /> },
        { icon: <AppStore /> },
        { icon: <LinkedIn /> },
        { icon: <Instagram /> },
        { icon: <LinkedIn /> },
        { icon: <Instagram /> },
      ],
      termsOfPolicy: [
        { label: 'Terms of Service' },
        { label: 'Privacy Policy' },
      ],
      copyRight: [
        { label: 'Crayond ©' },
        { label: 'All s reserved' },
        { label: 'creating Copy' },
      ],
    },
  ],
};
