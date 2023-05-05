import { SxProps, Theme } from '@mui/material';

export interface LoginScreenProps {
  onSubmit: (details: object) => void;
  option: 'emailWithPasswordLogin' | 'socialMediaLogin' | 'mobileNumberLogin';
  rootStyle?: object;
  sectionOne: {
    backgroundWrapStyle?: SxProps<Theme> | undefined;
    breakpoints: {
      xs: number;
      md: number;
      sm: number;
      lg: number;
    };
    image?: {
      style?: object | undefined;
      src: any;
      height: string;
      width: string;
    };
    component?: React.ReactNode;
  };
  sectionTwo: {
    breakpoints: {
      xs: number;
      md: number;
      sm: number;
      lg: number;
    };
    WraperStyle?: object;
    cardParentStyle?: object;
    cardData: {
      logo?: {
        logoStyle?: any;
        alt?: any;
        logoSrc: string;
        logoHeight: string;
        logoWidth: string;
      };
      title?: string | any;
      description?: string | any;
      bottomText?: string;
      buttonText?: string;
      loginActionText?: string;
      onSignUpClick?: () => void;
      titleStyle?: object;
      btnStyle?: object;
      cardStyle?: object;
      childrenStyle?: object;
      logoStyle?: object;
      bottomTextStyle?: object;
      actionstyle?: object;
      mobileNumberLogin?: {
        labelText?: string;
        labelStyle?: object;
        mobileFieldstyle?: object | any;
        dropDownStyle?: object;
      };
      socialMedia?: {
        workMailInput?: {
          label?: string;
          labelStyle?: object;
          forgotStyle?: object;
          onForgotClick?: () => void;
        };
        divider?: {
          dividerStyle?: object;
          dividerText?: string;
          dividerTextStyle?: object;
        };
        socialMediaList?: {
          label?: string;
          icon?: JSX.Element;
          onSocialmediaLogin?: () => void;
          style?: object;
          SocialMediaButtonStyle?: object;
        }[];
      };
      emailWithPassword?: {
        email?: {
          label?: string;
          labelStyle?: object;
          forgotStyle?: object;
          fieldstyle?: object;
        };
        password?: {
          label?: string;
          labelStyle?: object;
          forgotStyle?: object;
          fieldstyle?: object;
          visbleIcon?: JSX.Element;
          invisibleIcon?: JSX.Element;
        };
        onForgotClick?: () => void;
        forgotStyle: object;
      };
    };
  };
}
