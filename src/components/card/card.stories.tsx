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
  title: 'Welcome!',
  description: 'One positive feedback per day or week can make us grow exponentially',
  buttonText: 'Log in',
  companyLogo: CompanyLogo,
  bottomText: ' Dont have an account?',
  actionText: 'Sign in',
  button:true
};

