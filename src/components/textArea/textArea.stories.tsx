import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './texArea';

export default {
  title: 'CommonTable/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: "Text Here",
};

