import { Box, Divider, Grid, Hidden, InputAdornment, Typography } from '@mui/material';
import React from 'react';

import HideIcon from '../../assets/hide';
import Card from '../card/card';
import { Image } from '../image';
import { InputField } from '../inputField';
import { MobileInput } from '../mobileInput';
import { SocialMediaButton } from '../socialMediaButton';
import { login_style } from './style';

type LoginOption = 'mobile' | 'email' | 'socialmedia';

export interface LoginScreenProps {
  // onSubmit: (username: string, password: string) => void;
  onLogin: (option: LoginOption, value: string) => void;
  option: LoginOption;
  cardData: any;
  bannerImgData:any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  // onSubmit,
  onLogin,
  cardData,
  bannerImgData
}) => {

  const getoptionretrieve = (option: any) => {
    if (option === "email" || option === undefined || option === null) {
      return (
        <>
          <Typography sx={login_style.labelSx}>Email</Typography>
          <InputField
            fullWidth
            size="small"
            textFieldStyle={login_style.textFieldSx}
          />
          <Typography sx={login_style.labelSx}>Password</Typography>
          <InputField
            fullWidth
            size="small"
            type="password"
            endAdornments={<HideIcon />}
            textFieldStyle={login_style.textFieldSx}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {<HideIcon />}
                </InputAdornment>
              ),
            }}
          />
          <Typography
            sx={login_style.forgotSx}
            onClick={cardData[0]?.onForgotClick}
          >
            Forgot Password?
          </Typography>{' '}
        </>
      )
    } else if (option === "mobile") {
      return (
        <>
          <Typography sx={login_style.labelSx}>
            Mobile Number
          </Typography>
          <MobileInput rootWapperstyle={login_style.textFieldSx} />
        </>
      )
    } else if (option === "socialmedia") {
      return (
        <>
          <SocialMediaButton
            rootStyle={login_style.socialButtonSx}
            startIcon={cardData[0].socialMediaIconOne}
            buttonText={cardData[0].socialMediaButtonText}
            fontSize={cardData[0].socialMediaTextFontSize}
            textAlign={'center'}
            onClick={cardData[0]?.onSocialmediaSignUp}
          />
          <SocialMediaButton
            rootStyle={login_style.socialButtonSx}
            startIcon={cardData[0].socialMediaIconTwo}
            buttonText={cardData[0].socialMediaButtonTextTwo}
            fontSize={cardData[0].socialMediaTextFontSize}
            onClick={cardData[0]?.onSocialmediaSignUp}
          />
          <Divider sx={login_style.dividerSx}>
            <Typography sx={login_style.fontSx}>or</Typography>
          </Divider>
          <Typography sx={login_style.labelSx}>
            Work Email
          </Typography>
          <InputField
            fullWidth
            size="small"
            textFieldStyle={login_style.textFieldSx}
          />
          <Typography
            sx={login_style.forgotSx}
            onClick={cardData[0]?.onForgotClick}
          >
            Forgot Password?
          </Typography>{' '}
        </>
      )
    }

  }
  return (
    <Box sx={login_style.parentSx}>
      <Grid container>
        <Hidden smDown> <Grid item xs={12} sm={4} md={3}>
          <Box sx={login_style.bannerSx}>
            <Image src={bannerImgData[0]?.imgSrc} width={bannerImgData[0]?.loginImgWidth} height={bannerImgData[0]?.loginImgHeight}/>
          </Box>
        </Grid>
        </Hidden>
        <Grid item xs={12} sm={8} md={9} sx={login_style.loginFormSx}>
          <Box sx={login_style.cardParentSx}>
            <Card
              title={cardData[0]?.loginTitle}
              logo={cardData[0]?.CompanyLogo}
              description={cardData[0]?.loginCardDescription}
              children={
                <Box sx={login_style.childernSx}>
                  {getoptionretrieve(cardData[0]?.loginOption)}
                </Box>
              }
              bottomText={cardData[0]?.loginCardBottomText}
              button={cardData[0]?.button}
              btnClick={onLogin}
              buttonText={cardData[0]?.loginButtonText}
              cardStyle={login_style.cardSx}
              btnStyle={login_style.loginBtnSx}
              actionText={cardData[0]?.loginActionText}
              actionstyle={login_style.actionSx}
              bottomTextStyle={login_style.bottomTextSx}
              onActionClick={cardData[0]?.onActionClick}
              imgStyle={login_style.logoSx}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginScreen;
