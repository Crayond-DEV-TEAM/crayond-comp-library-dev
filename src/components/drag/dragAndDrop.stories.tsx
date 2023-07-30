import { ComponentStory, ComponentMeta } from '@storybook/react';
import DragAndDrop from './dragAndDrop';

export default {
  title: 'components/DragAndDrop',
  component: DragAndDrop,
} as ComponentMeta<typeof DragAndDrop>;

const Template: ComponentStory<typeof DragAndDrop> = (args) => (
  <DragAndDrop {...args} />
);

export const Primary = Template.bind({});
Primary.argTypes = {

}

Primary.args = {
 
};