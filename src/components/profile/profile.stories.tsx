import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from '../../assets/deleteIcon';
import EditIcon from '../../assets/editIcon';

import { Profile } from './index';
import NotificationIcon from '../../assets/notificationIcon';

export default {
  title: 'CommonTable/Action',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title:"My Profile",
};
