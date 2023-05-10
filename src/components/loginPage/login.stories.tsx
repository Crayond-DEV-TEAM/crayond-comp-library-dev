import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginScreen from './login';
import CompanyLogo from '../../assets/companyLogo.png';
import { FcGoogle } from 'react-icons/fc';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { BasicButtons } from '../button';

export default {
  title: 'CommonTable/Login',
  component: LoginScreen,
} as ComponentMeta<typeof LoginScreen>;

const Template: ComponentStory<typeof LoginScreen> = (args) => (
  <LoginScreen {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  option: 'socialMediaLogin',
  sectionOne: {
    breakpoints: { xs: 12, md: 3, sm: 4, lg: 3 },
    image: { src: CompanyLogo, height: '100%', width: '100%' }, 
  },
  sectionTwo: {
    breakpoints: { xs: 12, md: 9, sm: 8, lg: 9 },
    WraperStyle: {},
    cardParentStyle: {},
    cardData: {
      logo: { logoSrc: CompanyLogo, logoHeight: '29px', logoWidth: '147px' },
      title: 'Welcome',
      description:
        'One positive feedback per day or week can make us grow exponentially',
      bottomText: "Don't have an account?",
      buttonText: 'login',
      loginActionText: 'Sign in',
      onSignUpClick: () => {
        console.log('signup');
      },
      titleStyle: {},
      btnStyle: {},
      cardStyle: {},
      childrenStyle: {},
      logoStyle: { width: '10px', height: '10px' },
      bottomTextStyle: {},
      actionstyle: {},

      mobileNumberLogin: {
        labelText: 'Mobile Number',
        labelStyle: {},
        mobileFieldstyle: {},
        dropDownStyle:{width:'110px'}
      },
      socialMedia: {
        workMailInput: {
          label: 'Work Email',
          labelStyle: {},
          forgotStyle: {},
          onForgotClick: () => {
            console.log('forgot');
          },
        },
        divider: {
          dividerStyle: {},
          dividerText: 'or',
          dividerTextStyle: {},
        },
        socialMediaList: [
          {
            label: 'SignUp with google',
            icon: <FcGoogle />,
            onSocialmediaLogin: () => {
              console.log('SignUp with google');
            },
            style: {
              textAlign: 'center',
              width: '100%',
              color: '#3B3B3B',
              fontSize: '14px',
              fontWeight: 'Medium',
            },
            SocialMediaButtonStyle: {},
          },
          {
            label: 'Sign up with Outlook',
            icon: <FcGoogle />,
            onSocialmediaLogin: () => {
              console.log('SignUp with Outlook');
            },
            style: {
              textAlign: 'center',
              width: '100%',
              color: '#3B3B3B',
              fontSize: '14px',
              fontWeight: 'Medium',
            },
            SocialMediaButtonStyle: {},
          },
        ],
      },
      emailWithPassword: {
        email: {
          label: 'Email',
          labelStyle: {},
          fieldstyle: {},
        },
        password: {
          label: 'password',
          labelStyle: {},
          fieldstyle: {},
          visbleIcon: <VisibilityOutlinedIcon />,
          invisibleIcon: <VisibilityOffOutlinedIcon />,
        },
        forgotStyle: {},
        onForgotClick: () => {
          console.log('forgot');
        },
      },
    },
  },
};


