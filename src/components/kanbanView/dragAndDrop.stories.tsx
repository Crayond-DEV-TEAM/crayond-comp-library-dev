import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DragAndDrop } from './index';
import { api } from './api';

export default {
  title: 'components/DragAndDrop',
  component: DragAndDrop,
} as ComponentMeta<typeof DragAndDrop>;

const Template: ComponentStory<typeof DragAndDrop> = (args) => <DragAndDrop {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  rootStyle: {},
  dragData:api?.columns,
  columnContainerRootStyle: {},

  columnTitleColor: '#262626',
  columnTitleBoxStyle: {},
  columnTitleStyle: {},

  rowDropShadowBgColor: '',
  rowDropShadowBorderColor: '#665CD7',
  rowDropShadowStyles: {},
  rowDropShadowWidth: '360px',

  addButtonLabelColor: '#665CD7',
  columnContainerBgColor: '',
  addButtonLabelSize: 12,
  addTodoButtonRootStyle: {},
  addButtonLabelStyle: {},

  childItemBgColor: '#FFFF',
  childItemComponentBgColor: '#FFFF',
  rowChildItemRootStyle: {},
  rowChildItemComponentRootStyle: {},

  childItemHoverBorderColor: '#665CD7',
  childItemHoverRootStyle: {},
  childItemActiveBorderColor: '#665CD7',
  childItemActiveRootStyle: {},

  childItemComponentHoverBorderColor: '#665CD7',
  childItemComponentHoverRootStyle: {},
  childItemComponentActiveBorderColor: '#665CD7',
  childItemComponentActiveRootStyle: {},

  handleStartFun: () => false,
  handleUpdateFun: () => false,
  handleEndFun: () => false,
};
