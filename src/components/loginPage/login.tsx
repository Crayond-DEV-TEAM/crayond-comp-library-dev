
import {
  Box,
  Divider,
  Grid,
  Hidden,
  InputAdornment,
  Typography
} from '@mui/material';
import React from 'react';

import Card from '../card/card';
import { Image } from '../image';
import { InputField } from '../inputField';
import { MobileInput } from '../mobileInput';
import { SocialMediaButton } from '../socialMediaButton';
import { LoginScreenProps } from './props';
import { login_style } from './style';

const LoginScreen: React.FC<LoginScreenProps> = ({
  option,
  onSubmit,
  sectionOne,
  sectionTwo,
  rootStyle,
}) => {
  const type = option;
  const socialMedia = sectionTwo?.cardData?.socialMedia?.socialMediaList;
  const [email, setEmail] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMail, setErrorMail] = React.useState(false);
  const [errorNumber, setErrorNumber] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [errorPasswordMsg, setErrorPasswordMsg] = React.useState('');
  const [mobileNumberErrorMsg, setmobileNumberErrorMsg] = React.useState('');
  const [passwordvisible, setPasswordVisible] = React.useState(false);

  const getMailValue = (e: any) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const value = e.target.value;
    setEmail(value);
    if (regex.test(value)) {
      setErrorMail(false);
      setErrorMsg('');
    } else {
      setErrorMsg('Please enter your registered email');
      setErrorMail(true);
    }
  };

  const getPasswordValue = (e: any) => {
    const value = e.target.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    setPassword(value);
    if (regex.test(value)) {
      setErrorPassword(false);

      setErrorPasswordMsg('');
    } else {
      setErrorPasswordMsg('Please enter password');
      setErrorPassword(true);
    }
  };
  const getThrowErrorMsg = () => {
    switch (type) {
      case 'emailWithPasswordLogin':
        if (email === '') {
          setErrorMsg('Please enter your registered email');
          setErrorMail(true);
        }
        if (password === '') {
          setErrorPasswordMsg('Please enter password');
          setErrorPassword(true);
        }
        if (email !== '' && password !== '') {
          const userDetail = {
            email: email,
            password: password,
            type: type,
          };
          onSubmit(userDetail);
        }
      case 'mobileNumberLogin':
        if (mobileNumber !== '' && mobileNumber.length === 10) {
          const userDetail = {
            mobile_number: mobileNumber,
            countryCode: countryCode,
            type: type,
          };
          onSubmit(userDetail);
        } else {
          setErrorNumber(true)
          setmobileNumberErrorMsg('Please enter your valid number')
        }
    }
  };

  const getMobileNumber = (value: any) => {
    setMobileNumber(value.mobile);
    setCountryCode(value.mobile_code);
    setErrorNumber(false)
    setmobileNumberErrorMsg("")
  };
  const passWordVisible = () => {
    setPasswordVisible(passwordvisible ? false : true);
  };
  const getoptionretrieve = (option: string) => {
    switch (option) {
      case 'mobileNumberLogin':
        return (
          <>
            <Typography
              sx={{
                ...login_style.labelSx,
                ...sectionTwo?.cardData?.mobileNumberLogin?.labelStyle,
              }}
            >
              {sectionTwo?.cardData?.mobileNumberLogin?.labelText}
            </Typography>
            <MobileInput
              handleChange={getMobileNumber}
              error={errorNumber}
              helperText={mobileNumberErrorMsg}
              rootWapperstyle={{
                ...login_style.textFieldSx,
                ...sectionTwo?.cardData?.mobileNumberLogin?.mobileFieldstyle,
                ...{
                  '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
                    fontSize: sectionTwo?.cardData?.mobileNumberLogin?.mobileFieldstyle?.contryCodefontSize,
                    fontWeight: sectionTwo?.cardData?.mobileNumberLogin?.mobileFieldstyle?.fontWeight,
                  }
                },
                ...{
                  '& .MuiOutlinedInput-input': {
                    fontSize: sectionTwo?.cardData?.mobileNumberLogin?.mobileFieldstyle?.numberFontSize,
                  },
                }
              }}
              dropDownStyle={{
                ...sectionTwo?.cardData?.mobileNumberLogin?.dropDownStyle,
              }}
            />
          </>
        );
      case 'socialMediaLogin':
        return (
          <>
            {socialMedia?.map((item: any) => {
              return (
                <SocialMediaButton
                  rootStyle={{
                    ...login_style.socialButtonSx,
                    ...item?.SocialMediaButtonStyle,
                  }}
                  startIcon={item?.icon}
                  buttonText={item?.label}
                  onClick={item?.onSocialmediaLogin}
                  socialmediaTextStyle={item?.style}/>
              );
            })}
            {sectionTwo?.cardData?.socialMedia?.divider && (
              <Divider
                sx={{
                  ...login_style.dividerSx,
                  ...sectionTwo?.cardData?.socialMedia?.divider?.dividerStyle,
                }}
              >
                <Typography
                  sx={{
                    ...login_style.fontSx,
                    ...sectionTwo?.cardData?.socialMedia?.divider?.dividerTextStyle,
                  }}
                >
                  {sectionTwo?.cardData?.socialMedia?.divider?.dividerText}
                </Typography>
              </Divider>
            )}
            {sectionTwo?.cardData?.socialMedia?.workMailInput && (
              <>
                <InputField
                  fullWidth
                  size="small"
                  error={errorMail}
                  helperText={errorMsg}
                  onChange={getMailValue}
                  textFieldStyle={login_style.textFieldSx}
                  type={'email'}
                  value={email}
                  label={sectionTwo?.cardData?.socialMedia?.workMailInput?.label}
                  labelStyle={sectionTwo?.cardData?.socialMedia?.workMailInput?.labelStyle}
                />
                <Typography sx={{ ...login_style.forgotSx, ...sectionTwo?.cardData?.socialMedia?.workMailInput?.forgotStyle }}>
                  <span
                    onClick={sectionTwo?.cardData?.socialMedia?.workMailInput?.onForgotClick}
                    style={{ cursor: 'pointer' }}
                  >
                    Forgot Password?
                  </span>
                </Typography>
              </>
            )}
          </>
        );
      case 'emailWithPasswordLogin':
        return (
          <>
            <InputField
              fullWidth
              size="small"
              error={errorMail}
              helperText={errorMsg}
              onChange={getMailValue}
              textFieldStyle={{ ...login_style.textFieldSx, ...sectionTwo?.cardData?.emailWithPassword?.email?.fieldstyle }}
              type={'email'}
              value={email}
              label={sectionTwo?.cardData?.emailWithPassword?.email?.label}
              labelStyle={sectionTwo?.cardData?.emailWithPassword?.email?.labelStyle}
            />
            <InputField
              fullWidth
              size="small"
              value={password}
              type={passwordvisible ? 'text' : 'password'}
              error={errorPassword}
              helperText={errorPasswordMsg}
              onChange={getPasswordValue}
              label={sectionTwo?.cardData?.emailWithPassword?.password?.label}
              labelStyle={sectionTwo?.cardData?.emailWithPassword?.password?.labelStyle}
              textFieldStyle={{ ...login_style.textFieldSx, ...sectionTwo?.cardData?.emailWithPassword?.password?.fieldstyle }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    style={{ cursor: 'pointer' }}
                    onClick={passWordVisible}
                    position="end"
                  >
                    {passwordvisible ? (sectionTwo?.cardData?.emailWithPassword?.password?.visbleIcon
                    ) : (sectionTwo?.cardData?.emailWithPassword?.password?.invisibleIcon
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Typography sx={{ ...login_style.forgotSx, ...sectionTwo?.cardData?.emailWithPassword?.forgotStyle }}>
              <span
                onClick={sectionTwo?.cardData?.emailWithPassword?.onForgotClick}
                style={{ cursor: 'pointer' }}
              >
                Forgot Password?
              </span>
            </Typography>
          </>
        );
      default:
        return ('please give valid option')
    }
  };
  return (
    <Grid container sx={{ ...login_style.parentSx, ...rootStyle }}>
      {sectionOne && (
        <Hidden smDown>
          <Grid
            item
            xs={sectionOne?.breakpoints?.xs}
            sm={sectionOne?.breakpoints?.sm}
            md={sectionOne?.breakpoints?.md}
            lg={sectionOne?.breakpoints?.lg}
            sx={sectionOne?.backgroundWrapStyle}
          >
            {sectionOne?.image && (
              <Image
                src={sectionOne?.image?.src}
                imageStyle={sectionOne?.image?.style}/>
            )}

            {sectionOne?.component && (
              <>
                {sectionOne?.component}
              </>
            )}
          </Grid>
        </Hidden>
      )}
      {sectionTwo && (
        <Grid
          item
          xs={sectionTwo?.breakpoints?.xs}
          sm={sectionTwo?.breakpoints?.sm}
          md={sectionTwo?.breakpoints?.md}
          lg={sectionTwo?.breakpoints?.lg}
          sx={{ ...login_style.loginSx, ...sectionTwo?.WraperStyle }}
        >
          <Box
            sx={{ ...login_style.cardParentSx, ...sectionTwo?.cardParentStyle }}
          >
            <Card
              title={sectionTwo?.cardData?.title}
              logo={{
                logoWidth: sectionTwo?.cardData?.logo?.logoWidth,
                logoHeight: sectionTwo?.cardData?.logo?.logoHeight,
                logoSrc: sectionTwo?.cardData?.logo?.logoSrc,
                alt: sectionTwo?.cardData?.logo?.alt,
                logoStyle: {
                  ...login_style.logoSx,
                  ...sectionTwo?.cardData?.logo?.logoStyle,
                },
              }}
              description={sectionTwo?.cardData?.description}
              children={
                <Box
                  sx={{
                    ...login_style.childernSx,
                    ...sectionTwo?.cardData?.childrenStyle,
                  }}
                >
                  {getoptionretrieve(option)}
                </Box>
              }
              bottomText={sectionTwo?.cardData?.bottomText}
              btnClick={getThrowErrorMsg}
              buttonText={sectionTwo?.cardData?.buttonText}
              titleStyle={sectionTwo?.cardData?.titleStyle}
              cardStyle={{
                ...login_style.cardSx,
                ...sectionTwo?.cardData?.cardStyle,
              }}
              btnStyle={{
                ...login_style.loginBtnSx,
                ...sectionTwo?.cardData?.btnStyle,
              }}
              actionText={sectionTwo?.cardData?.loginActionText}
              actionstyle={{
                ...login_style.actionSx,
                ...sectionTwo?.cardData?.actionstyle,
              }}
              bottomTextStyle={{
                ...login_style.bottomTextSx,
                ...sectionTwo?.cardData?.bottomTextStyle,
              }}
              onActionClick={sectionTwo?.cardData?.onSignUpClick}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};


LoginScreen.defaultProps = {
  onSubmit: () => { },
  option: 'emailWithPasswordLogin',
  rootStyle: {},
  sectionOne: {
    backgroundWrapStyle: {},
    breakpoints: { xs: 12, md: 3, sm: 4, lg: 3 },
    image: { src: '', height: '100%', width: '100%', style: {} },
  },
  sectionTwo: {
    breakpoints: {
      xs: 12, md: 9, sm: 8, lg: 9
    },
    WraperStyle: {},
    cardParentStyle: {},
    cardData: {
      title: "",
      description: "",
      bottomText: "",
      buttonText: "",
      loginActionText: "",
      onSignUpClick: () => { },
      titleStyle: {},
      btnStyle: {},
      cardStyle: {},
      childrenStyle: {},
      logoStyle: {},
      bottomTextStyle: {},
      actionstyle: {},
      mobileNumberLogin: {
        labelText: "",
        labelStyle: {},
        mobileFieldstyle: {},
        dropDownStyle: {},
      },
      socialMedia: {
        workMailInput: {
          label: "",
          labelStyle: {},
          forgotStyle: {},
          onForgotClick: () => {},
        },
        divider: {
          dividerStyle: {},
          dividerText: "",
          dividerTextStyle: {},
        },
        socialMediaList: [],
      },
      emailWithPassword: {
        email: {
          label: "Email",
          labelStyle: {},
          forgotStyle: {},
          fieldstyle: {},
        },
        password: {
          label: "Password",
          labelStyle: {},
          forgotStyle: {},
          fieldstyle: {},
          visbleIcon: <></>,
          invisibleIcon: <></>,
        },
        onForgotClick: () => { },
        forgotStyle: {}
      },
    },
  },
};

export default LoginScreen;
