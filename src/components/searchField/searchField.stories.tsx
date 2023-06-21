import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SearchField} from './index';

export default {
  title: 'Components/SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => <SearchField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
