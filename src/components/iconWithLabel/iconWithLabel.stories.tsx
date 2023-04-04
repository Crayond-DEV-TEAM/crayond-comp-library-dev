import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconWithLabel } from './index';
import DeleteIcon from '../../assets/deleteIcon';

export default {
  title: 'CommonTable/IconWithLabel',
  component: IconWithLabel,
} as ComponentMeta<typeof IconWithLabel>;

const Template: ComponentStory<typeof IconWithLabel> = (args) => (
  <IconWithLabel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: '#F44F5A',
  bgColor: '#FCCACD',
  label: 'Delete',
  icon: <DeleteIcon />,
  cellStyle: {
    fontSize: '14px',
    fontWeight: '500',
  },
};
