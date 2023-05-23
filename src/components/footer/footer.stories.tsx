import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './footer';
import PlayStore from '../../assets/plastore';
import FaceBook from '../../assets/faceBook';
import AppStore from '../..//assets/appStore';
import Instagram from '../..//assets/insta';
import LinkedIn from '../..//assets/linkedIn';
import { Performance } from '../performance';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  footerData: [
    {
      order: 1,
      heading: {
        title: 'Links',
        styles: '',
        onClick: () => {},
      },
      subTitle: [
        {
          subValue: 'Home',
          icon: '💔',
          styles: '',
          onClick: () => {},
          link: '',
          nested:{
            heading: {
              title: 'Henry',
              styles: '',
              onClick: () => {},
            },
            subTitle:[
              {subValue: 'SUbText',icon: '💔',styles: '',onClick: () => {},link: ''},
              {subValue: 'HElo',icon: '💔',styles: '',onClick: () => {},link: ''},
              {subValue: 'Create',icon: '💔',styles: '',onClick: () => {},link: ''}
            ]}
        },
        {
          subValue: 'About us',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
        },
        {
          subValue: 'Solution',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
        },
        {
          subValue: 'Modules',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Products',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Pricing',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'FAQ',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Blogs',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Resource',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Conduct us',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
      ],
    },
    {
      order: 2,
      heading: {
        title: 'Solution',
        styles: '',
      },
      subTitle: [
        {
          subValue: 'Home',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'About us',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Solution',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Modules',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Products',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Pricing',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'FAQ',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
      ],
    },
    {
      order: 3,
      heading: {
        title: 'Apps',
        styles: '',
      },
      subTitle: [
        {
          subValue: 'Home',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: { title: '', styles: '' },
        },
        {
          subValue: 'About us',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Solution',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Modules',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Products',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Pricing',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'FAQ',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
      ],
    },
    {
      order: 4,
      heading: {
        title: 'Property Automate & Partners',
        styles: '',
      },
      subTitle: [
        {
          subValue: 'Dynamic Netsoft RealEstatePro',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Listings.GOTO',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Residential.GOTO',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'MCommercial.GOTO',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Marketplace.GOTO',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'Pricing',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
        {
          subValue: 'FAQ',
          icon: '',
          styles: '',
          onClick: () => {},
          link: '',
          heading: {
            title: 'Links',
            styles: '',
            onClick: () => {},
          },
        },
      ],
    },
  ],

  footerLogo: [
    {
      companyLogo: {
        label: 'Crayond',
        logo: <Performance/>,
      },
      subscribes: [
        { icon: <PlayStore /> },
        { icon: <FaceBook /> },
        { icon: <AppStore /> },
        { icon: <AppStore /> },
        { icon: <LinkedIn /> },
        { icon: <Instagram /> },
        { icon: <LinkedIn /> },
        { icon: <Instagram /> },
      ],
      termsOfPolicy: {
        terms: 'Terms of Service',
        policy: 'Privacy Policy',
      },
      copyRight: {
        company: 'Crayond',
        reservedYear: 'All rights reserved',
      },
    },
  ],
};
