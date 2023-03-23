import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from '../../assets/deleteIcon';
import EditIcon from '../../assets/editIcon';

import { Date } from './index';

export default {
  title: 'CommonTable/Date',
  component: Date,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Date>;

const Template: ComponentStory<typeof Date> = (args) => (
  <Date {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  Celldata: { experience: '2022-12-15T18:43:21.055Z',},
  val: { type: ['DATE'], name: 'experience', format: 'YYYY MMM DD' },
};

