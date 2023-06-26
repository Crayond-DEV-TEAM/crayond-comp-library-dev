import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectedChips } from './index';


export default {
  title: 'CommonTable/SelectedChips',
  component: SelectedChips,
} as ComponentMeta<typeof SelectedChips>;


const Template: ComponentStory<typeof SelectedChips> = (args) => <SelectedChips {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  selected: false,
  exclusive: false,
};
