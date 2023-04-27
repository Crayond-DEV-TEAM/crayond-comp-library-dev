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
  rootStyle: object;
  cardWraperStyle: object;
}

const SignupScreen: React.FC<SignupScreen> = ({
  option,
  onSubmit,
  cardData,
  backgroundImg,
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
            <Typography sx={signUp_style.labelSx}>Mobile Number</Typography>
            <MobileInput
              handleChange={getMobileNumber}
              rootWapperstyle={signUp_style.textFieldSx}
            />
          </>
        );
      case 'socialMediaSignup':
        return (
          <>
            {socialMedia?.map((item: any) => {
              return (
                <SocialMediaButton
                  rootStyle={signUp_style.socialButtonSx}
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
                <Typography sx={signUp_style.labelSx}>First Name</Typography>
                <InputField
                  fullWidth
                  size="small"
                  error={errorName}
                  helperText={errorNameMsg}
                  onChange={getFirstName}
                  textFieldStyle={signUp_style.textFieldSx}
                />
              </Box>
              <Box>
                <Typography sx={signUp_style.labelSx}>Last Name</Typography>
                <InputField
                  fullWidth
                  size="small"
                  onChange={getLastName}
                  textFieldStyle={signUp_style.textFieldSx}
                />
              </Box>
            </Box>
            <Typography sx={signUp_style.labelSx}>Email</Typography>
            <InputField
              fullWidth
              size="small"
              error={errorMail}
              helperText={errorMsg}
              onChange={getMailValue}
              textFieldStyle={signUp_style.textFieldSx}
            />
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
      {backgroundImg && (
        <Hidden smDown>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            sx={backgroundImg?.backgroundWrapStyle}
          >
            <Image
              src={backgroundImg?.imgSrc}
              width={'100%'}
              height={'100%'}
              imageStyle={backgroundImg?.bgImageStyle}
            />
          </Grid>
        </Hidden>
      )}
      <Grid
        item
        xs={12}
        sm={backgroundImg ? 8 : 12}
        md={backgroundImg ? 9 : 12}
        sx={{ ...signUp_style.loginSx, ...cardWraperStyle }}
      >
        <Box sx={signUp_style.cardParentSx}>
          <Card
            title={cardData?.title}
            logo={cardData?.logo}
            description={cardData?.description}
            children={
              <Box sx={signUp_style.childernSx}>
                {getoptionretrieve(option)}
              </Box>
            }
            bottomText={cardData?.bottomText}
            button={cardData?.button}
            btnClick={getThrowErrorMsg}
            buttonText={cardData?.buttonText}
            cardStyle={{ ...signUp_style.cardSx, ...cardData?.cardStyle }}
            btnStyle={{ ...signUp_style.loginBtnSx, ...cardData?.btnStyle }}
            actionText={cardData?.loginActionText}
            actionstyle={{ ...signUp_style.actionSx, ...cardData?.actionstyle }}
            bottomTextStyle={signUp_style.bottomTextSx}
            onActionClick={cardData?.onLoginClick}
            imgStyle={signUp_style.logoSx}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignupScreen;
