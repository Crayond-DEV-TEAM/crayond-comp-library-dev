import CloseIcon from '@mui/icons-material/Close';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FabButton } from './index';

import AddIcon from '@mui/icons-material/Add';

export default {
  title: 'CommonTable/FabButton',
  component: FabButton,
} as ComponentMeta<typeof FabButton>;
const Template: ComponentStory<typeof FabButton> = (args) => (
  <FabButton {...args} />
);

export const Primary = Template.bind({});
const actionsData = [
  {
    icon: <FileCopyIcon />,
    name: 'Copy',
    onClick: () => {
      console.log('copied');
    },
  },
  {
    icon: <SaveIcon />,
    name: 'Save',
    onClick: () => {
      console.log('saved');
    },
  },
  {
    icon: <PrintIcon />,
    name: 'Print',
    onClick: () => {
      console.log('printed');
    },
  },
  {
    icon: <ShareIcon />,
    name: 'Share',
    onClick: () => {
      console.log('Shared');
    },
  },
];
Primary.args = {
  direction: 'right',
  radius: 60,
  semicircle: false,
  actionsData: actionsData,
  actionButtonStyle: {
    backgroundColor: '#fff',
  },
  buttonStyle: {},
  directionStyle: { bottom: '10px' },
  closeIcon: <CloseIcon />,
  openIcon: <AddIcon />,
  isOpen: false,
  variant:'clickable'
};
