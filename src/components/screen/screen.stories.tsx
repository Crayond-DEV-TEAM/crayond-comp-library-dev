import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from '../../assets/deleteIcon';
import EditIcon from '../../assets/editIcon';

import { Screen } from './index';
import NotificationIcon from '../../assets/notificationIcon';

export default {
  title: 'components/Screen',
  component: Screen,
} as ComponentMeta<typeof Screen>;

const Template: ComponentStory<typeof Screen> = (args) => <Screen {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  containerStyle: {},
  headerStyle: {},
  bodyStyle: {},
  footerStyle: {},
  headerComponent: <>Header</>,
  bodyComponent: <>Body</>,
  footerComponent: <>Footer</>, 
};
