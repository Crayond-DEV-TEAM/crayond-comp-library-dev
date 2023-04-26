import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
  Box,
  Divider,
  Grid,
  Hidden,
  InputAdornment,
  Typography,
} from '@mui/material';
import React from 'react';

import Card from '../card/card';
import { Image } from '../image';
import { InputField } from '../inputField';
import { MobileInput } from '../mobileInput';
import { SocialMediaButton } from '../socialMediaButton';
import { login_style } from './style';

type LoginOption =
  | 'emailWithPasswordLogin'
  | 'socialMediaLogin'
  | 'mobileNumberLogin';

export interface LoginScreenProps {
  onSubmit: (details: object) => void;
  option: LoginOption;
  cardData: any;
  backgroundImg: any;
  rootStyle: object;
  cardWraperStyle: object;
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  option,
  onSubmit,
  cardData,
  backgroundImg,
  rootStyle,
  cardWraperStyle
}) => {
  const type = option;
  const socialMedia = cardData.socialMediaDetails
  const [email, setEmail] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMail, setErrorMail] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [errorPasswordMsg, setErrorPasswordMsg] = React.useState('');
  const [passwordvisible, setPasswordVisible] = React.useState(false);

  const getMailValue = (e: any) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const value = e.target.value;
    if (regex.test(value)) {
      setErrorMail(false)
      setEmail(value)
      setErrorMsg('')
    } else {
      setErrorMsg('Please enter your registered email')
      setErrorMail(true)
    }
  }

  const getPasswordValue = (e: any) => {
    const value = e.target.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (regex.test(value)) {
      setErrorPassword(false)
      setPassword(value)
      setErrorPasswordMsg('')
    } else {
      setErrorPasswordMsg('Please enter password')
      setErrorPassword(true)
    }
  }
  const getThrowErrorMsg = () => {
    switch (type) {
      case 'emailWithPasswordLogin':
        if (email === '') {
          setErrorMsg('Please enter your registered email')
          setErrorMail(true)
        }
        if (password === '') {
          setErrorPasswordMsg('Please enter password')
          setErrorPassword(true)
        }
        if (email !== '' && password !== '') {
          const userDetail = {
            email: email,
            password: password,
            type: type
          };
          onSubmit(userDetail)
        }
      case 'mobileNumberLogin':
        if (mobileNumber !== '') {
          const userDetail = {
            mobile_number: mobileNumber,
            countryCode: countryCode,
            type: type
          };
          onSubmit(userDetail)
        }
    }

  }

  const getMobileNumber = (value: any) => {
    setMobileNumber(value.mobile)
    setCountryCode(value.mobile_code)
  }
  const passWordVisible = () => {
    setPasswordVisible(passwordvisible ? false : true)
  }
  const getoptionretrieve = (option: string) => {
    switch (option) {
      case 'mobileNumberLogin':
        return (
          <>
            <Typography sx={login_style.labelSx}>Mobile Number</Typography>
            <MobileInput handleChange={getMobileNumber} rootWapperstyle={login_style.textFieldSx} />
          </>
        );
      case 'socialMediaLogin':
        return (
          <>
            {socialMedia?.map((item: any) => {
              return (
                <SocialMediaButton
                  rootStyle={login_style.socialButtonSx}
                  startIcon={item?.icon}
                  buttonText={item?.label}
                  onClick={item?.onSocialmediaLogin}
                  socialmediaTextStyle={item?.style}
                />

              )
            })}
            <Divider sx={login_style.dividerSx}>
              <Typography sx={login_style.fontSx}>or</Typography>
            </Divider>
            <Typography sx={login_style.labelSx}>Work Email</Typography>
            <InputField
              fullWidth
              size="small"
              error={errorMail}
              helperText={errorMsg}
              onChange={getMailValue}
              textFieldStyle={login_style.textFieldSx}
            />
            <Typography sx={login_style.forgotSx}>
              <span
                onClick={cardData?.onForgotClick}
                style={{ cursor: 'pointer' }}
              >
                Forgot Password?
              </span>
            </Typography>{' '}
          </>
        )
      default:
        return (
          <>
            <Typography sx={login_style.labelSx}>Email</Typography>
            <InputField
              fullWidth
              size="small"
              error={errorMail}
              helperText={errorMsg}
              onChange={getMailValue}
              textFieldStyle={login_style.textFieldSx}
            />
            <Typography sx={login_style.labelSx}>Password</Typography>
            <InputField
              fullWidth
              size="small"
              type={passwordvisible ? 'text' : 'password'}
              error={errorPassword}
              helperText={errorPasswordMsg}
              onChange={getPasswordValue}
              textFieldStyle={login_style.textFieldSx}
              InputProps={{
                endAdornment: (
                  <InputAdornment style={{ cursor: 'pointer' }} onClick={passWordVisible} position="end">{passwordvisible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}</InputAdornment>
                ),
              }}
            />
            <Typography sx={login_style.forgotSx}>
              <span
                onClick={cardData?.onForgotClick}
                style={{ cursor: 'pointer' }}
              >
                Forgot Password?
              </span>
            </Typography>
          </>
        );
    }
  };
  return (
    <Grid container sx={{ ...login_style.parentSx, ...rootStyle }}>
      {backgroundImg && (<Hidden smDown>
        <Grid item xs={12} sm={4} md={3} sx={backgroundImg?.backgroundWrapStyle }>
          <Image
            src={backgroundImg?.imgSrc} width={'100%'} height={'100%'} imageStyle={backgroundImg?.bgImageStyle}
          />
        </Grid>
      </Hidden>)}
      <Grid item xs={12} sm={backgroundImg ? 8 : 12} md={backgroundImg ? 9 : 12} sx={{ ...login_style.loginSx, ...cardWraperStyle }}>
        <Box sx={login_style.cardParentSx}>
          <Card
            title={cardData?.title}
            logo={cardData?.logo}
            description={cardData?.description}
            children={
              <Box sx={login_style.childernSx}>
                {getoptionretrieve(option)}
              </Box>
            }
            bottomText={cardData?.bottomText}
            button={cardData?.button}
            btnClick={getThrowErrorMsg}
            buttonText={cardData?.buttonText}
            cardStyle={{ ...login_style.cardSx, ...cardData?.cardStyle }}
            btnStyle={{ ...login_style.loginBtnSx, ...cardData?.btnStyle }}
            actionText={cardData?.loginActionText}
            actionstyle={{ ...login_style.actionSx, ...cardData?.actionstyle }}
            bottomTextStyle={login_style.bottomTextSx}
            onActionClick={cardData?.onSignUpClick}
            imgStyle={login_style.logoSx}
          />
        </Box>
      </Grid>
    </Grid>

  );
};

export default LoginScreen;
