import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageNotFound from './pageNotFound';

export default {
  title: 'components/pageNotFound',
  component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = (args) => (
  <PageNotFound {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  pageNotFoundIcon: {
    icon: (
      <img
        src={'../../assets/loginImg.png'}
        alt="icon"
        height={'50%'}
        width={'50%'}
      />
    ),
  },
  goBackButton: {
    label: 'Go back',
    onClick: () => {},
    style: {
      background: '#EFEEFB',
      color: '#665CD7',
      padding: '10px',
      width: '138px',
      textTransform: 'capitalize',
    },
  },
  pageNotFoundText: 'Page not found !!!',
  ButtonBlockStyle: {},
  messageTextStyle: {},
  rootStyle: {},
  iconBlockStyle: {},
};
