import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './index';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Leads from '@mui/icons-material/Leaderboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

export default {
  title: 'CommonTable/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

const menuData = [
  {
    primaryText: 'Dashboard',
    // secondaryText: '',
    icon: <HomeWorkIcon />,
    onClick: () => {
      console.log('clk');
    },
    subMenu: [
      {
        primaryText: 'Super Admin',
        // secondaryText: 'info',
        icon: <DashboardIcon />,
        subMenu: [
          {
            primaryText: 'Admin',
            // secondaryText: 'info',
            icon: <Leads />,
            onClick: () => {
              console.log('clk');
            },
            subMenu: [
              {
                primaryText: 'User',
                // secondaryText: 'info',
                icon: <Leads />,
                onClick: () => {
                  console.log('clk');
                },
                subMenu: [
                  {
                    primaryText: 'Public',
                    // secondaryText: 'info',
                    icon: <Leads />,
                    onClick: () => {
                      console.log('clk');
                    },
                  },
                ],
              },
            ],
          },
        ],
        onClick: () => {
          console.log('clk');
        },
      },
    ],
  },
  {
    primaryText: 'Contact',
    // secondaryText: 'info',
    icon: <Leads />,
    onClick: () => {
      console.log('clk');
    },
    subMenu: [
      {
        primaryText: 'Mobile',
        secondaryText: 'India only',
        icon: <Leads />,
        onClick: () => {
          console.log('clk');
        },

        subMenu: [
          {
            primaryText: 'Primary',
            secondaryText: '9875346587',
            icon: <Leads />,
            onClick: () => {
              console.log('clk');
            },
          },
        ],
      },
    ],
  },
  {
    primaryText: 'Docs',
    icon: <HomeWorkIcon />,
    onClick: () => {
      console.log('clk');
    },
  },
  {
    primaryText: 'About',
    icon: <HomeWorkIcon />,
    onClick: () => {
      console.log('clk');
    },
  },
];
const bottomMenuData = [
  {
    primaryText: 'Hariharan',
    secondaryText: 'Developer',
    icon: (
      <img
        src="/sample.jpg"
        style={{ width: '42px', height: '42px', borderRadius: '50%' }}
        alt="udc"
      />
    ),
    onClick: () => {
      console.log('clk');
    },
    listIconStyle: { padding: '0' },
  },
];

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
  openSideBar: true,
  logoDetails: { logoImage: '/vite.svg', version: 'V 1.0.1' },
  drawerWidth: 271,
  menuData: menuData,
  bottomMenuData: bottomMenuData,
  rootStyle: {},
  listStyle: {},
  listItemStyle: {},
  listButtonStyle: {},
  listIconStyle: {},
  listTextStyle: {},
};
Secondary.args = {
  openSideBar: false,
  logoDetails: { logoImage: '/vite.svg', version: 'V 1.0.1' },
  drawerWidth: 271,
  menuData: menuData,
  bottomMenuData: bottomMenuData,
  rootStyle: {},
  listStyle: {},
  listItemStyle: {},
  listButtonStyle: {},
  listIconStyle: {},
  listTextStyle: {},
};
