import {
  Box,
  Grid,
  Hidden,
  InputAdornment,
  Typography
} from '@mui/material';
import React from 'react';

import Card from '../card/card';
import { Image } from '../image';
import { InputField } from '../inputField';
import { SocialMediaButton } from '../socialMediaButton';
import { SignupScreenProps } from './props';
import { signUp_style } from './style';
import { MobileInput } from '../mobileInput';

const SignupScreen: React.FC<SignupScreenProps> = ({
  option,
  onSubmit,
  sectionTwo,
  sectionOne,
  rootStyle,
}) => {
  const type = option;
  const socialMedia = sectionTwo?.cardData?.socialMedia?.socialMediaList;
  const [email, setEmail] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const [errorMail, setErrorMail] = React.useState(false);
  const [errorName, setErrorName] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorPasswordConfirm, setErrorPasswordConfirm] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [errorPasswordMsgConfirm, setErrorPasswordMsgConfirm] = React.useState('');
  const [errorPasswordMsg, setErrorPasswordMsg] = React.useState('');
  const [errorNameMsg, setErrorNameMsg] = React.useState('');
  const [passwordvisible, setPasswordVisible] = React.useState(false);
  const [lastName, setLastName] = React.useState('');
  const [passwordvisibleConfirm, setPasswordVisibleConfirm] = React.useState(false);
  const [errorNumber, setErrorNumber] = React.useState(false);
  const [mobileNumberErrorMsg, setmobileNumberErrorMsg] = React.useState('');

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
      setErrorPasswordMsg('Please valid password');
      setErrorPassword(true);
    }
  };

  const getFirstName = (e: any) => {
    setFirstName(e.target.value);
    setErrorNameMsg('');
    setErrorName(false);
  }

  const getLastName = (e: any) => {
    setLastName(e.target.value)
  }

  const getConfirmPasswordValue = (e: any) => {
    const value = e.target.value;
    setPasswordConfirm(value);
  };

  const getThrowErrorMsg = () => {
    switch (type) {
      case 'emailWithPasswordSignup':
        if (email === '') {
          setErrorMsg('Please enter your registered email');
          setErrorMail(true);
        }
        if (password === '') {
          setErrorPasswordMsg('Please enter password');
          setErrorPassword(true);
        }
        if (password !== "" && password !== passwordConfirm) {
          setErrorPasswordMsgConfirm('Password Not Match!');
          setErrorPasswordConfirm(true);
        } else {
          setErrorPasswordMsgConfirm('');
          setErrorPasswordConfirm(false);
        }
        if (firstName === '') {
          setErrorNameMsg('Please enter Name!');
          setErrorName(true);
        } else {
          setErrorNameMsg('');
          setErrorName(false);
        }
        if (firstName !== '' && email !== '' && password !== '' && passwordConfirm === password) {
          const userDetail = {
            name: firstName,
            lastName: lastName,
            email: email,
            password: password,
            type: type,
          };
          onSubmit(userDetail);
        }
      case 'mobileNumberSignup':
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
    setErrorNumber(false);
    setmobileNumberErrorMsg("");
  };
  const getPassWordVisible = () => {
    setPasswordVisible(passwordvisible ? false : true);
  };
  const getPassWordVisibleConfirm = () => {
    setPasswordVisibleConfirm(passwordvisibleConfirm ? false : true);
  };
  const getoptionretrieve = (option: string) => {
    switch (option) {
      case 'mobileNumberSignup':
        return (
          <>
            <Typography
              sx={{
                ...signUp_style.labelSx,
                ...sectionTwo?.cardData?.mobileNumberSignup?.labelStyle,
              }}
            >
              {sectionTwo?.cardData?.mobileNumberSignup?.labelText}
            </Typography>
            <MobileInput
              onChange={getMobileNumber}
              error={errorNumber}
              errorMessage={mobileNumberErrorMsg}
              inputStyle={{
                ...signUp_style.textFieldSx,
                ...sectionTwo?.cardData?.mobileNumberSignup?.mobileFieldstyle,
                ...{
                  '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
                    fontSize: sectionTwo?.cardData?.mobileNumberSignup?.mobileFieldstyle?.contryCodefontSize,
                    fontWeight: sectionTwo?.cardData?.mobileNumberSignup?.mobileFieldstyle?.fontWeight,
                  }
                },
                ...{
                  '& .MuiOutlinedInput-input': {
                    fontSize: sectionTwo?.cardData?.mobileNumberSignup?.mobileFieldstyle?.numberFontSize,
                  },
                }
              }}
              dropDownStyle={{
                ...sectionTwo?.cardData?.mobileNumberSignup?.dropDownStyle,
              }}
            />
          </>
        );
      case 'socialMediaSignup':
        return (
          <>
            {socialMedia?.map((item: any) => {
              return (
                <SocialMediaButton
                  rootStyle={{
                    ...signUp_style.socialButtonSx,
                    ...item?.SocialMediaButtonStyle,
                  }}
                  startIcon={item?.icon}
                  buttonText={item?.label}
                  onClick={item?.onSocialmediaLogin}
                  socialmediaTextStyle={item?.style}/>
              );
            })}
          </>
        );
      case 'emailWithPasswordSignup':
        return (
          <>
            <Box sx={{ ...signUp_style.nameSx, ...sectionTwo?.cardData?.emailWithPassword?.nameStyle }}>
              <Box>
                <InputField
                  fullWidth
                  size="small"
                  value={firstName}
                  label={sectionTwo?.cardData?.emailWithPassword?.firstName?.label}
                  labelStyle={sectionTwo?.cardData?.emailWithPassword?.firstName?.labelStyle}
                  error={errorName}
                  errorMessage={errorNameMsg}
                  onChange={getFirstName}
                  inputStyle={{ ...signUp_style.textFieldSx, ...sectionTwo?.cardData?.emailWithPassword?.firstName?.FnameFieldStyle }} type={'text'} />
              </Box>
              <Box>
                <InputField
                  fullWidth
                  size="small"
                  value={lastName}
                  label={sectionTwo?.cardData?.emailWithPassword?.lastName?.label}
                  labelStyle={sectionTwo?.cardData?.emailWithPassword?.lastName?.labelStyle}
                  onChange={getLastName}
                  inputStyle={{ ...signUp_style.textFieldSx, ...sectionTwo?.cardData?.emailWithPassword?.lastName?.LnameFieldStyle }} type={'text'} />
              </Box>
            </Box>
            <InputField
              fullWidth
              size="small"
              value={email}
              label={sectionTwo?.cardData?.emailWithPassword?.email?.label}
              labelStyle={sectionTwo?.cardData?.emailWithPassword?.email?.labelStyle}
              error={errorMail}
              errorMessage={errorMsg}
              onChange={getMailValue}
              inputStyle={{ ...signUp_style.textFieldSx, ...sectionTwo?.cardData?.emailWithPassword?.email?.fieldstyle }} type={'text'} />
            <InputField
              fullWidth
              size="small"
              type={passwordvisible ? 'text' : 'password'}
              label={sectionTwo?.cardData?.emailWithPassword?.password?.label}
              labelStyle={sectionTwo?.cardData?.emailWithPassword?.password?.labelStyle}
              error={errorPassword}
              value={password}
              errorMessage={errorPasswordMsg}
              onChange={getPasswordValue}
              inputStyle={{ ...signUp_style.textFieldSx, ...sectionTwo?.cardData?.emailWithPassword?.password?.fieldstyle }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    style={{ cursor: 'pointer' }}
                    onClick={getPassWordVisible}
                    position="end"
                  >
                    {passwordvisible ? (sectionTwo?.cardData?.emailWithPassword?.password?.visbleIcon
                    ) : (sectionTwo?.cardData?.emailWithPassword?.password?.invisibleIcon
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <InputField
              fullWidth
              size="small"
              type={passwordvisibleConfirm ? 'text' : 'password'}
              label={sectionTwo?.cardData?.emailWithPassword?.confirmPassword?.label}
              labelStyle={sectionTwo?.cardData?.emailWithPassword?.confirmPassword?.labelStyle}
              error={errorPasswordConfirm}
              errorMessage={errorPasswordMsgConfirm}
              onChange={getConfirmPasswordValue}
              value={passwordConfirm}
              inputStyle={{ ...signUp_style.textFieldSx, ...sectionTwo?.cardData?.emailWithPassword?.confirmPassword?.fieldstyle }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    style={{ cursor: 'pointer' }}
                    onClick={getPassWordVisibleConfirm}
                    position="end"
                  >
                    {passwordvisibleConfirm ? (sectionTwo?.cardData?.emailWithPassword?.confirmPassword?.visbleIcon
                    ) : (sectionTwo?.cardData?.emailWithPassword?.confirmPassword?.invisibleIcon
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </>
        );
      default:
        return ('please enter valid signup option')
    }
  };
  return (
    <Grid container sx={{ ...signUp_style.parentSx, ...rootStyle }}>
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
                width={sectionOne?.image?.width}
                height={sectionOne?.image?.height}
                imageStyle={sectionOne?.image?.style}
              />
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
          sx={{ ...signUp_style.loginSx, ...sectionTwo?.WraperStyle }}
        >
          <Box
            sx={{ ...signUp_style.cardParentSx, ...sectionTwo?.cardParentStyle }}
          >
            <Card
              title={sectionTwo?.cardData?.title}
              logo={{
                logoWidth: sectionTwo?.cardData?.logo?.logoWidth,
                logoHeight: sectionTwo?.cardData?.logo?.logoHeight,
                logoSrc: sectionTwo?.cardData?.logo?.logoSrc,
                alt: sectionTwo?.cardData?.logo?.alt,
                logoStyle: {
                  ...signUp_style.logoSx,
                  ...sectionTwo?.cardData?.logo?.logoStyle,
                },
              }}
              description={sectionTwo?.cardData?.description}
              children={
                <Box
                  sx={{
                    ...signUp_style.childernSx,
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
                ...signUp_style.cardSx,
                ...sectionTwo?.cardData?.cardStyle,
              }}
              btnStyle={{
                ...signUp_style.loginBtnSx,
                ...sectionTwo?.cardData?.btnStyle,
              }}
              actionText={sectionTwo?.cardData?.signupActionText}
              actionstyle={{
                ...signUp_style.actionSx,
                ...sectionTwo?.cardData?.actionstyle,
              }}
              bottomTextStyle={{
                ...signUp_style.bottomTextSx,
                ...sectionTwo?.cardData?.bottomTextStyle,
              }}
              onActionClick={sectionTwo?.cardData?.onLoginClick}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

SignupScreen.defaultProps = {

  option: 'emailWithPasswordSignup',
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
      signupActionText: "",
      onLoginClick: () => { },
      titleStyle: {},
      btnStyle: {},
      cardStyle: {},
      childrenStyle: {},
      logo: {
        logoSrc: '',
        logoHeight: '',
        logoWidth: '',
        alt: '',
        logoStyle: {},
      },
      bottomTextStyle: {},
      actionstyle: {},
      mobileNumberSignup: {
        labelText: "",
        labelStyle: {},
        mobileFieldstyle: {},
        dropDownStyle: {},
      },
      socialMedia: {
        socialMediaList: [],
      },
      emailWithPassword: {
        nameStyle: {},
        firstName: {
          FnameFieldStyle: {},
          labelStyle: {},
          label: 'First Name',
        },
        lastName: {
          LnameFieldStyle: {},
          labelStyle: {},
          label: 'Last Name',
        },
        email: {
          label: "Email",
          labelStyle: {},
          fieldstyle: {},
        },
        password: {
          label: "Password",
          labelStyle: {},
          fieldstyle: {},
          visbleIcon: <></>,
          invisibleIcon: <></>,
        },
        confirmPassword: {
          label: "Confirm Password",
          labelStyle: {},
          fieldstyle: {},
          visbleIcon: <></>,
          invisibleIcon: <></>,
        },
      },
    },

  },
  onSubmit: () => { },
};

export default SignupScreen;
