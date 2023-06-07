import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinearProcess from './linearProcess';

export default {
  title: 'components/LinearProcess',
  component: LinearProcess,
} as ComponentMeta<typeof LinearProcess>;

const Template: ComponentStory<typeof LinearProcess> = (args) => (
  <LinearProcess {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: 33,
  progressLabel: false,
  linearBarStyle: {},
  symbols: '',
  linearThumbColor: '',
  thumbightColor: '',
};
