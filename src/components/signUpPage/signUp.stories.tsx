import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginScreen from './signUp';
import CompanyLogo from '../../assets/companyLogo.png';
import { FcGoogle } from 'react-icons/fc';

export default {
  title: 'CommonTable/Signup',
  component: LoginScreen,
} as ComponentMeta<typeof LoginScreen>;


const Template: ComponentStory<typeof LoginScreen> = (args) => <LoginScreen {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  option: 'socialMediaSignup',
  cardData: {
    description: "One positive feedback per day or week can make us grow exponentially",
    title: 'Welcome!',
    logo: CompanyLogo,
    bottomText: "You have an account?",
    loginActionText: 'Login',
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
      {
        label: "Sign up with Email",
        icon: <FcGoogle />,
        onSocialmediaLogin: () => {
          console.log('SignUp with Email')
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
    onLoginClick: () => {
      console.log('login')
    },

    actionstyle: {},
    btnStyle: {},
    cardStyle: {},
  },
  backgroundImg:
  {
    imgSrc: CompanyLogo,
    backgroundWrapStyle: {},
    bgImageStyle: { backgroundSize: 'cover' },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  option: 'mobileNumberSignup',
  cardData: {
    description: "One positive feedback per day or week can make us grow exponentially",
    title: 'Welcome!',
    logo: CompanyLogo,
    bottomText: "You have an account?",
    buttonText: "Send OTP",
    loginActionText: 'login',
    actionstyle: {},
    btnStyle: {},
    cardStyle: {},
  },
  backgroundImg:
  {
    imgSrc: CompanyLogo,
    backgroundWrapStyle: {},
    bgImageStyle: { backgroundSize: 'cover' },
  }
  ,
  rootStyle: {},
  cardWraperStyle: {},

};

export const defalut = Template.bind({});
defalut.args = {
  option: 'emailWithPasswordSignup',
  cardData: {
    description: "One positive feedback per day or week can make us grow exponentially",
    title: 'Welcome!',
    logo: CompanyLogo,
    bottomText: "You have an account?",
    buttonText: "Sign Up",
    loginActionText: 'login',
    actionstyle: {},
    btnStyle: {},
    cardStyle: {},
  },
  backgroundImg:
  {
    imgSrc: CompanyLogo,  
    backgroundWrapStyle: {},
    bgImageStyle: { backgroundSize: 'cover' },
  }
  ,
  rootStyle: {},
  cardWraperStyle: {},

};