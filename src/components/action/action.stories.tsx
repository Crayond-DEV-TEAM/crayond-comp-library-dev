import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from '../../assets/deleteIcon';
import EditIcon from '../../assets/editIcon';

import { Action } from './index';

export default {
  title: 'CommonTable/Action',
  component: Action,
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'EDIT_WITH_DELETE',
  editHandel: () => {},
  deleteHandel: () => {},
  editIcon: <EditIcon />,
  deleteIcon: <DeleteIcon />,
  id: '',
};
