import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { footer_style } from './style';
import { FooterProps } from './props';
import Collapse from '@mui/material/Collapse';

const Footer: React.FC<FooterProps> = ({
  footerData,
  footerLogo,
  headingStyle,
  subTitleStyle,
}) => {
  const [isExpand, setExpand] = useState(false);

  const currentDate = new Date();
  const reservedYear = currentDate.getFullYear();

  const handleExpand = (props:any) => {
    console.log(props);
    
    setExpand((prevState) => !prevState);
    let headings = footerData?.map((value: any) => value.heading.title)
    let nestedHeading = footerData?.map((value: any) => value?.subTitle.map((val:any)=>val?.nested?.heading?.title))
    // console.log(headings,"ouigut");
    // console.log(nestedHeading[0],"===");
    if(headings){
      console.log("headings");
      
      if(headings.title === props.title){
      console.log("true");
        
        setExpand(true)
      }
    }else if(nestedHeading){
      console.log("nestedHeading");

      if(nestedHeading.title === props.title){
      console.log("true");

        setExpand(true)
      }
    }
  };

  const NestedHeader = (props: any) => {
    const { nestedChild } = props;
    return (
      <>
        <Box>
          <Typography
            onClick={()=>handleExpand(nestedChild?.nested?.heading)}
            sx={{
              ...footer_style.heading,
              ...headingStyle,
              ...nestedChild?.nested?.heading?.styles,
            }}
          >
            {nestedChild?.nested?.heading?.title}
          </Typography>
          <Collapse in={isExpand}>
            {nestedChild?.nested?.subTitle?.map((nestVal: any) => (
              <Box sx={{ ...footer_style.subTitleBlock }}>
                <span style={{ paddingRight: nestVal?.icon ? '8px' : '0' }}>
                  {nestVal?.icon}
                </span>
                <Typography
                  sx={{
                    ...footer_style.subTitle,
                    ...subTitleStyle,
                    ...nestVal?.styles,
                  }}
                >
                  {nestVal?.subValue}
                </Typography>
              </Box>
            ))}
          </Collapse>
        </Box>
      </>
    );
  };

  return (
    <>
      <Container>
        <Box sx={{ ...footer_style.background }}>
          <Box sx={{ ...footer_style.container }}>
            {footerData?.map((value: any) => (
              <>
                <Box sx={{ order: value?.order }}>
                  <Typography
                    onClick={()=>handleExpand(value?.heading)}
                    sx={{
                      ...footer_style.heading,
                      ...headingStyle,
                      ...value?.heading?.styles,
                    }}
                  >
                    {value?.heading.title}
                  </Typography>
                  <Collapse in={isExpand}>
                  {value?.subTitle?.map((sub: any) => (
                    <>
                      <Box sx={{ ...footer_style.subTitleBlock }}>
                        <span style={{ paddingRight: sub?.icon ? '8px' : '0' }}>
                          {sub?.icon}
                        </span>
                        <Typography
                          sx={{
                            ...footer_style.subTitle,
                            ...subTitleStyle,
                            ...sub?.styles,
                          }}
                        >
                          {sub?.subValue}
                        </Typography>
                      </Box>
                      {sub.nested ? <NestedHeader nestedChild={sub} /> : ''}
                    </>
                  ))}
                </Collapse>
                </Box>
              </>
            ))}
          </Box>
          <Box sx={{ paddingTop: '80px' }}>
            {footerLogo.map((val: any) => (
              <>
                <Box sx={{ ...footer_style.logoContainer }}>
                  <Box sx={{ ...footer_style.logoBlock }}>
                    <span style={{ ...footer_style.logoText }}>
                      {val?.companyLogo?.logo}
                    </span>
                    <span style={{ ...footer_style.logoText }}>
                      {val?.companyLogo?.label}
                    </span>
                  </Box>
                  <Box>
                    {val?.subscribes.map((item: any, i: Number) => (
                      <>
                        <span
                          style={{
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

                <Box sx={{ ...footer_style.footerBottom }}>
                  <Box sx={{}}>
                    <span style={{ ...footer_style.bottomText }}>
                      {val?.termsOfPolicy?.terms}
                    </span>
                    <span style={{ ...footer_style.bottomText }}>
                      {val?.termsOfPolicy?.policy}
                    </span>
                  </Box>
                  <Box sx={{}}>
                    <span
                      style={{ ...footer_style.bottomText }}
                    >{`${val?.copyRight?.company} ©`}</span>
                    <span
                      style={{
                        ...footer_style.bottomText,
                        paddingRight: '0px',
                      }}
                    >
                      {reservedYear} {val?.copyRight?.reservedYear}
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
