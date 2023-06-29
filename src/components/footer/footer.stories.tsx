import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppStore from '../..//assets/appStore';
import Instagram from '../..//assets/insta';
import LinkedIn from '../..//assets/linkedIn';
import PlayStore from '../../assets/plastore';
import Footer from './footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.argTypes = {
  componentRootStyle: {
    description: 'object',
  },
  logoContainerStyle: {
    description: 'object',
  },
  subTitleStyle: {
    description: 'object',
  },
  headingStyle: {
    description: 'object',
  },
  companyNameStyles: {
    description: 'object',
  },
  companyLogoBlockStyle: {
    description: 'object',
  },
  bottomTexStyle: {
    description: 'object',
  },
  subscriptionBlockStyle: {
    description: 'object',
  },
  headingTitleSize: {
    description: 'number',
  },
  
  subTitleSize: {
    description: 'number',
  },
  companyNameFontSize: {
    description: 'number',
  },
  bottomFontSize: {
    description: 'number',
  },
  bottomPolicyFontSize: {
    description: 'number',
  },
  footerData: {
    description: 'array',
  },
  footerLogo: {
    description: 'array',
  },
  nestedSubTitleIconAlign: {
    description: "'start'|'end'|'center'",
  },
  nestedTitleIconAlign: {
    description: ' "left" | "right"',
  },
  subTitleIconAlign: {
    description: ' "left" | "right"',
  },
  headingIconAlign: {
    description: ' "left" | "right"',
  },
  nestedTitleTextAlign: {
    description: "'flex-start' | 'flex-end' | 'center'",
  },
  subTitleTextAlign: {
    description: "'flex-start' | 'flex-end' | 'center'",
  },
  headingTextAlign: {
    description: "'flex-start' | 'flex-end' | 'center'",
  },


};

Primary.args = {
  componentRootStyle: {},
  logoContainerStyle: {},

  headingTitleColor: '#404E61',
  headingTitleSize: 15,
  headingStyle: {},

  nestedSubTitleIconAlign: 'start',
  nestedTitleIconAlign: 'left',
  nestedTitleTextAlign: 'flex-end',

  subTitleTextAlign: 'flex-end',
  subTitleIconAlign: 'left',

  headingTextAlign: 'flex-end',
  headingIconAlign: 'left',

  subTitleSize: 16,
  subTitleColor: '#6E7882',
  subTitleStyle: {},

  companyNameFontColor: '#98A0AC',
  companyNameFontSize: 12,
  companyNameStyles: {},
  companyLogoBlockStyle: {},

  bottomTextColor: '#98A0AC',
  bottomFontSize: 12,
  bottomTextBlockStyle: {},
  bottomTexStyle: {},

  bottomPolicyTextColor: '#98A0AC',
  bottomPolicyFontSize: 12,
  reservedYearStyles: {},
  hoverHeadingStyles: {},
  subscriptionBlockStyle: {},
  footerData: [
    {
      order: 1,
      heading: {
        id: 1,
        title: 'Footer Step  ',
        icon: '',
        iconDirection: 'right',
        styles: {},
        onClick: () => {},
      },
      component: '',
      subTitle: [
        {
          subValue: 'About us',
          icon: '',
          iconDirection: 'right',
          styles: {},
          onClick: () => {},
          link: '',
          nested: {
            heading: {
              id: 2,
              title: '',
              styles: {},
              onClick: () => {},
            },
            subTitle: [
              {
                subValue: 'Home',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'About Us',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Solutions',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Modules',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Product',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Pricing',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'FAQ',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Blogs',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Resource',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Conduct us',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'SUbText',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
            ],
          },
        },
      ],
    },
    {
      order: 2,
      heading: {
        id: 1,
        title: 'Footer Step 2',
        icon: '',
        iconDirection: 'right',
        styles: {},
        onClick: () => {},
      },
      component: '',
      subTitle: [
        {
          subValue: 'About us',
          icon: '',
          iconDirection: 'right',
          styles: {},
          onClick: () => {},
          link: '',
          nested: {
            heading: {
              id: 2,
              title: '',
              styles: {},
              onClick: () => {},
            },
            subTitle: [
              {
                subValue: 'Solutions',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Modules',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Product',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Pricing',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'FAQ',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Blogs',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Resource',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Conduct us',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'SUbText',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
            ],
          },
        },
      ],
    },
    {
      order: 3,
      heading: {
        id: 1,
        title: 'Footer Step 3',
        icon: '',
        iconDirection: 'right',
        styles: {},
        onClick: () => {},
      },
      component: '',
      subTitle: [
        {
          subValue: 'About us',
          icon: '',
          iconDirection: 'right',
          styles: {},
          onClick: () => {},
          link: '',
          nested: {
            heading: {
              id: 2,
              title: '',
              styles: {},
              onClick: () => {},
            },
            subTitle: [
              {
                subValue: 'Solutions',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Modules',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Product',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Pricing',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'FAQ',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Blogs',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Resource',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Conduct us',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'SUbText',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
            ],
          },
        },
      ],
    },
    {
      order: 4,
      heading: {
        id: 1,
        title: 'Footer Step 4',
        icon: '',
        iconDirection: 'right',
        styles: {},
        onClick: () => {},
      },
      component: '',
      subTitle: [
        {
          subValue: 'About us',
          icon: '',
          iconDirection: 'right',
          styles: {},
          onClick: () => {},
          link: '',
          nested: {
            heading: {
              id: 2,
              title: '',
              styles: {},
              onClick: () => {},
            },
            subTitle: [
              {
                subValue: 'Solutions',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Modules',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Product',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Pricing',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'FAQ',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Blogs',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Resource',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'Conduct us',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
              {
                subValue: 'SUbText',
                icon: '',
                iconDirection: 'right',
                styles: {},
                onClick: () => {},
                link: 'https://cssbattle.dev/play/1',
              },
            ],
          },
        },
      ],
    },
  ],

  footerLogo: [
    {
      companyLogo: {
        label: 'Crayond',
        logo: '⚜',
      },
      subscribes: [
        { icon: <PlayStore /> },
        { icon: <AppStore /> },
        { icon: <AppStore /> },
        { icon: <LinkedIn /> },
        { icon: <Instagram /> },
        { icon: <LinkedIn /> },
        { icon: <Instagram /> },
      ],
      termsOfPolicy: [
        { label: 'Terms of Service' },
        { label: 'Privacy Policy' },
      ],
      copyRight: [
        { label: 'Crayond ©' },
        { label: 'All s reserved' },
        { label: 'creating Copy' },
      ],
    },
  ],
};
