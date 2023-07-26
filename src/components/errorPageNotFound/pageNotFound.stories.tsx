import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageNotFound from './pageNotFound';
import InfographicIcon from '../../assets/errorWithInfographic';

export default {
  title: 'components/pageNotFound',
  component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = (args) => (
  <PageNotFound {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  pageNotFoundIconComponent: "",
  pageNotFoundIconUrl:"" ,
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
  urlImgHeight:300,
  urlImgWidth:300,
  urlImgStyle:{},
  ButtonBlockStyle: {},
  messageTextStyle: {},
  rootStyle: {},
  iconBlockStyle: {},
  
};
