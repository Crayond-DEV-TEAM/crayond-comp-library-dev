import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomButtonGroup } from './index';

export default {
  title: 'components/CustomButtonGroup',
  component: CustomButtonGroup,
} as ComponentMeta<typeof CustomButtonGroup>;

const Template: ComponentStory<typeof CustomButtonGroup> = (args) => (
  <CustomButtonGroup {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  buttons: [
    { label: 'Button 1', value: 1 },
    { label: 'Button 2', value: 2 },
    { label: 'Button 3', value: 3 },
  ],
  onClick: (value) => {
    console.log(value);
  },
  variant: 'outlined',
  size: 'medium',
  disabled: false,
  selectedColor: '#fff',
  selectedBgColor: '#4B42B8',
  color: 'black',
  btnStyle: {
    borderRadius: '4px',
    borderColor: '#E9E9E9',
  },
  btnGroupStyle: {},
  rootstyle: {},
};

export const Secondary = Template.bind({});

Secondary.args = {
  buttons: [
    { label: 'Button 1', value: 1 },
    { label: 'Button 2', value: 2 },
    { label: 'Button 3', value: 3 },
  ],
  onClick: (value) => {
    console.log(value);
  },
  variant: 'contained',
  size: 'medium',
  disabled: false,
  selectedColor: '#fff',
  unselectBgColor: '#665CD7',
  selectedBgColor: '#4B42B8',
  color: '#fff',
  btnStyle: {
    borderRadius: '4px',
    borderColor: '#E9E9E9',
  },
  btnGroupStyle: {},
  rootstyle: {},
};
