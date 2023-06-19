import { ComponentMeta, ComponentStory } from '@storybook/react';
import MobileNavbar from './index';
import DownloadIcon from '../../assets/downloadIcon';
import SearchIcon from '../../assets/searchIcon';
import DeleteIcon from '../../assets/deleteIcon';

export default {
  title: 'components/MobileNavbar',
  component: MobileNavbar,
} as ComponentMeta<typeof MobileNavbar>;


const Template: ComponentStory<typeof MobileNavbar> = (args) => (
  <MobileNavbar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant:'withLabel',
  items: [
    { icon: <DownloadIcon />, label: 'Home', url: '/Home' },
    { icon: <SearchIcon />, label: 'Clinical', url: '/Clinical' },
    { icon: <DeleteIcon />, label: 'Doctor', url: '/Doctor' },
    { icon: <DeleteIcon />, label: 'Settings', url: '/Settings' },
    { icon: <DeleteIcon />, label: 'Profile', url: '/Profile' },
  ],
  onClick: (item: any) => {
    console.log(item?.url);
  },
  iconActiveColor: '#665CD7',
  labelInActiveColor: '#666666',
  labelActiveColor: '#665CD7',
};




