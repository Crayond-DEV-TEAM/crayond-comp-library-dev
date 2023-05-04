import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
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
import { MobileInput } from '../mobileInput';
import { SocialMediaButton } from '../socialMediaButton';
import { signUp_style } from './style';

type SignupOption =
  | 'emailWithPasswordSignup'
  | 'socialMediaSignup'
  | 'mobileNumberSignup';

export interface SignupScreen {
  onSubmit: (details: object) => void;
  option: SignupOption;
  cardData: any;
  backgroundImg: any;
  rootStyle?: object;
  cardWraperStyle?: object;
  sectionOne:any;
  sectionTwo:any;
}

const SignupScreen: React.FC<SignupScreen> = ({
  option,
  onSubmit,
  cardData,
  sectionTwo,
  sectionOne,
  rootStyle,
  cardWraperStyle,
}) => {
  const type = option;
  const socialMedia = cardData.socialMediaDetails;
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

  const getMailValue = (e: any) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const value = e.target.value;
    if (regex.test(value)) {
      setErrorMail(false);
      setEmail(value);
      setErrorMsg('');
    } else {
      setErrorMsg('Please enter your registered email');
      setErrorMail(true);
    }
  };

  const getPasswordValue = (e: any) => {
    const value = e.target.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (regex.test(value)) {
      setErrorPassword(false);
      setPassword(value);
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
        if (mobileNumber !== '') {
          const userDetail = {
            mobile_number: mobileNumber,
            countryCode: countryCode,
            type: type,
          };
          onSubmit(userDetail);
        }
    }
  };

  const getMobileNumber = (value: any) => {
    setMobileNumber(value.mobile);
    setCountryCode(value.mobile_code);
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
              ...sectionTwo?.cardData?.mobileNumberLogin?.labelStyle,
            }}
          >
            {sectionTwo?.cardData?.mobileNumberLogin?.labelText}
          </Typography>
          <MobileInput
            handleChange={getMobileNumber}
            rootWapperstyle={{
              ...signUp_style.textFieldSx,
              ...sectionTwo?.cardData?.mobileNumberLogin?.mobileFieldstyle,
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
                  socialmediaTextStyle={item?.style}
                />
              );
            })}
          </>
        );
      default:
        return (
          <>
            <Box sx={signUp_style.nameSx}>
              <Box>
                <InputField
                  fullWidth
                  size="small"
                  label={sectionTwo?.cardData?.emailWithPassword?.firstName?.label}
                  error={errorName}
                  helperText={errorNameMsg}
                  onChange={getFirstName}
                  textFieldStyle={{...signUp_style.textFieldSx, ...sectionTwo?.cardData?.emailWithPassword?.email?.fieldstyle }} type={'text'}/>
              </Box>
              <Box>
                <Typography sx={signUp_style.labelSx}>Last Name</Typography>
                <InputField
                  fullWidth
                  size="small"
                  onChange={getLastName}
                  textFieldStyle={signUp_style.textFieldSx} type={'text'}/>
              </Box>
            </Box>
            <Typography sx={signUp_style.labelSx}>Email</Typography>
            <InputField
              fullWidth
              size="small"
              label={sectionTwo?.cardData?.emailWithPassword?.email?.label}
              error={errorMail}
              helperText={errorMsg}
              onChange={getMailValue}
              textFieldStyle={signUp_style.textFieldSx} type={'password'}            />
            <Typography sx={signUp_style.labelSx}>Password</Typography>
            <InputField
              fullWidth
              size="small"
              type={passwordvisible ? 'text' : 'password'}
              error={errorPassword}
              helperText={errorPasswordMsg}
              onChange={getPasswordValue}
              textFieldStyle={signUp_style.textFieldSx}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    style={{ cursor: 'pointer' }}
                    onClick={getPassWordVisible}
                    position="end"
                  >
                    {passwordvisible ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Typography sx={signUp_style.labelSx}>Confirm Password</Typography>
            <InputField
              fullWidth
              size="small"
              type={passwordvisibleConfirm ? 'text' : 'password'}
              error={errorPasswordConfirm}
              helperText={errorPasswordMsgConfirm}
              onChange={getConfirmPasswordValue}
              textFieldStyle={signUp_style.textFieldSx}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    style={{ cursor: 'pointer' }}
                    onClick={getPassWordVisibleConfirm}
                    position="end"
                  >
                    {passwordvisibleConfirm ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </>
        );
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
              actionText={sectionTwo?.cardData?.loginActionText}
              actionstyle={{
                ...signUp_style.actionSx,
                ...sectionTwo?.cardData?.actionstyle,
              }}
              bottomTextStyle={{
                ...signUp_style.bottomTextSx,
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

export default SignupScreen;
