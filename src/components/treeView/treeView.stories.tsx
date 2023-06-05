import { ComponentMeta, ComponentStory } from '@storybook/react';
import TreeView from './treeView';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddIcon from '@mui/icons-material/Add';

export default {
  title: 'components/treeView',
  component: TreeView,
  argTypes: {
    rootStyle: {
      description: 'entire container style contains bgcolor',
    },
    heading: {
      description: 'heading of the entire box',
      defaultValue: 'abdsx value'
    },
    dataRow: {
      description: 'array of the checkbox data',
    },
    formControlPropsSx: {
      description: 'checkbox style props'
    },
    permissionHeadingSx: {
      description: 'permission checkbox title element'
    },
    submitBtnText: {
      description: 'submit button text'
    },
    submitBtnOptions: {
      description: 'submit button style contains text and bg color and variant'
    },
    checkboxWidth: {
      description: 'checkbox width'
    },
    checkboxHeight: {
      description: 'checkbox height'
    },
    checkboxBorderRadius: {
      description: 'borderRadius of checkbox'
    },
    checkboxIcon: {
      description: 'checkbox checked icon'
    },
    uncheckedIcon: {
      description: 'checkbox unchecked icon'
    },
    leftSec: {
      description: 'left section grid item breakpoint props'
    },
    rightSec: {
      description: 'right section grid item breakpoint props'
    }

  },

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
  handleChange: () => null,
  checkboxHeight: 16,
  leftSec: {
    breakpoints: { xs: 4, sm: 4, md: 6, lg: 8 }
  },
  rightSec: {
    breakpoints: { xs: 8, sm: 8, md: 6, lg: 4 }
  }
};
