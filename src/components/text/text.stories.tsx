import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './index';

export default {
  title: 'CommonTable/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value:"Text Here",
};

