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
  cardData: [{
    loginCardDescription: "One positive feedback per day or week can make us grow exponentially",
    loginTitle: 'Welcome',
    CompanyLogo: CompanyLogo,
    loginCardBottomText: "Don't have an account?",
    button: true,
    loginButtonText: "Send OTP",
    loginActionText: 'Sign in',
    loginOption: 'mobile',
    onActionClick: () => {
      alert('signIn')
    },
    onForgotClick: () => {
      alert('forgot')
    },

  }],
  bannerImgData: [
    {
      imgSrc: CompanyLogo,
      loginImgHeight: '100%',
      loginImgWidth: '100%',

    }
  ],
  onLogin:()=>{
    alert('onlogin')
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  cardData: [{
    loginCardDescription: "One positive feedback per day or week can make us grow exponentially",
    loginTitle: 'Welcome',
    CompanyLogo: CompanyLogo,
    loginCardBottomText: "Don't have an account?",
    button: true,
    loginButtonText: "Log in",
    loginActionText: 'Sign in',
    loginOption: 'socialmedia',
    socialMediaTextFontSize: '14px',
    socialMediaIconTwo: <FcGoogle />,
    socialMediaIconOne: <FcGoogle />,
    socialMediaButtonText: "SignUp with google",
    socialMediaButtonTextTwo: "Sign up with Outlook",
    onSocialmediaSignUp: () => {
      alert('connect')
    },
    onForgotClick: () => {
      alert('forgot')
    },
  }],
  bannerImgData: [
    {
      imgSrc: CompanyLogo,
      loginImgHeight: '100%',
      loginImgWidth: '100%'
    }
  ]

};
