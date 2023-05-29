import { ComponentStory, ComponentMeta } from '@storybook/react';
import KanbanView from './kanbanView';

export default {
  title: 'components/KanbanView',
  component: KanbanView,
} as ComponentMeta<typeof KanbanView>;

const Template: ComponentStory<typeof KanbanView> = (args) => (
  <KanbanView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cardJson: [
    {
      id: 1,
      title: 'title',
      cardTitle: 'Create Components',
      isActive: true,
      moreIcon: '',
      images: [
        { img: '', height: '', width: '' },
        { img: '', height: '', width: '' },
      ],
      created_at: '',
    },
    {
      id: 2,
      title: 'title',
      cardTitle: 'Create Components',
      isActive: true,
      moreIcon: '',
      images: [
        { img: '', height: '', width: '' },
        { img: '', height: '', width: '' },
      ],
      created_at: '',
    },
  ],
};
