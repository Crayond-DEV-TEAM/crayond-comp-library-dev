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
  pageNotFoundIconComponent: (
    !<InfographicIcon/>
  ),
  pageNotFoundIconUrl:"data:image/png;base64,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",
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
