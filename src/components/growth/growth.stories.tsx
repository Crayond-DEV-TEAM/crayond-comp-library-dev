import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from '../../assets/deleteIcon';
import EditIcon from '../../assets/editIcon';

import { Growth } from './index';

export default {
  title: 'CommonTable/Growth',
  component: Growth,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Growth>;

const Template: ComponentStory<typeof Growth> = (args) => <Growth {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  val: { type: ['GROWTH'], name: 'growth' },
  Celldata : {
    growth: {
      value: 0.74,
      variant: 'NEGATIVE',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  val: { type: ['GROWTH'], name: 'growth' },
  Celldata : {
    growth: {
      value: 2.74,
      variant: 'POSITIVE',
    },
  },
};

