import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RenderForm } from './index';

export default {
  title: 'CommonTable/Progress',
  component: RenderForm,
} as ComponentMeta<typeof RenderForm>;

const Template: ComponentStory<typeof RenderForm> = (args) => (
  <RenderForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  formList:[]
};
