import { ComponentMeta, ComponentStory } from '@storybook/react';
import TreeView from './treeView';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddIcon from '@mui/icons-material/Add';

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
      title: "demo",
      permission: {
        create: false,
        update: true,
        read: false,
        delete: true,
      }
    },
  ],
  formControlPropsSx: {},
  permissionHeadingSx: {},
  submitBtnText: 'Submit',
  submitBtnOptions: {
    variant: 'contained',
    bgColor: 'purple',
    textColor: '#ffff'
  },
  onSubmit: () => null,
  checkboxWidth: 16,
  checkboxBorderRadius: '3px',
  checkboxIcon: < AcUnitIcon />,
  uncheckedIcon: < AddIcon />,
  checkboxHeight: 16,
};
