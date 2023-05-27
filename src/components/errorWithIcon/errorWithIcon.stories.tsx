import { ComponentMeta, ComponentStory } from '@storybook/react';
import AlertIcon from '../../assets/alertIcon';
import ErrorWithIcon from './errorWithIcon';

export default {
  title: 'components/errorWithIcon',
  component: ErrorWithIcon,
} as ComponentMeta<typeof ErrorWithIcon>;

const Template: ComponentStory<typeof ErrorWithIcon> = (args) => (
  <ErrorWithIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  errorIcon: <AlertIcon />,
  component: '',
  buttons: [
    {
      label: 'open',
      onClick: () => {},
      style: { background: '#EFEEFB', color: '#665CD7', padding: '10px' },
    },
    {
      label: 'Close',
      onClick: () => {},
      style: { background: '#F44F5A', color: '#FFFF', padding: '10px' },
    },
  ],
  handleClose: () => false,
  onBackdropClick: () => false,
  errorMessage: 'Are you sure, would you like to deactivate signal?',
  cardRootStyle: {},
  errorIconStyle: {},
  errorMessageTextStyle: {},
  errorButtonBlockStyle: {},
  errorMessageBlockStyle: {},
};
