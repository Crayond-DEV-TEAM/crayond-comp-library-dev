import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputField } from './index'

export default {
  title: 'components/InputField',
  component: InputField,

} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  //   name: 'Lable',
  //   onChange: () => {},
  //   value: true,
};

