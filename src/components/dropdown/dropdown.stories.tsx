import { Dropdown } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
 

export default {
  title: 'components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  selectOption: [
    { label: 'Select', value: '' },
    { label: 'one', value: 'one' },
    { label: 'two', value: 'two' },
    { label: 'three', value: 'three' },
  ],
};
 




 