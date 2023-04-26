import { ComponentMeta, ComponentStory } from '@storybook/react';
import CompanyLogo from '../../assets/companyLogo.png';
import BasicCard from './card';

export default {
  title: 'components  /BasicCard',
  component: BasicCard,
} as ComponentMeta<typeof BasicCard>;


const Template: ComponentStory<typeof BasicCard> = (args) => (
  <BasicCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "outlined",
  children: "",
  onActionClick: () => {},
  btnClick: () => { },
  title: 'Welcome!',
  logoWidth: 147,
  logoHeight: 29,
  alt: 'logo',
  buttonText: 'login',
  description: 'One positive feedback per day or week can make us grow exponentially',
  logo: CompanyLogo,
  bottomText: ' Dont have an account?',
  actionText: 'Sign in',
  actionstyle: {
    color: '#665CD7',
    fontWeight: 600,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  cardStyle:{},
  titleStyle:{},
  btnStyle:{},
  bottomTextStyle:{},
  imgStyle:{marginBottom:'20px'}
};

