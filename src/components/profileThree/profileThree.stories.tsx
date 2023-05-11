import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from '../../assets/deleteIcon';
import EditIcon from '../../assets/editIcon';

import { ProfileThree } from './index';
import NotificationIcon from '../../assets/notificationIcon';

export default {
  title: 'CommonTable/Action',
  component: ProfileThree,
} as ComponentMeta<typeof ProfileThree>;

const Template: ComponentStory<typeof ProfileThree> = (args) => <ProfileThree {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  titleOptions: {
  title:"My ProfileThree",
  }
};
