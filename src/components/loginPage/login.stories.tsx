import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginScreen from './login';
import CompanyLogo from '../../assets/companyLogo.png';
import { FcGoogle } from 'react-icons/fc';

export default {
  title: 'CommonTable/Login',
  component: LoginScreen,
} as ComponentMeta<typeof LoginScreen>;


const Template: ComponentStory<typeof LoginScreen> = (args) => <LoginScreen {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  cardData: {
    description: "One positive feedback per day or week can make us grow exponentially",
    title: 'Welcome',
    logo: CompanyLogo,
    bottomText: "Don't have an account?",
    buttonText: "Send OTP",
    loginActionText: 'Sign in',
    loginOption: 'mobileNumberLogin',
    onSignUpClick: () => {
      console.log('signup')
    },
    onForgotClick: () => {
      console.log('forgot')
    },

  },
  backgroundImg:
  {
    imgSrc: CompanyLogo,
    backgroundWrapStyle: {},
    bgImageStyle: { backgroundSize: 'cover' },
  }
  ,
  onSubmit: () => {
    alert('onlogin')
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  option: 'socialMediaLogin',
  cardData: {
    description: "One positive feedback per day or week can make us grow exponentially",
    title: 'Welcome',
    logo: CompanyLogo,
    bottomText: "Don't have an account?",
    buttonText: "Log in",
    loginActionText: 'Sign in',
    socialMediaDetails: [
      {
        label: "SignUp with google",
        icon: <FcGoogle />,
        onSocialmediaLogin: () => {
          console.log('SignUp with google')
        },
        style: {
          textAlign: 'center',
          width: '100%',
          color: '#3B3B3B',
          fontSize: '14px',
          fontWeight: 'Medium',
        },
      },
      {
        label: "Sign up with Outlook",
        icon: <FcGoogle />,
        onSocialmediaLogin: () => {
          console.log('SignUp with Outlook')
        },
        style: {
          textAlign: 'center',
          width: '100%',
          color: '#3B3B3B',
          fontSize: '14px',
          fontWeight: 'Medium',
        },
      },
    ],
    onSocialmediaSignUp: () => {
      console.log('connect')
    },
    onForgotClick: () => {
      console.log('forgot')
    },
  },
  backgroundImg: [
    {
      imgSrc: CompanyLogo,
    }
  ],
  rootStyle: {},
  cardWraperStyle: {},


};
