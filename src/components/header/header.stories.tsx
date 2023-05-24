import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './index';

export default {
  title: 'components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerComponentList:[
    {
      order: 1,
      component:<>Logo</>,
      style: {},
      mobileScreenActive: true,
    },
    {
      order: 2,
      component: <>Profile</>,
      style: {},
    },
    {
      order: 3,
      component: <>Menu</>,
      style: {},
    },
  ],
  subHeaderComponentList:[
    {
      order: 1,
      component:<>Logo</>,
      style: {},
      mobileScreenActive: true,
    },
    {
      order: 3,
      component: <>Profile</>,
      style: {},
    },
    {
      order: 2,
      component: <>Menu</>,
      style: {},
    },
  ],
  appBarProps:{},
  appBarStyle:{},
  toolBarStyle:{},
  toolBarProps:{},
  mobileMenuIconStyle:{},
  subHeaderStyle:{},
};
