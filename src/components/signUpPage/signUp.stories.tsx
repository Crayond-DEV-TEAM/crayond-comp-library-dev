import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginScreen from './signUp';
import CompanyLogo from '../../assets/companyLogo.png';
import { FcGoogle } from 'react-icons/fc';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default {
  title: 'CommonTable/Signup',
  component: LoginScreen,
} as ComponentMeta<typeof LoginScreen>;


const Template: ComponentStory<typeof LoginScreen> = (args) => <LoginScreen {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  option: 'emailWithPasswordSignup',
  sectionOne: {
    breakpoints: { xs: 12, md: 3, sm: 4, lg: 3 },
    image: { src: CompanyLogo, height: '100%', width: '100%' },
    backgroundWrapStyle:{},
    // component:<></>
  },
  sectionTwo:{
    breakpoints: { xs: 12, md: 9, sm: 8, lg: 9 },
    WraperStyle:{},
    cardParentStyle:{},
    cardData:{
      title:'Welcome!',
      description:'One positive feedback per day or week can make us grow exponentially',
      logo:{
        logoSrc: CompanyLogo, logoHeight: '29px', logoWidth: '147px',
        alt:'logo',
        logoStyle:{},
      },
      childrenStyle:{},
      mobileNumberSignup:{
        labelText:'',
        labelStyle:{},
        mobileFieldstyle:{},
        dropDownStyle:{}
      },
      socialMedia:{
        socialMediaList:[
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
          {
            label: 'Sign up with Email',
            icon: <FcGoogle />,
            onSocialmediaLogin: () => {
              console.log('Sign up with Email');
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
      emailWithPassword:{
        nameStyle:{},
        firstName:{
          FnameFieldStyle:{},
          labelStyle:{},
          label:'First Name'
        },
        lastName:{
          LnameFieldStyle:{},
          labelStyle:{},
          label:'Last Name'
        },        
        email:{
          fieldstyle:{},
          labelStyle:{},
          label:'Email'
        },
        password:{
          label:'Password',
          labelStyle:{},
          fieldstyle:{},
          visbleIcon: <VisibilityOutlinedIcon />,
          invisibleIcon: <VisibilityOffOutlinedIcon />,
        },
        confirmPassword:{
          label:'Confirm Password',
          labelStyle:{},
          fieldstyle:{},
          visbleIcon: <VisibilityOutlinedIcon />,
          invisibleIcon: <VisibilityOffOutlinedIcon />,
        }
      },
      bottomText:'You have an account?',
      buttonText:'Sign Up',
      titleStyle:{},
      cardStyle:{},
      btnStyle:{},
      signupActionText:'Login',
      actionstyle:{},
      bottomTextStyle:{},
      onLoginClick: () => {
        console.log('login');
      },
    },
    
  },
  onSubmit:(detail: object) => {
    console.log(detail);
  },
};



