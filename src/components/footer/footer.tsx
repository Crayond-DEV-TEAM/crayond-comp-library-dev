import { Box, Grid, SxProps, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';
import { NestedHeader } from './nestedHeader';
import { FooterProps } from './props';
import { footer_style } from './style';

const Footer: React.FC<FooterProps> = (props) => {
  const {
    footerData,
    footerLogo,
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

    handleClickCompanyLogo = () => {},
  } = props;
  const currentDate = new Date();
  const reservedYear = currentDate.getFullYear();

  return (
    <>
      <Box sx={{ ...footer_style.background, ...rootStyles }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            sx={{ ...footer_style.container }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 3, sm: 12, md: 12, lg: 12, xl: 12 }}
          >
            {footerData?.map((value: any) => (
              <>
                <Grid item xs={3} sx={{ order: value?.order }}>
                  <Box
                    sx={{
                      ...footer_style.titleIcon,
                      flexDirection:
                        value?.heading?.iconDirection === 'left' ||
                        headingIconAlign
                          ? 'row-reverse'
                          : 'row',
                      justifyContent: headingTextAlign,
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
                        sx={{
                          ...footer_style.subTitleIcon,
                          flexDirection:
                            value?.heading?.iconDirection === 'left' ||
                            subTitleTextAlign
                              ? 'row-reverse'
                              : 'row',
                          justifyContent: subTitleIconAlign,
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
          
              <Box
                sx={
                  {
                    ...footer_style.logoContainer,
                    ...logoContainerStyle,
                  } as SxProps
                }
              >
                <Box
                  sx={{ ...footer_style.logoBlock, ...companyLogoBlockStyle }}
                >
                  <Box
                    style={{ ...footer_style.logoText }}
                    onClick={handleClickCompanyLogo}
                  >
                    {footerLogo?.companyLogo?.logo}
                  </Box>
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
                    {footerLogo?.companyLogo?.label}
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
                  {footerLogo?.subscribes?.map((item: any, i: number) => (
                    <>
                      <Box
                        onClick={()=>item?.onClick()}
                        style={{
                          cursor: 'pointer',
                      }}
                      >
                        {item?.icon}
                      </Box>
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
                  {footerLogo?.termsOfPolicy?.map((term: any) => (
                    <Typography
                    onClick={()=>term?.onClick()}
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
                  {footerLogo?.copyRight?.map((policy: any) => (
                    <Typography
                     onClick={()=>policy?.onClick()}
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
        </Box>
      </Box>
    </>
  );
};
export default Footer;

Footer.defaultProps = {
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

  handleClickCompanyLogo: () => {},
  footerData: [],
  footerLogo: {
    companyLogo:{},
    subscribes:[],
    termsOfPolicy:[],
    copyRight:[]
  },
};
