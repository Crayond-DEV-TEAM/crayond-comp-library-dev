import { ComponentMeta, ComponentStory } from '@storybook/react';
import TreeView from './treeView';

export default {
  title: 'components/treeView',
  component: TreeView,
} as ComponentMeta<typeof TreeView>;

const Template: ComponentStory<typeof TreeView> = (args) => (
  <TreeView {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  rootStyle: {},
  heading: 'Basic View',
  dataRow: [
    {
      title: 'Onboarding',
      permission: {
        create: false,
        update: true,
        read: false,
        delete: false,
        jdvhaskd: true,
      },
    },
    {
      title: 'Dashboard',
      permission: {
        create: false,
        update: true,
        read: false,
        delete: true,
        jdvhaskd: true,
      }

    }
  ],
  formControlPropsSx: {},
  permissionHeadingSx: {},
  submitBtnText: 'Submit',
  submitBtnOptions: {
    variant: 'contained',
    bgColor: 'purple',
    textColor: '#ffff'
  },
  onSubmit: (state: any) => {
    console.log(state);
  },
};
