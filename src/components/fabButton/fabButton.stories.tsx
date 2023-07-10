import { ComponentMeta, ComponentStory } from '@storybook/react';
import FabButton from './index';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { SpeedDialIcon } from '@mui/material';
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
  direction: 'left',
  radius: 60,
  semicircle: true,
  actionsData: actionsData,
  actionButtonStyle: {
    backgroundColor: '#fff',
  },
  buttonStyle: {
    color: 'white',
    '& .css-tdnsd2-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab': {
      backgroundColor: 'red',
      width: '50px',
      height: '50px',
    },
  },
  FabIcon: <SpeedDialIcon />,
  leftDirection:  {right: '310px'},
};
