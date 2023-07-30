import { ComponentStory, ComponentMeta } from '@storybook/react';
import DragAndDrop from './dragAndDrop';
import { api } from './api';

export default {
  title: 'components/kanban_View',
  component: DragAndDrop,
} as ComponentMeta<typeof DragAndDrop>;

const Template: ComponentStory<typeof DragAndDrop> = (args) => (
  <DragAndDrop {...args} />
);

export const Primary = Template.bind({});
Primary.argTypes = {
  columnData: {
    description: 'Array',
  },
  columnContainerRootStyle: {
    description: 'SxProps |object',
  },
  columnTitleBoxStyle: {
    description: 'SxProps |object',
  },
  columnTitleStyle: {
    description: 'SxProps |object',
  },

  rowChildItemRootStyle: {
    description: 'SxProps |object',
  },
  rowChildItemComponentRootStyle: {
    description: 'SxProps |object',
  },
  rowDropShadowPropsStyle: {
    description: 'SxProps |object',
  },
  addTodoButtonRootStyle: {
    description: 'SxProps |object',
  },
  addButtonLabelStyle: {
    description: 'SxProps |object',
  },
};

Primary.args = {
  columnData: api?.columns,
  columnContainerRootStyle: {},
  columnTitleBoxStyle: {},
  columnTitleStyle: {},

  rowChildItemRootStyle: {},
  rowChildItemComponentRootStyle: {},
  rowDropShadowPropsStyle: {},

  addTodoButtonRootStyle: {},
  addButtonLabelStyle: {},
};

Primary.args = {};
