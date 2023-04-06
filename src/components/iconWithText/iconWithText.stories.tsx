import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconWithText } from './index';
import FunnelIcon from '../../assets/funnelIcon';

export default {
  title: 'CommonTable/IconWithText',
  component: IconWithText,
} as ComponentMeta<typeof IconWithText>;

const Template: ComponentStory<typeof IconWithText> = (args) => (
  <IconWithText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Sent',
  icon: <FunnelIcon />,
};

