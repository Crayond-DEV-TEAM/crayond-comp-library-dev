import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocsIcon from '../../assets/docsIcon';
import contact from '../../assets/contactIcon.png';
import SearchIcon from '../../assets/searchIcon';
import TemplateIcon from '../../assets/template';
import Home from '../../assets/homeIcon.png';
import template from '../../assets/templateIcon.png';
import userAcc from '../../assets/userAcc.png';
import MobileNavbar from './index';

export default {
  title: 'components/MobileNavbar',
  component: MobileNavbar,
} as ComponentMeta<typeof MobileNavbar>;

const Template: ComponentStory<typeof MobileNavbar> = (args) => (
  <MobileNavbar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: 'withLabel',
  items: [
    {
      icon: Home,
      label: 'Home',
      url: '/Home',
      iconSelectedColor: '#665CD7',
      iconUnSelectedColor: '#5C6066',
    },
    {
      icon: template,
      label: 'Clinical',
      url: '/Clinical',
      iconSelectedColor: '#665CD7',
      iconUnSelectedColor: '#5C6066',
    },
    {
      icon: userAcc,
      label: 'Doctor',
      url: '/Doctor',
      iconSelectedColor: '#665CD7',
      iconUnSelectedColor: '#5C6066',
    },
    {
      icon: contact,
      label: 'Settings',
      url: '/Settings',
      iconSelectedColor: '#665CD7',
      iconUnSelectedColor: '#5C6066',
    },
    {
      icon: contact,
      label: 'Settings',
      url: '/Settings',
      iconSelectedColor: '#665CD7',
      iconUnSelectedColor: '#5C6066',
    },
    {
      icon: contact,
      label: 'Settings',
      url: '/Settings',
      iconSelectedColor: '#665CD7',
      iconUnSelectedColor: '#5C6066',
    },
  ],
  onClick: (item: any) => {
    console.log(item?.url);
  },
  iconActiveBgColor: '#EFEEFB',
  labelInActiveColor: '#666666',
  labelActiveColor: '#665CD7',
  rootStyle: { padding: 0.9 },
  listStyle: {},
  iconStyle: {},
  labelStyle: {},
  activeFontWeight: 'bold',
  inActiveFontWeight: 100,
  elevation: 3,
  iconHeightPng: '24px',
  iconWidthPng: '24px',
  isDisableRipple:false
};
