import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SingleDatePicker } from './index';

export default {
  title: 'components/SingleDatePicker',
  component: SingleDatePicker,
} as ComponentMeta<typeof SingleDatePicker>;

const Template: ComponentStory<typeof SingleDatePicker> = (args) => (
  <SingleDatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: '',

};
