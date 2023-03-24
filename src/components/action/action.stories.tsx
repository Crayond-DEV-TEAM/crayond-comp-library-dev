import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from '../../assets/deleteIcon';
import EditIcon from '../../assets/editIcon';

import { Action } from './index';

export default {
  title: 'CommonTable/Action',
  component: Action,
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => (
  <Action {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Celldata: {},
  val:    {
    type: ['ACTION'],
    name: 'action',
    variant: 'EDIT_WITH_DELETE',
    editHandel: (id: any) => {
      console.log(id);
    },
    deleteHandel: (id: any) => {
      console.log(id)
    },
    editIcon: <EditIcon />,
    deleteIcon: <DeleteIcon width={'16px'} height={'16px'} />,
  },
};

