import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from '../../assets/deleteIcon';
import EditIcon from '../../assets/editIcon';

import { Action } from './index';
import NotificationIcon from '../../assets/notificationIcon';

export default {
  title: 'CommonTable/Action',
  component: Action,
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  actionList: [
    {
      icon: <EditIcon />,
      method: (id: string | number, rowData: object, e: Event) => {
        console.log(id, rowData, e);
      },
    },
    {
      icon: <DeleteIcon width={'16px'} height={'16px'} />,
      method: (id: string | number, rowData: object, e: Event) => {
        console.log(id, rowData, e);
      },
    },
    {
      icon: <NotificationIcon />,
      method: (id: string | number, rowData: object, e: Event) => {
        console.log(id, rowData, e);
      },
    },
  ],
};
